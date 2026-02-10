# RESTRUCTURE.md — Preadmission Hospitaliere (Hopital de La Tour)

> **Purpose**: This document captures ALL business logic from the deleted source code and provides guidelines for rebuilding the app with modern tooling. The rebuilt app must be **visually and functionally identical** to the original.

---

## Part A — Current App Logic Reference

### A1. Wizard Flow

**Steps** (in order):
```
landing → security → otp → qualification → loading (7s auto) → admin → success
```

**URL Parameter**: `?preadmissionId={guid}` — extracted from `window.location.search`, hash fallback, and manual regex extraction from full URL.

**Link Validation Flow**:
1. On mount, wait 2s for Power Pages initialization
2. Extract `preadmissionId` from URL (search params → hash params → regex fallback)
3. Call `validatePreadmissionLink(id)` → GET `/_api/serverlogics/getpread`
4. Three states: `validating` (show spinner) → `valid` (show wizard) / `invalid` (show InvalidLink)

**Loading Step**:
- Auto-advances after 7000ms via `setTimeout`
- When pressing **back**, the loading step is **skipped** (goes to step before loading)

**Form Data Persistence**:
- Key: `wizard-form-data` in `sessionStorage`
- RHF `FormProvider` wraps entire app — single source of truth
- Hydration: on mount, load from sessionStorage into RHF (excluding File objects)
- Autosave: `rhfMethods.watch()` subscription with 400ms debounce writes to sessionStorage
- File objects (`identityCard`, `insuranceCard`) are **never** persisted (set to `null` on save/load)

**Step Change Side Effects**:
- `window.scrollTo({ top: 0, behavior: 'smooth' })` on every step change
- `api.setStep(preadmissionId, currentStep)` called on every step change (except loading, and only when link is valid)
- Direction tracking: `1` = forward, `-1` = backward (for slide animations)

**ProgressIndicator**: Shown only for `qualification`, `admin`, `success` steps. Three visible steps:
- Qualification ("Identification")
- Admin ("Informations" / "Information")
- Success ("Termine" / "Complete")

**Browser Language Detection**: `navigator.language` — if starts with 'fr' → 'fr', else → 'en'.

---

### A2. API Endpoints

All API functions are in `useApi.ts`. Dev mode (localhost/127.0.0.1) uses mocks.

#### Server Logic Endpoints (via `safeAjax`)

| Function | Method | URL | Body | Response |
|----------|--------|-----|------|----------|
| `validatePreadmissionLink(id)` | GET | `/_api/serverlogics/getpread?preadmissionId={id}` | — | `{ success, data: '{"isValid": true/false}' }` |
| `verifyBirthDate(id, date)` | POST | `/_api/serverlogics/getbirth?preadmissionId={id}` | `{ birthdate: "DD/MM/YYYY" }` | `{ success, data: '{"isValid": true/false}' }` |
| `setStep(id, step)` | PUT | `/_api/serverlogics/setstep?preadmissionId={id}` | `{ Stage: stageCode }` | — |
| `getPhoneLastDigits(id)` | GET | `/_api/serverlogics/getphone?preadmissionId={id}` | — | `{ success, data: '{"lastDigits": "XXXX"}' }` |

**`safeAjax` implementation**:
1. Fetch CSRF token: `GET /_layout/tokenhtml` → parse HTML → extract `<input>` value
2. Token cached in-memory (module-level `let csrfToken`)
3. Headers: `{ __RequestVerificationToken, content-type: "application/json", x-requested-with: "XMLHttpRequest" }`
4. Response: `{ success: boolean, data: string }` — `data` is JSON-stringified, needs double parsing

#### Cloud Flow Endpoints (via `safeAjaxCloudFlow`)

| Function | Trigger ID Source | Payload | Response |
|----------|-------------------|---------|----------|
| `sendOtp(id)` | `VITE_OCR_SENDOTP_TRIGGER_ID` | `{ number: preadmissionId }` | `{ success: true }` |
| `verifyOTP(id, code)` | `VITE_OCR_VERIFYOTP_TRIGGER_ID` | `{ number: preadmissionId, code }` | `"True"/"False"` or `{ isValid }` |
| `extractDocumentData(file, type)` | `getCloudFlowConfig().identityDoc / insuranceDoc` | `{ doc: "identityid"/"insuranceid", base64 }` | OCR data (see A2.1) |
| `submitPreadmission(formData)` | `getCloudFlowConfig().submitflow` | `{ json: JSON.stringify(payload) }` | `{ status, message, confirmationNumber }` |

**`safeAjaxCloudFlow` implementation**:
```
POST /_api/cloudflow/v1.0/trigger/{triggerId}
Headers: { __RequestVerificationToken, content-type: "application/x-www-form-urlencoded; charset=UTF-8", x-requested-with: "XMLHttpRequest" }
Body: eventData={JSON.stringify(payload)}
```
Response may contain `{ json: "..." }` wrapper — double-parse if so.

