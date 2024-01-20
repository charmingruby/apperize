import { MissionVisionValueItem } from './item'
import { missionVisionValue } from '@/contents/mission-vision-value'
import { Card } from '@/components/ui/card'

export function MissionVisionValue() {
  return (
    <Card className="flex flex-col lg:flex-row lg:gap-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-border">
      <MissionVisionValueItem {...missionVisionValue[0]} />
      <MissionVisionValueItem {...missionVisionValue[1]} />
      <MissionVisionValueItem {...missionVisionValue[2]} />
    </Card>
  )
}
