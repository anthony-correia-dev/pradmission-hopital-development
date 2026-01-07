import { useWizard } from './hooks/useWizard'
import { Landing } from './components/Landing'
import { Security } from './components/Security'
import { OTP } from './components/OTP'
import { LoadingScreen } from './components/LoadingScreen'
import { Qualification } from './components/Qualification'
import { Admin } from './components/Admin'
import { Success } from './components/Success'
import { ProgressIndicator } from './components/ProgressIndicator'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

function App() {
  const { currentStep, formData, updateFormData, nextStep, prevStep, resetWizard } = useWizard()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep])

  useEffect(() => {
    if (currentStep === 'loading') {
      const timer = setTimeout(() => {
        nextStep()
      }, 7000)
      return () => clearTimeout(timer)
    }
  }, [currentStep, nextStep])

  // ⚡ GPU-optimized page variants - utilise transform au lieu de y
  const pageVariants = {
    initial: { 
      opacity: 0, 
      transform: 'translateY(20px)',
      willChange: 'transform, opacity'
    },
    animate: { 
      opacity: 1, 
      transform: 'translateY(0px)'
    },
    exit: { 
      opacity: 0, 
      transform: 'translateY(-20px)'
    }
  }

  // ⚡ Transition optimisée - durée réduite
  const pageTransition = {
    duration: 0.2,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden min-h-screen">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.556 0 0) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {currentStep !== 'landing' && currentStep !== 'security' && currentStep !== 'otp' && currentStep !== 'loading' && (
        <ProgressIndicator currentStep={currentStep} language={formData.language} />
      )}

      <AnimatePresence mode="wait">
        {currentStep === 'landing' && (
          <motion.div
            key="landing"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Landing
              language={formData.language}
              onLanguageChange={(lang) => updateFormData({ language: lang })}
              onStart={nextStep}
            />
          </motion.div>
        )}

        {currentStep === 'security' && (
          <motion.div
            key="security"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Security
              language={formData.language}
              birthDate={formData.birthDate}
              onBirthDateChange={(date) => updateFormData({ birthDate: date })}
              onNext={nextStep}
              onBack={prevStep}
            />
          </motion.div>
        )}

        {currentStep === 'otp' && (
          <motion.div
            key="otp"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <OTP
              language={formData.language}
              otpCode={formData.otpCode}
              onOTPChange={(code) => updateFormData({ otpCode: code })}
              onNext={nextStep}
              onBack={prevStep}
            />
          </motion.div>
        )}

        {currentStep === 'loading' && (
          <motion.div
            key="loading"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <LoadingScreen language={formData.language} />
          </motion.div>
        )}

        {currentStep === 'qualification' && (
          <motion.div
            key="qualification"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Qualification
              language={formData.language}
              reason={formData.reason}
              insurance={formData.insurance}
              hasEmployer={formData.hasEmployer}
              consentNLPD={formData.consentNLPD}
              consentMarketing={formData.consentMarketing}
              identityCard={formData.identityCard}
              insuranceCard={formData.insuranceCard}
              onReasonChange={(reason) => updateFormData({ reason })}
              onInsuranceChange={(insurance) => updateFormData({ insurance })}
              onHasEmployerChange={(hasEmployer) => updateFormData({ hasEmployer })}
              onConsentNLPDChange={(consentNLPD) => updateFormData({ consentNLPD })}
              onConsentMarketingChange={(consentMarketing) => updateFormData({ consentMarketing })}
              onIdentityCardChange={(identityCard) => updateFormData({ identityCard })}
              onInsuranceCardChange={(insuranceCard) => updateFormData({ insuranceCard })}
              onNext={nextStep}
              onBack={prevStep}
            />
          </motion.div>
        )}

        {currentStep === 'admin' && (
          <motion.div
            key="admin"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Admin
              language={formData.language}
              formData={formData}
              reason={formData.reason}
              insurance={formData.insurance}
              hasEmployer={formData.hasEmployer}
              onFormDataChange={(data) => updateFormData(data)}
              onNext={nextStep}
              onBack={prevStep}
            />
          </motion.div>
        )}

        {currentStep === 'success' && (
          <motion.div
            key="success"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Success
              language={formData.language}
              onRestart={resetWizard}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
