# Spécification - Centralisation de la logique conditionnelle des champs

## 📋 Vue d'ensemble

Cette spécification décrit la refactorisation du formulaire `Admin.tsx` pour centraliser la logique conditionnelle des champs (obligatoire/optionnel, visible/masqué) en utilisant **React Hook Form** et **Zod** de manière native.

---

## 🎯 Objectifs

1. **Éliminer la duplication** - Un seul composant JSX par champ au lieu de 2-3 instances
2. **Centraliser la logique** - Source unique de vérité pour les règles métier
3. **Synchroniser validation et UI** - Zod et l'interface utilisent la même configuration
4. **Améliorer la maintenabilité** - Modifier une règle en un seul endroit
5. **Faciliter les tests** - Fonctions pures testables unitairement

---

## 📊 État actuel (problème)

### Duplication des champs dans `Admin.tsx`

| Champ | Instances JSX | Conditions |
|-------|---------------|------------|
| `avsNumber` | 2 | `swiss` (requis) / `international\|auto` (optionnel) |
| `basicInsurance` | 3 | `swiss\|international` (requis) / `auto && !accident` (optionnel) / `auto && accident` (requis) |
| `cardNumber` | 3 | Même logique que `basicInsurance` |
| `policyNumber` | 1 | `international` uniquement (requis) |
| `complementaryInsuranceName` | 0 | **Champ manquant** — à ajouter |
| `complementaryInsurance` | 1 | Toujours visible, optionnel (n° carte uniquement) |

### Exemple de duplication actuelle

```tsx
// ❌ ACTUEL : 2 instances du même champ
{(insurance === 'swiss') && (
  <div ref={avsNumberRef}>
    <label>{t.avsNumber} <span className="text-brand-error">*</span></label>
    <Input
      value={formatAvsNumber(watch('avsNumber') ?? '')}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, '')
        setValue('avsNumber', value, { shouldDirty: true, shouldValidate: true })
        trigger('avsNumber')
      }}
      aria-invalid={!!errors.avsNumber}
      className={errors.avsNumber ? 'border-brand-error' : ''}
    />
    {errors.avsNumber && <ErrorMessage ... />}
  </div>
)}

{(insurance === 'international' || insurance === 'auto') && (
  <div>
    <label>{t.avsNumber} <span>(Optional)</span></label>
    <Input
      value={formatAvsNumber(watch('avsNumber') ?? '')}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, '')
        setValue('avsNumber', value, { shouldDirty: true, shouldValidate: true })
        trigger('avsNumber')
      }}
      className="form-input form-input-mono"
    />
  </div>
)}
```

**Problèmes :**
- ~200 lignes de code dupliqué
- Risque d'incohérence entre instances
- Maintenance difficile (modifier 3 endroits pour 1 changement)

---

## 🏗️ Architecture cible

### 1. Fichier de configuration centralisée

**Fichier :** `src/lib/fieldConfig.ts`

