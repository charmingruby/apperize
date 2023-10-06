import { cn } from '@/libs/shadcn'
import { ComponentProps } from 'react'

type ContainerWrapperProps = ComponentProps<'div'>

export function ContainerWrapper({
  className,
  ...props
}: ContainerWrapperProps) {
  return <div className={cn('container py-20', className)} {...props} />
}
