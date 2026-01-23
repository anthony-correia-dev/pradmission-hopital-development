// 🎯 OCR Cloud Flow Types - Format correspondant au Cloud Flow
export interface OCRDocumentRequest {
  doc: 'identityid' | 'insuranceid'
  base64: string
}

// Réponse brute du Cloud Flow (format snake_case)
interface OCRCloudFlowResponse {
  last_name: string      // Nom en MAJUSCULES (ex: "CORREIA")
  first_names: string    // Prénom(s) (ex: "Anthony Alexandre")
  gender: 'male' | 'female'
  nationality: string    // Code ISO 2 lettres (ex: "FR", "CH")
}

// Réponse mappée pour l'application (format camelCase)
export interface OCRDocumentResponse {
  lastName: string       // Nom capitalisé (ex: "Correia")
  /**
   * Prénom(s) complet(s) (ex: "Anthony Alexandre")
   * IMPORTANT: on conserve tous les prénoms (pas uniquement le 1er).
   */
  firstNames: string
  /**
   * Compat (legacy): ancien champ utilisé par l'app.
   * Reste égal à firstNames.
   */
  firstName: string
  gender: 'male' | 'female'
  nationality: string    // Code ISO (ex: "FR", "CH")
}

// 🎯 Server Logic Response Types
interface ServerLogicResponse<T = unknown> {
  requestId: string
  success: boolean
  data: string  // JSON stringifié de T
  serverLogicName: string
}

// Réponse spécifique de getpread
interface GetPreadResponse {
  isValid: boolean
  count: number
}

// Réponse spécifique de getbirth
interface GetBirthResponse {
  isValid: boolean
}

// Réponse spécifique de getphone
interface GetPhoneResponse {
  lastDigits: string
}

// 🎯 Configuration des Cloud Flows (depuis getflows)
interface GetConfigResponse {
  status: 'success' | 'error'
  data?: CloudFlowConfig
  message?: string
}

interface CloudFlowConfig {
  identityDoc: string    // Trigger ID OCR carte d'identité
  insuranceDoc: string   // Trigger ID OCR carte d'assurance
  submitflow: string     // Trigger ID soumission formulaire
}

// 🎯 Cache de la configuration Cloud Flow (chargée une seule fois)
let cloudFlowConfigCache: CloudFlowConfig | null = null
let configLoadingPromise: Promise<CloudFlowConfig | null> | null = null

/**
 * 🎯 Récupère la configuration des Cloud Flows via la Server Logic getflows
 * Utilise un cache en mémoire pour éviter les appels multiples
 */
const getCloudFlowConfig = async (): Promise<CloudFlowConfig | null> => {
  // Retourner le cache si disponible
  if (cloudFlowConfigCache) {
    return cloudFlowConfigCache
  }

  // Éviter les appels concurrents (singleton pattern)
  if (configLoadingPromise) {
    return configLoadingPromise
  }

  // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1'

  // Mode développement - simulation avec valeurs des variables d'env
  if (isLocalhost) {
    configLoadingPromise = new Promise(resolve => {
      setTimeout(() => {
        const mockConfig: CloudFlowConfig = {
          identityDoc: OCR_IDENTITY_TRIGGER_ID || 'mock-identity-trigger',
          insuranceDoc: OCR_INSURANCE_TRIGGER_ID || 'mock-insurance-trigger',
          submitflow: 'mock-submit-trigger'
        }
        console.log('[DEV MODE] ⚙️ Configuration Cloud Flow mock:', mockConfig)
        cloudFlowConfigCache = mockConfig
        resolve(mockConfig)
      }, 100)
    })
    return configLoadingPromise
  }

  const apiUrl = '/_api/serverlogics/getflows'

  configLoadingPromise = (async () => {
    try {
      const response = await safeAjax(apiUrl, 'GET') as ServerLogicResponse<string>

      if (!response.success) {
        console.error('❌ [getCloudFlowConfig] Réponse non réussie')
        return null
      }

      // Parser le champ data (JSON stringifié)
      const parsedData: GetConfigResponse = typeof response.data === 'string'
        ? JSON.parse(response.data)
        : response.data as unknown as GetConfigResponse

      if (parsedData.status !== 'success' || !parsedData.data) {
        console.error('❌ [getCloudFlowConfig] Erreur:', parsedData.message)
        return null
      }

      // Stocker en cache
      cloudFlowConfigCache = parsedData.data
      console.log('✅ [getCloudFlowConfig] Configuration chargée:', cloudFlowConfigCache)

      return cloudFlowConfigCache

    } catch (error) {
      console.error('❌ [getCloudFlowConfig] Erreur:', error)
      return null
    } finally {
      // Reset le promise pour permettre un retry en cas d'erreur
      if (!cloudFlowConfigCache) {
        configLoadingPromise = null
      }
    }
  })()

  return configLoadingPromise
}

