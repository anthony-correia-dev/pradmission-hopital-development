# Spécification - Intégration OCR Cloud Flow

## 📋 Vue d'ensemble

Lors de l'upload d'une pièce d'identité dans l'étape **Qualification**, un Cloud Flow Power Platform est appelé pour extraire les données (OCR) et pré-remplir automatiquement les champs du formulaire **AdminStep**.

---

## 🔗 Endpoint Cloud Flow

| Paramètre | Valeur |
|-----------|--------|
| **Méthode** | `POST` |
| **URL** | `/_api/cloudflow/v1.0/trigger/{TRIGGER_ID}` |
| **Trigger ID** | `f729da03-646c-f011-b4cc-0022487492a4` |

---

## 📤 Payload Request

```typescript
interface OCRDocumentRequest {
  fileType: 'id_card' | 'insurance_card'
  fileName: string
  base64: string  // Contenu du fichier encodé en Base64
}
```

**Exemple :**
```json
{
  "fileType": "id_card",
  "fileName": "scan.jpg",
  "base64": "/9j/4AAQSkZJRg..."
}
```

---

## 📥 Payload Response

```typescript
interface OCRDocumentResponse {
  lastName: string
  firstName: string
  birthDate: string   // Format: YYYY-MM-DD
  gender: 'male' | 'female'
  nationality: string // Code ISO 2 lettres (ex: CH, FR, DE)
}
```

**Exemple :**
```json
{
  "lastName": "Dupont",
  "firstName": "Jean",
  "birthDate": "1980-01-15",
  "gender": "male",
  "nationality": "CH"
}
```

---

## 🔄 Mapping OCR → Champs AdminStep

| Réponse OCR | Champ Store (`FormData`) | Champ UI (AdminStep) | Transformation |
|-------------|--------------------------|----------------------|----------------|
| `lastName` | `lastName` | "Nom" | Aucune |
| `firstName` | `firstName` | "Prénom" | Aucune |
| `birthDate` | ❌ **NON UTILISÉ** | - | - |
| `gender` | `gender` | "Genre" (select) | Aucune (`male`/`female`) |
| `nationality` | `nationality` | "Nationalité" (combobox) | **ISO → Nom complet** |

---

## 🌍 Transformation du champ `nationality`

### Problème

L'OCR retourne un **code ISO 2 lettres** (ex: `CH`, `FR`, `DE`), mais le composant `CountryCombobox` attend le **nom complet du pays** (ex: `Suisse`, `France`, `Allemagne`).

### Solution

Utiliser la fonction `getCountryNameByCode` de `src/lib/countries.ts` pour convertir le code ISO en nom de pays :

```typescript
import { getCountryNameByCode } from '../lib/countries'

// Réponse OCR
const ocrResponse = {
  nationality: "CH"  // Code ISO
}

// Transformation
const nationalityName = getCountryNameByCode(ocrResponse.nationality, language)
// Résultat FR: "Suisse"
// Résultat EN: "Switzerland"

// Mise à jour du FormData
updateFormData({
  nationality: nationalityName  // "Suisse" ou "Switzerland"
})
```

### Fonction utilitaire requise

Ajouter dans `src/lib/countries.ts` :

```typescript
/**
 * Convertit un code ISO 2 lettres en nom de pays
 * @param isoCode - Code ISO 2 lettres (ex: CH, FR, DE)
 * @param language - Langue pour le nom du pays ('fr' | 'en')
 * @returns Le nom complet du pays ou le code ISO si non trouvé
 */
export const getCountryNameByCode = (isoCode: string, language: 'fr' | 'en'): string => {
  const countries = getCountries(language)
  const country = countries.find(c => c.code === isoCode.toUpperCase())
  return country?.name ?? isoCode
}
```

### Mapping complet avec transformation

```typescript
// Dans Qualification.tsx - handleFileChange
if (ocrData) {
  onOCRDataExtracted({
    firstName: ocrData.firstName,
    lastName: ocrData.lastName,
    gender: ocrData.gender,
    nationality: getCountryNameByCode(ocrData.nationality, language)  // ✅ Transformé
  })
}
```

### Exemples de transformation

| Code ISO (OCR) | Nom FR | Nom EN |
|----------------|--------|--------|
| `CH` | Suisse | Switzerland |
| `FR` | France | France |
| `DE` | Allemagne | Germany |
| `IT` | Italie | Italy |
| `AT` | Autriche | Austria |
| `XX` (inconnu) | `XX` (fallback) | `XX` (fallback) |

---

## ⚠️ Gestion du champ `birthDate`

### Analyse du formulaire

Le formulaire **AdminStep** ne contient **pas** de champ pour la date de naissance. 

La date de naissance est uniquement présente dans :
- **Étape Security** : Champ `birthDate` utilisé pour l'authentification/vérification d'identité du patient

### Règle métier

