interface PowerPlatformWindow extends Window {
  shell?: {
    ajaxSafePost?: (triggerId: string, payload: unknown) => Promise<unknown>
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

  return {
    postData,
    verifyBirthDate,
    verifyOTP,
    submitForm
  }
}
