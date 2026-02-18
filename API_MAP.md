# Cartographie des Interfaces API — Pré-admission Hospitalière

## Architecture

| Couche | Technologie |
|--------|------------|
| Frontend | React 19 + TypeScript + Vite |
| Backend | Microsoft Power Platform (Dataverse + Cloud Flows) |
| OCR | Azure AI Document Intelligence |
| Auth | Power Pages + OTP SMS |

**Mode mock** contrôlé par `VITE_MOCK_ENABLED=true` dans `.env.dev`

---

## API Endpoints — Server Logic (CSRF protégé)

### 1. `GET /_api/serverlogics/getpread` — Valider le lien de pré-admission

| | Détail |
|--|--------|
| **Payload** | `?preadmissionId={GUID}` |
| **Réponse** | `{ isValid: true, count: 1 }` |
| **Mock** | Retourne `true` pour tout ID ≠ "invalid" |

### 2. `POST /_api/serverlogics/getbirth` — Vérifier date de naissance

| | Détail |
|--|--------|
| **Payload** | `eventData={"birthdate":"09/11/1988"}` (DD/MM/YYYY) |
| **Réponse** | `{ isValid: true/false }` |
| **Mock** | Compare avec `VITE_MOCK_BIRTH_DATE` (défaut: `1989-06-12`) |

### 3. `GET /_api/serverlogics/getphone` — Récupérer derniers chiffres tel

| | Détail |
|--|--------|
| **Payload** | `?preadmissionId={GUID}` |
| **Réponse** | `{ lastDigits: "8406" }` |
| **Mock** | Retourne `"1234"` |

### 4. `GET /_api/serverlogics/getflows` — Récupérer les trigger IDs

| | Détail |
|--|--------|
| **Réponse** | `{ identityDoc, insuranceDoc, submitflow, sendOtp, verifyOtp }` (GUIDs) |
| **Mock** | Retourne les IDs depuis les variables d'env `VITE_OCR_*` |

### 5. `PUT /_api/serverlogics/setstep` — Mettre à jour l'étape

| | Détail |
|--|--------|
| **Payload** | `{"Stage": 100000002}` |
| **Stages** | 100000001=Landing, 100000002=Security, 100000003=OTP, 100000004=Qualification, 100000005=Admin, 100000006=Success |
| **Mock** | Retourne success immédiatement |

---

## API Endpoints — Cloud Flows

### 6. `POST /_api/cloudflow/v1.0/trigger/{sendOtpTriggerId}` — Envoyer OTP

| | Détail |
|--|--------|
| **Payload** | `eventData={"number":"preadmissionId-guid"}` |
| **Réponse** | `{ success: true }` |
| **Mock** | Log console, retourne success après 500ms |

### 7. `POST /_api/cloudflow/v1.0/trigger/{verifyOtpTriggerId}` — Vérifier OTP

| | Détail |
|--|--------|
| **Payload** | `eventData={"number":"guid","code":"123456"}` |
| **Réponse** | `{ isValid: true }` |
| **Mock** | Compare avec `VITE_MOCK_OTP_CODE` (défaut: `"123456"`) |

### 8. `POST /_api/cloudflow/v1.0/trigger/{identityDocTriggerId}` — OCR Carte d'identité

| | Détail |
|--|--------|
| **Payload** | `eventData={"doc":"identityid","base64":"..."}` |
| **Réponse réelle** | `{ last_name, first_names, gender, nationality }` (snake_case) |
| **Mock** | `{ lastName: "TestNom", firstNames: "TestPrenom", gender: "male", nationality: "CH" }` |

### 9. `POST /_api/cloudflow/v1.0/trigger/{insuranceDocTriggerId}` — OCR Carte d'assurance

| | Détail |
|--|--------|
| **Payload** | `eventData={"doc":"insuranceid","base64":"..."}` |
| **Réponse réelle** | `{ rue, ville, zip, country, avs, kvg_carte_no, kvg_insurance, vvg_carte_no }` |
| **Mock** | `{ street: "Rue Test 1", city: "TestVille", zipCode: "1000", avsNumber: "756.0000.0000.00", kvgInsuranceName: "Test Assurance" }` |

### 10. `POST /_api/cloudflow/v1.0/trigger/{submitflowTriggerId}` — Soumettre le formulaire

| | Détail |
|--|--------|
| **Payload** | Objet complet (~30 champs) : identité, adresse, assurance, employeur, médecins, documents base64 |
| **Réponse** | `{ status: "success", confirmationNumber: "PREAD-2026-001234" }` |
| **Mock** | `{ status: "success", confirmationNumber: "PREAD-MOCK-{timestamp}" }` |

#### Payload complet du submit

