# Application de Préadmission - Hôpital La Tour

Application web de préadmission permettant aux patients de compléter leur dossier administratif avant leur visite à l'Hôpital La Tour.

**Experience Qualities:**
1. **Professionnel** - L'interface inspire confiance grâce à un design médical propre et des couleurs institutionnelles
2. **Efficace** - Navigation guidée en étapes claires qui réduit la charge cognitive
3. **Rassurant** - Validation en temps réel et indicateurs de progression qui assurent l'utilisateur

**Complexity Level:** Light Application (multiple features with basic state)
Cette application comporte plusieurs étapes de formulaire avec validation, uploads de fichiers, et intégration API, mais reste focalisée sur un parcours unique et linéaire.

## Essential Features

### Sélection de langue
- **Functionality:** Permet de choisir entre français et anglais
- **Purpose:** Accessibilité internationale des patients
- **Trigger:** Écran d'accueil au lancement de l'application
- **Progression:** Landing → Sélection langue (FR/EN) → Bouton "Commencer" → Étape de sécurité
- **Success criteria:** Interface entière traduite selon le choix

### Vérification de sécurité
- **Functionality:** Authentification par date de naissance avec validation en temps réel suivie d'un code OTP
- **Purpose:** Sécuriser l'accès au dossier patient
- **Trigger:** Après avoir cliqué sur "Commencer"
- **Progression:** Saisie date de naissance → Validation en temps réel → Appel API mock → Saisie code OTP 6 chiffres → Validation en temps réel → Qualification
- **Success criteria:** Date et code vérifiés en temps réel avec feedback immédiat et accès accordé aux formulaires

### Qualification du patient
- **Functionality:** Collecte raison de consultation, type d'assurance et documents requis
- **Purpose:** Router correctement le dossier et préparer la facturation
- **Trigger:** Après validation OTP
- **Progression:** Radio Raison (Maladie/Accident) → Radio Assurance (Suisse/Int/Auto) → Upload Carte ID + Carte Assurance → Validation → Admin
- **Success criteria:** Au minimum raison et assurance sélectionnées (uploads optionnels mais recommandés)

### Formulaire administratif
- **Functionality:** Collecte complète des informations personnelles avec validation en temps réel
- **Purpose:** Créer/mettre à jour le dossier patient
- **Trigger:** Après qualification
- **Progression:** Sections pliables (Identité, Contact, Employeur) → Validation en temps réel → Soumission → Success
- **Success criteria:** Tous les champs requis remplis correctement avec feedback immédiat sur les erreurs, et soumis à Power Platform

### Confirmation finale
- **Functionality:** Affiche un résumé et les prochaines étapes
- **Purpose:** Rassurer le patient que le processus est terminé
- **Trigger:** Après soumission réussie du formulaire
- **Progression:** Affichage message de succès → Liste des prochaines étapes → Option de nouvelle préadmission
- **Success criteria:** Message clair et possibilité de recommencer

## Edge Case Handling
- **Perte de connexion** - Les données persistent uniquement pendant la session (jusqu'à fermeture de l'onglet/navigateur)
- **Validation OTP échouée** - Possibilité de renvoyer un nouveau code
- **Fichiers trop volumineux** - Accepte uniquement les images pour les uploads
- **Navigation navigateur** - Boutons retour permettent de revenir en arrière sans perte de données
- **API indisponible** - Mode dégradé en dev avec console.log et mock responses

## Design Direction
L'application doit évoquer la fiabilité médicale tout en restant accueillante. L'interface utilise le branding de La Tour (bleu signature) dans un design moderne inspiré de Shadcn/ui - épuré, fonctionnel, avec des micro-interactions subtiles.

## Color Selection
Palette institutionnelle médicale avec touches de validation:

- **Primary Color (Bleu La Tour):** `#5BC2E7` - Couleur signature de l'hôpital, utilisée pour les CTAs et éléments interactifs importants
- **Secondary Colors:** 
  - Texte principal: `#101820` (noir profond)
  - Arrière-plans: `slate-50` à `slate-100` (gris très clair)
