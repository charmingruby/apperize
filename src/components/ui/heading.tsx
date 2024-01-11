import { cn } from '@/libs/shadcn'
import { ComponentProps } from 'react'

// Wrapper
type HeadingWrapperProps = ComponentProps<'div'>
export function HeadingWrapper({ className, ...props }: HeadingWrapperProps) {
  return (
    <div className={cn('mb-12 flex flex-col w-full', className)} {...props} />
  )
}

// Annotation
type HeadingAnnotationProps = {
  annotation: string
}
export function HeadingAnnotation({ annotation }: HeadingAnnotationProps) {
  return (
    <div className="w-fit space-y-4 mb-4 ">
      <span className="text-primary text-sm tracking-widest font-medium block leading-snug">
        {annotation.toUpperCase()}
      </span>
    </div>
  )
}

// ContentWrapper
type HeadingContentWrapperProps = ComponentProps<'div'>
export function HeadingContentWrapper({
  className,
  ...props
}: HeadingContentWrapperProps) {
  return <div className={cn('space-y-4', className)} {...props} />
}

// Title
type HeadingTitleProps = ComponentProps<'h2'>
export function HeadingTitle({ className, ...props }: HeadingTitleProps) {
  return <h2 className={cn('text-4xl font-semibold', className)} {...props} />
}

// Description
type HeadingDescriptionProps = ComponentProps<'div'>
export function HeadingDescription({
  className,
  ...props
}: HeadingDescriptionProps) {
  return (
    <div
      className={cn('text-muted-foreground leading-relaxed', className)}
      {...props}
    />
  )
}