```typescript
export type FieldName = 
  | 'avsNumber'
  | 'basicInsurance'
  | 'cardNumber'
  | 'policyNumber'
  | 'complementaryInsuranceName'
  | 'complementaryInsurance'

export interface FieldConfig {
  /** Champ obligatoire selon le contexte */
  required: boolean
  /** Champ visible dans l'interface */
  visible: boolean
}

export interface FormContext {
  insurance: 'swiss' | 'international' | 'auto' | ''
  reason: 'illness' | 'accident' | ''
  hasEmployer: boolean
}

/**
 * Retourne la configuration d'un champ selon le contexte du formulaire
 * Source unique de vérité pour les règles métier
 */
export const getFieldConfig = (
  fieldName: FieldName,
  context: FormContext
): FieldConfig => {
  const { insurance, reason } = context
  
  const configs: Record<FieldName, FieldConfig> = {
    avsNumber: {
      required: insurance === 'swiss',
      visible: insurance === 'swiss' || insurance === 'international' || insurance === 'auto'
    },
    basicInsurance: {
      required: 
        insurance === 'swiss' || 
        insurance === 'international' ||
        reason === 'accident',
      visible: 
        insurance === 'swiss' || 
        insurance === 'international' || 
        insurance === 'auto' ||
        reason === 'accident'
    },
    cardNumber: {
      required: 
        insurance === 'swiss' ||
        (insurance === 'auto' && reason === 'accident'),
      visible: insurance !== 'international' && (
        insurance === 'swiss' || 
        insurance === 'auto' || 
        reason === 'accident'
      )
    },
    policyNumber: {
      required: insurance === 'international',
      visible: insurance === 'international'
    },
    complementaryInsuranceName: {
      required: false,
      visible: true
    },
    complementaryInsurance: {
      required: false,
      visible: true
    }
  }
  
  return configs[fieldName]
}

/**
 * Hook personnalisé pour accéder à la configuration des champs
 * Utilise les valeurs watchées de React Hook Form
 */
export const useFieldConfig = (fieldName: FieldName): FieldConfig => {
  const { watch } = useFormContext<WizardFormData>()
  
  const context: FormContext = {
    insurance: watch('insurance') || '',
    reason: watch('reason') || '',
    hasEmployer: watch('hasEmployer') || false
  }
  
  return getFieldConfig(fieldName, context)
}
```

### 2. Schéma Zod dynamique avec `superRefine`

**Fichier :** `src/schemas/adminSchema.ts`

```typescript
import { z } from 'zod'
import { getFieldConfig, type FormContext } from '../lib/fieldConfig'

export const createAdminSchema = (
  context: FormContext,
  messages: {
    required: string
    invalidEmail: string
    invalidNpa: string
    invalidAvsNumber: string
    invalidCardNumber: string
  }
) => {
  return z.object({
    // Champs toujours requis
    firstName: z.string().min(1, messages.required),
    lastName: z.string().min(1, messages.required),
    gender: z.string().min(1, messages.required),
    nationality: z.string().min(1, messages.required),
    street: z.string().min(1, messages.required),
    npa: z.string().min(4, messages.invalidNpa),
    city: z.string().min(1, messages.required),
    country: z.string().min(1, messages.required),
    email: z.string().email(messages.invalidEmail),
    
    // Champs conditionnels - déclarés comme optionnels
    // La validation conditionnelle est gérée par superRefine
    avsNumber: z.string().optional(),
    basicInsurance: z.string().optional(),
    cardNumber: z.string().optional(),
    policyNumber: z.string().optional(),
    complementaryInsurance: z.string().optional(),
    
    // ... autres champs
  }).superRefine((data, ctx) => {
    // Validation AVS
    const avsConfig = getFieldConfig('avsNumber', context)
    if (avsConfig.required) {
      if (!data.avsNumber || data.avsNumber.length < 13) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: messages.invalidAvsNumber,
          path: ['avsNumber']
        })
      }
    }
    
    // Validation Basic Insurance
    const basicInsuranceConfig = getFieldConfig('basicInsurance', context)
    if (basicInsuranceConfig.required && !data.basicInsurance) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: messages.required,
        path: ['basicInsurance']
      })
    }
    
    // Validation Card Number
    const cardNumberConfig = getFieldConfig('cardNumber', context)
    if (cardNumberConfig.required) {
      if (!data.cardNumber || data.cardNumber.length < 20) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: messages.invalidCardNumber,
          path: ['cardNumber']
        })
      }
    }
    
    // Validation Policy Number
    const policyNumberConfig = getFieldConfig('policyNumber', context)
    if (policyNumberConfig.required && !data.policyNumber) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: messages.required,
        path: ['policyNumber']
      })
    }
  })
}
```

### 3. Composant Admin simplifié

**Fichier :** `src/components/Admin.tsx`

