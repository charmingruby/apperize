import { ElementType } from 'react'

interface FeatureItemProps {
  icon: ElementType
  title: string
  description: string
}

export function FeatureItem({
  icon: Icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="flex gap-2">
      <div className="bg-background-highlight-dark h-fit -translate-y-2 w-fit p-1 rounded-full border-4 border-background-highlight-main">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      <div className="flex flex-col">
        <strong className="font-semibold text-primary text-lg">{title}</strong>
        <span className="text-base text-muted-foreground mt-2">
          {description}
        </span>
      </div>
    </div>
  )
}
