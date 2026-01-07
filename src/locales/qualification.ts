/**
 * Traductions pour la page Qualification
 * @module locales/qualification
 */

export const qualificationTranslations = {
  fr: {
    // Header
    title: 'Identification',
    subtitle: 'Aidez-nous à mieux comprendre votre situation',
    
    // Reason section
    reasonLabel: 'Raison de la venue',
    illness: 'Maladie',
    accident: 'Accident',
    
    // Employer section
    hasEmployerLabel: 'J\'ai un employeur',
    yes: 'Oui',
    no: 'Non',
    
    // Insurance section
    insuranceLabel: 'Type d\'assurance',
    swiss: 'Assurance LAMal',
    international: 'Autre assurance',
    auto: 'Autopayeur',
    
    // Documents section
    documentsLabel: 'Documents requis',
    identityCard: 'Carte d\'identité ou passport',
    insuranceCard: 'Carte d\'assurance maladie (base)',
    uploadText: 'Glisser-déposer ou cliquer',
    
    // Consents section
    consentsLabel: 'Consentements',
    consentNLPDPrefix: 'J\'accepte la ',
    consentNLPDLink: 'Politique de confidentialité',
    privacyPolicyUrl: 'https://www.la-tour.ch/fr/informations-generales/politique-de-confidentialite',
    consentMarketing: 'J\'aimerais être informé des services ou offres complémentaires de l\'Hôpital de La Tour en lien avec mon parcours de soins et mes besoins.',
    
    // Buttons
    continue: 'Continuer',
    back: 'Retour',
    
    // Validation errors
    reasonRequired: 'Veuillez sélectionner une raison',
    insuranceRequired: 'Veuillez sélectionner un type d\'assurance',
    identityCardRequired: 'La carte d\'identité est obligatoire',
    insuranceCardRequired: 'La carte d\'assurance est obligatoire',
    consentNLPDRequired: 'Le consentement nLPD est obligatoire',
    
    // Misc
    optional: 'Optionnel',
    
    // File errors
    fileTooLarge: 'Le fichier est trop volumineux. Taille maximale: 10 MB',
    invalidFileFormat: 'Format de fichier non valide. Formats acceptés: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF',
    fileTooLargeAndInvalidFormat: 'Le fichier est trop volumineux et le format n\'est pas valide. Taille maximale: 10 MB. Formats acceptés: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF',
    
    // Insurance help dialog
    insuranceHelp: 'En savoir plus',
    insuranceHelpTitle: 'Choix du type d\'assurance',
    insuranceHelpSwiss: 'Assurance LAMal',
    insuranceHelpSwissDesc: 'Concerne les personnes affiliées au système d\'assurance maladie obligatoire suisse (LaMAL/KVG). C\'est le cas pour la majorité des résidents en Suisse.',
    insuranceHelpInternational: 'Autre assurance',
    insuranceHelpInternationalDesc: 'Sélectionnez cette option si votre couverture ne relève pas de l\'assurance de base LaMAL. Cela inclut principalement deux cas :',
    insuranceHelpInternationalItem1: 'Assurances d\'organisations internationales : Si vous êtes affilié(e) au régime d\'assurance de votre employeur (ex: CERN, ONU, missions diplomatiques).',
    insuranceHelpInternationalItem2: 'Assurances privées suisses (hors LaMAL) : Si vous disposez d\'une assurance privée qui n\'opère pas dans le cadre de la LaMAL (ex: certaines polices d\'AXA, Zurich, etc.).',
    insuranceHelpAuto: 'Autopayeur',
    insuranceHelpAutoDesc: 'Sélectionnez cette option si vous prévoyez de régler vous-même l\'intégralité des frais de votre visite, sans passer par une assurance. Un acompte pourra vous être demandé lors de votre admission.'
  },
  en: {
    // Header
    title: 'Identification',
    subtitle: 'Help us better understand your situation',
    
    // Reason section
    reasonLabel: 'Reason for visit',
    illness: 'Illness',
    accident: 'Accident',
    
    // Employer section
    hasEmployerLabel: 'I have an employer',
    yes: 'Yes',
    no: 'No',
    
    // Insurance section
    insuranceLabel: 'Insurance type',
    swiss: 'LAMal insurance',
    international: 'Other insurance',
    auto: 'Self-payer',
    
    // Documents section
    documentsLabel: 'Required documents',
    identityCard: 'ID card or passport',
    insuranceCard: 'Insurance card (Basic)',
    uploadText: 'Drag & drop or click',
    
    // Consents section
    consentsLabel: 'Consents',
    consentNLPDPrefix: 'I accept the ',
    consentNLPDLink: 'Privacy policy',
    privacyPolicyUrl: 'https://www.la-tour.ch/en/general-information/privacy-policy',
    consentMarketing: 'I would like to be informed about any additional services or offerings at Hôpital de La Tour that relate to my care pathway and needs.',
    
    // Buttons
    continue: 'Continue',
    back: 'Back',
    
    // Validation errors
    reasonRequired: 'Please select a reason',
    insuranceRequired: 'Please select an insurance type',
    identityCardRequired: 'Identity card is required',
    insuranceCardRequired: 'Insurance card is required',
    consentNLPDRequired: 'Data protection consent is required',
    
    // Misc
    optional: 'Optional',
    
    // File errors
    fileTooLarge: 'File is too large. Maximum size: 10 MB',
    invalidFileFormat: 'Invalid file format. Accepted formats: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF',
    fileTooLargeAndInvalidFormat: 'File is too large and format is invalid. Maximum size: 10 MB. Accepted formats: PDF, JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIF, TIFF',
    
    // Insurance help dialog
    insuranceHelp: 'Learn more',
    insuranceHelpTitle: 'Insurance type selection',
    insuranceHelpSwiss: 'Swiss insurance',
    insuranceHelpSwissDesc: 'For individuals affiliated with the Swiss mandatory health insurance system (LAMal/KVG). This applies to the majority of residents in Switzerland.',
    insuranceHelpInternational: 'Other insurance',
    insuranceHelpInternationalDesc: 'Select this option if your coverage is not part of LAMal basic insurance. This primarily includes two cases:',
    insuranceHelpInternationalItem1: 'International organization insurance: If you are affiliated with your employer\'s insurance scheme (e.g., CERN, UN, diplomatic missions).',
    insuranceHelpInternationalItem2: 'Swiss private insurance (outside LAMal): If you have private insurance that does not operate within the LAMal framework (e.g., certain policies from AXA, Zurich, etc.).',
    insuranceHelpAuto: 'Self-payer',
    insuranceHelpAutoDesc: 'Select this option if you plan to pay for your visit in full yourself, without going through insurance. A deposit may be requested upon admission.'
  }
} as const

export type QualificationTranslations = typeof qualificationTranslations.fr
export type SupportedLanguage = keyof typeof qualificationTranslations