```tsx
import { useFieldConfig } from '../lib/fieldConfig'

export function Admin({ language, onNext, onBack }: AdminProps) {
  const t = adminTranslations[language]
  const { watch, setValue, formState: { errors } } = useFormContext<WizardFormData>()
  
  // Configuration centralisée des champs
  const avsConfig = useFieldConfig('avsNumber')
  const basicInsuranceConfig = useFieldConfig('basicInsurance')
  const cardNumberConfig = useFieldConfig('cardNumber')
  const policyNumberConfig = useFieldConfig('policyNumber')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Section Insurance */}
      <div className="space-y-4">
        
        {/* ✅ UN SEUL champ AVS au lieu de 2 */}
        <div ref={avsNumberRef}>
          <label htmlFor="avsNumber" className="block text-sm font-medium text-brand-text mb-2">
            {t.avsNumber}
            {avsConfig.required 
              ? <span className="text-brand-error"> *</span>
              : <span className="text-slate-500 text-xs"> ({t.optional})</span>
            }
          </label>
          <Input
            id="avsNumber"
            type="text"
            inputMode="numeric"
            maxLength={16}
            placeholder="756.1234.5678.97"
            value={formatAvsNumber(watch('avsNumber') ?? '')}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '')
              setValue('avsNumber', value, { shouldDirty: true, shouldValidate: true })
            }}
            aria-invalid={avsConfig.required && !!errors.avsNumber}
            className={`form-input form-input-mono ${
              avsConfig.required && errors.avsNumber ? 'border-brand-error' : ''
            }`}
          />
          {avsConfig.required && errors.avsNumber && (
            <div className="form-error-inline-tight">
              <AlertCircle className="form-error-icon" />
              <span>{errors.avsNumber.message}</span>
            </div>
          )}
        </div>

        {/* ✅ UN SEUL champ basicInsurance au lieu de 3 */}
        <div ref={basicInsuranceRef}>
          <label htmlFor="basicInsurance" className="block text-sm font-medium text-brand-text mb-2">
            {t.basicInsurance}
            {basicInsuranceConfig.required 
              ? <span className="text-brand-error"> *</span>
              : <span className="text-slate-500 text-xs"> ({t.optional})</span>
            }
          </label>
          <Input
            id="basicInsurance"
            type="text"
            value={watch('basicInsurance') ?? ''}
            onChange={(e) => setValue('basicInsurance', e.target.value, { shouldDirty: true, shouldValidate: true })}
            aria-invalid={basicInsuranceConfig.required && !!errors.basicInsurance}
            className={`form-input ${
              basicInsuranceConfig.required && errors.basicInsurance ? 'border-brand-error' : ''
            }`}
          />
          {basicInsuranceConfig.required && errors.basicInsurance && (
            <div className="form-error-inline-tight">
              <AlertCircle className="form-error-icon" />
              <span>{errors.basicInsurance.message}</span>
            </div>
          )}
        </div>

        {/* ✅ Champ conditionnel visible uniquement si nécessaire */}
        {policyNumberConfig.visible && (
          <div ref={policyNumberRef}>
            <label htmlFor="policyNumber" className="block text-sm font-medium text-brand-text mb-2">
              {t.policyNumber} <span className="text-brand-error">*</span>
            </label>
            <Input
              id="policyNumber"
              type="text"
              value={watch('policyNumber') ?? ''}
              onChange={(e) => setValue('policyNumber', e.target.value, { shouldDirty: true, shouldValidate: true })}
              aria-invalid={!!errors.policyNumber}
              className={`form-input ${errors.policyNumber ? 'border-brand-error' : ''}`}
            />
            {errors.policyNumber && (
              <div className="form-error-inline-tight">
                <AlertCircle className="form-error-icon" />
                <span>{errors.policyNumber.message}</span>
              </div>
            )}
          </div>
        )}
        
      </div>
    </form>
  )
}
```

---

## 📐 Règles métier centralisées

### Tableau des règles par champ — Section Assurance

