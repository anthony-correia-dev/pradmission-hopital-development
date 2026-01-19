# Spécification : Cloud Flow `verifyOtp`

## Contexte

Sur l'écran **OTP**, l'utilisateur saisit le code à 6 chiffres reçu par SMS. Quand il clique sur "Vérifier", le code doit être validé côté serveur via le Cloud Flow `verifyOtp`. Cette spécification décrit l'intégration de ce Cloud Flow.

## Objectif

Quand l'utilisateur clique sur "Vérifier" :
1. Valider le format du code (6 chiffres) via Zod
2. Appeler le Cloud Flow `verifyOtp` avec le `preadmissionId` et le `code`
3. Si `isValid: true` → passage à l'étape suivante (qualification)
4. Si `isValid: false` → afficher l'erreur "Le code est incorrect" sous l'input OTP

## Cloud Flow

### Endpoint

```
POST /_api/cloudflow/v1.0/trigger/{triggerId}
```

### Trigger ID

Variable d'environnement : `VITE_OCR_VERIFYOTP_TRIGGER_ID`

| Environnement | Trigger ID |
|---------------|------------|
| DEV | `7104a055-6a94-f011-b4cc-002248db6f9b` |

### Headers requis

Réutilisation des headers existants de `safeAjaxCloudFlow` :

| Header | Valeur | Description |
|--------|--------|-------------|
| `__RequestVerificationToken` | Token CSRF | Via `/_layout/tokenhtml` |
| `Content-Type` | `application/x-www-form-urlencoded; charset=UTF-8` | Format Cloud Flow |
| `x-requested-with` | `XMLHttpRequest` | Identifie la requête AJAX |

### Request Body

Format `eventData` (standard Cloud Flow) :

```
eventData={"number":"1f1fccfd-19af-f011-bbd3-002248dacc70","code":"123456"}
```

| Champ | Type | Description |
|-------|------|-------------|
| `number` | `string` | GUID de la préadmission (preadmissionId) |
| `code` | `string` | Code OTP à 6 chiffres saisi par l'utilisateur |

### Response

```json
{
  "isValid": true
}
```

Ou en cas de code incorrect :

```json
{
  "isValid": false
}
```

## Implémentation

### 1. Ajouter le Trigger ID dans `useApi.ts`

```typescript
// 🎯 Cloud Flow Trigger IDs (depuis variables d'environnement)
const OCR_IDENTITY_TRIGGER_ID = import.meta.env.VITE_OCR_IDENTITY_TRIGGER_ID
const OCR_INSURANCE_TRIGGER_ID = import.meta.env.VITE_OCR_INSURANCE_TRIGGER_ID
const SEND_OTP_TRIGGER_ID = import.meta.env.VITE_OCR_SENDOTP_TRIGGER_ID
const VERIFY_OTP_TRIGGER_ID = import.meta.env.VITE_OCR_VERIFYOTP_TRIGGER_ID
```

### 2. Modifier la fonction `verifyOTP` dans `useApi.ts`

Remplacer la fonction existante (qui utilise `postData` simulé) :

```typescript
/**
 * 🎯 Vérifie le code OTP via le Cloud Flow verifyOtp
 * @param preadmissionId - GUID de la préadmission
 * @param code - Code OTP à 6 chiffres
 * @returns Promise<{ success: boolean; message?: string }>
 */
const verifyOTP = async (
  preadmissionId: string,
  code: string
): Promise<{ success: boolean; message?: string }> => {
  // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1'

  // Mode développement - simulation
  if (isLocalhost) {
    await new Promise(resolve => setTimeout(resolve, 800))
    // Simulation: accepte le code "123456" uniquement
    const isValid = code === '123456'
    return { 
      success: isValid, 
      message: isValid ? undefined : 'Le code est incorrect' 
    }
  }

  try {
    const response = await safeAjaxCloudFlow(VERIFY_OTP_TRIGGER_ID, { 
      number: preadmissionId, 
      code 
    }) as { isValid: boolean }

    return {
      success: response.isValid === true,
      message: response.isValid ? undefined : 'Le code est incorrect'
    }

  } catch (error) {
    console.error('❌ [verifyOTP] Erreur:', error)
    return { success: false, message: 'Erreur de connexion' }
  }
}
```

### 3. Modification du composant `OTP.tsx`

