import { useCases } from '@/contents/use-cases'

export function UseCases() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {useCases.map(({ color, description, icon: Icon, title }) => {
        const bgColor = color + '.2)'
        const iconColor = color + '1)'

        return (
          <div key={title}>
            <div
              style={{ backgroundColor: bgColor }}
              className="rounded w-10 h-10 flex items-center justify-center shadow-sm"
            >
              <Icon color={iconColor} className="h-5 w-5" />
            </div>

            <span className="text-lg font-medium block mt-4">{title}</span>

            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        )
      })}
    </div>
  )
}
