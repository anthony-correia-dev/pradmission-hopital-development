# OCR Mapping — Preadmission

## Overview

Two OCR extractions run when the user uploads documents on the **Qualification** page.
Each has an **8-second timeout** — if it doesn't return in time, fields stay empty and the user fills them manually on the Admin page.

---

## 1. Identity OCR (passport / ID card)

**Trigger**: User uploads a file in the "Identity card" zone.

### API Raw Response

```json
{
  "last_name": "DUPONT",
  "first_names": "Jean",
  "gender": "M",
  "nationality": "CH"
}
```

### Mapping (useApi → mapCloudFlowResponse)

| OCR field       | Mapping applied                  | Form field     | Admin UI field       |
|-----------------|----------------------------------|----------------|----------------------|
| `last_name`     | `capitalizeName()`               | `lastName`     | Nom *                |
| `first_names`   | `capitalizeFirstNames()`         | `firstName`    | Prenom *             |
| `gender`        | `mapGender()` (M→male, F→female) | `gender`       | Genre *              |
| `nationality`   | `normalizeNationality()` (CH→CHE)| `nationality`  | Nationalite *        |

### mapGender() accepted values

| OCR value                                      | Mapped to |
|------------------------------------------------|-----------|
| `m`, `male`, `masculin`, `homme`, `mannlich`   | `male`    |
| `f`, `female`, `feminin`, `femme`, `weiblich`  | `female`  |
| anything else                                  | `""` (empty — user selects manually) |

### normalizeNationality() accepted values

| OCR value     | Mapped to |
|---------------|-----------|
| 2-letter code (e.g. `CH`, `FR`) | Converted to alpha-3 (`CHE`, `FRA`) |
| 3-letter code (e.g. `CHE`)      | Passed through as-is                |
| Unknown value                    | `""` (empty — user selects manually) |

### On clear (remove file)

Resets: `lastName`, `firstName`, `gender`, `nationality` (+ file fields)

---

## 2. Insurance OCR (insurance card)

**Trigger**: User uploads a file in the "Insurance card" zone.

### API Raw Response

```json
{
  "rue": "Route de Chaliere 108",
  "ville": "Neuchatel",
  "zip": "2000",
  "country": "CH",
  "avs": "7560268085904",
  "kvg_carte_no": "80756014065366568671",
  "kvg_insurance": "Aquilana",
  "vvg_carte_no": "80756014065366568671"
}
```

### Mapping (useApi → mapInsuranceCloudFlowResponse)

| OCR field        | Mapping applied                   | Form field              | Admin UI field                          | Visible when                          |
|------------------|-----------------------------------|-------------------------|-----------------------------------------|---------------------------------------|
| `rue`            | —                                 | `street`                | Rue *                                   | Always                                |
| `ville`          | `capitalizeName()`                | `city`                  | Ville *                                 | Always                                |
| `zip`            | —                                 | `npa`                   | NPA *                                   | Always                                |
| `country`        | `normalizeNationality()` (CH→CHE) | `country`               | Pays *                                  | Always                                |
| `avs`            | —                                 | `avsNumber`             | N AVS                                   | `insurance === 'swiss'`               |
| `kvg_carte_no`   | —                                 | `cardNumber`            | N de carte d'assurance de base *        | `insurance === 'swiss'` OR `reason === 'accident'` |
| `kvg_insurance`  | `capitalizeName()`                | `basicInsurance`        | Assurance de base *                     | `reason === 'accident'` OR `insurance === 'swiss'` OR `insurance === 'international'` |
| `vvg_carte_no`   | —                                 | `complementaryInsurance`| Assurance complementaire                | Always (optional)                     |

### Special case: not_covered

If `kvg_carte_no === "not_covered"` AND `insurance === 'swiss'`:
- File is cleared (removed from form)
- Error message shown: "Assurance non prise en charge"
- No fields are prefilled

### Fields NOT filled by OCR

| Form field       | Admin UI field                        | Why                                    |
|------------------|---------------------------------------|----------------------------------------|
| `policyNumber`   | Assurance de base - N de police *     | Only visible for `insurance === 'international'`, OCR returns KVG data (Swiss) |
| `birthDate`      | Date de naissance *                   | Not in OCR response                    |
| `phone`          | Telephone *                           | Not in OCR response                    |
| `email`          | Email *                               | Not in OCR response                    |
| `referringDoctor`| Medecin envoyeur                      | Not in OCR response (API search)       |
| `generalPractitioner` | Medecin de famille               | Not in OCR response (API search)       |

### On clear (remove file)

Resets: `street`, `city`, `npa`, `country`, `avsNumber`, `cardNumber`, `basicInsurance`, `complementaryInsurance` (+ file fields)

---

## 3. Edge case: international insurance + insurance OCR

**Situation**: User selects `insurance === 'international'` on qualification page, then uploads an insurance card that returns Swiss KVG data.

**What happens**:
- `cardNumber` is filled by OCR but **hidden** (only shows for swiss/accident)
- `policyNumber` is **visible** but **not filled** by OCR
- Address fields (street, city, npa, country) are filled normally
- `basicInsurance` is filled normally

**Potential fix**: Map `kvg_carte_no` → `policyNumber` when `insurance === 'international'`

---

## 4. Timeout & Error handling

| Scenario  | Behavior                                                |
|-----------|---------------------------------------------------------|
| Success   | Fields prefilled, toast "Donnees pre-remplies" on admin |
| Timeout (>8s) | Fields stay empty, user fills manually              |
| API error | Silent catch, fields stay empty                         |
| File too large (>10MB) | Error message, no OCR attempted              |

---

## 5. Mock server scenarios (dev only)

Controlled by `OCR_SCENARIO` env var:

| Scenario      | Identity OCR                        | Insurance OCR                          |
|---------------|-------------------------------------|----------------------------------------|
| `SUCCESS`     | Full data (random)                  | Full data (random)                     |
| `PARTIAL`     | Only `last_name`, rest empty        | Only address fields, rest empty        |
| `ERROR`       | Returns `{}`, treated as API error  | Returns `{}`, treated as API error     |
| `TIMEOUT`     | 15s delay (exceeds 8s timeout)      | 15s delay (exceeds 8s timeout)         |
| `NOT_COVERED` | N/A                                 | `kvg_carte_no = "not_covered"`, rest filled |

SessionStorage test overrides:
- `__test_ocr_timeout` — force timeout behavior
- `__test_ocr_not_covered` — force not_covered behavior
