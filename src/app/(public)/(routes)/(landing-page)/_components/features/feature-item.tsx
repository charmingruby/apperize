import { Feature } from './index'

export function FeatureItem({ title, description, icon: Icon }: Feature) {
  return (
    <div className="flex flex-col lg:flex-row gap-2">
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