**`getCloudFlowConfig`**: `GET /_api/serverlogics/getflows` — returns `{ identityDoc, insuranceDoc, submitflow }` trigger IDs. Cached in module-level variable. Falls back to env vars on localhost.

#### Stage Codes (for `setStep`)

```typescript
const WIZARD_STAGES: Record<string, number> = {
  landing:       100000001,
  security:      100000002,
  otp:           100000003,
  qualification: 100000004,
  admin:         100000005,
  success:       100000006
}
```

#### Dev Mode Mocks

| API | Mock Behavior |
|-----|---------------|
| `validatePreadmissionLink` | 800ms delay, valid if id exists and !== 'invalid' |
| `verifyBirthDate` | 800ms delay, valid if date === '1989-06-12' |
| `getPhoneLastDigits` | 300ms delay, returns '1234' |
| `sendOtp` | 500ms delay, returns true |
| `verifyOTP` | 800ms delay, valid if code === '123456' |
| `extractDocumentData` (id_card) | 1500ms, returns `{ lastName: 'Dupont', firstNames: 'Jean Pierre', firstName: 'Jean Pierre', gender: 'male', nationality: 'CH' }` |
| `extractDocumentData` (insurance) | 1500ms, returns `{ street: 'Rue du Lac 15', city: 'Geneve', zipCode: '1200', country: 'CH', avsNumber: '756.1234.5678.90', kvgCardNumber: '80756012345678901234', kvgInsuranceName: 'CSS Assurance', vvgCardNumber: '80756098765432109876' }` |
| `submitPreadmission` | 1500ms, returns `{ status: 'success', confirmationNumber: 'PREAD-MOCK-{timestamp}' }` |

#### A2.1 OCR Response Mapping

**Identity Card** (`mapCloudFlowResponse`):
```
Raw: { last_name, first_names, gender, nationality }
Mapped: { lastName: capitalizeName(last_name), firstNames: capitalizeFirstNames(first_names), firstName: firstNames, gender, nationality }
```

**Insurance Card** (`mapInsuranceCloudFlowResponse`):
```
Raw: { rue, ville, zip, country, avs, kvg_carte_no, kvg_insurance, vvg_carte_no }
Mapped: { street: rue, city: capitalizeName(ville), zipCode: zip, country, avsNumber: avs, kvgCardNumber: kvg_carte_no, kvgInsuranceName: capitalizeName(kvg_insurance), vvgCardNumber: vvg_carte_no }
```

---

### A3. FormData Interface

```typescript
interface FormData {
  // Core
  language: 'fr' | 'en'              // Default: browser language
  preadmissionId: string              // GUID from URL

  // Security step
  birthDate: string                   // ISO format YYYY-MM-DD

  // OTP step
  otpCode: string                     // 6 digits

  // Qualification step
  reason: 'illness' | 'accident' | '' // Default: 'illness'
  insurance: 'swiss' | 'international' | 'auto' | '' // Default: 'swiss'
  hasEmployer: boolean                // Default: false
  consentNLPD: boolean                // Default: false
  consentMarketing: boolean           // Default: false
  identityCard: File | null           // Not persisted
  insuranceCard: File | null          // Not persisted
  identityCardBase64: string          // Pre-computed during OCR
  identityCardMimeType: string
  insuranceCardBase64: string
  insuranceCardMimeType: string

  // Admin step — Identity
  firstName: string
  lastName: string
  birthDatePersonal: string           // Not used in current form (reserved)
  gender: string                      // 'male' | 'female' | 'other'
  nationality: string                 // Country name (converted from ISO code by OCR)
  avsNumber: string                   // 13 digits, formatted XXX.XXXX.XXXX.XX

  // Admin step — Contact
  street: string
  npa: string                         // Postal code (digits only)
  city: string
  country: string                     // Country name
  email: string

  // Admin step — Employer (conditional on hasEmployer)
  profession: string
  employerName: string
  employerAddress: string

  // Admin step — Doctors
  referringDoctor: string             // Optional, from CSV list
  generalPractitioner: string         // Optional, from CSV list

  // Admin step — Accident (conditional on reason === 'accident')
  accidentDate: string                // ISO format
  accidentInsurance: string           // Optional
  claimNumber: string                 // Optional

  // Admin step — Insurance
  basicInsurance: string              // Insurance company name
  cardNumber: string                  // 20 digits, formatted with spaces
  policyNumber: string                // For international insurance
  complementaryInsurance: string      // Optional
}
```

---

### A4. Validation Rules

All schemas are factory functions that accept translated error messages.

#### Security Step (`createSecuritySchema`)
```
birthDate: string
  .min(1, t.required)
  .refine(isValidDate, t.invalid)        // YYYY-MM-DD format, valid calendar date
  .refine(date <= now, t.futureDate)     // Must not be in the future
```

#### OTP Step (`createOTPSchema`)
```
otpCode: string
  .min(1, t.required)
  .regex(/^\d{6}$/, t.invalid)           // Exactly 6 digits
```

