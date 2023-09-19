import { cn } from '@/libs/shadcn'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const textVariants = cva('leading-relaxed', {
  variants: {
    variant: {},
    size: {
      default: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

type TextProps = ComponentProps<'p'> & VariantProps<typeof textVariants>

export function Text({ variant, size, className, ...props }: TextProps) {
  return (
    <p
      className={cn(
        textVariants({
          size,
          variant,
          className,
        }),
      )}
      {...props}
    />
  )
}