// 🎯 OCR Insurance Cloud Flow Types
// Réponse brute du Cloud Flow pour carte d'assurance (format snake_case)
interface OCRInsuranceCloudFlowResponse {
  rue: string             // Adresse ligne 1
  ville: string           // Ville (peut être MAJUSCULES)
  zip: string             // Code postal suisse
  country: string         // Code pays ISO (ex: "CH") - PAS de transformation
  avs: string             // Numéro AVS
  kvg_carte_no: string    // Numéro carte assurance de base (LAMal)
  kvg_insurance: string   // Nom caisse assurance de base
  vvg_carte_no: string    // Numéro carte assurance complémentaire
}

// Réponse mappée pour l'application (format camelCase)
export interface OCRInsuranceResponse {
  street: string          // Rue
  city: string            // Ville (capitalisé)
  zipCode: string         // Code postal
  country: string         // Code pays ISO (ex: "CH") - identique à nationality
  avsNumber: string       // Numéro AVS
  kvgCardNumber: string   // Numéro de carte KVG
  kvgInsuranceName: string // Nom de la caisse KVG (capitalisé)
  vvgCardNumber: string   // Numéro de carte VVG
}

// 🎯 Submit Payload - Structure fixe avec tous les champs
export interface SubmitPayload {
  // Identifiant
  preadmissionId: string

  // Qualification
  reason: 'illness' | 'accident' | ''
  insurance: 'swiss' | 'international' | 'auto' | ''
  hasEmployer: boolean
  consentNLPD: boolean
  consentMarketing: boolean

  // Documents (Base64 + MIME Type)
  identityCardBase64: string
  identityCardMimeType: string
  insuranceCardBase64: string
  insuranceCardMimeType: string

  // Informations personnelles
  firstName: string
  lastName: string
  gender: string
  nationality: string

  // Adresse
  street: string
  npa: string
  city: string
  country: string

  // Contact
  email: string

  // Employeur
  profession: string
  employerName: string
  employerAddress: string

  // Médecins
  referringDoctor: string
  generalPractitioner: string

  // Accident
  accidentDate: string
  accidentInsurance: string
  claimNumber: string

  // Assurance
  avsNumber: string
  basicInsurance: string
  cardNumber: string
  policyNumber: string
  complementaryInsurance: string
}

// 🎯 Submit Response
export interface SubmitResponse {
  status: 'success' | 'error'
  message?: string
  confirmationNumber?: string
  errorCode?: 'VALIDATION_ERROR' | 'DUPLICATE_SUBMISSION' | 'EXPIRED_LINK' | 'SYSTEM_ERROR'
}

// 🎯 OCR Cloud Flow Trigger IDs (depuis variables d'environnement)
const OCR_IDENTITY_TRIGGER_ID = import.meta.env.VITE_OCR_IDENTITY_TRIGGER_ID
const OCR_INSURANCE_TRIGGER_ID = import.meta.env.VITE_OCR_INSURANCE_TRIGGER_ID
const SEND_OTP_TRIGGER_ID = import.meta.env.VITE_OCR_SENDOTP_TRIGGER_ID
const VERIFY_OTP_TRIGGER_ID = import.meta.env.VITE_OCR_VERIFYOTP_TRIGGER_ID

