import { cn } from '@/libs/shadcn'
import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>

export function InputRoot({ className, ...props }: InputRootProps) {
  return <div className={cn('space-y-4', className)} {...props} />
}
