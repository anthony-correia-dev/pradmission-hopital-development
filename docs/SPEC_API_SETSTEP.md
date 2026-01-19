# Spécification API SetStep

## 📋 Objectif

L'API `setstep` permet de mettre à jour l'étape courante d'une préadmission dans Power Platform. Cette API doit être appelée à chaque fois qu'une étape est affichée à l'utilisateur.

## ✅ STATUT : IMPLÉMENTÉ

- **`useApi.ts`** : Fonction `setStep` définie avec support PUT dans `safeAjax`
- **`App.tsx`** : `useEffect` ajouté pour appeler `setStep` à chaque changement de `currentStep`

---

## 🔗 Endpoint

```
PUT /_api/serverlogics/setstep?preadmissionId={GUID}
```

### Paramètres URL

| Paramètre | Type | Description |
|-----------|------|-------------|
| `preadmissionId` | GUID | Identifiant unique de la préadmission |

## 📤 Requête

### Headers requis

Gérés automatiquement par `safeAjax` :

| Header | Valeur | Description |
|--------|--------|-------------|
| `Content-Type` | `application/json` | Type de contenu |
| `__RequestVerificationToken` | `{token}` | Token anti-CSRF (récupéré via `/_layout/tokenhtml`) |
| `x-requested-with` | `XMLHttpRequest` | Header AJAX standard |

### Body (JSON)

```json
{
  "Stage": 100000001
}
```

## 🎯 Mapping des étapes (Stage)

Les valeurs `Stage` correspondent aux étapes du wizard de préadmission :

| WizardStep | Stage Value | Nom | Description |
|------------|-------------|-----|-------------|
| `landing` | 100000001 | Landing | Page d'accueil / Validation du lien |
| `security` | 100000002 | Security | Vérification date de naissance |
| `otp` | 100000003 | OTP | Vérification code OTP |
| `qualification` | 100000004 | Qualification | Qualification du séjour |
| `admin` | 100000005 | Admin | Informations administratives et médicales |
| `success` | 100000006 | Success | Formulaire soumis avec succès |

> **Note** : Les valeurs Stage utilisent la convention Power Platform avec un offset de 100,000,000.
> **Note** : L'étape `loading` (écran de chargement entre qualification et admin) n'appelle PAS l'API setStep.

## 🔄 Flux d'exécution

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Changement d'étape                          │
└─────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│  1. Récupérer le token anti-CSRF via /_layout/tokenhtml             │
└─────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│  2. Parser le HTML pour extraire le token depuis l'input            │
└─────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│  3. Appeler PUT /_api/serverlogics/setstep avec le Stage            │
└─────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│  4. Logger le résultat (succès ou erreur)                           │
└─────────────────────────────────────────────────────────────────────┘
```

## 💻 Implémentation dans useApi.ts

### Modification requise : Ajouter PUT à safeAjax

La fonction `safeAjax` existante doit supporter la méthode `PUT` :

```typescript
// AVANT
const safeAjax = async (
  url: string,
  method: 'GET' | 'POST' = 'GET',
  data?: unknown
): Promise<unknown>

// APRÈS
const safeAjax = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT' = 'GET',
  data?: unknown
): Promise<unknown>
```

Et ajouter la gestion du body JSON pour PUT :

```typescript
// Dans safeAjax, ajouter la gestion PUT
if (method === 'PUT' && data) {
  options.headers['content-type'] = 'application/json'
  options.body = JSON.stringify(data)
}
```

### Constantes pour les valeurs Stage

```typescript
export const WIZARD_STAGES: Record<string, number> = {
  landing: 100000001,
  security: 100000002,
  otp: 100000003,
  qualification: 100000004,
  admin: 100000005,
  success: 100000006
} as const
// Note: 'loading' est exclu - pas d'appel API pour cet écran transitoire
```

### Fonction setStep

```typescript
/**
 * 🎯 Met à jour l'étape courante de la préadmission
 * Réutilise safeAjax avec méthode PUT
 * @param preadmissionId - GUID de la préadmission
 * @param step - Nom de l'étape wizard (landing, security, otp, qualification, admin, success)
 * @returns Promise<boolean> - true si succès, false sinon
 */
const setStep = async (preadmissionId: string, step: WizardStep): Promise<boolean> => {
  // Ignorer l'étape loading
  if (step === 'loading') {
    console.log('🎯 [setStep] Étape loading ignorée')
    return true
  }

  const stage = WIZARD_STAGES[step]
  if (!stage) {
    console.warn('🎯 [setStep] Étape inconnue:', step)
    return false
  }

  const apiUrl = `/_api/serverlogics/setstep?preadmissionId=${encodeURIComponent(preadmissionId)}`
  
  try {
    await safeAjax(apiUrl, 'PUT', { Stage: stage })
    console.log('✅ [setStep] Succès - step:', step, 'stage:', stage)
    return true
  } catch (error) {
    console.error('❌ [setStep] Erreur:', error)
    return false
  }
}
```

## 🎛️ Intégration dans le Wizard

L'appel à `setStep` doit être déclenché **à chaque affichage d'étape** (sauf `loading`) :

| Composant | Événement déclencheur | Stage |
|-----------|----------------------|-------|
| `Landing.tsx` | `useEffect` au montage | `100000001` |
| `Security.tsx` | `useEffect` au montage | `100000002` |
| `OTP.tsx` | `useEffect` au montage | `100000003` |
| `Qualification.tsx` | `useEffect` au montage | `100000004` |
| `Admin.tsx` | `useEffect` au montage | `100000005` |
| `Success.tsx` | `useEffect` au montage | `100000006` |

> **Note** : `LoadingScreen.tsx` n'appelle PAS l'API setStep (écran transitoire).

## ⚠️ Gestion des erreurs

- **Token non récupéré** : Logger l'erreur, ne pas bloquer l'utilisateur
- **Erreur réseau** : Logger l'erreur, ne pas bloquer l'utilisateur
- **Mode développement (localhost)** : `safeAjax` gère automatiquement (simulation)

## 📊 Logs recommandés

```
🎯 [setStep] Début - preadmissionId: xxx, step: landing, stage: 100000001
✅ [setStep] Succès - step: landing, stage: 100000001
// ou
❌ [setStep] Erreur: HTTP 401 Unauthorized
```

## 🔒 Sécurité

- Le token anti-CSRF est **obligatoire** et doit être récupéré à chaque appel
- Le token doit être inclus dans **les headers ET le body**
- L'appel échouera avec une erreur 401/403 si le token est manquant ou invalide

## 📝 Notes techniques

1. **Méthode HTTP** : `PUT`
2. **Réutilisation** : Utilise `safeAjax` existant (token anti-CSRF automatique)
3. **Body** : JSON simple `{ "Stage": number }`
4. **Exclusion** : L'étape `loading` ne déclenche pas d'appel API