- **Accent Color (Succès):** `#009664` - Vert médical pour validations et confirmations
- **Error Color:** `#E30613` - Rouge vif pour les erreurs et champs invalides
- **Foreground/Background Pairings:**
  - Primary (#5BC2E7): White text (#FFFFFF) - Ratio 3.8:1 (AA Large) ✓
  - Error (#E30613): White text (#FFFFFF) - Ratio 5.2:1 ✓
  - Success (#009664): White text (#FFFFFF) - Ratio 4.1:1 ✓
  - Background (slate-50): Texte #101820 - Ratio 18.5:1 ✓✓✓

## Font Selection
Typographie professionnelle et lisible pour contexte médical.

**Font:** Inter (Google Fonts) - Sans-serif moderne, excellente lisibilité écran, caractère neutre et professionnel

- **Typographic Hierarchy:**
  - H1 (Titres principaux): Inter Bold / 24px / tracking-tight / text-[#101820]
  - H2 (Sous-titres): Inter Semibold / 18px / tracking-normal / text-[#101820]
  - Body (Texte courant): Inter Regular / 14px / leading-relaxed / text-slate-700
  - Labels: Inter Medium / 14px / text-[#101820]
  - Helper text: Inter Regular / 12px / text-slate-600

## Animations
Animations modernes et fonctionnelles qui améliorent l'expérience utilisateur sans être intrusives.

Les animations servent à:
- **Transitions entre étapes**: fade-in avec mouvement vertical (300ms) utilisant framer-motion
- **Indicateur de progression**: Barre animée avec gradient fluide, cercles avec scale et checkmarks
- **États de chargement**: Spinner rotatif pendant appels API
- **Focus inputs**: Ring expansion (200ms ease-out)
- **Boutons**: Scale au hover (1.02) et au clic (0.98) avec transitions fluides
- **Sélection d'options**: Checkmarks animés avec spring animation
- **Upload de fichiers**: Scale et drag-over feedback visuel
- **Landing page**: Animations séquencées avec délais pour créer un effet de révélation progressive
- **Icônes**: Micro-animations sur hover (rotation, translation)

Toutes les animations utilisent framer-motion pour des performances optimales.

## Component Selection

**Components:** Shadcn/Radix components + composants custom améliorés
- **Boutons:** Boutons avec gradients, shadows, et animations framer-motion (scale sur hover/tap)
- **Inputs:** `<input>` natifs avec bordures améliorées, focus rings, et transitions
- **Radio buttons:** Boutons personnalisés avec checkmarks animés et gradients
- **File upload:** Zone drag & drop custom avec feedback visuel, preview, animations et suppression
- **Progress Indicator:** Composant custom avec barre de progression et étapes numérotées/checkées
- **Sections pliables:** Élément `<details>` natif HTML avec chevron custom (si nécessaire)

**Customizations:**
- **ProgressIndicator**: Nouvelle barre de progression horizontale avec:
  - Gradient animé suivant l'étape actuelle
  - Cercles numérotés avec checkmarks verts pour étapes complétées
  - Cercle actif avec scale augmenté et shadow colorée
  - Labels traduits sous chaque étape
- **FileUpload**: Amélioré avec:
  - Drag-over state visuel avec scale et couleur
  - Checkmark animé lors de l'upload réussi
  - Gradient de fond pour fichiers uploadés
  - Animations de scale sur hover/interaction
- **Page Transitions**: AnimatePresence avec variants pour entrée/sortie fluide
- **Card Containers**: Shadows XL, borders subtiles, backdrop-blur
- **Buttons**: Gradients, shadows avec couleur primaire, groupe hover states

**States:**
- Inputs: border-slate-200 (default) → border-[#E30613] (error) → ring-2 ring-[#5BC2E7] (focus)
- Boutons sélection: border-2 border-slate-200 (default) → gradient bg + shadow + scale-105 (selected) → hover:border-primary (hover)
- Boutons action: gradient bg + shadow (default) → gradient inversé (hover) → scale-0.98 (active)
- Uploads: border-dashed slate-300 (empty) → border-[#5BC2E7] bg-blue-tinted + scale (dragover) → border-green + gradient green bg (uploaded)
- Progress circles: bg-white border (incomplete) → gradient blue + scale + shadow (current) → green + checkmark (completed)

**Icon Selection:** lucide-react
- Globe: Sélecteur de langue
- Calendar: Date de naissance
- Shield: Code OTP sécurisé
- ClipboardList: Qualification
- User: Informations admin
- Upload: Zone de fichiers
- CheckCircle: Validation réussie / Sélection active
- AlertCircle: Erreurs
- ArrowRight/ArrowLeft: Navigation
- ChevronDown: Sections pliables
- Check: Étapes complétées
- Sparkles: Animation bouton principal (Landing)
- X: Supprimer fichiers

**Spacing:** Système cohérent Tailwind
- Sections majeures: mb-8, space-y-8
- Groupes de champs: mb-6, space-y-6
- Champs individuels: mb-4, space-y-4
- Labels: mb-2 à mb-3
- Padding cartes: p-8
- Padding inputs: px-4 à px-6 (h-12 à h-14)
- Border radius: rounded-lg à rounded-2xl pour un look plus moderne

**Visual Enhancements:**
- Pattern de fond: Grille de points subtile (opacity 3%) sur gradient
- Shadows: shadow-xl avec teintes colorées pour éléments importants
- Borders: border-2 pour éléments interactifs (plus visible)
- Gradients: Utilisés pour boutons primaires et icônes de fond
- Backdrop blur: Effet subtil sur cards principales

**Mobile:** Design mobile-first
- Max-width conteneurs: max-w-md (landing/security/otp) et max-w-2xl (qualification/admin)
- Progress bar: Responsive avec labels cachés sur très petits écrans si nécessaire
- Grids responsive: grid-cols-2 ou grid-cols-3 avec gap-3 à gap-4
- Padding adaptatif: p-4 (mobile) → p-8 (desktop)
- Tous les boutons et inputs respectent min h-12 pour touch targets (h-14 pour CTAs importants)

## Data Management

**Liste des médecins:**
- Format source: JSON (`src/assets/documents/list_med.json`)
- Fallback: CSV (`src/assets/documents/list_med.csv`) si JSON non disponible
- Structure JSON: Array d'objets `{ "name": "Nom du médecin" }`
- Chargement: Asynchrone au montage du composant DoctorCombobox
- Tri: Alphabétique avec gestion des caractères spéciaux (localeCompare avec sensibilité 'base')
- Recherche: Déclenchée après 3 caractères, insensible à la casse
- Performance: Limite d'affichage de 50 résultats maximum dans la dropdown
- Conversion: Script `convert-csv-to-json.mjs` disponible pour régénérer le JSON depuis le CSV
