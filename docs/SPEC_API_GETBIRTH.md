# Spécification : API Server Logic `getbirth`

## Contexte

L'écran **Security** demande à l'utilisateur de saisir sa date de naissance pour vérifier son identité. Actuellement, la validation est simulée côté client. Cette spécification décrit l'intégration de la Server Logic `getbirth` pour valider la date de naissance côté serveur.

## Objectif

Quand l'utilisateur saisit une date de naissance au bon format et clique sur "Continuer" :
1. Appeler l'API `getbirth` pour vérifier la correspondance avec la préadmission
2. Si `isValid: true` → passage au step suivant (OTP)
3. Si `isValid: false` → afficher l'erreur "Date de naissance invalide" sous le champ input

## API Server Logic

### Endpoint

```
POST /_api/serverlogics/getbirth?preadmissionId={preadmissionId}
```

### Headers requis

Réutilisation des headers existants de `safeAjax` (aucune modification) :

| Header | Valeur | Description |
|--------|--------|-------------|
| `__RequestVerificationToken` | Token CSRF | Via `/_layout/tokenhtml` |
| `Content-Type` | `application/x-www-form-urlencoded; charset=UTF-8` | Format standard |
| `x-requested-with` | `XMLHttpRequest` | Identifie la requête AJAX |

### Request Body

Format `eventData` (identique aux autres appels `safeAjax` POST) :

```
eventData={"birthdate":"09/11/1988"}
```

| Champ | Type | Format | Description |
|-------|------|--------|-------------|
| `birthdate` | `string` | `DD/MM/YYYY` | Date de naissance à vérifier |

> ⚠️ **Important** : Le format attendu par l'API est `DD/MM/YYYY` (format européen), pas ISO `YYYY-MM-DD`.

### Response

```json
{
  "requestId": "e278c296-cf4e-4f2c-a5c1-d9e0fb30a705",
  "success": true,
  "data": "{\"isValid\":false}",
  "serverLogicName": "getbirth"
}
```

| Champ | Type | Description |
|-------|------|-------------|
| `requestId` | `string` | UUID de la requête |
| `success` | `boolean` | Succès de l'appel API (pas de la validation) |
| `data` | `string` | JSON stringifié contenant `{ isValid: boolean }` |
| `serverLogicName` | `string` | Nom de la Server Logic appelée |

### Parsing de la réponse

```typescript
// 1. Appeler via safeAjax existant (POST avec eventData)
const response = await safeAjax(url, 'POST', { birthdate: formattedDate })

// 2. Parser le champ data (JSON stringifié)
const parsedData = JSON.parse(response.data)
// => { isValid: true } ou { isValid: false }
```

## Implémentation

### 1. Type à ajouter dans `useApi.ts`

```typescript
// Réponse spécifique de getbirth
interface GetBirthResponse {
  isValid: boolean
}
```

> ℹ️ Le type `ServerLogicResponse<T>` existe déjà dans `useApi.ts`.

### 2. Modification de `verifyBirthDate` dans `useApi.ts`

Remplacer la fonction existante (qui utilise `safeAjaxPost` simulé) :

```typescript
/**
 * 🎯 Vérifie la date de naissance via la Server Logic getbirth
 * Réutilise safeAjax existant (POST avec eventData)
 * @param preadmissionId - GUID de la préadmission
 * @param birthDate - Date au format ISO (YYYY-MM-DD) - sera convertie en DD/MM/YYYY
 * @returns Promise<{ success: boolean; message?: string }>
 */
const verifyBirthDate = async (
  preadmissionId: string,
  birthDate: string
): Promise<{ success: boolean; message?: string }> => {
  console.log('🎂 [verifyBirthDate] Début - preadmissionId:', preadmissionId)
  console.log('🎂 [verifyBirthDate] birthDate (ISO):', birthDate)

  // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1'

  // Mode développement - simulation
  if (isLocalhost) {
    console.log('🎂 [DEV MODE] verifyBirthDate simulé')
    await new Promise(resolve => setTimeout(resolve, 800))
    // Simulation: accepte toutes les dates sauf celles avec jour = 01
    const isValid = !birthDate.endsWith('-01')
    return { 
      success: isValid, 
      message: isValid ? undefined : 'Date de naissance invalide' 
    }
  }

  // Convertir ISO (YYYY-MM-DD) → DD/MM/YYYY pour l'API
  const [year, month, day] = birthDate.split('-')
  const formattedDate = `${day}/${month}/${year}`
  console.log('🎂 [verifyBirthDate] Date formatée (DD/MM/YYYY):', formattedDate)

  // ✅ Réutiliser safeAjax existant (POST avec eventData automatique)
  const apiUrl = `/_api/serverlogics/getbirth?preadmissionId=${encodeURIComponent(preadmissionId)}`

  try {
    const response = await safeAjax(apiUrl, 'POST', { birthdate: formattedDate }) as ServerLogicResponse<string>
    console.log('🎂 [verifyBirthDate] ✅ Réponse reçue:', response)

    if (!response.success) {
      console.warn('🎂 [verifyBirthDate] ⚠️ Server Logic success: false')
      return { success: false, message: 'Erreur de validation' }
    }

    // Parser le champ data (JSON stringifié)
    let parsedData: GetBirthResponse
    if (typeof response.data === 'string') {
      parsedData = JSON.parse(response.data)
    } else {
      parsedData = response.data as unknown as GetBirthResponse
    }

    console.log('🎂 [verifyBirthDate] ✅ isValid:', parsedData.isValid)

    return {
      success: parsedData.isValid === true,
      message: parsedData.isValid ? undefined : 'Date de naissance invalide'
    }

  } catch (error) {
    console.error('🎂 [verifyBirthDate] ❌ Erreur:', error)
    return { success: false, message: 'Erreur de connexion' }
  }
}
```

