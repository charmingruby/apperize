import { ElementType } from 'react'

interface CTAAnnotationProps {
  icon: ElementType
  content: string
}

export function CTAAnnotation({ icon: Icon, content }: CTAAnnotationProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="text-primary h-4 w-4" />
      <small className="font-medium text-muted-foreground text-sm">
        {content}
      </small>
    </div>
  )
}
