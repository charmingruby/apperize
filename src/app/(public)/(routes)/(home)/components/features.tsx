import { Check, LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Check,
    title: 'Entregas rápidas e funcionais (MVP)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores, natus sit similique pariatur quis mollitia reprehenderit molestiae vitae, quia saepe quibusdam, error rerum quisquam deserunt.',
  },
  {
    icon: Check,
    title: 'Entregas rápidas e funcionais (MVP)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores, natus sit similique pariatur quis mollitia reprehenderit molestiae vitae, quia saepe quibusdam, error rerum quisquam deserunt.',
  },
  {
    icon: Check,
    title: 'Entregas rápidas e funcionais (MVP)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores, natus sit similique pariatur quis mollitia reprehenderit molestiae vitae, quia saepe quibusdam, error rerum quisquam deserunt.',
  },
]

export function Features() {
  return (
    <div className="space-y-8">
      {features.map(({ title, description, icon: Icon }) => (
        <div key={title} className="flex flex-col lg:flex-row gap-2">
          <div className="bg-background-highlight-dark h-fit -translate-y-2 w-fit p-1 rounded-full border-4 border-background-highlight-main">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          <div className="flex flex-col">
            <strong className="font-semibold text-primary text-lg">
              {title}
            </strong>
            <span className="text-base text-muted-foreground mt-2">
              {description}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
