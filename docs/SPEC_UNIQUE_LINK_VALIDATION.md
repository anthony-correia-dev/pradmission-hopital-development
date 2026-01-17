# Spécification : Validation du Lien Unique de Préadmission

## 1. Contexte

Le formulaire de préadmission est accessible via un lien unique envoyé au patient. Avant d'afficher le formulaire, l'application doit valider que le lien est toujours actif en appelant l'API Server Logic `getpread`.

## 2. Flux Utilisateur

```
┌─────────────────────────────────────────────────────────────────┐
│  Utilisateur clique sur le lien                                 │
│  https://portal.com/preadmission?preadmissionId={GUID}          │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  App.tsx - État initial: 'validating'                           │
│  Affichage: Écran de chargement                                 │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  Appel API: shell.ajaxSafePost → getpread                       │
└────────────────────────┬────────────────────────────────────────┘
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
┌─────────────────────┐   ┌─────────────────────┐
│  isValid: true      │   │  isValid: false     │
│  → État: 'valid'    │   │  → État: 'invalid'  │
│  → Afficher Landing │   │  → Afficher         │
│                     │   │    InvalidLink      │
└─────────────────────┘   └─────────────────────┘
```

## 3. Appel API avec shell.ajaxSafePost

### 3.1 Format de la requête

```javascript
shell.ajaxSafePost({
  type: "GET",
  url: `/_api/server-logic/getpread?preadmissionId=${preadmissionId}`,
  contentType: "application/json"
})
.done(function (response) {
  console.log('Validation réussie:', response)
})
.fail(function (error) {
  console.error('Erreur validation:', error)
})
```

### 3.2 Format de la réponse

#### Réponse brute (enveloppée par Power Pages)
```json
{
  "requestId": "a1b2c3d4-...",
  "success": true,
  "data": "{\"isValid\":true,\"count\":1}",
  "serverLogicName": "getpread"
}
```

#### Données parsées
```typescript
interface GetPreadResponse {
  isValid: boolean
  count: number
}
```

### 3.3 Scénarios de réponse

| Scénario | `isValid` | `count` | Action |
|----------|-----------|---------|--------|
| Lien valide | `true` | `1` | Afficher le formulaire |
| Lien expiré/invalide | `false` | `0` | Afficher page InvalidLink |
| Paramètre manquant | - | - | Afficher page InvalidLink |
| Erreur réseau | - | - | Afficher page InvalidLink |

## 4. Interfaces TypeScript

### 4.1 Nouvelles interfaces dans `useApi.ts`

```typescript
// Réponse enveloppée de la Server Logic
interface ServerLogicResponse<T> {
  requestId: string
  success: boolean
  data: string  // JSON stringifié de T
  serverLogicName: string
}

// Réponse spécifique de getpread
interface GetPreadResponse {
  isValid: boolean
  count: number
}

// État de validation du lien
type LinkValidationState = 'validating' | 'valid' | 'invalid'
```

### 4.2 Nouvelle interface dans `useWizard.ts`

```typescript
export interface FormData {
  // ... champs existants ...
  preadmissionId: string  // NOUVEAU: stocke le GUID validé
}
```

## 5. Implémentation API (`useApi.ts`)

### 5.1 Nouvelle fonction `validatePreadmissionLink`

```typescript
/**
 * Valide un lien de préadmission via la Server Logic getpread
 * @param preadmissionId - GUID de la préadmission
 * @returns Promise<boolean> - true si valide, false sinon
 */
const validatePreadmissionLink = async (preadmissionId: string): Promise<boolean> => {
  // Mode développement - simulation
  if (typeof (window as any).shell === 'undefined' || !(window as any).shell.ajaxSafePost) {
    console.log('[DEV MODE] Validation simulée pour:', preadmissionId)
    
    // Simuler un délai réseau
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // En dev: valide si le GUID n'est pas vide et n'est pas "invalid"
    const isValid = !!preadmissionId && preadmissionId !== 'invalid'
    console.log('[DEV MODE] Résultat validation:', isValid)
    return isValid
  }

  // Environnement Power Pages
  return new Promise((resolve) => {
    (window as any).shell.ajaxSafePost({
      type: "GET",
      url: `/_api/server-logic/getpread?preadmissionId=${encodeURIComponent(preadmissionId)}`,
      contentType: "application/json"
    })
    .done(function (response: ServerLogicResponse<GetPreadResponse>) {
      console.log('✅ getpread réponse brute:', response)
      
      try {
        if (!response.success) {
          console.warn('⚠️ Server Logic a retourné success: false')
          resolve(false)
          return
        }
        
        // Parser le champ data (JSON stringifié)
        const parsedData: GetPreadResponse = JSON.parse(response.data)
        console.log('✅ getpread données parsées:', parsedData)
        
        resolve(parsedData.isValid === true)
        
      } catch (parseError) {
        console.error('❌ Erreur parsing réponse getpread:', parseError)
        resolve(false)
      }
    })
    .fail(function (error: any) {
      console.error('❌ Erreur appel getpread:', error)
      resolve(false)  // En cas d'erreur, considérer comme invalide
    })
  })
}
```

