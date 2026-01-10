# Suppression de l'état hybride (Wizard + RHF) — Plan d'action (petits commits)

Date: 2026-01-09  
Workspace: `d:\dev_powerplatform\Pread\pradmission-hpital-development`

## Contexte
Le projet a accumulé un **état hybride** (plusieurs sources de vérité concurrentes) :

- `useWizard.ts` maintient `formData` + persistance `sessionStorage` (clé `wizard-form-data`)
- Un **RHF global** ajouté dans `App.tsx` (`FormProvider` + `useForm`) + autosave vers la **même clé** `wizard-form-data`
- `Qualification.tsx` et `Admin.tsx` utilisent encore des `useForm()` **locaux** (RHF local) tout en lisant/écrivant aussi dans RHF global

Symptômes typiques :
- données OCR qui semblent bien évoluer (logs OK)
- mais l'UI reste coincée sur des valeurs anciennes, ou le `sessionStorage` “revert”

Objectif :
- Revenir à **1 seule source de vérité** pour les étapes `Qualification` + `Admin` : **RHF global**
- `useWizard` ne sert plus qu'à la navigation (step)
- `sessionStorage` n'est écrit **que par RHF** (autosave)

> ⚠️ Contrainte : `identityCard` / `insuranceCard` (`File`) ne sont pas sérialisables. On ne les persiste pas.

---

## Etat actuel (baseline)

### Writers (écriture) de `sessionStorage['wizard-form-data']`
- [ ] `useWizard.ts` écrit dans `sessionStorage` à chaque update de `formData`
- [x] `App.tsx` (RHF global) écrit dans `sessionStorage` via autosave debounced

⚠️ Risque : écrasements / race conditions (reverts). (Atténué après Commit 1)

### Form states en parallèle
- [x] `Qualification.tsx` contient `useForm<QualificationFormData>` local
- [x] `Admin.tsx` contient `useForm<AdminFormData>` local
- [x] Les deux écrivent aussi dans RHF global (`useFormContext`) **et** dans le wizard via callbacks

---

## Plan d'action — Petits commits

Chaque commit doit :
- réduire le nombre de “writers”
- réduire le nombre de stores
- éviter les fallbacks (`rhf ?? props`) qui masquent les bugs

### Commit 1 — Stopper l'écrasement `sessionStorage` (1 writer)
**But** : un seul composant écrit `wizard-form-data` (RHF autosave).

Actions :
- [x] Désactiver la persistance `useWizard.ts -> sessionStorage` **OU** changer la clé legacy (ex: `wizard-form-data-legacy`).
- [x] Conserver `resetWizard()` qui efface `wizard-form-data`.

Critère de succès :
- `wizard-form-data` ne “revert” plus après OCR/suppression.

---

### Commit 2 — Qualification: supprimer les écritures vers Wizard (RHF-only)
**But** : `Qualification` écrit **uniquement** dans RHF global.

Actions :
- [x] Sur `reason/insurance/consents/files`: ne plus appeler `onReasonChange`, `onInsuranceChange`, `onHasEmployerChange`, etc.
- [x] Remplacer par `setValue` RHF global (`useFormContext`).

Critère de succès :
- Le wizard ne reçoit plus de updates “state” depuis `Qualification` (seulement `onNext/onBack`).

---

### Commit 3 — Qualification: OCR = un seul mécanisme (`reset` RHF global)
**But** : OCR ne met à jour qu'un seul store.

Actions :
- [x] Dans `handleFileChange` (type identity):
  - `reset({ ...getValues(), ...ocrPatch })` sur RHF global
  - idem sur suppression en appliquant un patch vide
- [x] Supprimer l'appel `onOCRDataExtracted` (wizard)

Critère de succès :
- Après suppression + nouvel upload, les champs OCR changent dans RHF global (et autosave suit).

---

