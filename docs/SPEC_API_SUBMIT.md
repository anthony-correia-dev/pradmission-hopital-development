# 📋 Spécification API : Submit Cloud Flow

## 🎯 Objectif

Soumettre toutes les données collectées lors des étapes **Qualification** et **Admin** du wizard de préadmission vers le Cloud Flow `submitflow`.

---

## 📡 Endpoint

| Paramètre | Valeur |
|-----------|--------|
| **Méthode** | `POST` |
| **URL** | `/_api/cloudflow/v1.0/trigger/{submitflow_trigger_id}` |
| **Content-Type** | `application/x-www-form-urlencoded; charset=UTF-8` |
| **Authentification** | Token anti-CSRF (`__RequestVerificationToken`) |

Le `submitflow_trigger_id` est récupéré dynamiquement via la Server Logic `getflows` (champ `submitflow`).

---

## 📥 Payload (Request)

Le payload est envoyé dans le champ `eventData` (JSON stringifié).

> ⚠️ **Important** : Le payload contient **toujours tous les champs**. Les champs non applicables sont envoyés avec une valeur vide (`""`, `false`, ou `null`).

### Structure complète (fixe)

```typescript
interface SubmitPayload {
  // 🔑 Identifiant
  preadmissionId: string          // GUID de la préadmission

  // 📋 Qualification
  reason: 'illness' | 'accident'  // Motif d'admission
  insurance: 'swiss' | 'international' | 'auto'  // Type d'assurance
  hasEmployer: boolean            // A un employeur
  consentNLPD: boolean            // Consentement NLPD
  consentMarketing: boolean       // Consentement marketing

  // 📄 Documents (Base64 + MIME Type)
  identityCardBase64: string      // Carte d'identité (contenu Base64)
  identityCardMimeType: string    // Type MIME (ex: "application/pdf", "image/jpeg")
  insuranceCardBase64: string     // Carte d'assurance (contenu Base64, "" si non applicable)
  insuranceCardMimeType: string   // Type MIME (ex: "image/png", "" si non applicable)

  // 👤 Informations personnelles
  firstName: string               // Prénom
  lastName: string                // Nom
  gender: string                  // Genre ("male" | "female" | "")
  nationality: string             // Code ISO pays (ex: "CH", "FR")

  // 🏠 Adresse
  street: string                  // Rue et numéro
  npa: string                     // Code postal (NPA)
  city: string                    // Ville
  country: string                 // Code ISO pays

  // 📧 Contact
  email: string                   // Email

  // 💼 Employeur (vide si hasEmployer = false)
  profession: string              // Profession
  employerName: string            // Nom de l'employeur
  employerAddress: string         // Adresse de l'employeur

  // 🩺 Médecins
  referringDoctor: string         // Médecin adressant
  generalPractitioner: string     // Médecin traitant

  // 🚨 Accident (vide si reason ≠ 'accident')
  accidentDate: string            // Date de l'accident (YYYY-MM-DD)
  accidentInsurance: string       // Assurance accident
  claimNumber: string             // Numéro de sinistre

  // 🏥 Assurance (vide si non applicable)
  avsNumber: string               // Numéro AVS (13 chiffres)
  basicInsurance: string          // Caisse d'assurance de base
  cardNumber: string              // Numéro de carte (20 chiffres)
  policyNumber: string            // Numéro de police (international)
  complementaryInsurance: string  // Assurance complémentaire
}
```

### Exemple de payload complet

