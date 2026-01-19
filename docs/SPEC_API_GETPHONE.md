# Spécification : API Server Logic `getphone`

## Contexte

L'écran **OTP** affiche un message indiquant que le code a été envoyé au numéro de téléphone du patient. Pour des raisons de confidentialité, seuls les 4 derniers chiffres du numéro sont affichés. Cette spécification décrit l'intégration de la Server Logic `getphone` pour récupérer ces derniers chiffres.

## Objectif

Quand l'utilisateur arrive sur l'écran OTP :
1. Appeler l'API `getphone` pour récupérer les 4 derniers chiffres du téléphone
2. Afficher le message : "Un code à 6 chiffres vous a été envoyé par SMS au numéro se terminant par **8406**"
3. En cas d'erreur, afficher "XXXX" par défaut

## API Server Logic

### Endpoint

```
GET /_api/serverlogics/getphone?preadmissionId={preadmissionId}
```

### Headers requis

Réutilisation des headers existants de `safeAjax` :

| Header | Valeur | Description |
|--------|--------|-------------|
| `__RequestVerificationToken` | Token CSRF | Via `/_layout/tokenhtml` |
| `Content-Type` | `application/json` | Format JSON |
| `x-requested-with` | `XMLHttpRequest` | Identifie la requête AJAX |

### Response

```json
{
  "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "success": true,
  "data": "{\"lastDigits\":\"8406\"}",
  "serverLogicName": "getphone"
}
```

| Champ | Type | Description |
|-------|------|-------------|
| `requestId` | `string` | UUID de la requête |
| `success` | `boolean` | Succès de l'appel API |
| `data` | `string` | JSON stringifié contenant `{ lastDigits: string }` |
| `serverLogicName` | `string` | Nom de la Server Logic appelée |

### Parsing de la réponse

```typescript
const response = await safeAjax(url, 'GET')
const parsedData = JSON.parse(response.data)
// => { lastDigits: "8406" }
```

## Implémentation

### 1. Type à ajouter dans `useApi.ts`

```typescript
// Réponse spécifique de getphone
interface GetPhoneResponse {
  lastDigits: string
}
```

### 2. Nouvelle fonction `getPhoneLastDigits` dans `useApi.ts`

```typescript
/**
 * 🎯 Récupère les 4 derniers chiffres du téléphone via la Server Logic getphone
 * @param preadmissionId - GUID de la préadmission
 * @returns Promise<string> - Les 4 derniers chiffres ou "XXXX" en cas d'erreur
 */
const getPhoneLastDigits = async (preadmissionId: string): Promise<string> => {
  // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1'

  // Mode développement - simulation
  if (isLocalhost) {
    await new Promise(resolve => setTimeout(resolve, 300))
    return '1234' // Valeur simulée
  }

  const apiUrl = `/_api/serverlogics/getphone?preadmissionId=${encodeURIComponent(preadmissionId)}`

  try {
    const response = await safeAjax(apiUrl, 'GET') as ServerLogicResponse<string>

    if (!response.success) {
      return 'XXXX'
    }

    // Parser le champ data (JSON stringifié)
    const parsedData: GetPhoneResponse = typeof response.data === 'string'
      ? JSON.parse(response.data)
      : response.data as unknown as GetPhoneResponse

    return parsedData.lastDigits || 'XXXX'

  } catch (error) {
    console.error('❌ [getPhoneLastDigits] Erreur:', error)
    return 'XXXX'
  }
}
```

### 3. Ajouter au return de `useApi()`

```typescript
return {
  // ...existing code...
  getPhoneLastDigits
}
```

### 4. Modification du composant `OTP.tsx`

```typescript
import { useState, useEffect } from 'react'
// ...existing imports...

export function OTP({ language, onNext, onBack }: OTPProps) {
  const t = otpTranslations[language]
  const { getPhoneLastDigits } = useApi()
  const [lastDigits, setLastDigits] = useState('XXXX')

  const { getValues } = useFormContext<FormData>()

  // Récupérer les derniers chiffres au montage
  useEffect(() => {
    const fetchLastDigits = async () => {
      const preadmissionId = getValues('preadmissionId')
      if (preadmissionId) {
        const digits = await getPhoneLastDigits(preadmissionId)
        setLastDigits(digits)
      }
    }
    fetchLastDigits()
  }, [getPhoneLastDigits, getValues])

  // ...existing code...

  // Remplacer XXXX dans le subtitle
  const subtitleWithPhone = t.subtitle.replace('XXXX', lastDigits)

  return (
    // ...
    <CardDescription className="step-subtitle">
      {subtitleWithPhone}
    </CardDescription>
    // ...
  )
}
```

### 5. Traductions (aucune modification nécessaire)

Les traductions existantes utilisent déjà `XXXX` comme placeholder :

```typescript
// FR
subtitle: 'Un code à 6 chiffres vous a été envoyé par SMS au numéro se terminant par XXXX'

// EN
subtitle: 'A 6-digit code has been sent by SMS to the number ending in XXXX'
```

Le `XXXX` sera remplacé dynamiquement par les vrais derniers chiffres.

## Test en console F12

```javascript
fetch('/_layout/tokenhtml')
  .then(r => r.text())
  .then(h => {
    const t = new DOMParser().parseFromString(h, 'text/html').querySelector('input').value;
    
    const preadmissionId = "1f1fccfd-19af-f011-bbd3-002248dacc70";

    return fetch(`/_api/serverlogics/getphone?preadmissionId=${preadmissionId}`, {
      method: 'GET',
      headers: {
        '__RequestVerificationToken': t,
        'content-type': 'application/json',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
  })
  .then(res => res.json())
  .then(data => {
    console.log("Résultat:", data);
    const parsed = JSON.parse(data.data);
    console.log("4 derniers chiffres:", parsed.lastDigits);
  })
  .catch(err => console.error("Erreur:", err));
```

## Diagramme de flux

```
┌─────────────────┐
│  Écran OTP      │
│  (montage)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  safeAjax GET   │
│  → getphone     │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
 success    error
    │         │
    ▼         ▼
┌────────┐ ┌────────┐
│ "8406" │ │ "XXXX" │
└────┬───┘ └────┬───┘
     │          │
     └────┬─────┘
          ▼
┌─────────────────────────────────────┐
│ "...se terminant par 8406"          │
└─────────────────────────────────────┘
```

## Checklist d'implémentation

- [ ] Ajouter le type `GetPhoneResponse` dans `useApi.ts`
- [ ] Ajouter la fonction `getPhoneLastDigits` dans `useApi.ts`
- [ ] Exporter `getPhoneLastDigits` dans le return de `useApi()`
- [ ] Modifier `OTP.tsx` pour appeler l'API au montage
- [ ] Remplacer `XXXX` par les vrais derniers chiffres dans le subtitle
- [ ] Tester en environnement Power Pages

## Notes importantes

1. **Méthode GET** : Contrairement à `getbirth` (POST), `getphone` utilise GET car c'est une simple lecture
2. **Fallback "XXXX"** : En cas d'erreur, afficher "XXXX" pour ne pas bloquer l'utilisateur
3. **Appel au montage** : L'API est appelée dans un `useEffect` au montage du composant OTP
4. **Pattern identique** : Même approche que `validatePreadmissionLink` (GET via safeAjax)

## Historique

| Date | Modification |
|------|-------------|
| 2025-01-19 | Création de la spécification |