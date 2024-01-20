import { Eye, Gem, LucideIcon, Target } from 'lucide-react'

export interface MissionVisionValue {
  icon: LucideIcon
  label: string
  content: string
}

export const missionVisionValue: MissionVisionValue[] = [
  {
    icon: Target,
    label: 'Missão',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ut doloremque ducimus assumenda cumque corrupti ab nostrum accusamus quo culpa suscipit, veniam hic fugiat sunt saepe excepturi totam. Ex, error!',
  },
  {
    icon: Eye,
    label: 'Visão',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ut doloremque ducimus assumenda cumque corrupti ab nostrum accusamus quo culpa suscipit, veniam hic fugiat sunt saepe excepturi totam. Ex, error!',
  },
  {
    icon: Gem,
    label: 'Valor',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ut doloremque ducimus assumenda cumque corrupti ab nostrum accusamus quo culpa suscipit, veniam hic fugiat sunt saepe excepturi totam. Ex, error!',
  },
]
