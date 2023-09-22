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
    <div className="flex border border-border p-4 flex-col rounded-md shadow-md">
      <div className="bg-background-highlight-main w-fit p-2 rounded-full">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      <strong className="font-semibold text-primary text-lg mt-4">
        {title}
      </strong>
      <span className="text-base mt-2">{description}</span>
    </div>
  )
}