## 6. Spécification du composant `InvalidLink.tsx`

### 6.1 Objectif

Afficher une page d'erreur lorsque le lien de préadmission est invalide ou expiré. Le composant doit :
- Être cohérent visuellement avec le reste de l'application
- Supporter l'internationalisation (FR/EN)
- Utiliser les styles Tailwind centralisés et les composants shadcn/ui existants

### 6.2 Structure du fichier

```
src/
├── components/
│   └── InvalidLink.tsx          # Nouveau composant
├── locales/
│   ├── index.ts                 # Ajouter export invalidLinkTranslations
│   └── invalidLink.ts           # Nouveau fichier de traductions
```

### 6.3 Internationalisation (`src/locales/invalidLink.ts`)

#### Pattern à suivre
Suivre le même pattern que les autres fichiers de traduction (ex: `success.ts`):

```typescript
/**
 * Traductions pour la page InvalidLink
 * @module locales/invalidLink
 */

export const invalidLinkTranslations = {
  fr: {
    title: 'Lien invalide',
    message: 'Ce lien de préadmission n\'est plus valide ou a expiré.',
    contact: 'Si vous pensez qu\'il s\'agit d\'une erreur, veuillez contacter l\'hôpital.',
    emailLabel: 'Email',
    emailAddress: 'digital@latour.ch',
    emailLink: 'mailto:digital@latour.ch'
  },
  en: {
    title: 'Invalid Link',
    message: 'This pre-admission link is no longer valid or has expired.',
    contact: 'If you believe this is an error, please contact the hospital.',
    emailLabel: 'Email',
    emailAddress: 'digital@latour.ch',
    emailLink: 'mailto:digital@latour.ch'
  }
} as const

export type InvalidLinkTranslations = typeof invalidLinkTranslations.fr
```

#### Mise à jour de `src/locales/index.ts`

```typescript
// Ajouter l'export
export { invalidLinkTranslations } from './invalidLink'
```

### 6.4 Composants shadcn/ui à utiliser

| Composant | Import | Usage |
|-----------|--------|-------|
| `Card` | `@/components/ui/card` | Container principal |
| `CardHeader` | `@/components/ui/card` | En-tête avec icône et titre |
| `CardContent` | `@/components/ui/card` | Contenu du message |
| `CardFooter` | `@/components/ui/card` | Informations de contact |
| `Button` | `@/components/ui/button` | Lien email (optionnel) |

### 6.5 Classes CSS centralisées à utiliser

