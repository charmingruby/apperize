import { cn } from '@/libs/shadcn'
import { ComponentProps } from 'react'

type ContainerWrapperProps = ComponentProps<'div'>

export function ContainerWrapper({
  className,
  ...props
}: ContainerWrapperProps) {
  return (
    <div
      className={cn('container py-12 lg:py-20 scroll-mt-8', className)}
      {...props}
    />
  )
}