| Champ | Label FR | Label EN | Type | Condition `required` | Condition `visible` |
|-------|----------|----------|------|---------------------|---------------------|
| `avsNumber` | Numéro AVS | AHV Number | 13 chiffres (mono) | `swiss` | `swiss \|\| international \|\| auto` |
| `basicInsurance` | Nom de l'assurance de base | Basic insurance name | texte | `swiss \|\| international \|\| accident` | `swiss \|\| international \|\| auto \|\| accident` |
| `cardNumber` | N° de carte d'assurance de base | Basic insurance card number | 20 chiffres (mono) | `swiss \|\| (auto && accident)` | `!international && (swiss \|\| auto \|\| accident)` |
| `policyNumber` | Assurance de base - N° de police | Basic insurance - Policy number | texte | `international` | `international` |
| `complementaryInsuranceName` | Nom de l'assurance complémentaire | Complementary insurance name | texte | Jamais | Toujours |
| `complementaryInsurance` | N° de carte d'assurance complémentaire | Complementary insurance card number | 20 chiffres (mono) | Jamais | Toujours |

### Tableau des règles employeur

| Champ | Condition `required` | Condition `visible` |
|-------|---------------------|---------------------|
| `profession` | `hasEmployer === true` | Toujours |
| `employerName` | `hasEmployer === true` | Toujours |
| `employerAddress` | `hasEmployer === true` | Toujours |

### Tableau des règles accident

| Champ | Condition `required` | Condition `visible` |
|-------|---------------------|---------------------|
| `accidentDate` | `reason === 'accident'` | `reason === 'accident'` |
| `accidentInsurance` | Jamais | `reason === 'accident'` |
| `claimNumber` | Jamais | `reason === 'accident'` |

---

## 🔄 Intégration avec React Hook Form

### Re-validation dynamique du schéma

Lorsque `insurance` ou `reason` changent, le schéma Zod doit être recréé :

```tsx
// Dans App.tsx ou le composant parent
const insurance = watch('insurance')
const reason = watch('reason')
const hasEmployer = watch('hasEmployer')

const context: FormContext = { insurance, reason, hasEmployer }
const schema = useMemo(
  () => createAdminSchema(context, errorMessages),
  [insurance, reason, hasEmployer]
)

// Utiliser useForm avec le schéma dynamique
const methods = useForm({
  resolver: zodResolver(schema),
  mode: 'onChange'
})
```

### Alternative : Validation au niveau du FormProvider

```tsx
// Dans App.tsx
<FormProvider {...methods}>
  <WizardSchemaValidator context={context}>
    {/* Steps du wizard */}
  </WizardSchemaValidator>
</FormProvider>
```

---

## 📁 Fichiers impactés

| Fichier | Action | Description |
|---------|--------|-------------|
| `src/types/form.ts` | **Modifier** | Ajouter `complementaryInsuranceName` au type `WizardFormData` |
| `src/locales/admin.ts` | **Modifier** | Ajouter traductions `complementaryInsuranceName` (FR + EN) |
| `src/schemas/admin.ts` | **Modifier** | Ajouter `complementaryInsuranceName` (optional), corriger `cardNumber` (exclure `international`), corriger `basicInsurance` (requis pour tout `accident`) |
| `src/components/admin/InsuranceSection.tsx` | **Modifier** | Ajouter champ `complementaryInsuranceName`, conditionner `showCardNumber` |
| `src/routes/admin.tsx` | **Modifier** | Corriger `showCardNumber` (exclure `international`), ajouter `complementaryInsuranceName` au `safeParse` |
| `src/hooks/useApi.ts` | **Vérifier** | Mapper `complementaryInsuranceName` vers l'API si nécessaire |

---

## 📊 Gains attendus

| Métrique | Avant | Après | Gain |
|----------|-------|-------|------|
| Lignes JSX (section Insurance) | ~200 | ~80 | **-60%** |
| Instances champ `avsNumber` | 2 | 1 | **-50%** |
| Instances champ `basicInsurance` | 3 | 1 | **-67%** |
| Instances champ `cardNumber` | 3 | 1 | **-67%** |
| Points de modification pour 1 règle | 3-6 | 1 | **-83%** |

---

## 🧪 Tests unitaires

### Tests pour `getFieldConfig`

