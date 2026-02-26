import { forwardRef } from 'react'
import { cn } from '@/utils'

type TextColor = 'primary' | 'accent' | 'error' | 'success' | 'muted' | 'muted-light' | 'white'
type TextSize = 'xs' | 'sm' | 'md' | 'lg'

const colorMap: Record<TextColor, string> = {
  primary: 'text-[var(--brand-text)]!',
  accent: 'text-[var(--brand-primary)]!',
  error: 'text-[var(--brand-error)]!',
  success: 'text-[var(--brand-success)]!',
  muted: 'text-slate-600!',
  'muted-light': 'text-slate-500!',
  white: 'text-white!',
}

const sizeMap: Record<TextSize, string> = {
  xs: 'text-xs!',
  sm: 'text-sm!',
  md: 'text-base!',
  lg: 'text-lg!',
}

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: TextColor
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: TextColor
  size?: TextSize
}

export const H1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, color, ...props }, ref) => (
    <h1 ref={ref} className={cn('text-2xl! font-bold! tracking-tight!', color && colorMap[color], className)} {...props} />
  ),
)
H1.displayName = 'H1'

export const H2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, color, ...props }, ref) => (
    <h2 ref={ref} className={cn('text-xl! font-semibold! tracking-tight!', color && colorMap[color], className)} {...props} />
  ),
)
H2.displayName = 'H2'

export const H3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, color, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-lg! font-semibold! tracking-tight! form-section-title', color && colorMap[color], className)} {...props} />
  ),
)
H3.displayName = 'H3'

export const H4 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, color, ...props }, ref) => (
    <h4 ref={ref} className={cn('text-base! font-semibold! tracking-tight!', color && colorMap[color], className)} {...props} />
  ),
)
H4.displayName = 'H4'

export const P = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, color, size, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm! leading-normal! text-foreground!', size && sizeMap[size], color && colorMap[color], className)} {...props} />
  ),
)
P.displayName = 'P'

export const Muted = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, color, size, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm! text-muted-foreground!', size && sizeMap[size], color && colorMap[color], className)}
      {...props}
    />
  ),
)
Muted.displayName = 'Muted'
