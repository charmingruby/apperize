import { cn } from '@/libs/shadcn'
import { ComponentProps } from 'react'

type TextHighlightProps = ComponentProps<'span'>

export function TextHighlight({ className, ...props }: TextHighlightProps) {
  return (
    <span
      className={cn(
        'underline-offset-4 underline decoration-wavy decoration-primary',
        className,
      )}
      {...props}
    />
  )
}
