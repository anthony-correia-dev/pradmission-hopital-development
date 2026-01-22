# Spécification des données collectées - Phases Qualification & Admin

> **Version**: 1.0  
> **Date**: 21 janvier 2026  
> **Statut**: Actif

## 📋 Vue d'ensemble

Ce document décrit l'ensemble des données collectées durant les phases **Qualification** et **Admin** du formulaire de préadmission hospitalière.

---

## 🎯 Phase 1 : Qualification

### Description
Étape de qualification du patient permettant de déterminer le motif d'admission, le type d'assurance, et de collecter les documents d'identité.

### Données collectées

| Champ | Type | Obligatoire | Condition | Description |
|-------|------|-------------|-----------|-------------|
| `reason` | `'illness' \| 'accident'` | ✅ Oui | - | Motif de l'admission (maladie ou accident) |
| `insurance` | `'swiss' \| 'international' \| 'auto'` | ✅ Oui | - | Type d'assurance du patient |
| `hasEmployer` | `boolean` | ✅ Oui | Si `reason === 'accident'` | Indique si le patient a un employeur |
| `identityCard` | `File` | ✅ Oui | - | Document d'identité (carte d'identité, passeport) |
| `insuranceCard` | `File` | ✅ Oui | Si `insurance === 'swiss'` | Carte d'assurance maladie suisse |
| `consentNLPD` | `boolean` | ✅ Oui | Doit être `true` | Consentement protection des données (nLPD) |
| `consentMarketing` | `boolean` | ❌ Non | - | Consentement communications marketing |

### Extraction OCR (automatique)

#### Depuis la carte d'identité (`identityCard`)
Les données suivantes sont extraites automatiquement et pré-remplies dans la phase Admin :

| Champ extrait | Champ FormData | Description |
|---------------|----------------|-------------|
| `firstName` | `firstName` | Prénom du patient |
| `lastName` | `lastName` | Nom de famille |
| `gender` | `gender` | Genre (male/female/other) |
| `nationality` | `nationality` | Nationalité (code pays converti en nom) |

#### Depuis la carte d'assurance (`insuranceCard`)
| Champ extrait | Champ FormData | Description |
|---------------|----------------|-------------|
| `street` | `street` | Adresse (rue et numéro) |
| `zipCode` | `npa` | Code postal (NPA) |
| `city` | `city` | Ville |
| `country` | `country` | Pays (code converti en nom) |
| `avsNumber` | `avsNumber` | Numéro AVS (13 chiffres) |
| `kvgInsuranceName` | `basicInsurance` | Nom de l'assurance de base LAMal |
| `kvgCardNumber` | `cardNumber` | Numéro de carte d'assurance |
| `vvgCardNumber` | `complementaryInsurance` | Assurance complémentaire LCA |

---

## 👤 Phase 2 : Admin (Données administratives)

### Description
Formulaire complet de saisie des informations personnelles, de contact, professionnelles, médicales et d'assurance du patient.

### Section 1 : Identité

| Champ | Type | Obligatoire | Validation | Description |
|-------|------|-------------|------------|-------------|
| `firstName` | `string` | ✅ Oui | `min(1)` | Prénom |
| `lastName` | `string` | ✅ Oui | `min(1)` | Nom de famille |
| `gender` | `string` | ✅ Oui | `min(1)` | Genre (`male`, `female`, `other`) |
| `nationality` | `string` | ✅ Oui | `min(1)` | Nationalité (nom du pays) |

### Section 2 : Coordonnées

| Champ | Type | Obligatoire | Validation | Description |
|-------|------|-------------|------------|-------------|
| `street` | `string` | ✅ Oui | `min(1)` | Adresse (rue et numéro) |
| `npa` | `string` | ✅ Oui | `regex(/^\d+$/)` | Code postal (NPA) |
| `city` | `string` | ✅ Oui | `min(1)` | Ville |
| `country` | `string` | ✅ Oui | `min(1)` | Pays de résidence |
| `email` | `string` | ✅ Oui | `email()` | Adresse email |

### Section 3 : Employeur

| Champ | Type | Obligatoire | Condition | Description |
|-------|------|-------------|-----------|-------------|
| `profession` | `string` | ⚠️ Conditionnel | Si `hasEmployer === true` | Profession |
| `employerName` | `string` | ⚠️ Conditionnel | Si `hasEmployer === true` | Nom de l'employeur |
| `employerAddress` | `string` | ⚠️ Conditionnel | Si `hasEmployer === true` | Adresse de l'employeur |

### Section 4 : Médecins

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `referringDoctor` | `string` | ❌ Non | Médecin référent (autocomplete) |
| `generalPractitioner` | `string` | ❌ Non | Médecin traitant (autocomplete) |

### Section 5 : Données accident (si `reason === 'accident'`)