```json
{
  "preadmissionId": "12345678-1234-1234-1234-123456789012",
  
  "reason": "illness",
  "insurance": "swiss",
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

### Exemple avec assurance internationale (sans employeur)

```json
{
  "preadmissionId": "87654321-4321-4321-4321-210987654321",
  
  "reason": "accident",
  "insurance": "international",
  "hasEmployer": false,
  "consentNLPD": true,
  "consentMarketing": true,
  
  "identityCardBase64": "JVBERi0xLjQKJeLjz9MKMyAwIG...",
  "identityCardMimeType": "application/pdf",
  "insuranceCardBase64": "",
  "insuranceCardMimeType": "",
  
  "firstName": "Marie",
  "lastName": "Martin",
  "gender": "female",
  "nationality": "FR",
  
  "street": "Avenue des Champs 42",
  "npa": "75008",
  "city": "Paris",
  "country": "FR",
  
  "email": "marie.martin@example.fr",
  
  "profession": "",
  "employerName": "",
  "employerAddress": "",
  
  "referringDoctor": "",
  "generalPractitioner": "Dr. Lefebvre",
  
  "accidentDate": "2026-01-15",
  "accidentInsurance": "AXA International",
  "claimNumber": "CLM-2026-789",
  
  "avsNumber": "",
  "basicInsurance": "AXA Global Health",
  "cardNumber": "",
  "policyNumber": "POL-INT-456789",
  "complementaryInsurance": ""
}
```

---

## 📤 Réponse (Response)

### Succès

```json
{
  "status": "success",
  "message": "Préadmission soumise avec succès",
  "confirmationNumber": "PREAD-2026-001234"
}
```

### Erreur

```json
{
  "status": "error",
  "message": "Description de l'erreur",
  "errorCode": "VALIDATION_ERROR"
}
```

### Codes d'erreur possibles

| Code | Description |
|------|-------------|
| `VALIDATION_ERROR` | Données invalides ou manquantes |
| `DUPLICATE_SUBMISSION` | Préadmission déjà soumise |
| `EXPIRED_LINK` | Lien de préadmission expiré |
| `SYSTEM_ERROR` | Erreur système interne |

---

## 📋 Tableau récapitulatif des champs

| Champ | Toujours envoyé | Valeur si non applicable |
|-------|-----------------|--------------------------|
| `preadmissionId` | ✅ | - |
| `reason` | ✅ | - |
| `insurance` | ✅ | - |
| `hasEmployer` | ✅ | `false` |
| `consentNLPD` | ✅ | - |
| `consentMarketing` | ✅ | `false` |
| `identityCardBase64` | ✅ | - |
| `identityCardMimeType` | ✅ | - |
| `insuranceCardBase64` | ✅ | `""` |
| `insuranceCardMimeType` | ✅ | `""` |
| `firstName` | ✅ | - |
| `lastName` | ✅ | - |
| `gender` | ✅ | - |
| `nationality` | ✅ | - |
| `street` | ✅ | - |
| `npa` | ✅ | - |
| `city` | ✅ | - |
| `country` | ✅ | - |
| `email` | ✅ | - |
| `profession` | ✅ | `""` |
| `employerName` | ✅ | `""` |
| `employerAddress` | ✅ | `""` |
| `referringDoctor` | ✅ | `""` |
| `generalPractitioner` | ✅ | `""` |
| `accidentDate` | ✅ | `""` |
| `accidentInsurance` | ✅ | `""` |
| `claimNumber` | ✅ | `""` |
| `avsNumber` | ✅ | `""` |
| `basicInsurance` | ✅ | `""` |
| `cardNumber` | ✅ | `""` |
| `policyNumber` | ✅ | `""` |
| `complementaryInsurance` | ✅ | `""` |

---

## 📎 Types MIME supportés

| Type MIME | Extension | Description |
|-----------|-----------|-------------|
| `application/pdf` | .pdf | Document PDF |
| `image/jpeg` | .jpg, .jpeg | Image JPEG |
| `image/png` | .png | Image PNG |
| `image/webp` | .webp | Image WebP |
| `image/heic` | .heic | Image HEIC (iOS) |

---

## 🛠️ Implémentation Frontend

### Fonction `submitPreadmission`

```typescript
const submitPreadmission = async (
  formData: WizardFormData
): Promise<{ success: boolean; message?: string; confirmationNumber?: string }> => {
  // 1. Récupérer la configuration Cloud Flow
  const config = await getCloudFlowConfig()
  if (!config) {
    return { success: false, message: 'Configuration non disponible' }
  }

  // 2. Convertir les fichiers en Base64
  const identityCardBase64 = formData.identityCard 
    ? await fileToBase64(formData.identityCard) 
    : ''
  const identityCardMimeType = formData.identityCard?.type ?? ''
  
  const insuranceCardBase64 = formData.insuranceCard 
    ? await fileToBase64(formData.insuranceCard) 
    : ''
  const insuranceCardMimeType = formData.insuranceCard?.type ?? ''

  // 3. Construire le payload (tous les champs, toujours)
  const payload: SubmitPayload = {
    preadmissionId: formData.preadmissionId ?? '',
    
    // Qualification
    reason: formData.reason as 'illness' | 'accident',
    insurance: formData.insurance as 'swiss' | 'international' | 'auto',
    hasEmployer: formData.hasEmployer,
    consentNLPD: formData.consentNLPD,
    consentMarketing: formData.consentMarketing,
    
    // Documents
    identityCardBase64,
    identityCardMimeType,
    insuranceCardBase64,
    insuranceCardMimeType,
    
    // Informations personnelles
    firstName: formData.firstName ?? '',
    lastName: formData.lastName ?? '',
    gender: formData.gender ?? '',
    nationality: formData.nationality ?? '',
    
    // Adresse
    street: formData.street ?? '',
    npa: formData.npa ?? '',
    city: formData.city ?? '',
    country: formData.country ?? '',
    
    // Contact
    email: formData.email ?? '',
    
    // Employeur
    profession: formData.profession ?? '',
    employerName: formData.employerName ?? '',
    employerAddress: formData.employerAddress ?? '',
    
    // Médecins
    referringDoctor: formData.referringDoctor ?? '',
    generalPractitioner: formData.generalPractitioner ?? '',
    
    // Accident
    accidentDate: formData.accidentDate ?? '',
    accidentInsurance: formData.accidentInsurance ?? '',
    claimNumber: formData.claimNumber ?? '',
    
    // Assurance
    avsNumber: formData.avsNumber ?? '',
    basicInsurance: formData.basicInsurance ?? '',
    cardNumber: formData.cardNumber ?? '',
    policyNumber: formData.policyNumber ?? '',
    complementaryInsurance: formData.complementaryInsurance ?? ''
  }

  // 4. Appeler le Cloud Flow
  const response = await safeAjaxCloudFlow(config.submitflow, payload)
  
  // 5. Parser et retourner la réponse
  return response as SubmitResponse
}
```

---

## 🧪 Mode Développement (Mock)

En local (`localhost` / `127.0.0.1`), la fonction simule un succès après 1.5s :

```typescript
if (isLocalhost) {
  await new Promise(resolve => setTimeout(resolve, 1500))
  return {
    success: true,
    message: 'Préadmission mock soumise',
    confirmationNumber: 'PREAD-MOCK-' + Date.now()
  }
}
```

---

## 📊 Diagramme de flux

```
┌─────────────────┐
│  Étape Admin    │
│  (Formulaire)   │
└────────┬────────┘
         │ Submit
         ▼
┌─────────────────┐
│ getCloudFlowConfig │  ← Récupère submitflow trigger ID
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ fileToBase64()  │  ← Convertit les documents
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ safeAjaxCloudFlow │  ← Appel Cloud Flow Submit
│ (submitflow)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Réponse        │
│  success/error  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Étape Success  │  ← Si succès, affiche confirmation
└─────────────────┘
```

---

## ✅ Checklist d'implémentation

- [ ] Ajouter l'interface `SubmitPayload` dans `useApi.ts`
- [ ] Ajouter l'interface `SubmitResponse` dans `useApi.ts`
- [ ] Implémenter la fonction `submitPreadmission` dans `useApi`
- [ ] Mettre à jour `submitForm` existant pour utiliser `submitPreadmission`
- [ ] Ajouter le mock pour le mode développement
- [ ] Tester avec différentes combinaisons reason/insurance
- [ ] Gérer les erreurs et afficher les messages appropriés