// 🎯 Mapping des étapes wizard vers les valeurs Stage Power Platform
export const WIZARD_STAGES: Record<string, number> = {
  landing: 100000001,
  security: 100000002,
  otp: 100000003,
  qualification: 100000004,
  admin: 100000005,
  success: 100000006
}

// Interface pour les appels Cloud Flow avec jQuery
interface CloudFlowAjaxOptions {
  type: 'POST'
  url: string
  data: {
    eventData: string
  }
}

interface JQueryPromise {
  done: (callback: (response: unknown) => void) => JQueryPromise
  fail: (callback: (error: unknown) => void) => JQueryPromise
}

interface PowerPlatformWindow extends Window {
  shell?: {
    ajaxSafePost?: ((triggerId: string, payload: unknown) => Promise<unknown>) & 
                   ((options: CloudFlowAjaxOptions) => JQueryPromise)
  }
}

// Wrapper sécurisé pour les appels Power Platform
const safeAjaxPost = async (triggerId: string, payload: unknown): Promise<unknown> => {
  // TEMPORAIRE: Désactiver les vrais appels API - toujours en mode dev
  console.log(`[DEV MODE - API DISABLED] API Call to trigger: ${triggerId}`, payload)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data: payload })
    }, 500)
  })

  /* DÉSACTIVÉ TEMPORAIREMENT - Pour réactiver, décommenter ce bloc et supprimer le code ci-dessus
  const win = window as PowerPlatformWindow
  
  if (!win.shell?.ajaxSafePost) {
    // Mode développement - simulation
    console.log(`[DEV MODE] API Call to trigger: ${triggerId}`, payload)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: payload })
      }, 500)
    })
  }

  // Attendre que le DOM soit stable avant d'appeler jQuery
  await new Promise(resolve => requestAnimationFrame(resolve))
  
  try {
    return await win.shell.ajaxSafePost(triggerId, payload)
  } catch (error) {
    // Capturer les erreurs jQuery (createDocumentFragment, etc.)
    if (error instanceof TypeError && 
        (error.message?.includes('createDocumentFragment') || 
         error.message?.includes('Cannot read properties of undefined'))) {
      console.warn('[Power Platform] Erreur jQuery ignorée, retry...', error)
      
      // Retry après un court délai
      await new Promise(resolve => setTimeout(resolve, 100))
      
      try {
        return await win.shell.ajaxSafePost(triggerId, payload)
      } catch (retryError) {
        console.error('[Power Platform] Échec après retry:', retryError)
        throw retryError
      }
    }
    throw error
  }
  */
}

/**
 * 🔐 Récupère le token anti-CSRF depuis Power Pages
 * Utilise /_layout/tokenhtml pour extraire le token
 */
const fetchAntiCsrfToken = async (): Promise<string | null> => {
  try {
    const response = await fetch('/_layout/tokenhtml')
    const html = await response.text()
    
    const doc = new DOMParser().parseFromString(html, "text/html")
    const input = doc.querySelector("input")
    const token = input ? input.getAttribute("value") : null
    
    if (!token) {
      console.warn('🔐 [safeAjax] Token CSRF non trouvé')
    }
    
    return token
  } catch (error) {
    console.error('🔐 [safeAjax] Erreur récupération token:', error)
    return null
  }
}

/**
 * 🔐 Émule shell.ajaxSafePost avec fetch natif
 * Récupère le token anti-CSRF puis effectue la requête
 */
