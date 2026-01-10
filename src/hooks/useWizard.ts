import { useState, useEffect } from 'react'

export type WizardStep = 'landing' | 'security' | 'otp' | 'qualification' | 'loading' | 'admin' | 'success'

export interface FormData {
  language: 'fr' | 'en'
  birthDate: string
  otpCode: string
  reason: 'illness' | 'accident' | ''
  insurance: 'swiss' | 'international' | 'auto' | ''
  hasEmployer: boolean
  consentNLPD: boolean
  consentMarketing: boolean
  identityCard: File | null
  insuranceCard: File | null
  firstName: string
  lastName: string
  birthDatePersonal: string
  gender: string
  nationality: string
  avsNumber: string
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
  basicInsurance: string
  cardNumber: string
  policyNumber: string
  complementaryInsurance: string
}

const getBrowserLanguage = (): 'fr' | 'en' => {
  const browserLang = navigator.language.toLowerCase()
  return browserLang.startsWith('fr') ? 'fr' : 'en'
}

const getDefaultFormData = (): FormData => ({
  language: getBrowserLanguage(),
  birthDate: '',
  otpCode: '',
  reason: 'illness',
  insurance: 'swiss',
  hasEmployer: false,
  consentNLPD: false,
  consentMarketing: false,
  identityCard: null,
  insuranceCard: null,
  firstName: '',
  lastName: '',
  birthDatePersonal: '',
  gender: '',
  nationality: '',
  avsNumber: '',
  street: '',
  npa: '',
  city: '',
  country: '',
  email: '',
  profession: '',
  employerName: '',
  employerAddress: '',
  referringDoctor: '',
  generalPractitioner: '',
  accidentDate: '',
  accidentInsurance: '',
  claimNumber: '',
  basicInsurance: '',
  cardNumber: '',
  policyNumber: '',
  complementaryInsurance: ''
})

const loadFromSessionStorage = (): FormData => {
  try {
    const stored = sessionStorage.getItem('wizard-form-data')
    if (stored) {
      const data = JSON.parse(stored)
      return {
        ...data,
        identityCard: null,
        insuranceCard: null
      }
    }
  } catch (e) {
    console.error('Failed to load from sessionStorage', e)
  }
  return getDefaultFormData()
}

const saveToSessionStorage = (data: FormData) => {
  try {
    sessionStorage.setItem('wizard-form-data', JSON.stringify(data))
  } catch (e) {
    console.error('Failed to save to sessionStorage', e)
  }
}

export const useWizard = () => {
  const [currentStep, setCurrentStep] = useState<WizardStep>('landing')
  const [language, setLanguage] = useState<'fr' | 'en'>(getBrowserLanguage())
  const [formData, setFormData] = useState<FormData>(loadFromSessionStorage())

  // ⚠️ Commit 1: désactivation de la persistance wizard -> sessionStorage.
  // Le writer unique de `wizard-form-data` est désormais l'autosave RHF (App.tsx).
  // useWizard conserve la lecture initiale (loadFromSessionStorage) + resetWizard() qui efface la clé.
  // useEffect(() => {
  //   saveToSessionStorage(formData)
  // }, [formData])

  const updateFormData = (updates: Partial<FormData>) => {
    if ('language' in updates && updates.language) {
      setLanguage(updates.language)
    }
    const { language: _, ...persistableUpdates } = updates
    if (Object.keys(persistableUpdates).length > 0) {
      setFormData((current) => ({ ...current, ...persistableUpdates }))
    }
  }

  const goToStep = (step: WizardStep) => {
    setCurrentStep(step)
  }

  const nextStep = () => {
    const steps: WizardStep[] = ['landing', 'security', 'otp', 'qualification', 'loading', 'admin', 'success']
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const steps: WizardStep[] = ['landing', 'security', 'otp', 'qualification', 'loading', 'admin', 'success']
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      const prevStepValue = steps[currentIndex - 1]
      if (prevStepValue === 'loading') {
        setCurrentStep(steps[currentIndex - 2])
      } else {
        setCurrentStep(prevStepValue)
      }
    }
  }

  const resetWizard = () => {
    setCurrentStep('landing')
    setLanguage(getBrowserLanguage())
    sessionStorage.removeItem('wizard-form-data')
    setFormData(getDefaultFormData())
  }

  return {
    currentStep,
    formData: { ...formData, language },
    updateFormData,
    goToStep,
    nextStep,
    prevStep,
    resetWizard
  }
}
