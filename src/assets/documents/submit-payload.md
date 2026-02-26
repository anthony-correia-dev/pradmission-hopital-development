# Submit Preadmission - Documentation du Payload

## Vue d'ensemble

La soumission du formulaire se fait depuis la page **Admin** (`/admin`) via `api.submitPreadmission(formData)`.

Seuls les champs pertinents du formulaire sont envoyés (pas les champs wizard internes comme `language`, `birthDate`, `otpCode`, etc.).

---

## Endpoint

| Methode | URL principale (Server Logic) | URL fallback (Cloud Flow) |
|---------|-------------------------------|---------------------------|
| `POST`  | `/_api/serverlogics/submit`   | `/_api/cloudflow/v1.0/trigger/{submitflow_trigger_id}` |

Le systeme tente d'abord le Server Logic. En cas d'echec, il bascule automatiquement sur le Cloud Flow.

---

## Structure HTTP

### Server Logic (chemin principal)

```http
POST /_api/serverlogics/submit
Content-Type: application/json
__RequestVerificationToken: <csrf_token>
X-Requested-With: XMLHttpRequest

{
  "json": "<string JSON contenant le payload ci-dessous>"
}
```

Le body contient **un seul champ `json`** dont la valeur est le payload serialise en string JSON.

### Cloud Flow (fallback)

```http
POST /_api/cloudflow/v1.0/trigger/<submitflow_trigger_id>
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
__RequestVerificationToken: <csrf_token>
X-Requested-With: XMLHttpRequest

eventData=<url_encoded_json>
```

Meme payload, mais URL-encode dans le parametre `eventData`.

---

## Contenu du champ `json` (payload de-serialise)

Voici toutes les cles presentes dans le vrai payload, avec leur type et format :

```typescript
{
  // --- Identification ---
  preadmissionId: string          // UUID de la pre-admission
                                  // ex: "27d12ac6-f5fd-f011-8406-7ced8d444879"

  // --- Qualification ---
  reason: "illness" | "accident"  // Motif d'hospitalisation
  insurance: "swiss" | "international" | "auto"
  hasEmployer: boolean            // Pertinent si reason=accident
  consentNLPD: boolean            // Toujours true (obligatoire)
  consentMarketing: boolean       // Facultatif

  // --- Documents (base64 brut, PAS de prefixe data:...) ---
  identityCardBase64: string      // ex: "/9j/4AAQSkZJRg..." (raw base64)
  identityCardMimeType: string    // ex: "image/jpeg"
  insuranceCardBase64: string     // ex: "/9j/4AAQSkZJRg..." (raw base64)
  insuranceCardMimeType: string   // ex: "image/jpeg"

  // --- Identite ---
  firstName: string               // ex: "Jean-Pierre"
  lastName: string                // ex: "Dupont"
  gender: string                  // "male" | "female"
  nationality: string             // Nom complet du pays, ex: "Switzerland", "France"
  avsNumber: string               // 13 chiffres SANS formatage, ex: "7561234567897"

  // --- Contact ---
  street: string                  // ex: "Rue du Lac 42"
  npa: string                     // Code postal, ex: "1201"
  city: string                    // ex: "Geneve"
  country: string                 // Nom complet du pays, ex: "France", "Switzerland"
  email: string                   // ex: "jean.dupont@email.ch"

  // --- Employeur (vides si non applicable) ---
  profession: string              // ex: "Architecte" ou ""
  employerName: string            // ex: "SwissTech SA" ou ""
  employerAddress: string         // ex: "Route de Meyrin 10" ou ""

  // --- Medecins (toujours optionnels) ---
  referringDoctor: string         // ex: "Dr. Martin Favre" ou ""
  generalPractitioner: string     // ex: "Dr. Sophie Blanc" ou ""

  // --- Accident (vides si reason=illness) ---
  accidentDate: string            // ex: "10.01.2024" ou ""
  accidentInsurance: string       // ex: "SUVA" ou ""
  claimNumber: string             // ex: "SIN-2024-789" ou ""

  // --- Assurance ---
  basicInsurance: string          // ex: "CSS Assurance" ou ""
  cardNumber: string              // 20 chiffres SANS formatage, ex: "80756012345678901234"
  policyNumber: string            // ex: "BUPA-INT-2024-5678" ou ""
  complementaryInsurance: string  // ex: "Helsana Completa" ou ""
}
```

### Champs absents du payload (vs WizardFormData)

Ces champs existent dans le type `WizardFormData` cote client mais ne sont **PAS envoyes** dans le payload reel :

