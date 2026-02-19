import type { OcrScenario } from './helpers.js'

/**
 * Raw OCR identity data — uses the unmapped field names (last_name, first_names, etc.)
 * so that the frontend's mapCloudFlowResponse() is exercised.
 */
export const IDENTITY_OCR: Record<OcrScenario, Record<string, string>> = {
  SUCCESS: {
    last_name: 'dupont',
    first_names: 'jean pierre',
    gender: 'male',
    nationality: 'CHE',
  },
  TIMEOUT: {
    last_name: 'dupont',
    first_names: 'jean pierre',
    gender: 'male',
    nationality: 'CHE',
  },
  NOT_COVERED: {
    last_name: 'dupont',
    first_names: 'jean pierre',
    gender: 'male',
    nationality: 'CHE',
  },
  PARTIAL: {
    last_name: 'dupont',
    first_names: '',
    gender: '',
    nationality: '',
  },
  ERROR: {},
}

/**
 * Raw OCR insurance data — uses the unmapped field names (rue, ville, etc.)
 * so that the frontend's mapInsuranceCloudFlowResponse() is exercised.
 */
export const INSURANCE_OCR: Record<OcrScenario, Record<string, string>> = {
  SUCCESS: {
    rue: 'Avenue de Champel 24',
    ville: 'genève',
    zip: '1206',
    country: 'CHE',
    avs: '756.1234.5678.90',
    kvg_carte_no: '80756012345678901234',
    kvg_insurance: 'groupe mutuel',
    vvg_carte_no: '80756098765432109876',
  },
  TIMEOUT: {
    rue: 'Avenue de Champel 24',
    ville: 'genève',
    zip: '1206',
    country: 'CHE',
    avs: '756.1234.5678.90',
    kvg_carte_no: '80756012345678901234',
    kvg_insurance: 'groupe mutuel',
    vvg_carte_no: '80756098765432109876',
  },
  NOT_COVERED: {
    rue: 'Avenue de Champel 24',
    ville: 'genève',
    zip: '1206',
    country: 'CHE',
    avs: '756.1234.5678.90',
    kvg_carte_no: 'not_covered',
    kvg_insurance: '',
    vvg_carte_no: '',
  },
  PARTIAL: {
    rue: 'Avenue de Champel 24',
    ville: 'genève',
    zip: '1206',
    country: 'CHE',
    avs: '',
    kvg_carte_no: '',
    kvg_insurance: '',
    vvg_carte_no: '',
  },
  ERROR: {},
}