```json
{
  "preadmissionId": "12345678-1234-1234-1234-123456789012",
  "reason": "illness | accident",
  "insurance": "swiss | international | auto",
  "hasEmployer": true,
  "consentNLPD": true,
  "consentMarketing": false,
  "identityCardBase64": "iVBORw0KGgoAAAANSUhEUgAA...",
  "identityCardMimeType": "application/pdf",
  "insuranceCardBase64": "iVBORw0KGgoAAAANSUhEUgAA...",
  "insuranceCardMimeType": "image/jpeg",
  "firstName": "Jean",
  "lastName": "Dupont",
  "gender": "male",
  "nationality": "CH",
  "street": "Rue du Lac 15",
  "npa": "1200",
  "city": "Genève",
  "country": "CH",
  "email": "jean.dupont@example.com",
  "profession": "Ingénieur",
  "employerName": "Tech SA",
  "employerAddress": "Route de Meyrin 100, 1217 Meyrin",
  "referringDoctor": "Dr. Martin",
  "generalPractitioner": "Dr. Bernard",
  "accidentDate": "",
  "accidentInsurance": "",
  "claimNumber": "",
  "avsNumber": "7561234567890",
  "basicInsurance": "CSS Assurance",
  "cardNumber": "80756012345678901234",
  "policyNumber": "",
  "complementaryInsurance": "Helsana"
}
```

---

## CSRF Token

| Endpoint | `GET /_layout/tokenhtml` |
|----------|--------------------------|
| **Réponse** | `<input type="hidden" value="CfDJ8N7..." />` |
| **Usage** | Ajouté en header `__RequestVerificationToken` sur tous les appels |
| **Mock** | Bypassé (pas de CSRF en mode mock) |

---

## Résumé Mock vs Réel

| Endpoint | Mock | Réel |
|----------|:----:|:----:|
| `getpread` (validation lien) | ✅ | ✅ |
| `getbirth` (date naissance) | ✅ | ✅ |
| `getphone` (tel) | ✅ | ✅ |
| `getflows` (trigger IDs) | ✅ | ✅ |
| `setstep` (étape) | ✅ | ✅ |
| `sendOtp` | ✅ | ✅ |
| `verifyOtp` | ✅ | ✅ |
| OCR identité | ✅ | ✅ |
| OCR assurance | ✅ | ✅ |
| Submit formulaire | ✅ | ✅ |
| CSRF token | ❌ (bypassé) | ✅ |

**Tous les endpoints ont une implémentation mock**, contrôlée par le flag `VITE_MOCK_ENABLED` dans `src/hooks/useApi.ts`.

---

## Transformations OCR → Champs formulaire

| Champ OCR (snake_case) | Transformation | Champ formulaire |
|------------------------|---------------|-----------------|
| `last_name` | `capitalizeName()` | `lastName` |
| `first_names` | `capitalizeFirstNames()` | `firstName` |
| `gender` | Aucune | `gender` |
| `nationality` | `getCountryNameByCode()` | `nationality` |
| `rue` | Aucune | `street` |
| `ville` | `capitalizeName()` | `city` |
| `zip` | Aucune | `npa` |
| `country` | `getCountryNameByCode()` | `country` |
| `avs` | Aucune | `avsNumber` |
| `kvg_carte_no` | Aucune | `cardNumber` |
| `kvg_insurance` | `capitalizeName()` | `basicInsurance` |
| `vvg_carte_no` | Aucune | `complementaryInsurance` |

---

## Flux d'appels dans l'ordre du parcours

```
1. Landing     → (aucun appel)
2. App mount   → getpread + getflows + setstep(Landing)
3. Security    → setstep(Security) → getbirth
4. OTP         → setstep(OTP) → getphone → sendOtp → verifyOtp
5. Qualif      → setstep(Qualif) → OCR identité → OCR assurance
6. Loading     → (aucun appel, 7s timer)
7. Admin       → setstep(Admin) → submitflow
8. Success     → setstep(Success)
```

---

## Variables d'environnement

### `.env.dev`

```env
VITE_MOCK_ENABLED=true
VITE_MOCK_OTP_CODE=123456
VITE_MOCK_BIRTH_DATE=1989-06-12
VITE_OCR_IDENTITY_TRIGGER_ID=f729da03-646c-f011-b4cc-0022487492a4
VITE_OCR_INSURANCE_TRIGGER_ID=43676cb8-6d6c-f011-b4cc-002248dae394
VITE_OCR_SENDOTP_TRIGGER_ID=82f65194-6894-f011-b4cc-002248dacc70
VITE_OCR_VERIFYOTP_TRIGGER_ID=7104a055-6a94-f011-b4cc-002248db6f9b
VITE_ENVIRONMENT=dev
```

### `.env.production`

```env
VITE_MOCK_ENABLED=false
VITE_OCR_IDENTITY_TRIGGER_ID=PROD_IDENTITY_TRIGGER_ID_A_CONFIGURER
VITE_OCR_INSURANCE_TRIGGER_ID=PROD_INSURANCE_TRIGGER_ID_A_CONFIGURER
VITE_ENVIRONMENT=production
```