| Champ | Étape | Usage | Modifié par OCR |
|-------|-------|-------|-----------------|
| `birthDate` | Security | Vérification d'identité du patient | ❌ **NON** |
| `birthDatePersonal` | (Non utilisé dans Admin) | - | ❌ **NON** |

- Le champ `birthDate` retourné par l'OCR est **ignoré**
- L'utilisateur a déjà saisi sa date de naissance à l'étape Security pour s'authentifier
- Cette valeur ne doit **jamais** être écrasée par l'OCR

### Mapping explicite

```typescript
// Réponse OCR
const ocrResponse = {
  lastName: "Dupont",
  firstName: "Jean",
  birthDate: "1980-01-15",  // ❌ IGNORÉ
  gender: "male",
  nationality: "CH"
}

// Mise à jour du FormData (birthDate NON inclus)
updateFormData({
  lastName: ocrResponse.lastName,
  firstName: ocrResponse.firstName,
  gender: ocrResponse.gender,
  nationality: getCountryNameByCode(ocrResponse.nationality, language)  // ✅ Transformé
  // birthDate: NE PAS MODIFIER
  // birthDatePersonal: NE PAS MODIFIER
})
```

---

## 🏗️ Architecture d'intégration

```
┌─────────────────────┐
│  QualificationStep  │
│  (Upload fichier)   │
└──────────┬──────────┘
           │ 1. Conversion fichier → Base64
           ▼
┌─────────────────────┐
│      useApi.ts      │
│ extractDocumentData │
└──────────┬──────────┘
           │ 2. POST /_api/cloudflow/v1.0/trigger/f729da03...
           │    { eventData: JSON.stringify(payload) }
           ▼
┌─────────────────────┐
│  Cloud Flow (OCR)   │
│  Power Platform     │
└──────────┬──────────┘
           │ 3. Réponse JSON (nationality = code ISO)
           ▼
┌─────────────────────┐
│  Qualification.tsx  │
│ getCountryNameByCode│
│ (ISO → nom complet) │
└──────────┬──────────┘
           │ 4. Données transformées
           ▼
┌─────────────────────┐
│     useWizard       │
│  updateFormData()   │
│  - firstName        │
│  - lastName         │
│  - gender           │
│  - nationality ✅   │
│  (birthDate ignoré) │
└──────────┬──────────┘
           │ 5. Mise à jour du state
           ▼
┌─────────────────────┐
│     AdminStep       │
│ (Champs pré-remplis)│
└─────────────────────┘
```

---

## 📝 Signature API Power Platform

L'appel utilise l'API jQuery de Power Platform via `window.shell.ajaxSafePost` :

```typescript
interface AjaxSafePostOptions {
  type: 'POST'
  url: string
  data: {
    eventData: string  // JSON stringifié du payload
  }
}

// Appel
window.shell.ajaxSafePost({
  type: 'POST',
  url: `/_api/cloudflow/v1.0/trigger/${TRIGGER_ID}`,
  data: {
    eventData: JSON.stringify(payload)
  }
})
  .done((response) => { /* succès */ })
  .fail((error) => { /* erreur */ })
```

---

## ✅ Champs pré-remplis par l'OCR (4 champs)

| Champ | Description | Transformation |
|-------|-------------|----------------|
| `firstName` | Prénom | Aucune |
| `lastName` | Nom de famille | Aucune |
| `gender` | Genre (male/female) | Aucune |
| `nationality` | Nationalité | **ISO → Nom complet** |

---

## ❌ Champs NON pré-remplis

Les champs suivants ne sont pas extraits par l'OCR et doivent être saisis manuellement :

- Adresse (street)
- Code postal (npa)
- Ville (city)
- Pays (country)
- Email
- Numéro AVS
- Profession
- Informations employeur
- Informations médecin
- Informations assurance

---

## ⚠️ Gestion des erreurs

| Cas | Comportement |
|-----|--------------|
| `window.shell` non disponible | Mode simulation (dev) |
| Erreur Cloud Flow | Afficher message d'erreur, permettre saisie manuelle |
| Données OCR partielles | Pré-remplir les champs disponibles uniquement |
| Code ISO inconnu | Utiliser le code ISO brut comme fallback |

---

## 🧪 Mode développement

En mode dev (sans Power Platform), l'API simule une réponse :

```typescript
{
  lastName: 'Dupont',
  firstName: 'Jean',
  birthDate: '1980-01-15',  // Ignoré
  gender: 'male',
  nationality: 'CH'  // Transformé en "Suisse" (FR) ou "Switzerland" (EN)
}
```

---

## 📅 Historique

| Date | Version | Description |
|------|---------|-------------|
| 2025-01-07 | 1.0 | Spécification initiale |
| 2025-01-07 | 1.1 | Clarification gestion `birthDate` vs `birthDatePersonal` |
| 2025-01-07 | 1.2 | `birthDate` OCR ignoré - champ non présent dans AdminStep |
| 2026-01-07 | 1.3 | Ajout transformation `nationality` ISO → nom complet du pays |