#### Qualification Step (`createQualificationSchema(insurance, reason, t)`)
```
reason: enum('illness', 'accident')       — Required
insurance: enum('swiss', 'international', 'auto') — Required
hasEmployer: boolean
consentNLPD: boolean                      — Must be true
consentMarketing: boolean
identityCard: File                        — Always required
insuranceCard: File | optional            — Required ONLY when insurance === 'swiss'
```

#### Admin Step (`createAdminSchema(reason, insurance, hasEmployer, t)`)

| Field | Always Required | Conditional |
|-------|----------------|-------------|
| firstName | Yes | |
| lastName | Yes | |
| gender | Yes | |
| nationality | Yes | |
| street | Yes | |
| npa | Yes, digits only (`/^\d+$/`) | |
| city | Yes | |
| country | Yes | |
| email | Yes, valid email | |
| profession | | Required if `hasEmployer === true` |
| employerName | | Required if `hasEmployer === true` |
| employerAddress | | Required if `hasEmployer === true` |
| referringDoctor | Optional | |
| generalPractitioner | Optional | |
| accidentDate | | Required if `reason === 'accident'`, must be valid date |
| accidentInsurance | Optional | |
| claimNumber | Optional | |
| avsNumber | | Required if `insurance === 'swiss'`, 13 digits (ignoring dots) |
| basicInsurance | | Required if `reason === 'accident'` OR `insurance === 'swiss'` OR `insurance === 'international'` |
| cardNumber | | Required if `reason === 'accident'` OR `insurance === 'swiss'`, 20 digits (ignoring spaces) |
| policyNumber | | Required if `insurance === 'international'` |
| complementaryInsurance | Optional | |

#### Master Schema (`createWizardSchema`)
Combines all fields in one Zod schema with `superRefine` for cross-field validation. Used by `FormProvider` with `zodResolver`.

---

### A5. Component Behavior

#### Landing
- Language select dropdown (fr/en) with Globe icon
- Hospital logo (`logo-hlt.png`)
- Welcome title/subtitle (translated)
- CTA button → next step
- Layout: centered card, rounded-2xl shadow

#### Security
- Date input with DD.MM.YYYY auto-formatting (`formatDateInput`)
- User types digits → auto-dots inserted → parsed to ISO → stored in RHF
- API call `verifyBirthDate(id, isoDate)` on submit
- Error states: invalid date, wrong birth date, future date
- Back/Continue buttons

#### OTP
- 6-digit input using `input-otp` library with custom `otp-slot` styling
- Auto-send OTP on first mount via `sessionStorage` key `otp_sent` (dedup)
- Phone last digits fetched on mount → displayed as "****{lastDigits}"
- 30-second resend cooldown with countdown timer
- Verify on submit → `verifyOTP(id, code)`
- Back/Continue buttons

#### Qualification
- **Reason choice**: illness/accident (choice buttons)
- **Employer toggle**: Yes/No (shown only when reason === 'accident' — with AnimatePresence slide)
- **Insurance choice**: LAMal (swiss) / Other (international) / Self-payer (auto) — with help dialog
- **Insurance help dialog**: Dialog component explaining each type with descriptions
- **File uploads**: Identity card (always required) + Insurance card (required when swiss)
  - Accepted formats: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF
  - Max size: 10 MB
  - OCR extraction on upload → auto-fills Admin fields
  - Files converted to base64 + mimeType stored in form
- **Consents**: nLPD (required, with privacy policy link) + Marketing (optional)
- Scroll-to-first-error on validation failure (refs on each section)

#### Admin
- **Identity section**: firstName, lastName, gender (Select), nationality (CountryCombobox)
- **Contact section**: street, npa, city, country (CountryCombobox), email
- **Employer section** (conditional: `reason === 'accident' && hasEmployer`): profession, employerName, employerAddress
- **Doctors section**: referringDoctor (DoctorCombobox), generalPractitioner (DoctorCombobox) — both optional
- **Accident section** (conditional: `reason === 'accident'`): accidentDate (DD.MM.YYYY), accidentInsurance, claimNumber
- **Insurance section**: avsNumber (formatted XXX.XXXX.XXXX.XX), basicInsurance, cardNumber (20 digits), policyNumber, complementaryInsurance — conditional fields based on insurance type
- Scroll-to-error with `refMap` mapping field names to refs
- Submit → `submitPreadmission(formData)` → success step
- AVS formatting: strips non-digits, formats as `XXX.XXXX.XXXX.XX`
- Card number formatting: strips non-digits, limits to 20 chars

#### Success
- Checkmark in circle (brand-text border)
- Title + confirmation message
- CTA: "How to get to the hospital?" → opens hospital directions URL in new tab

#### ProgressIndicator
- 3 visible steps with numbers/checkmarks
- Connector line with gradient fill based on progress
- Step states: completed (green check), current (blue, scaled up), future (gray)

#### LoadingScreen
- Centered spinner with message "Please wait, your documents are being processed"

