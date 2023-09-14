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
      <Icon className="h-7 text-primary" />
      <div className="flex flex-col gap-2">
        <strong className="font-semibold text-primary text-lg">{title}</strong>
        <span className="text-base">{description}</span>
      </div>
    </div>
  )
}
