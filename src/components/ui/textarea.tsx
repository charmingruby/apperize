import * as React from 'react'

import { cn } from '@/libs/shadcn'

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    hasError?: boolean
  }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `
          ${
            hasError
              ? 'border-red-500 placeholder-red-500'
              : 'border-border placeholder:text-muted-foreground'
          }
          flex min-h-[80px] w-full shadow-sm rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