#### ValidationLoadingScreen
- Same layout as LoadingScreen, inline translations

#### InvalidLink
- Language select + hospital logo
- Error icon + title "Invalid Link"
- Message + contact email (digital@latour.ch)

#### FormInput
- `forwardRef` wrapper with label, required asterisk, optional text, error display
- Brand-colored focus ring and error border

#### CountryCombobox
- Searchable dropdown with 192 countries
- Priority countries: CH, FR at top
- Keyboard navigation (Arrow Up/Down, Enter, Escape)
- Click outside to close
- Country names localized per language

#### DoctorCombobox
- Loads doctors from `list_med.csv` (semicolon-separated)
- Dropdown opens when search term >= 3 characters
- Limits results to 50 items
- Keyboard navigation

#### PhoneInput
- Country code selector with search
- Phone number input with format hints
- 195 country codes with dial codes

---

### A6. Translations

All translations in `src/locales/` with FR and EN.

#### Landing (`landing.ts`)
```
FR: { selectLanguage, title: "Bienvenue", subtitle, button: "Commencer ma preadmission" }
EN: { selectLanguage, title: "Welcome", subtitle, button: "Start my pre-admission" }
```

#### Security (`security.ts`)
```
FR: { title: "Verification d'identite", subtitle, label: "Date de naissance", placeholder: "JJ.MM.AAAA", continue: "Continuer", back: "Retour", required, invalid, futureDate, wrongDate, verifying }
EN: { title: "Identity Verification", ... }
```

#### OTP (`otp.ts`)
```
FR: { title: "Verification par SMS", subtitle: "Un code a 6 chiffres a ete envoye au ****{digits}", label, continue, back, required, invalid, resendPrefix: "Renvoyer le code", resendCountdown: "dans {seconds}s", resendReady: "Renvoyer le code" }
EN: { ... }
```

#### Qualification (`qualification.ts`)
```
FR: { title: "Identification", subtitle, reasonLabel, illness: "Maladie", accident: "Accident", hasEmployerLabel, insuranceLabel, swiss: "Assurance LAMal", international: "Autre assurance", auto: "Autopayeur", identityCard, insuranceCard, uploadText, consentsLabel, consentNLPDPrefix, consentNLPDLink: "Politique de confidentialite", privacyPolicyUrl: "https://www.la-tour.ch/fr/informations-generales/politique-de-confidentialite", consentMarketing, continue, back, ...validation errors, ...file errors (fileTooLarge, invalidFileFormat), ...insurance help dialog texts }
EN: { ..., privacyPolicyUrl: "https://www.la-tour.ch/en/general-information/privacy-policy", ... }
```

#### Admin (`admin.ts`)
```
FR: { title: "Informations administratives", subtitle, identity, firstName: "Prenom", lastName: "Nom", gender: "Genre", male: "Homme", female: "Femme", other: "Non-binaire", nationality, contact, street: "Rue", npa: "NPA (Code Postal)", city: "Ville", country: "Pays", email, employer, profession, employerName, employerAddress, doctors, referringDoctor: "Medecin envoyeur", generalPractitioner: "Medecin de famille", accidentData, accidentDate, accidentInsurance, claimNumber, insuranceData: "Assurance & Couverture Sociale", avsNumber: "Numero AVS", basicInsurance, cardNumber, policyNumber, complementaryInsurance, continue: "Soumettre", submitting: "Envoi en cours...", back, ...validation errors, optional, noResults }
EN: { ... }
```

#### Success (`success.ts`)
```
FR: { title: "Admission en ligne envoyee avec succes", message, button: "Comment se rendre a l'hopital?", link: "https://www.la-tour.ch/fr/hopital-de-la-tour/se-rendre-lhopital-de-la-tour" }
EN: { ..., link: "https://www.la-tour.ch/en/hopital-de-la-tour/getting-hopital-de-la-tour" }
```

#### InvalidLink (`invalidLink.ts`)
```
FR: { title: "Lien invalide", message, contact, emailLabel: "Email", emailAddress: "digital@latour.ch", emailLink: "mailto:digital@latour.ch", selectLanguage }
EN: { ... }
```

#### Loading (`loading.ts`)
```
FR: { message: "Veuillez patienter, vos documents sont en cours de traitement" }
EN: { message: "Please wait, your documents are being processed" }
```

#### Progress (`progress.ts`)
```
Steps: [
  { key: 'qualification', labelFr: 'Identification', labelEn: 'Identification' },
  { key: 'admin', labelFr: 'Informations', labelEn: 'Information' },
  { key: 'success', labelFr: 'Termine', labelEn: 'Complete' }
]
```

#### Barrel Export (`index.ts`)
Re-exports all translation objects from individual files.

---

### A7. Theming & Design Tokens

#### Brand Colors
```css
--brand-primary: #5BC2E7;
--brand-primary-hover: #4ab0d4;
--brand-text: #101820;
--brand-error: #E30613;
--brand-success: #009664;
```

