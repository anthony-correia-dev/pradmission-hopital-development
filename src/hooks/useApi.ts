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

// 🎯 OCR Cloud Flow Trigger IDs (depuis variables d'environnement)
const OCR_IDENTITY_TRIGGER_ID = import.meta.env.VITE_OCR_IDENTITY_TRIGGER_ID
const OCR_INSURANCE_TRIGGER_ID = import.meta.env.VITE_OCR_INSURANCE_TRIGGER_ID

// 🎯 Mapping des étapes wizard vers les valeurs Stage Power Platform
// Note: 'loading' est exclu - pas d'appel API pour cet écran transitoire
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

// 🎯 Convertit un fichier en Base64
const fileToBase64 = (file: File): Promise<string> => {
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
      const isValid = !birthDate.endsWith('-01')
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

  const verifyOTP = async (code: string): Promise<{ success: boolean; message?: string }> => {
    const result = await postData('verify-otp', { code })
    return result as { success: boolean; message?: string }
  }

  const submitForm = async (formData: unknown): Promise<{ success: boolean; message?: string }> => {
    const result = await postData('submit-preadmission', formData)
    return result as { success: boolean; message?: string }
  }

  /**
   * 🎯 Extrait les données d'un document via OCR Cloud Flow
   * Retourne OCRDocumentResponse pour id_card, OCRInsuranceResponse pour insurance_card
   */
  const extractDocumentData = async (
    file: File,
    fileType: 'id_card' | 'insurance_card'
  ): Promise<OCRDocumentResponse | OCRInsuranceResponse | null> => {
    try {
      // Convertir le fichier en Base64
      const base64Data = await fileToBase64(file)
      
      // Mapper le fileType vers le format attendu par le Cloud Flow
      const docType: 'identityid' | 'insuranceid' = fileType === 'id_card' ? 'identityid' : 'insuranceid'

      // Utiliser safeAjaxCloudFlow pour les appels Cloud Flow
      const triggerId = fileType === 'id_card' ? OCR_IDENTITY_TRIGGER_ID : OCR_INSURANCE_TRIGGER_ID
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
    extractDocumentData,
    validatePreadmissionLink,
    setStep,
    getPhoneLastDigits
  }
}