| Champ | Raison |
|-------|--------|
| `language` | Utilise cote client uniquement |
| `birthDate` | Deja verifie a l'etape security, pas renvoye |
| `otpCode` | Deja verifie a l'etape OTP, pas renvoye |
| `birthDatePersonal` | Non inclus dans le payload |
| `identityCard` | Objet `File`, non serialisable en JSON |
| `insuranceCard` | Objet `File`, non serialisable en JSON |
| `ocrTimedOut` | Flag interne client uniquement |

---

## Vrai payload capture (Untitled-1.json)

Cas : maladie + assurance suisse, donnees pre-remplies par OCR.

```json
{
  "json": {
    "preadmissionId": "27d12ac6-f5fd-f011-8406-7ced8d444879",
    "reason": "illness",
    "insurance": "swiss",
    "hasEmployer": false,
    "consentNLPD": true,
    "consentMarketing": false,
    "identityCardBase64": "<base64_string>",
    "identityCardMimeType": "image/jpeg",
    "insuranceCardBase64": "<base64_string>",
    "insuranceCardMimeType": "image/jpeg",
    "firstName": "Sample Helvetia",
    "lastName": "Schweizer",
    "gender": "female",
    "nationality": "Switzerland",
    "street": "4r34r3",
    "npa": "128888",
    "city": "lacombe",
    "country": "France",
    "email": "queau.j@gmail.com",
    "profession": "",
    "employerName": "",
    "employerAddress": "",
    "referringDoctor": "",
    "generalPractitioner": "",
    "accidentDate": "",
    "accidentInsurance": "",
    "claimNumber": "",
    "avsNumber": "6785636565656",
    "basicInsurance": "43",
    "cardNumber": "35354354553535535535",
    "policyNumber": "",
    "complementaryInsurance": ""
  }
}
```

> **Note** : dans le vrai payload HTTP, `json` est un **string** (pas un objet). Ici il est de-serialise pour lisibilite.

---

## Exemples fictifs

### Exemple 1 : Maladie + Assurance suisse (cas typique)

```json
{
  "preadmissionId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "reason": "illness",
  "insurance": "swiss",
  "hasEmployer": false,
  "consentNLPD": true,
  "consentMarketing": false,

  "identityCardBase64": "<base64_string>",
  "identityCardMimeType": "image/jpeg",
  "insuranceCardBase64": "<base64_string>",
  "insuranceCardMimeType": "image/jpeg",

  "firstName": "Jean-Pierre",
  "lastName": "Dupont",
  "gender": "male",
  "nationality": "Switzerland",
  "avsNumber": "7561234567897",

  "street": "Rue du Lac 42",
  "npa": "1201",
  "city": "Geneve",
  "country": "Switzerland",
  "email": "jean.dupont@email.ch",

  "profession": "",
  "employerName": "",
  "employerAddress": "",

  "referringDoctor": "Dr. Martin Favre",
  "generalPractitioner": "Dr. Sophie Blanc",

  "accidentDate": "",
  "accidentInsurance": "",
  "claimNumber": "",

  "basicInsurance": "CSS Assurance",
  "cardNumber": "80756012345678901234",
  "policyNumber": "",
  "complementaryInsurance": "Helsana Completa"
}
```

### Exemple 2 : Accident + Employeur + Assurance suisse

```json
{
  "preadmissionId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "reason": "accident",
  "insurance": "swiss",
  "hasEmployer": true,
  "consentNLPD": true,
  "consentMarketing": true,

  "identityCardBase64": "<base64_string>",
  "identityCardMimeType": "image/png",
  "insuranceCardBase64": "<base64_string>",
  "insuranceCardMimeType": "image/jpeg",

  "firstName": "Marie",
  "lastName": "Rochat",
  "gender": "female",
  "nationality": "Switzerland",
  "avsNumber": "7569876543210",

  "street": "Avenue de la Gare 8",
  "npa": "1003",
  "city": "Lausanne",
  "country": "Switzerland",
  "email": "marie.rochat@gmail.com",

  "profession": "Architecte",
  "employerName": "Bureau Archi SA",
  "employerAddress": "Chemin des Fleurs 3, 1005 Lausanne",

  "referringDoctor": "",
  "generalPractitioner": "Dr. Laurent Muller",

  "accidentDate": "10.01.2024",
  "accidentInsurance": "SUVA",
  "claimNumber": "SIN-2024-789",

  "basicInsurance": "Groupe Mutuel",
  "cardNumber": "80756098765432100001",
  "policyNumber": "",
  "complementaryInsurance": ""
}
```

### Exemple 3 : Maladie + Assurance internationale