#### OKLCH Colors (shadcn theme)
```css
--primary: oklch(0.738 0.106 219.737);
--primary-foreground: oklch(1 0 0);
--accent: oklch(0.547 0.152 166.148);
--destructive: oklch(0.577 0.245 27.325);
--ring: oklch(0.738 0.106 219.737);
/* + background, foreground, card, popover, secondary, muted, border, input, chart-1..5 */
```

#### Font
```css
@font-face {
  font-family: 'Simplon Norm';
  src: url('./assets/documents/font_preadmission_woff2.woff2') format('woff2'),
       url('./assets/documents/font_preadmission_woff.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
--font-sans-serif: 'Simplon Norm', ui-sans-serif, system-ui, sans-serif, ...;
```

#### Custom Component Classes (in `@layer components`)
```
.step-page               — min-h-[100dvh] flex justify-center px-4 py-8
.step-page-centered       — min-h-[100dvh] flex items-center justify-center px-4 py-4
.step-container-sm        — w-full max-w-md mx-auto
.step-container-lg        — w-full max-w-2xl mx-auto
.step-card                — bg-white rounded-2xl shadow-xl border p-0 backdrop-blur-sm
.step-card-compact        — bg-white rounded-xl shadow-sm border p-0 relative z-10
.step-card-header         — px-6 sm:px-8 pt-6 sm:pt-8 pb-4
.step-card-content        — px-6 sm:px-8 pb-6 sm:pb-8
.step-icon                — w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4
.step-title               — text-2xl font-bold text-brand-text text-center mb-2
.step-subtitle            — text-sm text-slate-600 text-center
.step-actions             — flex gap-3 pt-4
.step-header-stack        — flex flex-col gap-3
.step-header-stack--tight — flex flex-col gap-2
.form-error-inline        — flex items-center gap-2 mt-2 text-brand-error text-sm
.form-error-inline-tight  — flex items-center gap-2 mt-1 text-brand-error text-sm
.form-error-icon          — w-4 h-4 flex-shrink-0
.form-input               — w-full h-12 px-4
.form-input-mono          — font-mono tracking-wider
.form-section-header      — p-4 bg-slate-50 rounded-lg
.form-section-title       — font-semibold text-brand-text
.active-scale             — hover:scale-[1.02] active:scale-[0.98] transition-all
.choice-btn               — h-14 px-6 rounded-md font-medium transition-all
.choice-btn--selected     — bg-brand-primary text-white border-brand-primary
.choice-btn--unselected   — border-slate-300 text-slate-700 bg-white hover:border-brand-primary
.choice-btn--sm           — px-4 text-sm
.otp-group                — gap-1 sm:gap-2
.otp-slot                 — responsive h-12/14/16 w-10/12/14 with brand focus ring
```

#### Power Platform Isolation
All styles scoped with `#preadmission-app` to prevent Power Pages host CSS interference:
- Full CSS reset for typography, forms, links, lists, images, tables
- `!important` overrides on step-title, step-subtitle, choice-btn border-radius
- Hidden `.private-mode-banner` banner

#### Spacing Scale
CSS custom properties `--size-0` through `--size-96` with `--size-scale: 1` multiplier for proportional scaling.

#### Border Radii
`--radius-sm` (2px) through `--radius-full` (9999px) with `--radius-factor: 1` multiplier.

---

### A8. Utilities to Preserve

#### `cn()` — Class Name Merge
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

#### Date Utilities (`dateUtils.ts`)
```typescript
formatDateInput(value: string): string
// Strips non-digits, limits to 8, auto-inserts dots → "DD.MM.YYYY"

parseDisplayDate(dateString: string, options?: { allowFuture?: boolean }): string | null
// DD.MM.YYYY → YYYY-MM-DD, validates calendar date, rejects future dates
// Uses date-fns: parse, isValid, isAfter, startOfToday, format

formatDisplayDate(isoDate: string): string
// YYYY-MM-DD → DD.MM.YYYY

isValidDisplayDate(dateString: string): boolean
// Delegates to parseDisplayDate
```

#### Date Validation (`dateValidation.ts`)
```typescript
isValidDate(dateString: string): boolean
// Validates ISO YYYY-MM-DD format
// Checks: length === 10, valid Date, day/month/year match parsed values
```

#### Country Data (`countries.ts`)
- 192 countries in FR and EN with ISO 2-letter codes
- Priority: CH, FR at top
- `getCountries(language)` — returns sorted list with priority countries first
- `getCountryNameByCode(isoCode, language)` — ISO code → country name

#### Phone Codes (`phoneCodes.ts`)
- 195 country codes with dial codes and optional format patterns
- Priority: CH (+41), FR (+33), DE (+49), IT (+39), AT (+43) with format strings
- `getPhoneCodes()` — returns sorted list
- `formatPhoneNumber(number, code)` — formats according to country pattern
- `isValidPhoneNumber()` — validates phone number

