# Audit Shadcn UI — Couverture réelle (factuelle)

**Date**: 2025-12-30  
**Scope**: vérification "screen-by-screen" de l'usage Shadcn dans `src/components/*.tsx` + inventaire de `src/components/ui/*`.

## Résumé exécutif

- **Composants Shadcn présents**: 47 fichiers dans [`src/components/ui/`](src/components/ui/)
- **Composants Shadcn importés dans les écrans**: `Select`, `Dialog`, `Input`, `Label`, `DateInput`
- **Écrans sans import Shadcn détecté**: [`LoadingScreen`](src/components/LoadingScreen.tsx), [`Success`](src/components/Success.tsx)
- **Composant Shadcn disponible mais non utilisé**: [`InputOTP`](src/components/ui/input-otp.tsx)
- **Taux d'adoption Shadcn**: ~15% des composants disponibles sont utilisés (7/47)

## Méthode (reproductible)

Commandes utilisées (résumé) :
```bash
# Inventaire des composants Shadcn présents
ls -1 src/components/ui | sort

# Détection des usages dans les écrans
grep -R --line-number "@/components/ui" src/components/*.tsx

# Vérification d'usage de InputOTP
grep -R --line-number "\\bInputOTP\\b" src
```

Notes méthodologiques :
- Cet audit est **statique** : il se base sur les imports/occurrences dans le code, pas sur un test E2E
- Les écrans audités sont dans [`src/components/*.tsx`](src/components/)
- Les composants partagés ([`CountryCombobox`](src/components/CountryCombobox.tsx), [`DoctorCombobox`](src/components/DoctorCombobox.tsx), etc.) sont analysés séparément

## Inventaire complet des composants Shadcn disponibles

**47 composants** sont présents dans [`src/components/ui/`](src/components/ui/):

| Composant | Fichier | Utilisé |
|-----------|---------|---------|
| Accordion | [`accordion.tsx`](src/components/ui/accordion.tsx) | ❌ |
| Alert Dialog | [`alert-dialog.tsx`](src/components/ui/alert-dialog.tsx) | ❌ |
| Alert | [`alert.tsx`](src/components/ui/alert.tsx) | ❌ |
| Aspect Ratio | [`aspect-ratio.tsx`](src/components/ui/aspect-ratio.tsx) | ❌ |
| Avatar | [`avatar.tsx`](src/components/ui/avatar.tsx) | ❌ |
| Badge | [`badge.tsx`](src/components/ui/badge.tsx) | ❌ |
| Breadcrumb | [`breadcrumb.tsx`](src/components/ui/breadcrumb.tsx) | ❌ |
| Button | [`button.tsx`](src/components/ui/button.tsx) | ❌ |
| Calendar | [`calendar.tsx`](src/components/ui/calendar.tsx) | ❌ |
| Card | [`card.tsx`](src/components/ui/card.tsx) | ❌ |
| Carousel | [`carousel.tsx`](src/components/ui/carousel.tsx) | ❌ |
| Chart | [`chart.tsx`](src/components/ui/chart.tsx) | ❌ |
| Checkbox | [`checkbox.tsx`](src/components/ui/checkbox.tsx) | ❌ |
| Collapsible | [`collapsible.tsx`](src/components/ui/collapsible.tsx) | ❌ |
| Command | [`command.tsx`](src/components/ui/command.tsx) | ❌ |
| Context Menu | [`context-menu.tsx`](src/components/ui/context-menu.tsx) | ❌ |
| Date Input | [`date-input.tsx`](src/components/ui/date-input.tsx) | ✅ |
| Dialog | [`dialog.tsx`](src/components/ui/dialog.tsx) | ✅ |
| Drawer | [`drawer.tsx`](src/components/ui/drawer.tsx) | ❌ |
| Dropdown Menu | [`dropdown-menu.tsx`](src/components/ui/dropdown-menu.tsx) | ❌ |
| Form | [`form.tsx`](src/components/ui/form.tsx) | ❌ |
| Hover Card | [`hover-card.tsx`](src/components/ui/hover-card.tsx) | ❌ |
| Input OTP | [`input-otp.tsx`](src/components/ui/input-otp.tsx) | ❌ |
| Input | [`input.tsx`](src/components/ui/input.tsx) | ✅ |
| Label | [`label.tsx`](src/components/ui/label.tsx) | ✅ |
| Menubar | [`menubar.tsx`](src/components/ui/menubar.tsx) | ❌ |
| Navigation Menu | [`navigation-menu.tsx`](src/components/ui/navigation-menu.tsx) | ❌ |
| Pagination | [`pagination.tsx`](src/components/ui/pagination.tsx) | ❌ |
| Popover | [`popover.tsx`](src/components/ui/popover.tsx) | ❌ |
| Progress | [`progress.tsx`](src/components/ui/progress.tsx) | ❌ |
| Radio Group | [`radio-group.tsx`](src/components/ui/radio-group.tsx) | ❌ |
| Resizable | [`resizable.tsx`](src/components/ui/resizable.tsx) | ❌ |
| Scroll Area | [`scroll-area.tsx`](src/components/ui/scroll-area.tsx) | ❌ |
| Select | [`select.tsx`](src/components/ui/select.tsx) | ✅ |
| Separator | [`separator.tsx`](src/components/ui/separator.tsx) | ❌ |
| Sheet | [`sheet.tsx`](src/components/ui/sheet.tsx) | ❌ |
| Sidebar | [`sidebar.tsx`](src/components/ui/sidebar.tsx) | ❌ |
| Skeleton | [`skeleton.tsx`](src/components/ui/skeleton.tsx) | ❌ |
| Slider | [`slider.tsx`](src/components/ui/slider.tsx) | ❌ |
| Sonner | [`sonner.tsx`](src/components/ui/sonner.tsx) | ❌ |
| Switch | [`switch.tsx`](src/components/ui/switch.tsx) | ❌ |
| Table | [`table.tsx`](src/components/ui/table.tsx) | ❌ |
| Tabs | [`tabs.tsx`](src/components/ui/tabs.tsx) | ❌ |
| Textarea | [`textarea.tsx`](src/components/ui/textarea.tsx) | ❌ |
| Toggle Group | [`toggle-group.tsx`](src/components/ui/toggle-group.tsx) | ❌ |
| Toggle | [`toggle.tsx`](src/components/ui/toggle.tsx) | ❌ |
| Tooltip | [`tooltip.tsx`](src/components/ui/tooltip.tsx) | ❌ |

