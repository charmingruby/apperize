import * as React from 'react'

import { cn } from '@/libs/shadcn'
import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>

export function InputRoot({ className, ...props }: InputRootProps) {
  return <div className={cn('space-y-2', className)} {...props} />
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md shadow-sm border ${
            hasError
              ? 'border-red-500 placeholder-red-500'
              : 'border-border placeholder:text-muted-foreground '
          } bg-background px-3 py-2 text-sm ring-offset-ye file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