#### File Utilities
```typescript
fileToBase64(file: File): Promise<string>
// FileReader → readAsDataURL → strip "data:...;base64," prefix → return pure base64
```

#### Name Capitalization
```typescript
capitalizeName(name: string): string
// "JEAN-PIERRE" → "Jean-Pierre", handles hyphens and spaces

capitalizeFirstNames(firstNames: string): string
// Same as capitalizeName but for multi-name strings

extractFirstName(firstNames: string): string
// Takes first space-separated part and capitalizes
```

#### AVS Number Formatting (in Admin component)
```typescript
formatAvsNumber(value: string): string
// Strip non-digits, limit to 13, format as XXX.XXXX.XXXX.XX
```

#### Card Number Formatting (in Admin component)
```typescript
formatCardNumber(value: string): string
// Strip non-digits, limit to 20, format with dots/spaces
```

#### Animation Variants (`animations.ts`)
```typescript
// Constants
ANIMATION = { SCALE_TAP: 0.98, DURATION_DEFAULT: 0.2, DURATION_LONG: 0.25, STAGGER_DELAY: 0.04, SLIDE_DISTANCE: 100 }
TIMING = { LOADING_DURATION_MS: 7000, PAGE_TRANSITION_MS: 200, ERROR_ANIMATION_MS: 150 }

// Framer Motion Variants
slideVariants        — direction-aware enter/center/exit with x offset
slideTransition      — spring x + opacity duration
containerVariants    — staggered fade-in children
itemVariants         — fade + subtle y:10 movement
iconVariants         — fade only
buttonVariants       — tap scale 0.98
sectionSlideVariants — fade in/out
pageVariants         — fade transition (legacy)
errorVariants        — fade in/out

// Reduced Motion
prefersReducedMotion() — checks prefers-reduced-motion media query
getAnimationVariants() — returns empty variants if reduced motion preferred
```

#### Doctor List
- Source: `src/assets/documents/list_med.csv` (130KB, semicolon-separated)
- First line is header, subsequent lines contain doctor names
- Loaded via `import csv from '@/assets/documents/list_med.csv?raw'`
- Parsed at component mount in DoctorCombobox

#### Mobile Detection (`use-mobile.ts`)
```typescript
const MOBILE_BREAKPOINT = 768
useIsMobile() — returns boolean, listens to matchMedia change events
```

---

### A9. Build & Deploy

#### Tooling
- Vite 7 + React SWC (`@vitejs/plugin-react-swc`)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin
- TypeScript ~5.7, target ES2020
- Path alias: `@/` → `./src/` (in both tsconfig.json and vite.config.ts)

#### Build Scripts
```json
"dev": "vite"
"build": "tsc -b --noCheck && vite build"
"build:dev": "tsc -b --noCheck && vite build --mode dev"
"build:test": "tsc -b --noCheck && vite build --mode test"
"build:prod": "tsc -b --noCheck && vite build --mode production"
"analyze": "vite build --mode analyze"
```

#### Code Splitting (manual chunks)
```
react-vendor:  react, react-dom, react-error-boundary
radix-base:    slot, label, separator
radix-forms:   checkbox, radio-group, select, slider, switch
radix-overlays: dialog, alert-dialog, popover, dropdown-menu, context-menu, menubar, tooltip, hover-card
radix-layout:  accordion, collapsible, tabs, scroll-area, navigation-menu
forms:         react-hook-form, @hookform/resolvers, zod
charts:        recharts, d3
date-utils:    date-fns, react-day-picker
animations:    framer-motion, embla-carousel-react
icons:         lucide-react, @heroicons/react
utils:         clsx, tailwind-merge, class-variance-authority
heavy-libs:    three, browser-image-compression
```

#### Asset Naming
```
JS:     assets/js/[name]-[hash].js
Images: assets/images/[name]-[hash][extname]
Fonts:  assets/fonts/[name]-[hash][extname]
Other:  assets/[ext]/[name]-[hash][extname]
```

#### Build Options
- Minification: terser (keep console.log, drop debugger)
- Chunk size warning: 600KB
- Source maps: disabled
- Dev server: default Vite port (5173), kill script targets port 5000

#### Environment Variables
```
VITE_OCR_IDENTITY_TRIGGER_ID    — Cloud Flow trigger for identity card OCR
VITE_OCR_INSURANCE_TRIGGER_ID   — Cloud Flow trigger for insurance card OCR
VITE_OCR_SENDOTP_TRIGGER_ID     — Cloud Flow trigger for sending OTP SMS
VITE_OCR_VERIFYOTP_TRIGGER_ID   — Cloud Flow trigger for verifying OTP code
VITE_ENVIRONMENT                — development | dev | test | production
```

#### Dependencies (actually used)
```
react, react-dom, react-error-boundary
react-hook-form, @hookform/resolvers, zod
framer-motion
lucide-react
clsx, tailwind-merge, class-variance-authority
input-otp
date-fns
browser-image-compression
@radix-ui/react-select, @radix-ui/react-dialog, @radix-ui/react-checkbox, @radix-ui/react-label, @radix-ui/react-slot
```