## Audit détaillé par écran

### 1. Landing (`src/components/Landing.tsx`)

**Composants Shadcn utilisés:**
- ✅ [`Select`](src/components/ui/select.tsx) (ligne 5) - Sélection de langue
- ✅ [`SelectContent`](src/components/ui/select.tsx)
- ✅ [`SelectItem`](src/components/ui/select.tsx)
- ✅ [`SelectTrigger`](src/components/ui/select.tsx)
- ✅ [`SelectValue`](src/components/ui/select.tsx)

**Composants natifs/custom:**
- ❌ `motion.button` (ligne 81) - Bouton CTA "Démarrer l'admission" avec gradient et animations Framer Motion
- ❌ `<div>` custom pour la mise en page (card, header, footer)
- ❌ Icônes Lucide (`Globe`, `ArrowRight`, `Sparkles`)

**Opportunités de migration:**
- Bouton CTA → [`Button`](src/components/ui/button.tsx) avec `asChild` pour conserver Framer Motion
- Container → [`Card`](src/components/ui/card.tsx) pour standardiser la présentation

**Priorité:** 🟡 Moyenne (UX déjà satisfaisante, migration pour cohérence)

---

### 2. Security (`src/components/Security.tsx`)

**Composants Shadcn utilisés:**
- ✅ [`DateInput`](src/components/ui/date-input.tsx) (ligne 9) - Saisie de date de naissance
- ✅ [`Label`](src/components/ui/label.tsx) (ligne 10)

**Composants natifs/custom:**
- ❌ `<button>` natif (lignes 114, 122) pour navigation "Retour" et "Continuer"
  - États: `disabled`, `loading` avec spinner
  - Classes Tailwind custom pour gradient et animations
- ❌ `<div>` custom pour affichage des erreurs API (lignes 105-109)
- ❌ Gestion d'erreur formulaire custom avec `react-hook-form`