```typescript
export function OTP({ language, onNext, onBack }: OTPProps) {
  const t = otpTranslations[language]
  const { getPhoneLastDigits, sendOtp, verifyOTP } = useApi()
  const [lastDigits, setLastDigits] = useState('XXXX')
  const [apiError, setApiError] = useState('')
  const [loading, setLoading] = useState(false)
  const otpSentRef = useRef(false)

  // ...existing code...

  const onSubmit = async () => {
    setLoading(true)
    setApiError('')
    
    try {
      // Validation Zod locale
      const ok = await trigger('otpCode')
      if (!ok) {
        setLoading(false)
        return
      }

      const preadmissionId = getValues('preadmissionId')
      const code = getValues('otpCode')
      
      // ✅ Appel Cloud Flow verifyOtp
      const result = await verifyOTP(preadmissionId, code)
      
      if (result.success) {
        onNext() // Passage à qualification
      } else {
        setApiError(result.message || t.invalidCode)
      }
    } catch {
      setApiError(t.invalidCode)
    } finally {
      setLoading(false)
    }
  }

  // ...existing code...

  return (
    // ...
    {(errors.otpCode || apiError) && (
      <div className="form-error-inline">
        <AlertCircle className="w-4 h-4" />
        <span>{errors.otpCode?.message || apiError}</span>
      </div>
    )}
    // ...
  )
}
```

### 4. Traductions à ajouter

```typescript
// src/locales/otp.ts
export const otpTranslations = {
  fr: {
    // ...existing code...
    invalidCode: 'Le code est incorrect',
    connectionError: 'Erreur de connexion, veuillez réessayer'
  },
  en: {
    // ...existing code...
    invalidCode: 'The code is incorrect',
    connectionError: 'Connection error, please try again'
  }
}
```

## Test en console F12

```javascript
fetch('/_layout/tokenhtml')
  .then(r => r.text())
  .then(h => {
    const t = new DOMParser().parseFromString(h, 'text/html').querySelector('input').value;
    
    const triggerId = "7104a055-6a94-f011-b4cc-002248db6f9b";
    const preadmissionId = "1f1fccfd-19af-f011-bbd3-002248dacc70";
    const code = "123456";

    return fetch(`/_api/cloudflow/v1.0/trigger/${triggerId}`, {
      method: 'POST',
      headers: {
        '__RequestVerificationToken': t,
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: new URLSearchParams({
        eventData: JSON.stringify({ number: preadmissionId, code })
      }).toString()
    });
  })
  .then(res => res.json())
  .then(data => {
    console.log("Résultat:", data);
    if (data.isValid) {
      console.info("✅ Code valide !");
    } else {
      console.error("❌ Code incorrect");
    }
  })
  .catch(err => console.error("Erreur:", err));
```

## Diagramme de flux

```
┌─────────────────┐
│  Saisie code    │
│  (6 chiffres)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Clic Vérifier  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Validation Zod │ ──── ❌ Erreur format
│  (6 chiffres)   │      "Code invalide"
└────────┬────────┘
         │ ✅ Format OK
         ▼
┌─────────────────┐
│ safeAjaxCloudFlow│
│   → verifyOtp   │
│ {number, code}  │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
 isValid   isValid
  true      false
    │         │
    ▼         ▼
┌────────────┐ ┌──────────────────┐
│Qualification│ │ Erreur API       │
│  (next)    │ │ "Code incorrect" │
└────────────┘ └──────────────────┘
```

## Checklist d'implémentation

- [ ] Ajouter `VERIFY_OTP_TRIGGER_ID` dans les constantes de `useApi.ts`
- [ ] Modifier `verifyOTP` pour accepter `preadmissionId` et `code`, appeler le Cloud Flow
- [ ] Modifier `OTP.tsx` pour gérer l'état `apiError` et `loading`
- [ ] Afficher l'erreur sous l'input OTP si code incorrect
- [ ] Ajouter les traductions `invalidCode` et `connectionError`
- [ ] Tester en environnement Power Pages

## Notes importantes

1. **Payload identique à sendOtp + code** : `{ number: preadmissionId, code }`
2. **Cloud Flow (pas Server Logic)** : Utilise `safeAjaxCloudFlow` avec format `eventData`
3. **Pattern similaire à getbirth** : Validation Zod locale + API asynchrone + gestion erreur
4. **État loading** : Désactiver le bouton pendant la vérification

## Historique

| Date | Modification |
|------|-------------|
| 2025-01-19 | Création de la spécification |