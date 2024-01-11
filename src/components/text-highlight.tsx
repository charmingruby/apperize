import { cn } from '@/libs/shadcn'
import { ComponentProps } from 'react'

type TextHighlightProps = ComponentProps<'span'>

export function TextHighlight({ className, ...props }: TextHighlightProps) {
  return (
    <span
      className={cn('bg-background-alt-dark text-primary', className)}
      {...props}
    />
  )
}
