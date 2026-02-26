# Preadmission - Hopital de La Tour

## Project Overview
Hospital preadmission form SPA deployed on Microsoft Power Pages.
Route flow: `/` → `/security` → `/otp` → `/qualification` → `/loading` → `/admin` → `/success`

## Tech Stack
- **Framework**: React 19 + TypeScript + Vite 6
- **Routing**: TanStack Router (file-based, `src/routes/`)
- **Forms**: React Hook Form + Zod validation schemas
- **Styling**: Tailwind CSS v4 + shadcn/ui (Radix primitives) + Lucide icons
- **Animations**: Motion (framer-motion successor, `motion/react`)
- **i18n**: i18next — French (primary) + English
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Deployment**: Power Pages (builds to `dist/`, served inside portal)

## Architecture

### Directory Structure
```
src/
├── routes/           # TanStack Router pages (one file per step)
├── components/       # Shared components (FormInput, FileUploadZone, etc.)
│   ├── ui/           # shadcn/ui primitives (Button, Input, Dialog, Stack, Typography)
│   ├── admin/        # Admin page sections (Identity, Contact, Employer, Insurance, etc.)
│   └── qualification/# Qualification page sections (Reason, Insurance, FileUploads, Consents)
├── hooks/            # useApi (mock/prod switch), use-mobile
├── schemas/          # Zod schemas per step (security, otp, qualification, admin)
├── types/            # WizardFormData, API types
├── locales/          # Translation objects per namespace (fr + en)
├── constants/        # TIMINGS, API_ENDPOINTS, BREAKPOINTS, validation rules
├── utils/            # cn(), date/format/file/phone/country helpers
├── styles/           # theme.css (design tokens, OKLCH)
└── assets/           # Logo, images
```

### Key Patterns

**Global form context**: `__root.tsx` wraps all routes in a single `<FormProvider>` with `WizardFormData`. Form data auto-saves to sessionStorage (debounced 400ms). Never persist `File` objects.

**Dev/Prod API switch**: `useApi()` returns mock API on localhost/private IPs, real Power Pages API in production. Mock overrides via sessionStorage (`__test_ocr_timeout`, `__test_ocr_not_covered`).

**Translations**: Namespaced per route (`useTranslation('admin')`). Translations live in `src/locales/*.ts` as plain objects, registered in `src/i18n.ts`.

**Validation**: Zod schema per step in `src/schemas/`. Admin schema uses conditional fields based on `reason` and `insurance` type.

**File uploads**: `FileUploadZone` compresses images, converts to base64, stores in form state. OCR runs on `/loading` page via Cloud Flow triggers.

## Design Tokens
```css
--brand-primary: #0E93B5    /* Teal — WCAG AA on white */
--brand-primary-hover: #0C7F9E
--brand-text: #101820
--brand-error: #E30613
--brand-success: #009664
```
Font: Simplon Norm (loaded externally). Fallback: system sans-serif.

## Conventions

### Code Style
- Path alias: `@/` → `src/`
- CSS utility: `cn()` from `@/utils/cn` (clsx + tailwind-merge)
- Layout: `HStack`, `VStack` components (not raw flex divs)
- Typography: `H1`, `H2`, `H3`, `P` components (not raw HTML)
- Icons: Lucide React only
- No `any` types — use proper typing
- Prefer `void` prefix for fire-and-forget promises: `void navigate({ to: '/admin' })`

### UI Component System (shadcn + custom)

All UI primitives live in `src/components/ui/` and are re-exported from `src/components/ui/index.ts`. Import from `@/components/ui`.

**Layout — Stack components** (use instead of raw `<div className="flex ...">`)
```tsx
import { HStack, VStack } from '@/components/ui'

// Horizontal row (defaults: align="center")
<HStack gap="4" justify="between">
  <Button>Back</Button>
  <Button>Next</Button>
</HStack>

// Vertical column
<VStack gap="2" align="center">
  <H1>Title</H1>
  <P>Description</P>
</VStack>

// Props: gap (Tailwind scale), align (start|center|end|stretch|baseline),
//        justify (start|center|end|between|around|evenly), wrap, grow
```

**Typography** (use instead of raw `<h1>`, `<p>`)
```tsx
import { H1, H2, H3, H4, P, Muted } from '@/components/ui'

<H1>Page title</H1>                          // h1
<H3>Section title</H3>                       // h3 with .form-section-title
<P color="muted" size="sm">Hint text</P>     // p with color + size
<Muted>Fine print</Muted>                    // p with muted style

// color: 'primary' | 'error' | 'success' | 'muted' | 'muted-light' | 'white'
// size (P only): 'xs' | 'sm' | 'md' | 'lg'
```

**Form inputs** — `<FormInput>` wrapper (label + error + optional badge)
```tsx
import { FormInput } from '@/components'

<FormInput
  label={t('email')}           // auto-generates id from label
  value={watch('email')}
  onChange={(e) => setValue('email', e.target.value)}
  error={errors.email}         // shows red border + inline error message
  required                     // adds red * to label
  optional={t('optional')}     // adds grey "(Optional)" to label
  inputClassName="form-input-mono"  // monospace for numbers
  placeholder="XXX.XXXX.XXXX.XX"
/>
```

