interface DashboardHeadingProps {
  title: string
  description: string
}

export function DashboardHeading({
  title,
  description,
}: DashboardHeadingProps) {
  return (
    <div className="flex flex-col gap-2 pb-4 mb-4 border-b">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <small className="text-sm text-muted-foreground">{description}</small>
    </div>
  )
}
