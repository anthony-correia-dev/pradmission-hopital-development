# Pradmission Hopital — Application Flow

## Vue d'ensemble

Système de pré-admission en ligne pour l'Hôpital de La Tour.
Formulaire multi-étapes avec vérification de sécurité, upload de documents et traitement OCR.

**Stack:** React 19, TypeScript, React Hook Form, Zod, Framer Motion, Tailwind CSS, Radix UI
**Langues:** Français (FR) / Anglais (EN)

---

## Parcours utilisateur (7 étapes)

```
Landing → Security → OTP → [Loading] → Qualification → Admin → Success

                        InvalidLink ← (si lien invalide)
```

### Étape 1 : Landing

Écran d'accueil avec sélection de langue et bouton de démarrage.

### Étape 2 : Security

Authentification par **date de naissance** (vérifiée via API).

### Étape 3 : OTP

Vérification à deux facteurs par **code SMS à 6 chiffres**.

### Étape 4 : Loading

Écran de transition (7 secondes, avance automatiquement).

### Étape 5 : Qualification

Étape clé de branchement — voir [Options et logique conditionnelle](#options-et-logique-conditionnelle).

### Étape 6 : Admin

Formulaire détaillé avec sections conditionnelles — voir [Champs Admin par combinaison](#champs-admin-par-combinaison).

### Étape 7 : Success

Écran de confirmation avec lien vers l'itinéraire de l'hôpital.

---

## Options et logique conditionnelle

### Arbre de décision (Qualification)

```
Motif de visite ?
├── Maladie (illness)
│   ├── Type d'assurance ? (toujours affiché)
│   │   ├── Suisse (LAMal)
│   │   ├── Internationale
│   │   └── Autopayeur
│   └── Question employeur ? → MASQUÉE
│
└── Accident
    ├── Type d'assurance ? (toujours affiché)
    │   ├── Suisse (LAMal)
    │   ├── Internationale
    │   └── Autopayeur
    └── Question employeur ? → AFFICHÉE (Oui / Non)
```

### Upload de documents (Qualification)

| Motif | Assurance | Carte d'identité | Carte d'assurance |
|---|---|---|---|
| Maladie | Suisse | Requis | **Requis** |
| Maladie | Internationale | Requis | Optionnel |
| Maladie | Autopayeur | Requis | Optionnel |
| Accident | Suisse | Requis | **Requis** |
| Accident | Internationale | Requis | Optionnel |
| Accident | Autopayeur | Requis | Optionnel |

> Seule l'assurance **Suisse (LAMal)** exige l'upload de la carte d'assurance.

### Consentements (Qualification)

- Consentement NLPD / Politique de confidentialité → **Requis**
- Consentement marketing → Optionnel

---

## Impact du choix Employeur

La question employeur n'apparaît que si **Motif = Accident**.

| Employeur | Impact |
|---|---|
| **Oui** | 3 champs **requis** dans Admin : Profession, Nom de l'employeur, Adresse de l'employeur |
| **Non** | Ces 3 champs sont **masqués** — aucun impact ailleurs |

---

## Champs Admin par combinaison

### Sections toujours affichées

| Section | Champs | Obligatoire |
|---|---|---|
| Identité | Prénom, Nom, Date de naissance, Genre, Nationalité | Oui |
| Coordonnées | Rue, NPA, Ville, Pays, Email | Oui |
| Médecins | Médecin envoyeur, Médecin de famille | Non (optionnel) |

### Sections conditionnelles

| Section | Condition d'affichage | Champs |
|---|---|---|
| Employeur | Motif = Accident ET Employeur = Oui | Profession (requis), Nom employeur (requis), Adresse employeur (requis) |
| Données Accident | Motif = Accident | Date de l'accident (requis), Assurance accident, N° de sinistre |

### Champs assurance par combinaison

| Motif | Assurance | AVS (13 chiffres) | Assurance de base | N° de carte (20 chiffres) | N° de police |
|---|---|---|---|---|---|
| Maladie | Suisse | **Requis** | **Requis** | **Requis** | — |
| Maladie | Internationale | Optionnel | **Requis** | **Requis** | **Requis** |
| Maladie | Autopayeur | Optionnel | Optionnel | Optionnel | — |
| Accident | Suisse | **Requis** | **Requis** | **Requis** | — |
| Accident | Internationale | Optionnel | **Requis** | **Requis** | **Requis** |
| Accident | Autopayeur | Optionnel | **Requis** | **Requis** | — |

> Cas spécial : **Accident + Autopayeur** exige quand même l'assurance de base et le N° de carte, contrairement à **Maladie + Autopayeur** qui n'exige rien.

---

## Les 6 parcours possibles

| # | Motif | Assurance | Complexité | Particularités |
|---|---|---|---|---|
| 1 | Maladie | Suisse | Moyenne | Assurance complète, pas d'employeur/accident |
| 2 | Maladie | Internationale | Moyenne | N° de police requis |
| 3 | Maladie | Autopayeur | **Légère** | Parcours le plus simple |
| 4 | Accident | Suisse | **Lourde** | Accident + employeur + assurance complète |
| 5 | Accident | Internationale | Lourde | Accident + employeur + assurance + N° de police |
| 6 | Accident | Autopayeur | Moyenne | Accident + employeur + assurance de base quand même |

---

## Règles de validation

| Champ | Règle |
|---|---|
| Email | Format valide (nom@domaine.com) |
| NPA | Chiffres uniquement |
| N° AVS | Exactement 13 chiffres |
| N° de carte | Exactement 20 chiffres |
| Dates | Format JJ.MM.YYYY valide |
| Date de naissance (Security) | Ne peut pas être dans le futur |
| Code OTP | Exactement 6 chiffres |

---

## Fonctionnalités techniques

- **Persistance** : auto-sauvegarde en `sessionStorage` toutes les 400ms
- **OCR** : la carte d'identité pré-remplit nom/genre/nationalité ; la carte d'assurance pré-remplit adresse/AVS/assurance
- **Scroll vers erreurs** : défilement automatique vers le premier champ invalide
- **Mode mock** : contrôlé par `VITE_MOCK_ENABLED` pour le développement

---

## Points d'intégration API

| Endpoint | Étape | Description |
|---|---|---|
| `validatePreadmissionLink` | App init | Valide le lien URL |
| `setStep` | Chaque étape | Suit la progression |
| `verifyBirthDate` | Security | Authentifie par date de naissance |
| `getPhoneLastDigits` | OTP | Affiche le téléphone masqué |
| `sendOtp` | OTP | Envoie le SMS |
| `verifyOTP` | OTP | Valide le code |
| `extractDocumentData` | Qualification | OCR des documents |
| `submitPreadmission` | Admin | Soumission finale |