### 3. Aucune modification de `safeAjax`

La fonction `safeAjax` existante gère déjà correctement les POST avec `eventData` :

```typescript
// Code existant dans safeAjax - AUCUNE MODIFICATION REQUISE
if (method === 'POST' && data) {
  options.body = new URLSearchParams({
    eventData: JSON.stringify(data)  // ✅ Format compatible avec getbirth
  }).toString()
}
```

### 4. Modification de la signature de `verifyBirthDate` dans le hook

Ajouter `preadmissionId` comme paramètre :

```typescript
// Dans useApi()
const verifyBirthDate = async (
  preadmissionId: string,  // ← NOUVEAU paramètre
  birthDate: string
): Promise<{ success: boolean; message?: string }> => {
  // ...
}
```

### 5. Modification du composant `Security.tsx`

```typescript
// Récupérer le preadmissionId depuis le contexte/URL
const preadmissionId = getValues('preadmissionId') // ou depuis useWizard()

const { verifyBirthDate } = useApi()

const onSubmit = async () => {
  setLoading(true)
  setApiError('')
  
  try {
    // Validation Zod locale
    const ok = await trigger('birthDate')
    if (!ok) {
      setLoading(false)
      return
    }

    const birthDate = getValues('birthDate') // Format ISO: YYYY-MM-DD
    
    // ✅ Appel API getbirth avec preadmissionId
    const result = await verifyBirthDate(preadmissionId, birthDate)
    
    if (result.success) {
      onNext() // Passage au step OTP
    } else {
      // Afficher l'erreur sous le champ
      setApiError(result.message || t.invalid)
    }
  } catch {
    setApiError(t.invalid)
  } finally {
    setLoading(false)
  }
}
```

### 6. Gestion des erreurs avec React Hook Form et Zod

L'erreur API est gérée via un state local `apiError` (déjà en place) et non via Zod, car :
- Zod valide le **format** de la date (validation synchrone)
- L'API valide la **correspondance** avec la préadmission (validation asynchrone)

```tsx
{/* Affichage des erreurs (Zod + API) - code existant */}
{(errors.birthDate || apiError) && (
  <div className="flex items-center gap-2 mt-2 text-brand-error text-sm">
    <AlertCircle className="w-4 h-4" />
    <span>{errors.birthDate?.message || apiError}</span>
  </div>
)}
```

## Traductions à ajouter

### `src/locales/security.ts`

```typescript
export const securityTranslations = {
  fr: {
    // ... existant
    invalidBirthDate: 'Date de naissance invalide',
    connectionError: 'Erreur de connexion, veuillez réessayer',
  },
  en: {
    // ... existant
    invalidBirthDate: 'Invalid birth date',
    connectionError: 'Connection error, please try again',
  }
}
```

## Test en console F12

```javascript
fetch('/_layout/tokenhtml')
  .then(r => r.text())
  .then(h => {
    const t = new DOMParser().parseFromString(h, 'text/html').querySelector('input').value;
    console.log("Token récupéré:", t);

    const preadmissionId = "1f1fccfd-19af-f011-bbd3-002248dacc70";
    const birthdateToTest = "09/11/1988"; // Format DD/MM/YYYY

    // ✅ Format eventData (comme safeAjax)
    return fetch(`/_api/serverlogics/getbirth?preadmissionId=${preadmissionId}`, {
      method: 'POST',
      headers: {
        '__RequestVerificationToken': t,
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: new URLSearchParams({
        eventData: JSON.stringify({ birthdate: birthdateToTest })
      }).toString()
    });
  })
  .then(res => res.json())
  .then(data => {
    console.log("Résultat:", data);
    const parsed = JSON.parse(data.data);
    if (parsed.isValid) {
      console.info("✅ Date valide !");
    } else {
      console.error("❌ Date invalide");
    }
  })
  .catch(err => console.error("Erreur:", err));
```

## Diagramme de flux

```
┌─────────────────┐
│  Saisie date    │
│  (DD/MM/YYYY)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Validation Zod │ ──── ❌ Erreur format
│  (format local) │      "Date invalide"
└────────┬────────┘
         │ ✅ Format OK
         ▼
┌─────────────────┐
│  safeAjax POST  │
│  (eventData)    │
│  → getbirth     │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
 isValid   isValid
  true      false
    │         │
    ▼         ▼
┌────────┐ ┌────────────────┐
│  OTP   │ │ Erreur API     │
│ (next) │ │ "Date invalide"│
└────────┘ └────────────────┘
```

## Checklist d'implémentation

- [ ] Ajouter le type `GetBirthResponse` dans `useApi.ts`
- [ ] Modifier `verifyBirthDate` pour accepter `preadmissionId` et appeler l'API réelle
- [ ] ~~Modifier safeAjax~~ → **Non requis** (réutilisation tel quel)
- [ ] Passer `preadmissionId` au composant `Security.tsx`
- [ ] Ajouter les traductions pour les messages d'erreur
- [ ] Tester en environnement Power Pages
- [ ] Vérifier la conversion de format ISO → DD/MM/YYYY

## Notes importantes

1. **Format de date** : L'API attend `DD/MM/YYYY`, l'app stocke en `YYYY-MM-DD` (ISO) → conversion nécessaire
2. **Réutilisation safeAjax** : Aucune modification des headers, le format `eventData` existant est compatible
3. **Double parsing** : La réponse contient `data` en JSON stringifié → double `JSON.parse`
4. **Pattern identique** : Même approche que `validatePreadmissionLink` et `setStep`

## Historique

| Date | Modification |
|------|-------------|
| 2025-01-19 | Création de la spécification |
| 2025-01-19 | Mise à jour : réutilisation de safeAjax sans modification des headers |