**Opportunités de migration:**
- Boutons → [`Button`](src/components/ui/button.tsx) avec variants `disabled` et `loading`
- Erreurs → [`Alert`](src/components/ui/alert.tsx) pour messages d'erreur système
- Container → [`Card`](src/components/ui/card.tsx)

**Priorité:** 🟢 Haute (amélioration accessibilité et cohérence des boutons)

---

### 3. OTP (`src/components/OTP.tsx`)

**Composants Shadcn utilisés:**
- ✅ [`Input`](src/components/ui/input.tsx) (ligne 8) - Champ à 6 chiffres
- ✅ [`Label`](src/components/ui/label.tsx) (ligne 9)

**Composants natifs/custom:**
- ❌ `<Input>` utilisé comme champ texte simple (ligne 67) au lieu d'un composant OTP dédié
  - Validation manuelle à 6 chiffres
  - Nettoyage des caractères non numériques
- ❌ `<button>` natif pour "Renvoyer le code", "Retour", "Vérifier" (lignes 59, 74, 82)

**⚠️ Point critique:**
Le composant [`InputOTP`](src/components/ui/input-otp.tsx) est installé mais **non utilisé**. Ce composant Shadcn est spécifiquement conçu pour les codes OTP avec:
- Séparation visuelle des caractères
- Navigation clavier optimisée
- Accessibilité ARIA intégrée
- UX mobile améliorée

**Opportunités de migration:**
- Champ OTP → [`InputOTP`](src/components/ui/input-otp.tsx) (migration recommandée)
- Boutons → [`Button`](src/components/ui/button.tsx)

**Priorité:** 🔴 Très haute (composant dédié disponible non utilisé, amélioration UX/accessibilité significative)

---

### 4. Qualification (`src/components/Qualification.tsx`)

**Composants Shadcn utilisés:**
- ✅ [`Dialog`](src/components/ui/dialog.tsx) (lignes 8-13) - Modal d'aide pour types d'assurance
- ✅ `DialogContent`, `DialogDescription`, `DialogHeader`, `DialogTitle`, `DialogTrigger`

**Composants natifs/custom:**
- ❌ `motion.button` pour sélections multiples (lignes 203-253):
  - Raison de venue (Maladie/Accident)
  - Type d'assurance (Suisse/International/Auto)
  - J'ai un employeur (Oui/Non)
  - Animations Framer Motion avec checkmarks
- ❌ `input type="checkbox"` natif pour consentements (lignes 464, 498):
  - Consentement nLPD (obligatoire)
  - Consentement Marketing (optionnel)
- ❌ Composant `FileUpload` custom (lignes 541-635):
  - Drag & drop
  - Validation taille/format
  - Preview et suppression
  - Compression d'images (browser-image-compression)

**Opportunités de migration:**
- Sélections → [`RadioGroup`](src/components/ui/radio-group.tsx) pour raison de venue
- Sélections → [`ToggleGroup`](src/components/ui/toggle-group.tsx) pour type d'assurance
- Consentements → [`Checkbox`](src/components/ui/checkbox.tsx)
- Boutons navigation → [`Button`](src/components/ui/button.tsx)

**Note:** Le composant `FileUpload` doit rester custom car Shadcn n'a pas de composant d'upload de fichiers dédié.

**Priorité:** 🟢 Haute (nombreux composants natifs remplaçables, amélioration accessibilité checkboxes)

---

### 5. Admin (`src/components/Admin.tsx`)

**Composants Shadcn utilisés:**
- ✅ [`DateInput`](src/components/ui/date-input.tsx) (ligne 13) - Dates (naissance, accident)
- ✅ [`Input`](src/components/ui/input.tsx) (ligne 14) - Champs texte
- ✅ [`Label`](src/components/ui/label.tsx) (ligne 15) - Labels de formulaire

**Composants natifs/custom:**
- ❌ `<select>` natif pour le genre (ligne 267):
  ```tsx
  <select
    {...register('gender')}
    className="w-full h-12 px-4 rounded-md border"
  >
    <option value="">--</option>
    <option value="M">Monsieur</option>
    <option value="F">Madame</option>
    <option value="X">Autre</option>
  </select>
  ```
- ❌ [`CountryCombobox`](src/components/CountryCombobox.tsx) (lignes 289, 383) - Pays et nationalité
- ❌ [`DoctorCombobox`](src/components/DoctorCombobox.tsx) (lignes 486, 508) - Médecins
- ❌ `<button>` natif pour navigation (lignes 644, 652)

