import { MissionVisionValue } from '@/contents/mission-vision-value'

export function MissionVisionValueItem({
  icon: Icon,
  label,
  content,
}: MissionVisionValue) {
  return (
    <div className="flex flex-col w-full p-4 lg:p-8">
      <div className="bg-background-alt-dark border-4 w-fit p-2 border-background-alt rounded-full">
        <Icon className="text-primary h-7 w-7" />
      </div>

      <strong className="text-xl mt-3">{label}</strong>

      <span className="text-muted-foreground text-sm mt-1.5">{content}</span>
    </div>
  )
}