```json
{
  "preadmissionId": "c3d4e5f6-a7b8-9012-cdef-123456789012",
  "reason": "illness",
  "insurance": "international",
  "hasEmployer": false,
  "consentNLPD": true,
  "consentMarketing": false,

  "identityCardBase64": "<base64_string>",
  "identityCardMimeType": "image/jpeg",
  "insuranceCardBase64": "",
  "insuranceCardMimeType": "",

  "firstName": "James",
  "lastName": "Thompson",
  "gender": "male",
  "nationality": "United Kingdom",
  "avsNumber": "",

  "street": "15 Baker Street",
  "npa": "1206",
  "city": "Geneve",
  "country": "United Kingdom",
  "email": "james.thompson@outlook.com",

  "profession": "",
  "employerName": "",
  "employerAddress": "",

  "referringDoctor": "",
  "generalPractitioner": "",

  "accidentDate": "",
  "accidentInsurance": "",
  "claimNumber": "",

  "basicInsurance": "Bupa International",
  "cardNumber": "",
  "policyNumber": "BUPA-INT-2024-5678",
  "complementaryInsurance": ""
}
```

> **Rappel** : dans les exemples ci-dessus, le contenu est montre de-serialise. Le vrai body HTTP est `{ "json": "<tout ca en string>" }`.

---

## Reponse du serveur

### Structure

```typescript
interface SubmitResponse {
  status: string              // "success"
  message?: string            // Message optionnel
  confirmationNumber?: string // Numero de confirmation
}
```

### Enveloppe Server Logic

La reponse brute est wrappee :

```json
{
  "success": true,
  "data": "{\"status\":\"success\",\"confirmationNumber\":\"PREAD-2024-00456\"}"
}
```

Le champ `data` est un string JSON qu'il faut parser une seconde fois.

### Exemple de reponse mock

```json
{
  "success": true,
  "data": "{\"status\":\"success\",\"confirmationNumber\":\"PREAD-MOCK-1708444800000\"}"
}
```

---

## Flow de soumission (sequence)

```
1. Utilisateur clique "Soumettre" sur /admin
2. Validation Zod dynamique (admin schema)
   |-- Echec -> affiche erreurs, scroll vers la premiere erreur, STOP
   |-- Succes -> continue
3. getValues() recupere le WizardFormData
4. api.submitPreadmission(formData)
   a. Recupere la config Cloud Flow (trigger IDs)
   b. Construit payload : { json: JSON.stringify(formData) }
   c. Tente POST Server Logic
      |-- Succes -> parse reponse
      |-- Echec -> fallback POST Cloud Flow
5. Succes :
   - Supprime sessionStorage : 'wizard-form-data', 'otp_sent'
   - Navigate vers /success
6. Echec :
   - Reactive le bouton submit (isSubmitting = false)
   - Pas de message d'erreur affiche (silencieux)
```

---

## Champs conditionnels (resume)

| Condition | Champs requis |
|-----------|---------------|
| Toujours | `firstName`, `lastName`, `gender`, `nationality`, `street`, `npa`, `city`, `country`, `email` |
| `insurance === 'swiss'` | `avsNumber`, `basicInsurance`, `cardNumber` |
| `insurance === 'international'` | `basicInsurance`, `policyNumber` |
| `reason === 'accident'` | `accidentDate`, `cardNumber` |
| `reason === 'accident'` ET `!hasEmployer` | `basicInsurance` |
| `reason === 'accident'` ET `hasEmployer` | `profession`, `employerName`, `employerAddress` |
| Toujours optionnel | `referringDoctor`, `generalPractitioner`, `accidentInsurance`, `claimNumber`, `complementaryInsurance` |

---

## Notes techniques

- **Double JSON encoding** : le payload est `{ json: JSON.stringify(formData) }` puis le body HTTP est `JSON.stringify({ json: ... })`. Le serveur doit donc parser deux fois.
- **Base64 brut** : les images sont en base64 **sans** prefixe `data:image/...;base64,`. C'est du raw base64 directement (ex: `/9j/4AAQ...`).
- **Taille du payload** : avec les base64, le payload peut atteindre **500 KB+** (ex: 576 065 chars dans le vrai payload capture).
- **Pas de formatage des numeros** : AVS et cardNumber sont envoyes comme chiffres bruts sans separateurs (ex: `"7561234567897"`, pas `"756.1234.5678.97"`).
- **Nationalite en nom complet** : `"Switzerland"`, `"France"`, `"United Kingdom"` (pas de codes ISO).
- **CSRF** : le token est recupere une seule fois depuis `/_layout/tokenhtml` et reutilise pour toutes les requetes.
- **Champs vides** : les champs non remplis sont des strings vides `""`, jamais `null` ou `undefined`.