| Classe | Source | Usage |
|--------|--------|-------|
| `.step-page-centered` | `main.css` | Layout pleine page centré |
| `.step-container-sm` | `main.css` | Container max-width |
| `.step-title` | `main.css` | Titre principal |
| `.step-subtitle` | `main.css` | Message descriptif |
| `text-brand-error` | `theme.css` | Couleur d'erreur (#E30613) |
| `text-brand-text` | `theme.css` | Couleur texte (#101820) |
| `bg-brand-primary` | `theme.css` | Couleur primaire (#5BC2E7) |

### 6.6 Structure du composant

```typescript
// src/components/InvalidLink.tsx

import { XCircle, Mail } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { invalidLinkTranslations } from '@/locales'
import logoHlt from '@/assets/images/logo-hlt.png'

interface InvalidLinkProps {
  language: 'fr' | 'en'
}

export function InvalidLink({ language }: InvalidLinkProps) {
  const t = invalidLinkTranslations[language]

  return (
    <div className="step-page-centered">
      <div className="step-container-sm">
        <Card className="text-center">
          <CardHeader className="flex flex-col items-center gap-4">
            {/* Logo */}
            <img src={logoHlt} alt="Hôpital La Tour" className="h-12 w-auto" />
            
            {/* Icône d'erreur */}
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle className="w-8 h-8 text-brand-error" />
            </div>
            
            {/* Titre */}
            <h1 className="step-title">{t.title}</h1>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-slate-600">{t.message}</p>
            <p className="text-sm text-slate-500">{t.contact}</p>
          </CardContent>
          
          <CardFooter className="justify-center">
            <Button
              variant="outline"
              asChild
              className="gap-2"
            >
              <a href={t.emailLink}>
                <Mail className="w-4 h-4" />
                {t.emailLabel}: {t.emailAddress}
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
```

### 6.7 Maquette visuelle

```
┌─────────────────────────────────────────┐
│                                         │
│            [Logo HLT]                   │
│                                         │
│              ┌─────┐                    │
│              │  ✕  │  (icône rouge)     │
│              └─────┘                    │
│                                         │
│         Lien invalide                   │
│                                         │
│   Ce lien de préadmission n'est plus    │
│   valide ou a expiré.                   │
│                                         │
│   Si vous pensez qu'il s'agit d'une     │
│   erreur, veuillez contacter l'hôpital. │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  ✉️ Email: digital@latour.ch    │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### 6.8 Props du composant

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `language` | `'fr' \| 'en'` | ✅ | Langue d'affichage |

### 6.9 Accessibilité

| Aspect | Implémentation |
|--------|----------------|
| Sémantique | Utiliser `<h1>` pour le titre |
| Contraste | Couleurs conformes WCAG AA |
| Lien email | Attribut `href="mailto:..."` pour contact |
| Focus | Styles focus visibles sur le bouton |

## 7. Intégration dans `App.tsx`

```typescript
// Nouveaux imports
import { InvalidLink } from './components/InvalidLink'
import { useApi } from './hooks/useApi'

// Nouveaux états
const [linkState, setLinkState] = useState<'validating' | 'valid' | 'invalid'>('validating')
const [preadmissionId, setPreadmissionId] = useState<string | null>(null)
const api = useApi()

// Validation au montage
useEffect(() => {
  const validateLink = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('preadmissionId')
    
    if (!id) {
      setLinkState('invalid')
      return
    }
    
    setPreadmissionId(id)
    const isValid = await api.validatePreadmissionLink(id)
    
    setLinkState(isValid ? 'valid' : 'invalid')
    if (isValid) {
      updateFormData({ preadmissionId: id })
    }
  }
  
  validateLink()
}, [])

// Rendu conditionnel (avant le return principal)
if (linkState === 'validating') {
  return <LoadingScreen language={formData.language} />
}

if (linkState === 'invalid') {
  return <InvalidLink language={formData.language} />
}
```

## 8. Fichiers à créer/modifier

| Fichier | Action | Description |
|---------|--------|-------------|
| `src/locales/invalidLink.ts` | **Créer** | Traductions FR/EN |
| `src/locales/index.ts` | **Modifier** | Ajouter export |
| `src/components/InvalidLink.tsx` | **Créer** | Composant page d'erreur |
| `src/hooks/useApi.ts` | **Modifier** | Ajouter `validatePreadmissionLink()` |
| `src/hooks/useWizard.ts` | **Modifier** | Ajouter `preadmissionId` au FormData |
| `src/App.tsx` | **Modifier** | Logique de validation |

## 9. Gestion du mode développement

### 9.1 Test du cas valide
```
http://localhost:5173/?preadmissionId=cc93ece5-b8f2-f011-8407-7ced8d6006e8
```
→ Affiche le formulaire

### 9.2 Test du cas invalide
```
http://localhost:5173/?preadmissionId=invalid
```
→ Affiche la page InvalidLink

### 9.3 Test sans paramètre
```
http://localhost:5173/
```
→ Affiche la page InvalidLink

## 10. Sécurité

| Aspect | Implémentation |
|--------|----------------|
| Validation côté serveur | L'API `getpread` valide dans Dataverse |
| Pas de GUID exposé | Le GUID n'est jamais affiché à l'utilisateur |
| Fail-safe | Toute erreur → considéré comme invalide |
| Session storage | Le `preadmissionId` est stocké pour la soumission finale |

## 11. Plan d'implémentation

### Phase 1 : Internationalisation
- [ ] Créer `src/locales/invalidLink.ts`
- [ ] Mettre à jour `src/locales/index.ts`

### Phase 2 : Composant InvalidLink
- [ ] Créer `src/components/InvalidLink.tsx`
- [ ] Utiliser les composants shadcn/ui (Card, Button)
- [ ] Appliquer les classes CSS centralisées

### Phase 3 : API
- [ ] Ajouter `validatePreadmissionLink()` dans `useApi.ts`

### Phase 4 : Intégration App.tsx
- [ ] Ajouter les états `linkState` et `preadmissionId`
- [ ] Implémenter le `useEffect` de validation
- [ ] Ajouter le rendu conditionnel

### Phase 5 : Mise à jour du wizard
- [ ] Ajouter `preadmissionId` au type `FormData` dans `useWizard.ts`
- [ ] Mettre à jour `getDefaultFormData()`

### Phase 6 : Tests
- [ ] Tester en mode dev (simulation)
- [ ] Tester en environnement Power Pages
````