**Opportunités de migration:**
- Select genre → [`Select`](src/components/ui/select.tsx) Shadcn
- Comboboxes → [`Popover`](src/components/ui/popover.tsx) + [`Command`](src/components/ui/command.tsx) (pattern Shadcn officiel)
- Boutons → [`Button`](src/components/ui/button.tsx)
- Container → [`Card`](src/components/ui/card.tsx)

**Priorité:** 🔴 Très haute (select natif non accessible, comboboxes à standardiser)

---

### 6. LoadingScreen (`src/components/LoadingScreen.tsx`)

**Composants Shadcn utilisés:**
- ❌ Aucun

**Composants natifs/custom:**
- ❌ `<div>` custom pour carte (ligne 30)
- ❌ Icône `Loader2` avec animation CSS (ligne 33)
- ❌ Layout et espacement custom

**Opportunités de migration:**
- Container → [`Card`](src/components/ui/card.tsx)
- Loading → [`Skeleton`](src/components/ui/skeleton.tsx) pour un pattern plus moderne
- Alternative: garder custom car très simple

**Priorité:** 🟡 Basse (écran transitoire, UX actuelle acceptable)

---

### 7. Success (`src/components/Success.tsx`)

**Composants Shadcn utilisés:**
- ❌ Aucun

**Composants natifs/custom:**
- ❌ `<button>` natif pour "Nouvelle préadmission" (ligne à identifier)
- ❌ `<div>` custom pour mise en page
- ❌ Icône `CheckCircle` pour succès

**Opportunités de migration:**
- Bouton → [`Button`](src/components/ui/button.tsx)
- Container → [`Card`](src/components/ui/card.tsx)
- Message → [`Alert`](src/components/ui/alert.tsx) avec variant "success"

**Priorité:** 🟡 Basse (écran final simple)

---

## Composants partagés (critiques pour migration)

### [`CountryCombobox`](src/components/CountryCombobox.tsx)

**Implémentation actuelle:**
- Input texte + dropdown custom
- Filtrage côté client sur noms de pays
- Navigation clavier (ArrowUp/Down/Enter/Escape)
- Click outside pour fermer
- Gestion d'erreur avec `react-hook-form`

