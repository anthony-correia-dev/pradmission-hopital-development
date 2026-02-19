import { useTranslation } from 'react-i18next'
import { Dialog, DialogContent, DialogHeader, DialogTitle, P } from '@/components/ui'

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
          <DialogTitle className="text-base">{t('insuranceHelpTitle')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <P color="accent" className="font-semibold! mb-1">{t('insuranceHelpSwiss')}</P>
            <P className="leading-relaxed">{t('insuranceHelpSwissDesc')}</P>
          </div>
          <div>
            <P color="accent" className="font-semibold! mb-1">{t('insuranceHelpInternational')}</P>
            <P className="leading-relaxed mb-2">{t('insuranceHelpInternationalDesc')}</P>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>{t('insuranceHelpInternationalItem1')}</li>
              <li>{t('insuranceHelpInternationalItem2')}</li>
            </ul>
          </div>
          <div>
            <P color="accent" className="font-semibold! mb-1">{t('insuranceHelpAuto')}</P>
            <P className="leading-relaxed">{t('insuranceHelpAutoDesc')}</P>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
