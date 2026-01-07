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
  firstName: string      // Premier prénom capitalisé (ex: "Anthony")
  gender: 'male' | 'female'
  nationality: string    // Code ISO (ex: "FR", "CH")
}

// 🎯 OCR Cloud Flow Trigger ID
const OCR_TRIGGER_ID = 'f729da03-646c-f011-b4cc-0022487492a4'

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
  return {
    lastName: capitalizeName(response.last_name),
    firstName: extractFirstName(response.first_names),
    gender: response.gender,
    nationality: response.nationality
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
   * Format IDENTIQUE à la fonction callCloudFlowIdentity qui fonctionne
   */
  const extractDocumentData = async (
    file: File,
    fileType: 'id_card' | 'insurance_card'
  ): Promise<OCRDocumentResponse | null> => {
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
            url: `/_api/cloudflow/v1.0/trigger/${OCR_TRIGGER_ID}`,
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
              
              // La réponse peut être sous plusieurs formats:
              // 1. String JSON direct: '{"last_name": "...", ...}'
              // 2. String JSON avec propriété json: '{"json": "{...}"}'
              // 3. Objet avec propriété json: { json: '{"last_name": "...", ...}' }
              // 4. Objet direct: { last_name: "...", ... }
              
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
              
              console.log('📄 OCR: Données brutes parsées:', rawResponse)
              
              // Mapper la réponse snake_case vers camelCase avec capitalisation
              const mappedResponse = mapCloudFlowResponse(rawResponse as OCRCloudFlowResponse)
              
              console.log('📄 OCR: Données mappées:', mappedResponse)
              resolve(mappedResponse)
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
            resolve({
              lastName: 'Dupont',
              firstName: 'Jean',
              gender: 'male',
              nationality: 'CH'
            } as OCRDocumentResponse)
          }, 1500)
        })
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
    extractDocumentData
  }
}