**Migration recommandée:**
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" role="combobox">
      {value || "Sélectionner..."}
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <Command>
      <CommandInput placeholder="Rechercher un pays..." />
      <CommandList>
        <CommandEmpty>Aucun pays trouvé.</CommandEmpty>
        <CommandGroup>
          {countries.map((country) => (
            <CommandItem key={country.code} value={country.code}>
              {country.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>
```

**Composants Shadcn requis:**
- [`Popover`](src/components/ui/popover.tsx)
- [`Command`](src/components/ui/command.tsx)
- [`Button`](src/components/ui/button.tsx)

**Avantages:**
- Accessibilité ARIA complète
- Navigation clavier optimisée
- Recherche avec filtrage intégré
- Focus management automatique

---

### [`DoctorCombobox`](src/components/DoctorCombobox.tsx)

**Implémentation actuelle:**
- Parsing CSV de [`list_med.csv`](src/assets/documents/list_med.csv) (5716 médecins)
- Ouverture dropdown à partir de 3 caractères
- Limitation à 50 résultats
- Navigation clavier complète
- Support saisie libre si médecin non trouvé

**Migration recommandée:**
Même pattern que `CountryCombobox` avec:
- Seuil d'activation à 3 caractères conservé
- Cap de 50 résultats maintenu
- Option "Saisie libre" via `CommandItem` spécial

**Priorité:** 🔴 Critique (composant complexe avec exigences métier)

---

### [`PhoneInput`](src/components/PhoneInput.tsx)

**Implémentation actuelle:**
- Dropdown code pays custom avec recherche
- Input formaté pour numéro
- Validation format international

**Migration recommandée:**
- Code pays → [`Popover`](src/components/ui/popover.tsx) + [`Command`](src/components/ui/command.tsx)
- Input → [`Input`](src/components/ui/input.tsx)

---

## Tableau synthèse des usages

| Écran | Composants Shadcn utilisés | Composants à migrer | Priorité |
|-------|---------------------------|---------------------|----------|
| [`Landing`](src/components/Landing.tsx) | `Select` | `Button` (CTA), `Card` | 🟡 Moyenne |
| [`Security`](src/components/Security.tsx) | `DateInput`, `Label` | `Button` (×2), `Alert`, `Card` | 🟢 Haute |
| [`OTP`](src/components/OTP.tsx) | `Input`, `Label` | **`InputOTP`**, `Button` (×3) | 🔴 Très haute |
| [`Qualification`](src/components/Qualification.tsx) | `Dialog` | `RadioGroup`, `ToggleGroup`, `Checkbox` (×2), `Button` (×2) | 🟢 Haute |
| [`Admin`](src/components/Admin.tsx) | `DateInput`, `Input`, `Label` | **`Select` (genre)**, Comboboxes, `Button` (×2), `Card` | 🔴 Très haute |
| [`LoadingScreen`](src/components/LoadingScreen.tsx) | Aucun | `Card`, `Skeleton` | 🟡 Basse |
| [`Success`](src/components/Success.tsx) | Aucun | `Button`, `Card`, `Alert` | 🟡 Basse |

---

## Backlog de migration priorisé

### Phase 1 : Corrections critiques (Sprint 1)

**1.1 OTP → InputOTP**
- Fichier: [`src/components/OTP.tsx`](src/components/OTP.tsx)
- Remplacer `<Input>` par [`InputOTP`](src/components/ui/input-otp.tsx)
- Bénéfice: UX mobile améliorée, accessibilité, composant dédié disponible

**1.2 Admin → Select pour genre**
- Fichier: [`src/components/Admin.tsx`](src/components/Admin.tsx) ligne 267
- Remplacer `<select>` natif par [`Select`](src/components/ui/select.tsx)
- Bénéfice: Accessibilité, cohérence visuelle

**1.3 Normaliser tous les boutons**
- Fichiers: tous les écrans
- Remplacer `<button>` natifs par [`Button`](src/components/ui/button.tsx)
- Conserver Framer Motion via `asChild` si nécessaire
- Bénéfice: Cohérence, accessibilité, variants standardisés

### Phase 2 : Formulaires et interactions (Sprint 2)

**2.1 Qualification → RadioGroup et Checkbox**
- Fichier: [`src/components/Qualification.tsx`](src/components/Qualification.tsx)
- Raison de venue → [`RadioGroup`](src/components/ui/radio-group.tsx)
- Type d'assurance → [`ToggleGroup`](src/components/ui/toggle-group.tsx)
- Consentements → [`Checkbox`](src/components/ui/checkbox.tsx) (×2)
- Bénéfice: Accessibilité ARIA, navigation clavier

**2.2 Comboboxes → Pattern Shadcn**
- Fichiers: [`CountryCombobox`](src/components/CountryCombobox.tsx), [`DoctorCombobox`](src/components/DoctorCombobox.tsx)
- Migrer vers [`Popover`](src/components/ui/popover.tsx) + [`Command`](src/components/ui/command.tsx)
- Conserver logique métier (seuils, limites)
- Bénéfice: Accessibilité, maintenance simplifiée

### Phase 3 : Polish et cohérence (Sprint 3)

**3.1 Standardiser containers**
- Remplacer `<div>` custom par [`Card`](src/components/ui/card.tsx)
- Utiliser [`Separator`](src/components/ui/separator.tsx) où approprié

**3.2 Améliorer feedbacks**
- Erreurs API → [`Alert`](src/components/ui/alert.tsx)
- Loading states → [`Skeleton`](src/components/ui/skeleton.tsx)
- Success → [`Alert`](src/components/ui/alert.tsx) variant="success"

**3.3 Formulaires React Hook Form**
- Migrer vers [`Form`](src/components/ui/form.tsx) Shadcn (optionnel)
- Utiliser `FormField`, `FormControl`, `FormMessage`
- Bénéfice: Standardisation des erreurs

---

## Critères de réussite (Definition of Done)

### Technique
- ✅ Aucune erreur TypeScript
- ✅ Aucun warning de compilation
- ✅ Tous les tests passent (si existants)
- ✅ Bundle size stable ou réduit

### Fonctionnel
- ✅ Parcours complet réalisable: Landing → Security → OTP → Qualification → Admin → Success
- ✅ Toutes les validations fonctionnent
- ✅ Upload de fichiers fonctionne
- ✅ API calls fonctionnent (ou mock en dev)

### Accessibilité (WCAG AA)
- ✅ Navigation clavier: `Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Erreurs formulaire annoncées par lecteur d'écran
- ✅ Labels associés aux inputs (`htmlFor` / `id`)
- ✅ ARIA: `role`, `aria-label`, `aria-describedby`, `aria-invalid`
- ✅ Contraste minimum 4.5:1 (texte normal), 3:1 (texte large)

### UX
- ✅ Animations Framer Motion conservées
- ✅ Responsive mobile/tablet/desktop
- ✅ Pas de régression visuelle
- ✅ Loading states clairs
- ✅ Messages d'erreur explicites

---

## Métriques d'adoption Shadcn

### État actuel
- Composants Shadcn disponibles: **47**
- Composants Shadcn utilisés: **7** (15%)
  - `Select`, `Dialog`, `Input`, `Label`, `DateInput`, `DialogContent`, `SelectItem`

### Objectif post-migration Phase 1
- Composants utilisés: **~15** (32%)
  - Ajout: `Button`, `InputOTP`, `Checkbox`, `RadioGroup`, `Alert`

### Objectif post-migration complète
- Composants utilisés: **~22** (47%)
  - Ajout: `Card`, `Popover`, `Command`, `Form`, `ToggleGroup`, `Separator`, `Skeleton`

---

## Risques et dépendances

### Risques
1. **Framer Motion incompatibilité**: Certains composants Shadcn peuvent nécessiter `asChild` pour intégrer animations
2. **Régressions visuelles**: Classes Tailwind custom à préserver
3. **Bundle size**: Ajout de composants peut augmenter la taille du bundle
4. **Breaking changes**: Migration peut nécessiter refactoring des tests

### Dépendances
- `react-hook-form` v7.54.2 (compatible)
- `framer-motion` v12.6.2 (compatible via `asChild`)
- `lucide-react` v0.484.0 (compatible)
- `@radix-ui/*` (inclus avec Shadcn)

---

## Checklist de validation manuelle

### Navigation clavier
- [ ] Landing: Select langue avec flèches haut/bas
- [ ] Security: Tab entre date et boutons
- [ ] OTP: Focus automatique sur input, Enter pour submit
- [ ] Qualification: Tab entre sélections, Space pour toggle checkboxes
- [ ] Admin: Tab entre tous les champs, navigation dans comboboxes
- [ ] Dialog: Escape pour fermer, focus trap actif

### Lecteur d'écran
- [ ] Labels annoncés pour tous les inputs
- [ ] Erreurs annoncées avec `aria-describedby`
- [ ] États disabled/loading annoncés
- [ ] Sélection actuelle annoncée dans RadioGroup/Select

### Mobile
- [ ] Touch targets minimum 44×44px
- [ ] Clavier virtuel adapté (numeric pour OTP, date picker pour dates)
- [ ] Scroll et overflow gérés
- [ ] Drag & drop tactile fonctionnel

### Responsive
- [ ] Breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px)
- [ ] Layout adapté à chaque taille
- [ ] Pas de débordement horizontal

---

## Conclusion

### Ce qu'on peut affirmer ✅
- Les composants Shadcn **sont installés** (47 fichiers)
- **15% des composants** sont actuellement utilisés (7/47)
- Plusieurs écrans utilisent déjà Shadcn de manière partielle
- La base est en place pour migration complète

### Ce qu'on ne peut PAS affirmer ❌
- "Migration Shadcn complète" : **faux**, nombreux composants natifs subsistent
- "WCAG AA conforme" : **non vérifié**, nécessite audit dédié
- "Accessibilité complète" : **non prouvé**, tests manuels requis

### Actions prioritaires 🎯
1. **OTP → InputOTP** (composant disponible non utilisé)
2. **Admin genre → Select** (select natif non accessible)
3. **Normaliser boutons** (cohérence et accessibilité)
4. **Comboboxes → Shadcn pattern** (maintenance et accessibilité)

---

**Rapport généré le:** 2025-12-30  
**Dernière mise à jour:** Analyse complète de tous les écrans  
**Prochaine étape:** Validation avec l'équipe et priorisation des phases