```typescript
// src/lib/__tests__/fieldConfig.test.ts
describe('getFieldConfig', () => {
  describe('avsNumber', () => {
    it('should be required when insurance is swiss', () => {
      const config = getFieldConfig('avsNumber', { 
        insurance: 'swiss', 
        reason: 'illness', 
        hasEmployer: false 
      })
      expect(config.required).toBe(true)
      expect(config.visible).toBe(true)
    })

    it('should be optional when insurance is international', () => {
      const config = getFieldConfig('avsNumber', { 
        insurance: 'international', 
        reason: 'illness', 
        hasEmployer: false 
      })
      expect(config.required).toBe(false)
      expect(config.visible).toBe(true)
    })

    it('should be optional when insurance is auto', () => {
      const config = getFieldConfig('avsNumber', { 
        insurance: 'auto', 
        reason: 'accident', 
        hasEmployer: false 
      })
      expect(config.required).toBe(false)
      expect(config.visible).toBe(true)
    })
  })

  describe('basicInsurance', () => {
    it('should be required when insurance is swiss', () => {
      const config = getFieldConfig('basicInsurance', { 
        insurance: 'swiss', 
        reason: 'illness', 
        hasEmployer: false 
      })
      expect(config.required).toBe(true)
    })

    it('should be required when insurance is auto and reason is accident', () => {
      const config = getFieldConfig('basicInsurance', { 
        insurance: 'auto', 
        reason: 'accident', 
        hasEmployer: false 
      })
      expect(config.required).toBe(true)
    })

    it('should be optional when insurance is auto and reason is illness', () => {
      const config = getFieldConfig('basicInsurance', { 
        insurance: 'auto', 
        reason: 'illness', 
        hasEmployer: false 
      })
      expect(config.required).toBe(false)
    })
  })

  describe('policyNumber', () => {
    it('should be visible and required only when insurance is international', () => {
      const configInternational = getFieldConfig('policyNumber', { 
        insurance: 'international', 
        reason: 'illness', 
        hasEmployer: false 
      })
      expect(configInternational.required).toBe(true)
      expect(configInternational.visible).toBe(true)

      const configSwiss = getFieldConfig('policyNumber', { 
        insurance: 'swiss', 
        reason: 'illness', 
        hasEmployer: false 
      })
      expect(configSwiss.required).toBe(false)
      expect(configSwiss.visible).toBe(false)
    })
  })
})
```

---

## 📅 Plan d'implémentation

### Phase 1 : Préparation (30 min)
1. Créer `src/lib/fieldConfig.ts` avec `getFieldConfig`
2. Ajouter les tests unitaires pour `getFieldConfig`
3. Valider les règles métier avec les tests

### Phase 2 : Schéma Zod (30 min)
1. Modifier `src/schemas/adminSchema.ts`
2. Implémenter `superRefine` avec les règles centralisées
3. Tester la validation conditionnelle

### Phase 3 : Composant Admin (1h)
1. Supprimer les instances dupliquées des champs
2. Utiliser `useFieldConfig` pour chaque champ conditionnel
3. Adapter l'affichage (label required/optional, erreurs)

### Phase 4 : Intégration (30 min)
1. Modifier `App.tsx` pour recréer le schéma dynamiquement
2. Tester tous les scénarios (swiss/international/auto × illness/accident)
3. Valider le comportement OCR

---

## ⚠️ Points d'attention

1. **Re-création du schéma** : S'assurer que le schéma Zod est recréé quand `insurance` ou `reason` changent
2. **Performance** : `useMemo` pour éviter les re-créations inutiles du schéma
3. **Tests de régression** : Tester tous les scénarios de validation avant/après
4. **OCR** : Vérifier que le pré-remplissage fonctionne toujours correctement

---

## 📅 Historique

| Date | Version | Description |
|------|---------|-------------|
| 2026-01-14 | 1.0 | Spécification initiale |
| 2026-02-25 | 1.1 | Ajout champ `complementaryInsuranceName`, correction visibilité `cardNumber` (masqué pour `international`), correction `basicInsurance` requis pour tout accident, `avsNumber` visible pour `swiss/international/auto` |