#### Dependencies (unused / to remove)
```
three, d3, recharts, react-resizable-panels, embla-carousel-react,
react-day-picker, @radix-ui/react-accordion, @radix-ui/react-alert-dialog,
@radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-collapsible,
@radix-ui/react-context-menu, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card,
@radix-ui/react-menubar, @radix-ui/react-navigation-menu, @radix-ui/react-popover,
@radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-scroll-area,
@radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-switch,
@radix-ui/react-tabs, @radix-ui/react-toggle, @radix-ui/react-toggle-group,
@radix-ui/react-tooltip, @radix-ui/colors, @emotion/is-prop-valid,
@heroicons/react, @tanstack/react-query, cmdk, marked, next-themes,
sonner, tw-animate-css, uuid, vaul
```

---

## Part B — Restructuring Guidelines (Priority Matrix)

> **Start with TanStack Router** — it's the backbone that shapes the entire project structure. All other improvements build on top of it.

### B1. TanStack Router (Priority #1, High Effort — DO FIRST)
- Replace custom `useWizard` hook with TanStack Router
- File-based routing in `src/routes/`
- Route structure mirrors wizard steps
- `Route.useSearch()` for `preadmissionId` from URL search params
- `beforeLoad` guards to enforce step order (can't access `/admin` without completing `/qualification`)
- Root loader validates preadmission link
- URL-based navigation instead of state-based `currentStep`
- Shared layout in `__root.tsx` with ProgressIndicator conditional rendering

### B2. Animations & View Transitions (Priority #2, High Effort)
- Replace Framer Motion with View Transitions API
- `startViewTransition()` for step changes
- CSS-based transitions with Tailwind utilities
- `@starting-style` for entry animations
- Fallback: instant transition for unsupported browsers
- Respect `prefers-reduced-motion` via CSS media query

### B3. AI Context File (Priority #3, Low Effort)
- Create `CLAUDE.md` at project root
- Document project structure, conventions, key patterns
- Include API contract, form flow, validation rules
- Reference this RESTRUCTURE.md for detailed logic

### B4. Cursor Pointer Tailwind v4 (Priority #4, Low Effort)
- Use `cursor-pointer` utility on all interactive elements
- Tailwind v4 changed default button/link cursor behavior

### B5. Path Aliases (Priority #5, Low Effort)
- `@/` → `./src/` (keep, ensure consistent usage everywhere)
- Never use relative paths like `../../`

### B6. Centralized Constants (Priority #6, Low Effort)
```
src/constants/
  wizard.ts   — step definitions, stage codes (100000001-100000006), step order
  api.ts      — endpoint paths, trigger ID env var names
  validation.ts — regex patterns (/^\d{6}$/, /^\d{13}$/, /^\d{20}$/), file size limits (10MB), accepted file formats
  ui.ts       — breakpoints (768), animation timings (7000ms loading, 400ms debounce, 30s OTP cooldown)
```

### B7. Utility Functions (Priority #7, Low Effort)
```
src/utils/           — NOT src/lib/
  cn.ts              — clsx + tailwind-merge
  date.ts            — formatDateInput, parseDisplayDate, formatDisplayDate, isValidDate
  format.ts          — formatAvsNumber, formatCardNumber, capitalizeName, capitalizeFirstNames
  file.ts            — fileToBase64
  country.ts         — getCountries, getCountryNameByCode, COUNTRIES data
  phone.ts           — getPhoneCodes, formatPhoneNumber, PHONE_CODES data
  index.ts           — barrel export
```

### B8. CSS Classes with cn() (Priority #8, Low Effort)
- Keep `cn()` from `clsx` + `tailwind-merge`
- Use consistently in ALL components
- No inline `style={}` objects (except truly dynamic values like background patterns)
- No CSS modules, no styled-components, no separate CSS files except Tailwind base
- All component-level classes via `@layer components` in `main.css`

### B9. Type Architecture (Priority #9, Medium Effort)
```
src/types/
  form.ts   — WizardFormData interface, WizardStep type, Language type
  api.ts    — ServerLogicResponse, OCRDocumentResponse, OCRInsuranceResponse, SubmitPayload, SubmitResponse, CloudFlowConfig, GetBirthResponse, GetPreadResponse, GetPhoneResponse
  ui.ts     — component prop types (FormInputProps, CountryComboboxProps, etc.)
```
- Zod schemas as single source of truth → infer types with `z.infer<>`
- No `any`, no `as` casts
- Export all types from barrel `index.ts`

### B10. Dead Code Elimination (Priority #10, Medium Effort)
- **Keep only used shadcn components**: Select, Dialog, Input, Label, Checkbox + Button, Form
- **Remove all unused shadcn**: ~40 components (accordion, alert, avatar, badge, breadcrumb, calendar, card, carousel, chart, collapsible, context-menu, dropdown-menu, hover-card, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toggle, toggle-group, tooltip)
- **Remove unused dependencies**: three, d3, recharts, react-resizable-panels, etc. (see A9 list)

### B11. SessionStorage Security (Priority #11, Medium Effort)
- Encrypt sensitive data before storing (birthDate, avsNumber, etc.)
- Clear on tab close / session end
- Don't store PII in plain text
- Consider: keep form state in-memory only (RHF already does this), use sessionStorage only for step tracking

### B12. Numeric Separators (Priority #12, Low Effort)
- Use `Intl.NumberFormat` where appropriate
- Consistent formatting:
  - AVS: `XXX.XXXX.XXXX.XX` (13 digits)
  - Card number: 20 digits with spaces
  - Phone: per-country format from PHONE_CODES
- Utility functions in `src/utils/format.ts`

### B13. useCallback Simplification (Priority #13, Low Effort)
- Remove unnecessary `useCallback` wrappers
- React 19 compiler handles memoization
- Only use for genuinely expensive computations
- Remove `useMemo` around `useApi` return object

---

## Part C — New Project Structure

```
src/
├── routes/                    # TanStack Router file-based routes
│   ├── __root.tsx             # Root layout, FormProvider, ProgressIndicator, link validation
│   ├── index.tsx              # Landing page
│   ├── security.tsx           # Birth date verification
│   ├── otp.tsx                # SMS code verification
│   ├── qualification.tsx      # Reason, insurance, documents, consents
│   ├── loading.tsx            # 7s auto-advance
│   ├── admin.tsx              # Administrative form
│   └── success.tsx            # Confirmation
├── components/
│   ├── ui/                    # shadcn (ONLY what's used: Select, Dialog, Input, Label, Checkbox, Button, Form)
│   ├── FormInput.tsx
│   ├── CountryCombobox.tsx
│   ├── DoctorCombobox.tsx
│   ├── PhoneInput.tsx
│   └── ProgressIndicator.tsx
├── hooks/
│   ├── useApi.ts
│   └── use-mobile.ts
├── schemas/                   # Zod validation
│   ├── wizard.ts              # Master schema
│   ├── security.ts
│   ├── otp.ts
│   ├── qualification.ts
│   └── admin.ts
├── types/
│   ├── form.ts
│   └── api.ts
├── constants/
│   ├── wizard.ts
│   ├── api.ts
│   └── validation.ts
├── utils/
│   ├── cn.ts
│   ├── date.ts
│   ├── format.ts
│   ├── file.ts
│   ├── country.ts
│   ├── phone.ts
│   └── index.ts
├── locales/                   # Same structure (1 file per step + barrel)
│   ├── index.ts
│   ├── landing.ts
│   ├── security.ts
│   ├── otp.ts
│   ├── qualification.ts
│   ├── admin.ts
│   ├── success.ts
│   ├── invalidLink.ts
│   ├── loading.ts
│   └── progress.ts
├── assets/
│   ├── images/logo-hlt.png
│   └── documents/
│       ├── font_preadmission_woff.woff
│       ├── font_preadmission_woff2.woff2
│       ├── list_med.csv
│       └── list_med.json
├── styles/
│   └── theme.css              # Design tokens only (brand colors, spacing, radii, fonts)
└── main.css                   # Tailwind base, @layer components classes, Power Platform isolation
```

---

## Part D — ESLint Configuration

ESLint 9 flat config (`eslint.config.js`):

```javascript
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'prefer-const': 'error',
    },
  }
)
```

No Prettier (Tailwind handles formatting concerns).

---

## Part E — Tailwind-Only CSS Rules

1. **NO CSS modules** — no `*.module.css` files
2. **NO styled-components / emotion** — remove `@emotion/is-prop-valid`
3. **NO inline `style={}` objects** — except for truly dynamic values (background patterns, computed positions)
4. **ALL styling via Tailwind utility classes** — in JSX `className`
5. **Custom classes only in `@layer components`** in `main.css` — for reusable patterns (step-page, choice-btn, form-input, otp-slot, etc.)
6. **Use `cn()` for conditional classes** — never string concatenation
7. **Design tokens as CSS custom properties** in `theme.css` — brand colors, spacing scale, border radii, fonts
8. **shadcn components use Tailwind internally** — no modifications needed to their source
9. **Power Platform isolation** remains as `!important` overrides scoped to `#preadmission-app`

---

## Backed-Up Assets

The following assets were preserved in `.context/assets-backup/` before deletion:
- `images/logo-hlt.png` — Hospital logo
- `documents/font_preadmission_woff.woff` — Simplon Norm font (WOFF)
- `documents/font_preadmission_woff2.woff2` — Simplon Norm font (WOFF2)
- `documents/list_med.csv` — Doctor names list (130KB, semicolon-separated)
- `documents/list_med.json` — Doctor names (JSON format)
- `documents/list_med_partial.json` — Partial doctor list
- `documents/specsFE.md` — Original frontend specifications
