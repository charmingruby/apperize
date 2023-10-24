import { ElementType } from 'react'

interface ContactItemProps {
  icon: ElementType
  content: string
}

export function ContactItem({ icon: Icon, content }: ContactItemProps) {
  return (
    <div className="flex items-center">
      <div className="h-12 w-12 flex items-center justify-center bg-background-highlight-dark border-4 border-background-highlight-main rounded-full">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      <strong className="text-muted-foreground font-medium">{content}</strong>
    </div>
  )
}