**Choice buttons** — toggle selection (radio-like)
```tsx
import { ChoiceButton } from '@/components/ui'

<HStack gap="3">
  <ChoiceButton selected={reason === 'illness'} onClick={() => setValue('reason', 'illness')}>
    Illness
  </ChoiceButton>
  <ChoiceButton selected={reason === 'accident'} onClick={() => setValue('reason', 'accident')} sm>
    Accident
  </ChoiceButton>
</HStack>
// sm prop for smaller variant. Selected state shows CheckCircle icon.
```

**shadcn primitives** (from Radix UI)
- `Button` — with variants via CVA (`variant="outline"`, `variant="ghost"`)
- `Input` — raw input (prefer `FormInput` for forms)
- `Label` — form label (used internally by `FormInput`)
- `Select` / `SelectTrigger` / `SelectContent` / `SelectItem` — dropdown
- `Dialog` / `DialogContent` / `DialogHeader` / `DialogTitle` — modal
- `Checkbox` — with Radix accessibility
- `InputOTP` / `InputOTPGroup` / `InputOTPSlot` — OTP code input

### Page Layout Recipe
```tsx
// Simple centered page (landing, security, otp, success)
<div className="step-page step-page-centered">
  <div className="step-container-sm">
    <div className="step-card">
      <VStack className="step-card-header" align="center">
        <H1>{t('title')}</H1>
        <P className="step-subtitle">{t('subtitle')}</P>
      </VStack>
      <VStack className="step-card-content">
        {/* form fields */}
        <HStack className="step-actions">
          <Button variant="outline">Back</Button>
          <Button>Continue</Button>
        </HStack>
      </VStack>
    </div>
  </div>
</div>

// Wide form page (admin)
<div className="step-page">
  <div className="step-container-lg">
    <div className="step-card">
      {/* sections with form-section-header */}
    </div>
  </div>
</div>
```

### Form Section Pattern (admin page)
```tsx
// Each section is a separate component in src/components/admin/
export function ContactSection({ errors, setRef }: SectionProps) {
  const { setValue, watch } = useFormContext<WizardFormData>()
  const { t } = useTranslation('admin')

  return (
    <div className="space-y-4">
      <div className="form-section-header">
        <H3>{t('contact')}</H3>
      </div>
      <div ref={setRef('street')}>           {/* ref for scroll-to-error */}
        <FormInput
          label={t('street')}
          value={watch('street')}
          onChange={(e) => setValue('street', e.target.value)}
          error={errors.street}
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* side-by-side fields on desktop, stacked on mobile */}
      </div>
    </div>
  )
}
```

### Form Fields
- AVS: 13 digits, formatted `XXX.XXXX.XXXX.XX` via `formatAvsNumber()`
- Card numbers (KVG/VVG): 20 digits, formatted `XXXXX XXXXX XXXXX XXXXX` via `formatCardNumber()`
- Dates: display `DD.MM.YYYY`, store ISO format, parse via `utils/date.ts`
- Phone: international format with country code selector

### CSS Custom Classes
```
.step-page             — full-width page wrapper
.step-page-centered    — centered layout (landing, security, otp, success)
.step-container-sm     — narrow container (max-w-md)
.step-container-lg     — wide container (max-w-4xl, admin page)
.step-card             — card with shadow, rounded corners
.step-card-header      — card header with icon + title
.step-card-content     — card body
.step-actions          — button group (flex, gap)
.form-input-mono       — monospace input (numbers, dates)
.form-error-inline     — inline error with icon
.form-section-header   — section title separator
```

## Known Gotchas

1. **TanStack Router double-mount**: `navigate()` from within an effect can re-mount the component. Use `let cancelled = false` + cleanup, NOT `useRef(false)` (fresh ref on re-mount).

2. **Power Pages isolation**: CSS is scoped under `#preadmission-app` to avoid portal style leaks. The app runs inside an iframe-like container.

3. **OTP input**: Hidden `<input data-input-otp>` intercepts typing. Don't try to click individual slots in tests — use `.fill()` on the hidden input.

4. **sessionStorage keys**: `wizard-form-data` (form state), `otp_sent` (prevent re-send), `ocr_completed` (toast trigger). Cleared on submit.

5. **OCR timeout**: 8s race between API calls and timeout. If timeout wins, `ocrTimedOut` flag is set and admin page shows a warning banner.

## Scripts
```bash
npm run dev              # Dev server (localhost:5173)
npm run build            # Production build
npm run preview          # Preview production build
npm run preview -- --host # Preview on network (mobile testing)
npm run test             # Unit tests (vitest watch)
npm run test:run         # Unit tests (single run)
npm run test:e2e         # E2E tests (playwright)
```