| Champ | Type | Obligatoire | Validation | Description |
|-------|------|-------------|------------|-------------|
| `accidentDate` | `string` | ✅ Oui | Format ISO `YYYY-MM-DD`, date valide | Date de l'accident |
| `accidentInsurance` | `string` | ❌ Non | - | Assurance accident |
| `claimNumber` | `string` | ❌ Non | - | Numéro de sinistre |

### Section 6 : Données d'assurance

| Champ | Type | Obligatoire | Condition | Validation | Description |
|-------|------|-------------|-----------|------------|-------------|
| `avsNumber` | `string` | ✅ Oui | Si `insurance === 'swiss'` | `regex(/^\d{13}$/)` | Numéro AVS (756.xxxx.xxxx.xx) |
| `basicInsurance` | `string` | ✅ Oui | Si `insurance === 'swiss'` OU `'international'` OU `reason === 'accident'` | `min(1)` | Assurance de base LAMal |
| `cardNumber` | `string` | ✅ Oui | Si `insurance === 'swiss'` OU `reason === 'accident'` | `regex(/^\d{20}$/)` | Numéro de carte d'assurance |
| `policyNumber` | `string` | ✅ Oui | Si `insurance === 'international'` | `min(1)` | Numéro de police (international) |
| `complementaryInsurance` | `string` | ❌ Non | - | - | Assurance complémentaire LCA |

---

## 📊 Matrice de dépendance des champs

### Selon le type d'assurance (`insurance`)

| Champ | Swiss 🇨🇭 | International 🌍 | Auto 🚗 |
|-------|----------|-----------------|---------|
| `avsNumber` | ✅ Requis | ❌ Optionnel | ❌ Optionnel |
| `basicInsurance` | ✅ Requis | ✅ Requis | ⚠️ Requis si accident |
| `cardNumber` | ✅ Requis | ❌ Optionnel | ⚠️ Requis si accident |
| `policyNumber` | ❌ N/A | ✅ Requis | ❌ N/A |
| `insuranceCard` | ✅ Requis | ❌ Optionnel | ❌ Optionnel |

### Selon le motif (`reason`)

| Champ | Maladie 🏥 | Accident ⚠️ |
|-------|-----------|-------------|
| `hasEmployer` | ❌ N/A | ✅ Affiché |
| `accidentDate` | ❌ N/A | ✅ Requis |
| `accidentInsurance` | ❌ N/A | ❌ Optionnel |
| `claimNumber` | ❌ N/A | ❌ Optionnel |
| `profession` | ❌ Optionnel | ⚠️ Requis si employeur |
| `employerName` | ❌ Optionnel | ⚠️ Requis si employeur |
| `employerAddress` | ❌ Optionnel | ⚠️ Requis si employeur |

---

## 🔄 Flux de données

```
┌─────────────────────────────────────────────────────────────────┐
│                     PHASE QUALIFICATION                         │
├─────────────────────────────────────────────────────────────────┤
│  1. Sélection motif (reason)                                    │
│  2. Affichage conditionnel hasEmployer (si accident)            │
│  3. Sélection type assurance (insurance)                        │
│  4. Upload carte identité → OCR → Pré-remplissage identité      │
│  5. Upload carte assurance (si swiss) → OCR → Pré-remplissage   │
│  6. Consentements (nLPD obligatoire, marketing optionnel)       │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                       PHASE ADMIN                               │
├─────────────────────────────────────────────────────────────────┤
│  1. Vérification/correction identité (pré-remplie OCR)          │
│  2. Saisie coordonnées (pré-remplies OCR si carte assurance)    │
│  3. Saisie employeur (si hasEmployer)                           │
│  4. Sélection médecins (autocomplete)                           │
│  5. Données accident (si reason === 'accident')                 │
│  6. Données assurance (selon type sélectionné)                  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
                    [Soumission formulaire]
```

---

## 📁 Fichiers source

| Fichier | Description |
|---------|-------------|
| `src/components/Qualification.tsx` | Composant phase Qualification |
| `src/components/Admin.tsx` | Composant phase Admin |
| `src/schemas/qualificationSchema.ts` | Schéma Zod Qualification |
| `src/schemas/adminSchema.ts` | Schéma Zod Admin |
| `src/hooks/useWizard.ts` | Hook wizard + définition FormData |
| `src/hooks/useApi.ts` | Hook API (OCR extraction) |

---

## 📝 Notes techniques

1. **Persistance** : Les données sont sauvegardées dans `sessionStorage` via autosave React Hook Form
2. **Validation** : Zod avec schémas dynamiques selon les conditions (reason, insurance, hasEmployer)
3. **OCR** : Extraction automatique via Azure AI Document Intelligence
4. **Formatage** :
   - AVS : `756.xxxx.xxxx.xx` (13 chiffres avec séparateurs)
   - Carte assurance : `80756.xxx.xxx.xxx.xxx.xxx` (20 chiffres)
   - Dates : Saisie `DD.MM.YYYY`, stockage ISO `YYYY-MM-DD`
