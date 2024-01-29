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
      'Oferecer um serviço de qualidade ao entender as necessidades do cliente e transformar o sonho em realidade digital.',
  },
  {
    icon: Eye,
    label: 'Visão',
    content:
      'Ser referência na área de desenvolvimento na região dentro de cinco anos.',
  },
  {
    icon: Gem,
    label: 'Valor',
    content:
      'Criatividade, Responsabilidade, Respeito, Modernidade e Inovação.',
  },
]
