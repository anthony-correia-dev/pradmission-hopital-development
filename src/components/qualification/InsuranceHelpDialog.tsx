import { useTranslation } from 'react-i18next'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui'

interface InsuranceHelpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function InsuranceHelpDialog({ open, onOpenChange }: InsuranceHelpDialogProps) {
  const { t } = useTranslation('qualification')

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{t('insuranceHelpTitle')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-5 text-sm leading-relaxed text-[var(--brand-text)]">
          <div>
            <h4 className="font-bold text-[var(--brand-primary)] mb-1">{t('insuranceHelpSwiss')}</h4>
            <p>{t('insuranceHelpSwissDesc')}</p>
          </div>
          <div>
            <h4 className="font-bold text-[var(--brand-primary)] mb-1">{t('insuranceHelpInternational')}</h4>
            <p className="mb-2">{t('insuranceHelpInternationalDesc')}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('insuranceHelpInternationalItem1')}</li>
              <li>{t('insuranceHelpInternationalItem2')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[var(--brand-primary)] mb-1">{t('insuranceHelpAuto')}</h4>
            <p>{t('insuranceHelpAutoDesc')}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