### Commit 4 — Admin: supprimer les fallbacks sur `formData` pour les champs OCR
**But** : pour les champs OCR (`firstName/lastName/gender/nationality`), l'UI doit lire **uniquement** RHF global.

Actions :
- [x] Retirer `effectiveX = rhfWatch ?? formData.X` sur ces 4 champs
- [x] Supprimer tout `useEffect` qui recopie OCR depuis `formData` vers un form local

Critère de succès :
- Si RHF contient le patch OCR, l'UI le reflète immédiatement.

---

### Commit 5 — Admin: supprimer l'écriture vers Wizard pour les champs OCR
**But** : éviter les écritures concurrentes sur les champs OCR.

Actions :
- [x] Sur `handleChange` pour les champs OCR, ne plus appeler `onFormDataChange` (wizard)
- [x] Écrire uniquement dans RHF global (`setValue`)

Critère de succès :
- Plus aucune propagation OCR vers `useWizard.formData`.

---

### Commit 6 — Admin: supprimer `useForm()` local (Admin 100% RHF global)
**But** : supprimer la source de vérité parallèle.

Actions :
- [x] Retirer `useForm<AdminFormData>` local
- [x] Utiliser `useFormContext<FormData>` : `register`, `control`, `handleSubmit`, `formState.errors`, `trigger`
- [x] Passer les composants contrôlés (Radix `Select`, `CountryCombobox`, `DoctorCombobox`) via `Controller` (partiel)
- [x] Validation temporaire: `trigger([liste champs de l'étape])` avant `onNext`

Critère de succès :
- Aucun field Admin n'est piloté par props `formData` (reste des champs à migrer)

---

### Commit 7 — Qualification: supprimer `useForm()` local (Qualification 100% RHF global)
**But** : idem Admin.

Actions :
- [x] Retirer `useForm<QualificationFormData>` local + zodResolver local (temporaire)
- [x] Utiliser RHF global pour `watch/setValue/formState.errors/trigger`
- [x] Validation page-level via `trigger([...])` avant `onNext`

Critère de succès :
- Qualification ne contient plus de store de formulaire interne

---

### Commit 8 (optionnel) — Réintroduire Zod de manière cohérente
Deux options :
- (A) Validation “page-level” avec `trigger` + règles RHF
- (B) Resolver Zod global (plus complexe) composé avec les dépendances `reason/insurance/hasEmployer`

---

## Suivi d'implémentation

### Patch déjà présent dans la codebase (avant ce plan)
- [x] `App.tsx` : ajout d'un RHF global + autosave vers `sessionStorage` (debounced)
- [x] `Qualification.tsx` : OCR applique déjà un `reset` RHF global (en plus de l'ancien flux wizard)
- [x] `Admin.tsx` : lecture partielle des champs OCR via `watch` RHF global avec fallback

⚠️ Ces patchs sont une **phase intermédiaire** (état hybride) — ils ne suffisent pas à garantir la stabilité.

### A faire (prochaines étapes)
- [x] Commit 1 : stopper la persistance `useWizard -> sessionStorage` (1 writer)
- [x] Commit 2 : Qualification RHF-only (plus d'écritures vers Wizard)
- [x] Commit 3 : OCR RHF-only (plus d'update wizard via OCR)
- [x] Commit 4 : Admin OCR fields = RHF-only (pas de fallback)
- [x] Commit 5 : Admin OCR fields n'écrivent plus dans Wizard
- [x] Commit 6 : Admin 100% RHF global (supprimer `useForm` local)
- [x] Commit 7 : Qualification 100% RHF global (supprimer `useForm` local)

---

## Notes / risques
- **Host PowerPages / React singleton** : warning possible sur `react-dom` “singleton version”. Si deux React existent au runtime, la propagation de context peut être incohérente.
- `File` ne doit jamais passer dans `sessionStorage`.
- Tant que le wizard continue de persister `wizard-form-data`, il peut écraser RHF.
