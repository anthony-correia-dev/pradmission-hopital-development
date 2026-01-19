# Spécification : Cloud Flow `sendOtp`

## Contexte

Après validation de la date de naissance sur l'écran **Security**, l'utilisateur passe à l'écran **OTP**. Un code de vérification doit être envoyé par SMS au numéro de téléphone associé à la préadmission. Cette spécification décrit l'intégration du Cloud Flow `sendOtp` pour déclencher l'envoi du SMS.

## Objectif

Quand l'utilisateur arrive sur l'écran OTP :
1. Appeler le Cloud Flow `sendOtp` pour envoyer le code par SMS
2. L'envoi se fait automatiquement au montage du composant
3. En cas d'erreur, ne pas bloquer l'utilisateur (l'option "Renvoyer le code" est disponible)

## Cloud Flow

### Endpoint

```
POST /_api/cloudflow/v1.0/trigger/{triggerId}
```

### Trigger ID

Variable d'environnement : `VITE_OCR_SENDOTP_TRIGGER_ID`

| Environnement | Trigger ID |
|---------------|------------|
| DEV | `82f65194-6894-f011-b4cc-002248dacc70` |

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
eventData={"number":"1f1fccfd-19af-f011-bbd3-002248dacc70"}
```

| Champ | Type | Description |
|-------|------|-------------|
| `number` | `string` | GUID de la préadmission (preadmissionId) |

> ⚠️ **Note** : Le champ s'appelle `number` mais contient le `preadmissionId`, pas un numéro de téléphone.

### Response

Le Cloud Flow retourne généralement une réponse indiquant le succès :

```json
{
  "success": true
}
```

Ou en cas d'erreur :

```json
{
  "success": false,
  "error": "Message d'erreur"
}
```

## Implémentation

### 1. Ajouter le Trigger ID dans `useApi.ts`

```typescript
// 🎯 Cloud Flow Trigger IDs (depuis variables d'environnement)
const OCR_IDENTITY_TRIGGER_ID = import.meta.env.VITE_OCR_IDENTITY_TRIGGER_ID
const OCR_INSURANCE_TRIGGER_ID = import.meta.env.VITE_OCR_INSURANCE_TRIGGER_ID
const SEND_OTP_TRIGGER_ID = import.meta.env.VITE_OCR_SENDOTP_TRIGGER_ID
```

### 2. Nouvelle fonction `sendOtp` dans `useApi.ts`

```typescript
/**
 * 🎯 Envoie un code OTP par SMS via le Cloud Flow sendOtp
 * @param preadmissionId - GUID de la préadmission
 * @returns true si l'envoi a réussi, false sinon
 */
const sendOtp = async (preadmissionId: string): Promise<boolean> => {
  // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1'

  // Mode développement - simulation
  if (isLocalhost) {
    await new Promise(resolve => setTimeout(resolve, 500))
    return true
  }

  try {
    await safeAjaxCloudFlow(SEND_OTP_TRIGGER_ID, { number: preadmissionId })
    return true
  } catch (error) {
    console.error('❌ [sendOtp] Erreur:', error)
    return false
  }
}
```

### 3. Ajouter au return de `useApi()`

```typescript
return {
  // ...existing code...
  sendOtp
}
```

### 4. Modification du composant `OTP.tsx`

```typescript
export function OTP({ language, onNext, onBack }: OTPProps) {
  const t = otpTranslations[language]
  const { getPhoneLastDigits, sendOtp } = useApi()
  const [lastDigits, setLastDigits] = useState('XXXX')
  const [otpSent, setOtpSent] = useState(false)

  const { getValues } = useFormContext<FormData>()

  // Récupérer les derniers chiffres ET envoyer l'OTP au montage
  useEffect(() => {
    const initOtp = async () => {
      const preadmissionId = getValues('preadmissionId')
      if (preadmissionId) {
        // Récupérer les derniers chiffres du téléphone
        const digits = await getPhoneLastDigits(preadmissionId)
        setLastDigits(digits)
        
        // Envoyer l'OTP (une seule fois)
        if (!otpSent) {
          const sent = await sendOtp(preadmissionId)
          setOtpSent(sent)
        }
      }
    }
    initOtp()
  }, [getPhoneLastDigits, sendOtp, getValues, otpSent])

  // Fonction pour renvoyer le code
  const handleResendOtp = async () => {
    const preadmissionId = getValues('preadmissionId')
    if (preadmissionId) {
      await sendOtp(preadmissionId)
    }
  }

  // ...existing code...

  return (
    // ...
    <Button
      type="button"
      variant="ghost"
      onClick={handleResendOtp}
    >
      {t.resend}
    </Button>
    // ...
  )
}
```

## Test en console F12

```javascript
fetch('/_layout/tokenhtml')
  .then(r => r.text())
  .then(h => {
    const t = new DOMParser().parseFromString(h, 'text/html').querySelector('input').value;
    
    const triggerId = "82f65194-6894-f011-b4cc-002248dacc70";
    const preadmissionId = "1f1fccfd-19af-f011-bbd3-002248dacc70";

    return fetch(`/_api/cloudflow/v1.0/trigger/${triggerId}`, {
      method: 'POST',
      headers: {
        '__RequestVerificationToken': t,
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: new URLSearchParams({
        eventData: JSON.stringify({ number: preadmissionId })
      }).toString()
    });
  })
  .then(res => res.json())
  .then(data => {
    console.log("Résultat:", data);
    if (data.success) {
      console.info("✅ OTP envoyé !");
    } else {
      console.error("❌ Échec de l'envoi");
    }
  })
  .catch(err => console.error("Erreur:", err));
```

## Diagramme de flux

```
┌─────────────────┐
│  Security OK    │
│  (birthDate)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Écran OTP      │
│  (montage)      │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐ ┌────────────┐
│getphone│ │  sendOtp   │
│ (GET)  │ │(Cloud Flow)│
└────┬───┘ └─────┬──────┘
     │           │
     ▼           ▼
┌────────┐ ┌────────────┐
│ "8406" │ │  SMS envoyé│
└────────┘ └────────────┘
```

## Checklist d'implémentation

- [ ] Ajouter `SEND_OTP_TRIGGER_ID` dans les constantes de `useApi.ts`
- [ ] Ajouter la fonction `sendOtp` dans `useApi.ts`
- [ ] Exporter `sendOtp` dans le return de `useApi()`
- [ ] Modifier `OTP.tsx` pour appeler `sendOtp` au montage
- [ ] Modifier le bouton "Renvoyer le code" pour appeler `sendOtp`
- [ ] Tester en environnement Power Pages

## Notes importantes

1. **Cloud Flow vs Server Logic** : `sendOtp` utilise `safeAjaxCloudFlow` (format `eventData`), pas `safeAjax`
2. **Payload `number`** : Le champ s'appelle `number` mais contient le `preadmissionId`
3. **Envoi unique** : Utiliser un état `otpSent` pour éviter les envois multiples au montage
4. **Resend** : Le bouton "Renvoyer le code" appelle la même fonction `sendOtp`
5. **Pas de blocage** : En cas d'erreur, l'utilisateur peut utiliser "Renvoyer le code"

## Historique

| Date | Modification |
|------|-------------|
| 2025-01-19 | Création de la spécification |