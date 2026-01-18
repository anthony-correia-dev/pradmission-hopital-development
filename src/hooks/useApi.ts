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

  const verifyBirthDate = async (birthDate: string): Promise<{ success: boolean; message?: string }> => {
    const result = await postData('verify-birthdate', { birthDate })
    return result as { success: boolean; message?: string }
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
      console.log(`📄 OCR: Extraction des données du document ${fileType}...`)
      
      // Convertir le fichier en Base64
      const base64Data = await fileToBase64(file)
      
      // Mapper le fileType vers le format attendu par le Cloud Flow
      const docType: 'identityid' | 'insuranceid' = fileType === 'id_card' ? 'identityid' : 'insuranceid'

      // Vérifier si shell.ajaxSafePost est disponible (environnement Power Pages)
      if (typeof (window as any).shell !== 'undefined' && (window as any).shell.ajaxSafePost) {
        return new Promise((resolve, reject) => {
          (window as any).shell.ajaxSafePost({
            type: "POST",
            url: `/_api/cloudflow/v1.0/trigger/${fileType === 'id_card' ? OCR_IDENTITY_TRIGGER_ID : OCR_INSURANCE_TRIGGER_ID}`,
            data: {
              "eventData": JSON.stringify({
                "doc": docType,
                "base64": base64Data
              })
            }
          })
          .done(function (response: any) {
            console.log('Cloud flow OCR appelé avec succès (raw):', response)
            
            try {
              let rawResponse: any = {}
              
              // La réponse peut être sous plusieurs formats (IDENTIQUE pour les 2 types):
              // 1. String JSON direct: '{"last_name": "...", ...}' ou '{"rue": "...", ...}'
              // 2. String JSON avec propriété json: '{"json": "{...}"}'
              // 3. Objet avec propriété json: { json: '{"last_name": "...", ...}' }
              // 4. Objet direct: { last_name: "...", ... } ou { rue: "...", ... }
              // 5. Tableau: [{rue: "...", ...}] (cas insurance)
              
              if (typeof response === 'string') {
                const parsed = JSON.parse(response)
                // Vérifier si c'est un objet avec une propriété "json" (cas 2)
                if (parsed.json && typeof parsed.json === 'string') {
                  rawResponse = JSON.parse(parsed.json)
                } else {
                  rawResponse = parsed
                }
              } else if (response.json && typeof response.json === 'string') {
                // Cas 3: objet avec propriété json stringifiée
                rawResponse = JSON.parse(response.json)
              } else {
                // Cas 4: objet direct
                rawResponse = response
              }
              
              // 🎯 Cas 5: Si la réponse est un tableau, extraire le premier élément
              if (Array.isArray(rawResponse)) {
                console.log('📄 OCR: Réponse reçue sous forme de tableau, extraction du premier élément')
                rawResponse = rawResponse[0] || {}
              }
              
              console.log('📄 OCR: Données brutes parsées:', rawResponse)
              
              // Mapper selon le type de document
              if (fileType === 'insurance_card') {
                const mappedResponse = mapInsuranceCloudFlowResponse(rawResponse as OCRInsuranceCloudFlowResponse)
                console.log('📄 OCR Insurance: Données mappées:', mappedResponse)
                resolve(mappedResponse)
              } else {
                const mappedResponse = mapCloudFlowResponse(rawResponse as OCRCloudFlowResponse)
                console.log('📄 OCR Identity: Données mappées:', mappedResponse)
                resolve(mappedResponse)
              }
            } catch (parseError) {
              console.error('Erreur parsing réponse OCR:', parseError)
              reject(parseError)
            }
          })
          .fail(function (error: any) {
            console.error('❌ Erreur Cloud flow OCR:', error)
            reject(error)
          })
        })
      } else {
        // Mode développement - simulation OCR (format déjà mappé)
        console.log(`[DEV MODE] OCR Cloud Flow Call`, { docType, base64Length: base64Data.length })
        return new Promise((resolve) => {
          setTimeout(() => {
            if (fileType === 'insurance_card') {
              resolve({
                street: 'Rue de la Gare 15',
                city: 'Lausanne',
                zipCode: '1003',
                country: 'CH',
                avsNumber: '756.1234.5678.90',
                kvgCardNumber: '80756012345678901234',
                kvgInsuranceName: 'Swica',
                vvgCardNumber: '80756012345678901234'
              } as OCRInsuranceResponse)
            } else {
              resolve({
                lastName: 'Dupont',
                firstNames: 'Jean Pierre',
                firstName: 'Jean Pierre',
                gender: 'male',
                nationality: 'CH'
              } as OCRDocumentResponse)
            }
          }, 1500)
        })
      }
    } catch (error) {
      console.error('❌ OCR: Erreur lors de l\'extraction:', error)
      return null
    }
  }

  /**
   * 🎯 Valide un lien de préadmission via la Server Logic getpread
   * @param preadmissionId - GUID de la préadmission
   * @returns Promise<boolean> - true si valide, false sinon
   */
  const validatePreadmissionLink = async (preadmissionId: string): Promise<boolean> => {
    console.log('🔗 [validatePreadmissionLink] Début de la validation')
    console.log('🔗 [validatePreadmissionLink] preadmissionId:', preadmissionId)
    
    // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1'
    
    console.log('🔗 [validatePreadmissionLink] hostname:', window.location.hostname)
    console.log('🔗 [validatePreadmissionLink] isLocalhost:', isLocalhost)
    
    // Mode développement - simulation (uniquement sur localhost)
    if (isLocalhost) {
      console.log('🔗 [DEV MODE] Validation simulée pour:', preadmissionId)
      await new Promise(resolve => setTimeout(resolve, 800))
      const isValid = !!preadmissionId && preadmissionId !== 'invalid'
      console.log('🔗 [DEV MODE] Résultat validation:', isValid)
      return isValid
    }

    // Environnement Power Pages - appel API réel
    console.log('🔗 [validatePreadmissionLink] Environnement Power Pages détecté, appel API...')
    const apiUrl = `/_api/serverlogics/getpread?preadmissionId=${encodeURIComponent(preadmissionId)}`
    console.log('🔗 [validatePreadmissionLink] URL API:', apiUrl)

    // Attendre que shell.ajaxSafePost soit disponible (max 10 secondes)
    let attempts = 0
    const maxAttempts = 20
    while (attempts < maxAttempts) {
      if (typeof (window as any).shell !== 'undefined' && (window as any).shell.ajaxSafePost) {
        console.log('🔗 [validatePreadmissionLink] shell.ajaxSafePost disponible après', attempts * 500, 'ms')
        break
      }
      console.log('🔗 [validatePreadmissionLink] Attente de shell.ajaxSafePost... tentative', attempts + 1)
      await new Promise(resolve => setTimeout(resolve, 500))
      attempts++
    }

    // Vérifier si shell.ajaxSafePost est maintenant disponible
    if (typeof (window as any).shell === 'undefined' || !(window as any).shell.ajaxSafePost) {
      console.error('🔗 [validatePreadmissionLink] ❌ shell.ajaxSafePost non disponible après 10 secondes')
      console.log('🔗 [validatePreadmissionLink] window.shell:', (window as any).shell)
      console.log('🔗 [validatePreadmissionLink] shell.ajaxSafePost:', (window as any).shell?.ajaxSafePost)
      // Fallback: considérer comme valide pour ne pas bloquer l'utilisateur
      console.warn('🔗 [validatePreadmissionLink] ⚠️ Fallback: validation ignorée, lien considéré valide')
      return true
    }

    return new Promise<boolean>((resolve) => {
      console.log('🔗 [validatePreadmissionLink] Appel shell.ajaxSafePost en cours...');
      
      (window as any).shell.ajaxSafePost({
        type: "GET",
        url: apiUrl,
        contentType: "application/json"
      })
      .done(function (response: any) {
        console.log('🔗 [validatePreadmissionLink] ✅ Réponse reçue')
        console.log('🔗 [validatePreadmissionLink] Réponse brute:', response)
        
        try {
          let parsedResponse = response
          if (typeof response === 'string') {
            parsedResponse = JSON.parse(response)
          }
          
          if (!parsedResponse.success) {
            console.warn('🔗 [validatePreadmissionLink] ⚠️ Server Logic success: false')
            resolve(false)
            return
          }
          
          let parsedData: GetPreadResponse
          if (typeof parsedResponse.data === 'string') {
            parsedData = JSON.parse(parsedResponse.data)
          } else {
            parsedData = parsedResponse.data as GetPreadResponse
          }
          
          console.log('🔗 [validatePreadmissionLink] ✅ isValid:', parsedData.isValid)
          resolve(parsedData.isValid === true)
          
        } catch (parseError) {
          console.error('🔗 [validatePreadmissionLink] ❌ Erreur parsing:', parseError)
          resolve(false)
        }
      })
      .fail(function (error: any) {
        console.error('🔗 [validatePreadmissionLink] ❌ Erreur API:', error)
        resolve(false)
      })
    })
  }

  return {
    postData,
    verifyBirthDate,
    verifyOTP,
    submitForm,
    extractDocumentData,
    validatePreadmissionLink
  }
}
