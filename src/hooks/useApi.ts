interface PowerPlatformWindow extends Window {
  shell?: {
    ajaxSafePost?: (triggerId: string, payload: unknown) => Promise<unknown>
  }
}

export const useApi = () => {
  const postData = async (triggerId: string, payload: unknown): Promise<unknown> => {
    const win = window as PowerPlatformWindow
    
    if (win.shell?.ajaxSafePost) {
      return win.shell.ajaxSafePost(triggerId, payload)
    }
    
    console.log(`[DEV MODE] API Call to trigger: ${triggerId}`, payload)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: payload })
      }, 500)
    })
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
