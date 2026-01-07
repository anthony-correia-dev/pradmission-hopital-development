# Spécification Globale : Module de Préadmission en Ligne

**Version :** 1.2 (Ajout du mapping des champs système)  
**Date :** 05/12/2025  
**Technologie cible :** React / TypeScript  
**Mockups :** [Lien Figma](https://www.figma.com/design/tEOKeF66JRGJrY7dV2KJNk/Digital-Admission?node-id=267-2088)

---

## 1. Architecture & Principes Généraux

### 1.1. Flux Utilisateur (User Flow)
Le parcours utilisateur est conçu de manière linéaire et séquentielle.

1.  **Landing Page** (Choix de la langue & Démarrage)
2.  **Sécurité** (Vérification de la Date de Naissance)
3.  **Authentification** (Validation par OTP SMS)
4.  **Wizard Étape 1** (Qualification & Téléchargement de documents)
5.  **Wizard Étape 2** (Formulaire Administratif)
6.  **Confirmation** (Message de succès & Fin)

### 1.2. Règles Transverses

-   **Multilingue** : Le module doit être disponible en Français (FR) et Anglais (EN). Le changement de langue doit pouvoir se faire à la volée, sans perte des données saisies.
-   **Persistance des données** : Utilisation de `sessionStorage` pour une sauvegarde locale des informations. Cela évite la perte de données en cas de rafraîchissement de la page par l'utilisateur.
-   **Indicateurs visuels** :
    -   Les champs obligatoires sont clairement identifiés par un astérisque (`*`).
    -   Les boutons d'action sont désactivés (`disabled`) si le formulaire est invalide ou pendant les temps de chargement (ex: appel API).
-   **Pré-remplissage (Smart Fill)** :
    -   **OCR** : Les données sont extraites automatiquement depuis les documents téléchargés (carte d'identité et carte d'assurance).
    -   **Covercard DB** : Les informations d'assurance sont récupérées et vérifiées via une API tierce.

---

## 2. Détail des Écrans & Données

### Écran 1 : Landing Page
-   **UI** : Logo de l'établissement, sélecteur de langue, message de bienvenue.
-   **Action** : Bouton "Démarrer la préadmission".
-   **Sortie** : Redirection vers l'écran de vérification de sécurité.

### Écran 2 : Vérification de Sécurité
-   **UI** : Un champ de saisie pour la date de naissance.
-   **Logique Métier** :
    -   Appel à l'API `POST /verify-dob`.
    -   **Si succès** : Un token temporaire (`tempToken`) est stocké et l'utilisateur est redirigé vers l'écran 3.
    -   **Si échec** : Un message d'erreur "Aucun dossier trouvé" est affiché.

### Écran 3 : Authentification (2FA)
-   **UI** : Champ pour le code SMS (6 chiffres), lien "Renvoyer le SMS".
-   **Logique Métier** :
    -   Appel à l'API `POST /verify-otp` en transmettant le `tempToken`.
    -   **Si succès** : Le profil patient (s'il existe) est récupéré et l'utilisateur passe à l'étape suivante.

### Écran 4 : Wizard Étape 1 (Qualification)

#### Modèle de Données & Règles

| Champ | Nom Système (JSON) | Type | Validation | Règle Spécifique |
| :--- | :--- | :--- | :--- | :--- |
| **Raison de la venue** | `step1_identification.reasonOfStay` | Radio | `Maladie` \| `Accident` | Obligatoire. Conditionne l'affichage des champs liés à un accident à l'étape 2. |
| **J'ai un employeur** | `step1_identification.hasEmployer` | Checkbox | Booléen | Affiché uniquement si `Raison de la venue` = `Accident`. |
| **Type d'assurance** | `step1_identification.insuranceType` | Radio | `Suisse` \| `Int.` \| `Auto` | Obligatoire. Définit le profil de validation pour les champs d'assurance. |
| **Carte d'identité** | `step1_identification.files.idCard` | Upload | Max 5MB (PDF/IMG) | Obligatoire. Déclenche l'OCR pour l'extraction des données d'identité. |
| **Carte d'assurance** | `step1_identification.files.insuranceCard` | Upload | Max 5MB (PDF/IMG) | Obligatoire (sauf pour les profils `Int.` / `Auto`). Déclenche l'OCR Assurance. |
| **Consentement nLPD** | `step1_identification.consents.nLPD` | Checkbox | `true` requis | Obligatoire pour poursuivre. |
| **Consentement Marketing** | `step1_identification.consents.marketing` | Checkbox | Booléen | Optionnel. |

### Écran 5 : Wizard Étape 2 (Administratif)

#### A. Identité
*Source prioritaire : OCR Carte d'Identité*

| Champ | Nom Système (JSON) | Obligatoire | Validation |
| :--- | :--- | :--- | :--- |
| **Prénom** | `step2_admin.personalInfo.firstName` | Oui | - |
| **Nom** | `step2_admin.personalInfo.lastName` | Oui | - |
| **Date de naissance** | `step2_admin.personalInfo.birthDate` | Oui | La date ne peut pas être dans le futur. |
| **Genre** | `step2_admin.personalInfo.gender` | Oui | Sélecteur (Dropdown). |
| **Nationalité** | `step2_admin.personalInfo.nationality` | Oui | Sélecteur (Dropdown, norme ISO). |

#### B. Coordonnées
*Source prioritaire : Covercard DB*

| Champ | Nom Système (JSON) | Obligatoire | Validation |
| :--- | :--- | :--- | :--- |
| **Rue** | `step2_admin.contact.address.street` | Oui | - |
| **NPA (Code Postal)** | `step2_admin.contact.address.npa` | Oui | Doit être un entier. |
| **Ville** | `step2_admin.contact.address.city` | Oui | - |
| **Pays** | `step2_admin.contact.address.country` | Oui | Sélecteur (Dropdown, liste Gist). |
| **Mobile** | `step2_admin.contact.mobile` | Oui | Format international (ex: `+41...`), chiffres uniquement. |
| **Email** | `step2_admin.contact.email` | Oui | Format email valide (`xx@xx.xx`). |

#### C. Employeur
*Condition d'affichage : La case "J'ai un employeur" est cochée à l'étape 1.*

| Champ | Nom Système (JSON) | Obligatoire | Note |
| :--- | :--- | :--- | :--- |
| **Profession** | `step2_admin.work.profession` | Oui | - |
| **Nom Employeur** | `step2_admin.work.employerName` | Oui | - |
| **Adresse Employeur**| `step2_admin.work.employerAddress` | Oui | - |

#### D. Médecins

| Champ | Nom Système (JSON) | Obligatoire | Comportement |
| :--- | :--- | :--- | :--- |
| **Médecin Prescripteur** | `step2_admin.medicalReferral.referrer` | Non | Recherche via API + saisie libre si non trouvé. |
| **Médecin Traitant (GP)** | `step2_admin.medicalReferral.gp` | Non | Recherche via API + saisie libre si non trouvé. |

#### E. Données Accident
*Condition d'affichage : `Raison de la venue` = `Accident`*

| Champ | Nom Système (JSON) | Obligatoire | Validation |
| :--- | :--- | :--- | :--- |
| **Date de l'accident**| `step2_admin.insurances.accident.date` | Oui | La date ne peut pas être dans le futur. |
| **Assurance Accident**| `step2_admin.insurances.accident.name` | Non | Recherche via API + saisie libre. |
| **Numéro de sinistre**| `step2_admin.insurances.accident.number` | Non | - |

#### F. Assurance & Couverture Sociale
*Règles dynamiques basées sur le profil choisi à l'étape 1. (M = Obligatoire, O = Optionnel)*

| Champ | Nom Système (JSON) | Source | Profil Suisse | Profil Int. | Profil Auto | Profil Accident |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| **Numéro AVS** | `step2_admin.personalInfo.avsNumber` | Covercard | M | O | O | O |
| **Assurance Base (Nom)** | `step2_admin.insurances.basic.name` | Covercard | M | M | O | M |
| **N° Carte Ass. Base** | `step2_admin.insurances.basic.cardNumber` | OCR | M | - | O | M |
| **N° Police Ass.** | `step2_admin.insurances.basic.policynumber` | OCR | - | M | - | - |
| **Ass. Complémentaire** | `step2_admin.insurances.complementary.name` | Covercard | O | O | O | O |

### Écran 6 : Confirmation
-   **UI** : Icône de succès, message de confirmation.
-   **Actions Système** :
    1.  Assemblage de l'objet JSON final avec toutes les données.
    2.  Envoi des données au Backend.
    3.  Envoi d'un email de confirmation au patient.
-   **Navigation** : Bouton "Retour à l'accueil".

---

## 3. Intégrations Techniques (API Théorique)

*Note : Voir le Chapitre 5 pour l'implémentation spécifique Power Platform.*

### 3.1. Endpoints Requis (Mock)
-   `POST /auth/verify-dob` : Vérifie la date de naissance.
-   `POST /auth/verify-otp` : Valide le code SMS.
-   `POST /upload/analyze` : Envoie un document et retourne les données extraites par OCR (JSON).
-   `GET /doctors/search?q=...` : Recherche les médecins.
-   `GET /insurances/search?q=...` : Recherche les assurances.
-   `POST /admission/submit` : Soumet le formulaire de préadmission final.

### 3.2. Gestion des Erreurs
-   **Erreurs API (500/400)** : Un message global ("Toast") doit être affiché en haut du formulaire.
-   **Erreurs de Validation (Côté Client)** : Un message d'erreur de couleur rouge doit apparaître sous le champ concerné (ex: "Ce champ est requis").

---

## 4. Structure JSON Submit

Format attendu lors de la soumission finale (Étape 2 -> Backend).

```json
{
  "step1_identification": {
    "reasonOfStay": "maladie",
    "hasEmployer": false,
    "insuranceType": "Suisse",
    "files": {
      "idCard": {
        "filename": "passeport.jpg",
        "mimeType": "image/jpeg",
        "base64Content": "XXX"
      },
      "insuranceCard": {
        "filename": "carte_assurance.pdf",
        "mimeType": "application/pdf",
        "base64Content": "XXX"
      }
    },
    "consents": {
      "nLPD": true,
      "marketing": false
    }
  },
  "step2_admin": {
    "personalInfo": {
      "firstName": "Anthony",
      "lastName": "Correia",
      "birthDate": "1990-12-25",
      "gender": "male",
      "nationality": "CH",
      "avsNumber": "7561234567890"
    },
    "contact": {
      "address": {
        "street": "Rue du Lac 10",
        "npa": 1000,
        "city": "Lausanne",
        "country": "Switzerland"
      },
      "mobile": "+41791234567",
      "email": "jean.dupont@email.com"
    },
    "work": {
      "profession": "",
      "employerName": "",
      "employerAddress": ""
    },
    "medicalReferral": {
      "referrer": "",
      "gp": "",
      "attending": ""
    },
    "insurances": {
      "accident": {
        "date": "",
        "name": "",
        "number": ""
      },
      "basic": {
        "name": "",
        "cardNumber": "80756015620056258638",
        "policynumber": ""
      },
      "complementary": {
        "name": "",
        "cardNumber": "",
        "policynumber": ""
      }
    }
  }
}
```

---

## 5. Spécifications Techniques des Interfaces (Power Platform)

Cette section détaille l'implémentation réelle des appels API via **Power Automate Cloud Flows**.
Contrairement aux appels REST classiques, l'environnement Power Pages impose l'utilisation de `ajaxSafePost` pour garantir la sécurité et l'authentification contextuelle via le portail.

### 5.1. Pré-requis Technique : `ajaxSafePost`

Toutes les requêtes vers le Backend (Cloud Flows) doivent impérativement respecter le protocole suivant pour passer le contexte de sécurité de Microsoft Dataverse.

**Signature de la fonction :**
```typescript
window.shell.ajaxSafePost({
  type: 'POST',
  url: `/_api/cloudflow/v1.0/trigger/${TRIGGER_ID}`,
  data: {
    "eventData": JSON.stringify( PAYLOAD_OBJECT )
  }
})
```

**Règles structurelles :**
1.  **Environnement :** La méthode `window.shell.ajaxSafePost` n'est disponible que dans le contexte d'exécution du portail Power Pages. Un contrôle d'existence (`if (window.shell && window.shell.ajaxSafePost)`) est requis.
2.  **Payload Stringifié :** Le corps de la requête (`data`) doit contenir une clé unique `eventData` dont la valeur est l'objet métier sérialisé en chaîne de caractères (`JSON.stringify`).
3.  **Gestion des retours :** Les promesses `.done()` et `.fail()` de jQuery sont utilisées pour gérer la réponse.

### 5.2. API Authentification (OTP)

Ces flux gèrent la vérification du numéro de téléphone mobile pour initier la session.

#### A. Envoi du Code (Send OTP)
Déclenche l'envoi d'un SMS contenant le code à 6 chiffres.

-   **Trigger ID :** `82f65194-6894-f011-b4cc-002248dacc70`
-   **Payload (Input) :**
    ```json
    {
      "number": "+41791234567" // Format international requis
    }
    ```
-   **Réponse attendue :** HTTP 200 (Le contenu de la réponse n'est pas évalué, seul le statut compte).

#### B. Vérification du Code (Verify OTP)
Valide le code saisi par l'utilisateur.

-   **Trigger ID :** `7104a055-6a94-f011-b4cc-002248db6f9b`
-   **Backdoor (Dev/Test) :** Si le code saisi est `123456`, l'appel API est contourné et la validation est considérée comme `true` localement.
-   **Payload (Input) :**
    ```json
    {
      "number": "+41791234567",
      "code": "123456"
    }
    ```
-   **Réponse attendue (JSON) :**
    ```json
    {
      "json": "True" // ou "False"
    }
    ```
    *Note d'implémentation : Le parsing de la réponse doit être robuste (trims, toLowerCase) pour interpréter la chaîne "True" comme un booléen.*

### 5.3. API OCR & Analyse Documentaire

Ce flux est appelé immédiatement après l'upload d'un fichier (Carte d'identité ou Assurance) pour pré-remplir le formulaire.

*   **Trigger ID (OCR Identity) :** `[ID_FLOW_IDENTITY_A_DEFINIR]`
*   **Trigger ID (OCR Insurance) :** `[ID_FLOW_INSURANCE_A_DEFINIR]`

**Payload (Input) :**
Le champ `base64` doit être la chaîne brute (sans préfixe MIME `data:image...` voir chapitre 6).
```json
{
  "fileType": "id_card", // ou "insurance_card"
  "fileName": "scan.jpg",
  "base64": "/9j/4AAQSkZJRg..."
}
```

**Réponse attendue (Structure normalisée) :**
Le Cloud Flow doit retourner un JSON plat correspondant aux champs du formulaire React pour faciliter le mapping.

*Pour une Pièce d'identité :*
```json
{
  "nom_de_famille": "Dupont",
  "prenoms": "Jean",
  "date_de_naissance": "1980-01-01",
  "sexe": "M", // Format: M/F
  "nationality": "CH"
}
```

*Pour une Carte d'Assurance :*
```json
{
  "card_number": "807560...",
  "avs_number": "756...",
  "insurer_name": "Groupe Mutuel"
}
```

### 5.4. API Soumission Finale

Ce flux reçoit l'intégralité du JSON assemblé à la fin du Wizard pour créer l'enregistrement dans Dataverse.

-   **Trigger ID :** `[ID_FLOW_SUBMIT_A_DEFINIR]`
-   **Payload (Input) :** Correspond à la structure définie au **Chapitre 4 (Json submit)**.
    ```json
    {
      "step1_identification": { ... },
      "step2_admin": { ... }
    }
    ```
-   **Réponse attendue :**
    -   **Succès :** HTTP 200 + `{ "status": "success", "reference": "ADM-2025-001" }`
    -   **Erreur :** HTTP 400/500 avec message d'erreur pour l'utilisateur.

---

## 6. Spécifications de Compression des Documents (Client-Side)

Avant tout envoi vers les Cloud Flows (OCR ou Soumission finale), les fichiers subissent un pré-traitement pour optimiser la bande passante et respecter les limites de taille de Power Automate.

*   **Bibliothèque utilisée :** `browser-image-compression`
*   **Périmètre :** S'applique aux documents "Pièce d'identité" et "Carte d'assurance".

### 6.1 Règles de Traitement

Le traitement diffère selon le type MIME du fichier uploadé :

#### A. Fichiers Images (JPEG, PNG, WEBP, etc.)
Si le type MIME commence par `image/`, la compression est active avec les paramètres suivants :
*   **Taille cible max (`maxSizeMB`) :** 1 MB
*   **Redimensionnement (`maxWidthOrHeight`) :** 1920px (conserve le ratio)
*   **Qualité de compression (`quality`) :** 0.8 (80%)
*   **Thread :** Utilisation de `useWebWorker: true` pour ne pas bloquer l'interface.

**Comportement en cas d'erreur (Fail-safe) :**
Si la compression échoue (exception JS), le fichier original est utilisé tel quel (fallback).

#### B. Fichiers Non-Images (PDF, etc.)
*   **Compression :** Aucune.
*   Le fichier est converti directement en Base64.

### 6.2 Format de Sortie (Payload API)

Que le fichier soit compressé ou non, le format final envoyé aux APIs (propriété `base64`) suit la règle stricte suivante :

1.  Conversion du fichier (Blob/File) en **Data URL**.
2.  **Suppression de l'en-tête MIME.**
    *   *Entrée :* `data:image/jpeg;base64,/9j/4AAQSk...`
    *   *Sortie (envoyée à l'API) :* `/9j/4AAQSk...`

> **Note :** C'est cette chaîne brute (Raw Base64) qui doit être injectée dans le champ `base64` des requêtes JSON décrites dans les sections 3 et 4.