const safeAjax = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT' = 'GET',
  data?: unknown
): Promise<unknown> => {
  // Récupérer le token anti-CSRF
  const token = await fetchAntiCsrfToken()
  
  if (!token) {
    throw new Error('Impossible de récupérer le token anti-CSRF')
  }
  
  // Construire les options de la requête
  const options: RequestInit = {
    method,
    headers: {
      '__RequestVerificationToken': token,
      'content-type': 'application/json',
      'x-requested-with': 'XMLHttpRequest'
    }
  }
  
  // Ajouter le body pour les requêtes POST/PUT (JSON direct)
  if ((method === 'POST' || method === 'PUT') && data) {
    options.body = JSON.stringify(data)
  }
  
  const response = await fetch(url, options)
  
  if (!response.ok) {
    console.error('🔐 [safeAjax] ❌ Erreur HTTP:', response.status, response.statusText)
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }
  
  const text = await response.text()
  
  // Essayer de parser en JSON
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

/**
 * 🔐 Appel Cloud Flow avec fetch natif (comme safeAjax)
 * Utilise le même pattern que safeAjax mais adapté pour les Cloud Flows
 * @param triggerId - ID du trigger Cloud Flow
 * @param payload - Données à envoyer au Cloud Flow
 */
const safeAjaxCloudFlow = async (
  triggerId: string,
  payload: unknown
): Promise<unknown> => {
  // Récupérer le token anti-CSRF
  const token = await fetchAntiCsrfToken()
  
  if (!token) {
    throw new Error('Impossible de récupérer le token anti-CSRF')
  }
  
  const url = `/_api/cloudflow/v1.0/trigger/${triggerId}`
  
  const options: RequestInit = {
    method: 'POST',
    headers: {
      '__RequestVerificationToken': token,
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest'
    },
    body: new URLSearchParams({
      eventData: JSON.stringify(payload)
    }).toString()
  }
  
  const response = await fetch(url, options)
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }
  
  const text = await response.text()
  
  // Essayer de parser en JSON
  let result: unknown
  try {
    result = JSON.parse(text)
  } catch {
    return text
  }
  
  // 🎯 Détecter si la réponse contient une propriété 'json' (chaîne JSON stringifiée)
  // C'est le format retourné par les Cloud Flows OCR
  if (result && typeof result === 'object' && 'json' in result) {
    const jsonString = (result as { json: string }).json
    try {
      const parsed = JSON.parse(jsonString)
      return parsed
    } catch (e) {
      return result
    }
  }
  
  return result
}

// 🎯 Convertit un fichier en Base64 (exporté pour usage externe)
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result as string
      // Retirer le préfixe "data:image/jpeg;base64," pour n'avoir que le contenu Base64
      const base64 = result.split(',')[1]
      resolve(base64)
    }
    reader.onerror = (error) => reject(error)
  })
}

/**
 * Capitalise un nom (première lettre majuscule, reste en minuscules)
 * Gère les noms composés (ex: "JEAN-PIERRE" → "Jean-Pierre")
 */
