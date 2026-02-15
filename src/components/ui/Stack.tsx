import { forwardRef } from 'react'
import { cn } from '@/utils'

type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

type Direction = 'row' | 'column'

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: Direction
  align?: Align
  justify?: Justify
  gap?: number | string
  wrap?: boolean
  grow?: boolean
}

const alignMap: Record<Align, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
}

const directionMap: Record<Direction, string> = {
  row: 'flex-row',
  column: 'flex-col',
}

const justifyMap: Record<Justify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

export const HStack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, align = 'center', justify, gap, wrap, grow, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-row',
        alignMap[align],
        justify && justifyMap[justify],
        gap != null && `gap-${gap}`,
        wrap && 'flex-wrap',
        grow && 'flex-1',
        className,
      )}
      {...props}
    />
  ),
)
HStack.displayName = 'HStack'

export const VStack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, align, justify, gap, wrap, grow, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col',
        align && alignMap[align],
        justify && justifyMap[justify],
        gap != null && `gap-${gap}`,
        wrap && 'flex-wrap',
        grow && 'flex-1',
        className,
      )}
      {...props}
    />
  ),
)
VStack.displayName = 'VStack'

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = 'column', align, justify, gap, wrap, grow, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex',
        directionMap[direction],
        align && alignMap[align],
        justify && justifyMap[justify],
        gap != null && `gap-${gap}`,
        wrap && 'flex-wrap',
        grow && 'flex-1',
        className,
      )}
      {...props}
    />
  ),
)
Stack.displayName = 'Stack'
