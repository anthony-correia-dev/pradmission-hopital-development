import { CheckCircle } from 'lucide-react'
import { cn } from '@/utils'

interface ChoiceButtonProps {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
  sm?: boolean
  className?: string
}

export function ChoiceButton({ selected, onClick, children, sm, className }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'choice-btn flex-1 border',
        sm && 'choice-btn--sm',
        selected ? 'choice-btn--selected' : 'choice-btn--unselected',
        className,
      )}
    >
      {selected && <CheckCircle className="w-4 h-4 absolute top-2 right-2" />}
      {children}
    </button>
  )
}