const capitalizeName = (name: string): string => {
  if (!name) return ''
  return name
    .toLowerCase()
    .split(/(-|\s)/)
    .map(part => {
      if (part === '-' || part === ' ') return part
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join('')
}

/**
 * Capitalise une chaîne de prénoms (garde espaces / tirets)
 */
const capitalizeFirstNames = (firstNames: string): string => {
  if (!firstNames) return ''
  // On split en conservant les séparateurs (espaces/tirets)
  return firstNames
    .trim()
    .toLowerCase()
    .split(/(\s+|-)/)
    .map(part => {
      if (part.trim() === '' || part === '-' || /^\s+$/.test(part)) return part
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join('')
}

/**
 * Extrait et capitalise le premier prénom d'une chaîne de prénoms
 */
const extractFirstName = (firstNames: string): string => {
  if (!firstNames) return ''
  const firstName = firstNames.split(' ')[0]
  return capitalizeName(firstName)
}

/**
 * Mappe la réponse brute du Cloud Flow vers le format attendu par l'application
 */
const mapCloudFlowResponse = (response: OCRCloudFlowResponse): OCRDocumentResponse => {
  const firstNames = capitalizeFirstNames(response.first_names)

  return {
    lastName: capitalizeName(response.last_name),
    firstNames,
    // backward compat: on ne casse pas les composants existants
    firstName: firstNames,
    gender: response.gender,
    nationality: response.nationality
  }
}

/**
 * Mappe la réponse brute du Cloud Flow (assurance) vers le format application
 * Le champ country est passé tel quel (comme nationality pour ID)
 */
const mapInsuranceCloudFlowResponse = (
  response: OCRInsuranceCloudFlowResponse
): OCRInsuranceResponse => {
  return {
    street: response.rue || '',
    city: capitalizeName(response.ville || ''),
    zipCode: response.zip || '',
    country: response.country || '',  // Pas de transformation (comme nationality)
    avsNumber: response.avs || '',
    kvgCardNumber: response.kvg_carte_no || '',
    kvgInsuranceName: capitalizeName(response.kvg_insurance || ''),
    vvgCardNumber: response.vvg_carte_no || ''
  }
}

export const useApi = () => {
  const postData = async (triggerId: string, payload: unknown): Promise<unknown> => {
    return safeAjaxPost(triggerId, payload)
  }

  /**
   * 🎯 Vérifie la date de naissance via la Server Logic getbirth
   * @param preadmissionId - GUID de la préadmission
   * @param birthDate - Date au format ISO (YYYY-MM-DD) - sera convertie en DD/MM/YYYY
   */
  const verifyBirthDate = async (
    preadmissionId: string,
    birthDate: string
  ): Promise<{ success: boolean; message?: string }> => {
    // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1'

    // Mode développement - simulation
    if (isLocalhost) {
      await new Promise(resolve => setTimeout(resolve, 800))
      // Date mock valide: 12.06.1989 (format ISO: 1989-06-12)
      const isValid = birthDate === '1989-06-12'
      console.log(`[DEV MODE] 🎂 Vérification date de naissance: ${birthDate} → ${isValid ? '✅ Valide' : '❌ Invalide'}`)
      return { 
        success: isValid, 
        message: isValid ? undefined : 'Date de naissance invalide' 
      }
    }

    // Convertir ISO (YYYY-MM-DD) → DD/MM/YYYY pour l'API
    const [year, month, day] = birthDate.split('-')
    const formattedDate = `${day}/${month}/${year}`

    const apiUrl = `/_api/serverlogics/getbirth?preadmissionId=${encodeURIComponent(preadmissionId)}`

    try {
      const response = await safeAjax(apiUrl, 'POST', { birthdate: formattedDate }) as ServerLogicResponse<string>

      if (!response.success) {
        return { success: false, message: 'Erreur de validation' }
      }

      // Parser le champ data (JSON stringifié)
      const parsedData: GetBirthResponse = typeof response.data === 'string' 
        ? JSON.parse(response.data) 
        : response.data as unknown as GetBirthResponse

      return {
        success: parsedData.isValid === true,
        message: parsedData.isValid ? undefined : 'Date de naissance invalide'
      }

    } catch (error) {
      console.error('❌ [verifyBirthDate] Erreur:', error)
      return { success: false, message: 'Erreur de connexion' }
    }
  }

  /**
   * 🎯 Valide un lien de préadmission via la Server Logic getpread
   * @param preadmissionId - GUID de la préadmission
   */
  const validatePreadmissionLink = async (preadmissionId: string): Promise<boolean> => {
    // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1'
    
    // Mode développement - simulation (uniquement sur localhost)
    if (isLocalhost) {
      await new Promise(resolve => setTimeout(resolve, 800))
      return !!preadmissionId && preadmissionId !== 'invalid'
    }

    const apiUrl = `/_api/serverlogics/getpread?preadmissionId=${encodeURIComponent(preadmissionId)}`

    try {
      const response = await safeAjax(apiUrl, 'GET') as ServerLogicResponse<string>
      
      if (!response.success) {
        return false
      }
      
      // Parser le champ data (JSON stringifié)
      const parsedData: GetPreadResponse = typeof response.data === 'string'
        ? JSON.parse(response.data)
        : response.data as unknown as GetPreadResponse
      
      return parsedData.isValid === true
      
    } catch (error) {
      console.error('❌ [validatePreadmissionLink] Erreur:', error)
      return false
    }
  }

  /**
   * 🎯 Met à jour l'étape courante de la préadmission
   * @param preadmissionId - GUID de la préadmission
   * @param step - Nom de l'étape wizard
   */
  const setStep = async (preadmissionId: string, step: string): Promise<boolean> => {
    // Ignorer l'étape loading
    if (step === 'loading') {
      return true
    }

    const stage = WIZARD_STAGES[step]
    if (!stage) {
      console.warn('⚠️ [setStep] Étape inconnue:', step)
      return false
    }

    // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1'

    // Mode développement - simulation
    if (isLocalhost) {
      return true
    }

    const apiUrl = `/_api/serverlogics/setstep?preadmissionId=${encodeURIComponent(preadmissionId)}`

    try {
      await safeAjax(apiUrl, 'PUT', { Stage: stage })
      return true
    } catch (error) {
      console.error('❌ [setStep] Erreur:', error)
      return false
    }
  }

  /**
   * 🎯 Récupère les 4 derniers chiffres du téléphone via la Server Logic getphone
   * @param preadmissionId - GUID de la préadmission
   * @returns Les 4 derniers chiffres ou "XXXX" en cas d'erreur
   */
  const getPhoneLastDigits = async (preadmissionId: string): Promise<string> => {
    // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1'

    // Mode développement - simulation
    if (isLocalhost) {
      await new Promise(resolve => setTimeout(resolve, 300))
      return '1234'
    }

    const apiUrl = `/_api/serverlogics/getphone?preadmissionId=${encodeURIComponent(preadmissionId)}`

    try {
      const response = await safeAjax(apiUrl, 'GET') as ServerLogicResponse<string>

      if (!response.success) {
        return 'XXXX'
      }

      // Parser le champ data (JSON stringifié)
      const parsedData: GetPhoneResponse = typeof response.data === 'string'
        ? JSON.parse(response.data)
        : response.data as unknown as GetPhoneResponse

      return parsedData.lastDigits || 'XXXX'

    } catch (error) {
      console.error('❌ [getPhoneLastDigits] Erreur:', error)
      return 'XXXX'
    }
  }

  /**
   * 🎯 Envoie un code OTP par SMS via le Cloud Flow sendOtp
   * @param preadmissionId - GUID de la préadmission
   * @returns true si l'envoi a réussi, false sinon
   */
  const sendOtp = async (preadmissionId: string): Promise<boolean> => {
    // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1'

    // Mode développement - simulation
    if (isLocalhost) {
      await new Promise(resolve => setTimeout(resolve, 500))
      return true
    }

    try {
      await safeAjaxCloudFlow(SEND_OTP_TRIGGER_ID, { number: preadmissionId })
      return true
    } catch (error) {
      console.error('❌ [sendOtp] Erreur:', error)
      return false
    }
  }

  /**
   * 🎯 Vérifie le code OTP via le Cloud Flow verifyOtp
   * @param preadmissionId - GUID de la préadmission
   * @param code - Code OTP à 6 chiffres
   */
  const verifyOTP = async (
    preadmissionId: string,
    code: string
  ): Promise<{ success: boolean; message?: string }> => {
    // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1'

    // Mode développement - simulation
    if (isLocalhost) {
      await new Promise(resolve => setTimeout(resolve, 800))
      // Simulation: accepte le code "123456" uniquement
      const isValid = code === '123456'
      return { 
        success: isValid, 
        message: isValid ? undefined : 'Le code est incorrect' 
      }
    }

    try {
      const response = await safeAjaxCloudFlow(VERIFY_OTP_TRIGGER_ID, { 
        number: preadmissionId, 
        code 
      })

      // Le Cloud Flow retourne { "json": "True" } en cas de succès
      // safeAjaxCloudFlow parse automatiquement la propriété 'json'
      // Peut retourner: "True" (string), true (boolean), ou { json: "True", isValid: true }
      let isValid = false
      
      if (typeof response === 'string') {
        isValid = response === 'True' || response === 'true'
      } else if (typeof response === 'boolean') {
        isValid = response
      } else if (response && typeof response === 'object') {
        const resp = response as { json?: string; isValid?: boolean }
        isValid = resp.json === 'True' || resp.isValid === true
      }

      return {
        success: isValid,
        message: isValid ? undefined : 'Le code est incorrect'
      }

    } catch (error) {
      console.error('❌ [verifyOTP] Erreur:', error)
      return { success: false, message: 'Erreur de connexion' }
    }
  }

  const submitForm = async (formData: unknown): Promise<{ success: boolean; message?: string }> => {
    const result = await postData('submit-preadmission', formData)
    return result as { success: boolean; message?: string }
  }

  /**
   * 🎯 Soumet la préadmission avec toutes les données collectées
   * Appelle le Cloud Flow submitflow avec le payload complet
   * Utilise les Base64 pré-calculés lors de l'OCR (pas de double conversion)
   * @param formData - Données du wizard (WizardFormData)
   */
  const submitPreadmission = async (
    formData: {
      preadmissionId?: string
      reason: 'illness' | 'accident' | ''
      insurance: 'swiss' | 'international' | 'auto' | ''
      hasEmployer: boolean
      consentNLPD: boolean
      consentMarketing: boolean
      // 🎯 Base64 pré-calculés (depuis Qualification)
      identityCardBase64?: string
      identityCardMimeType?: string
      insuranceCardBase64?: string
      insuranceCardMimeType?: string
      firstName: string
      lastName: string
      gender: string
      nationality: string
      street: string
      npa: string
      city: string
      country: string
      email: string
      profession: string
      employerName: string
      employerAddress: string
      referringDoctor: string
      generalPractitioner: string
      accidentDate: string
      accidentInsurance: string
      claimNumber: string
      avsNumber: string
      basicInsurance: string
      cardNumber: string
      policyNumber: string
      complementaryInsurance: string
    }
  ): Promise<SubmitResponse> => {
    // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1'

    // Mode développement - simulation
    if (isLocalhost) {
      console.log('[DEV MODE] 📤 Soumission préadmission:', formData)
      await new Promise(resolve => setTimeout(resolve, 1500))
      return {
        status: 'success',
        message: 'Préadmission mock soumise avec succès',
        confirmationNumber: 'PREAD-MOCK-' + Date.now()
      }
    }

    try {
      // 1. Récupérer la configuration Cloud Flow
      const config = await getCloudFlowConfig()
      if (!config) {
        return { 
          status: 'error', 
          message: 'Configuration non disponible',
          errorCode: 'SYSTEM_ERROR'
        }
      }

      // 2. Construire le payload (utilise les Base64 pré-calculés - pas de double conversion)
      const payload: SubmitPayload = {
        preadmissionId: formData.preadmissionId ?? '',
        
        // Qualification
        reason: formData.reason,
        insurance: formData.insurance,
        hasEmployer: formData.hasEmployer,
        consentNLPD: formData.consentNLPD,
        consentMarketing: formData.consentMarketing,
        
        // 🎯 Documents (Base64 pré-calculés dans Qualification)
        identityCardBase64: formData.identityCardBase64 ?? '',
        identityCardMimeType: formData.identityCardMimeType ?? '',
        insuranceCardBase64: formData.insuranceCardBase64 ?? '',
        insuranceCardMimeType: formData.insuranceCardMimeType ?? '',
        
        // Informations personnelles
        firstName: formData.firstName ?? '',
        lastName: formData.lastName ?? '',
        gender: formData.gender ?? '',
        nationality: formData.nationality ?? '',
        
        // Adresse
        street: formData.street ?? '',
        npa: formData.npa ?? '',
        city: formData.city ?? '',
        country: formData.country ?? '',
        
        // Contact
        email: formData.email ?? '',
        
        // Employeur
        profession: formData.profession ?? '',
        employerName: formData.employerName ?? '',
        employerAddress: formData.employerAddress ?? '',
        
        // Médecins
        referringDoctor: formData.referringDoctor ?? '',
        generalPractitioner: formData.generalPractitioner ?? '',
        
        // Accident
        accidentDate: formData.accidentDate ?? '',
        accidentInsurance: formData.accidentInsurance ?? '',
        claimNumber: formData.claimNumber ?? '',
        
        // Assurance
        avsNumber: formData.avsNumber ?? '',
        basicInsurance: formData.basicInsurance ?? '',
        cardNumber: formData.cardNumber ?? '',
        policyNumber: formData.policyNumber ?? '',
        complementaryInsurance: formData.complementaryInsurance ?? ''
      }

      // 3. Wrapper le payload dans la propriété "json" attendue par le Cloud Flow
      // Le trigger Power Pages attend: { json: "..." } où json est le payload stringifié
      const wrappedPayload = {
        json: JSON.stringify(payload)
      }

      // 4. Appeler le Cloud Flow
      const response = await safeAjaxCloudFlow(config.submitflow, wrappedPayload)
      
      // 5. Parser et retourner la réponse
      return response as SubmitResponse

    } catch (error) {
      console.error('❌ [submitPreadmission] Erreur:', error)
      return { 
        status: 'error', 
        message: 'Erreur lors de la soumission',
        errorCode: 'SYSTEM_ERROR'
      }
    }
  }

  /**
   * 🎯 Extrait les données d'un document via OCR Cloud Flow
   * Retourne OCRDocumentResponse pour id_card, OCRInsuranceResponse pour insurance_card
   */
  const extractDocumentData = async (
    file: File,
    fileType: 'id_card' | 'insurance_card'
  ): Promise<OCRDocumentResponse | OCRInsuranceResponse | null> => {
    // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1'

    // Mode développement - simulation avec données mock
    if (isLocalhost) {
      console.log(`[DEV MODE] 🔍 OCR Mock pour ${fileType}:`, file.name)
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simuler le temps de traitement OCR

      if (fileType === 'id_card') {
        const mockIdCard: OCRDocumentResponse = {
          lastName: 'Dupont',
          firstNames: 'Jean Pierre',
          firstName: 'Jean Pierre',
          gender: 'male',
          nationality: 'CH'
        }
        console.log('[DEV MODE] 📄 Données ID Card mock:', mockIdCard)
        return mockIdCard
      } else {
        const mockInsurance: OCRInsuranceResponse = {
          street: 'Rue du Lac 15',
          city: 'Genève',
          zipCode: '1200',
          country: 'CH',
          avsNumber: '756.1234.5678.90',
          kvgCardNumber: '80756012345678901234',
          kvgInsuranceName: 'CSS Assurance',
          vvgCardNumber: '80756098765432109876'
        }
        console.log('[DEV MODE] 🏥 Données Assurance mock:', mockInsurance)
        return mockInsurance
      }
    }

    try {
      // 🎯 Récupérer la configuration dynamique des Cloud Flows
      const config = await getCloudFlowConfig()
      if (!config) {
        console.error('❌ OCR: Configuration Cloud Flow non disponible')
        return null
      }

      // Convertir le fichier en Base64
      const base64Data = await fileToBase64(file)
      
      // Mapper le fileType vers le format attendu par le Cloud Flow
      const docType: 'identityid' | 'insuranceid' = fileType === 'id_card' ? 'identityid' : 'insuranceid'

      // 🎯 Utiliser les trigger IDs depuis la config dynamique
      const triggerId = fileType === 'id_card' ? config.identityDoc : config.insuranceDoc
      const rawResponse = await safeAjaxCloudFlow(triggerId, { doc: docType, base64: base64Data })

      // Mapper selon le type de document
      if (fileType === 'insurance_card') {
        const mappedResponse = mapInsuranceCloudFlowResponse(rawResponse as OCRInsuranceCloudFlowResponse)
        return mappedResponse
      } else {
        const mappedResponse = mapCloudFlowResponse(rawResponse as OCRCloudFlowResponse)
        return mappedResponse
      }
    } catch (error) {
      console.error('❌ OCR: Erreur lors de l\'extraction:', error)
      return null
    }
  }

  return {
    postData,
    verifyBirthDate,
    verifyOTP,
    submitForm,
    submitPreadmission,
    extractDocumentData,
    validatePreadmissionLink,
    setStep,
    getPhoneLastDigits,
    sendOtp
  }
}
