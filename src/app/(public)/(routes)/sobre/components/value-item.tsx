import { ElementType } from 'react'

interface ValueItemProps {
  icon: ElementType
  title: string
  description: string
}

export function ValueItem({ icon: Icon, title, description }: ValueItemProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="bg-background-highlight-dark border-4 border-background-highlight-main rounded-full p-2 w-fit">
        <Icon className="text-primary h-7 w-7" />
      </div>

      <div className="flex flex-col gap-2">
        <strong className="text-xl">{title}</strong>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
