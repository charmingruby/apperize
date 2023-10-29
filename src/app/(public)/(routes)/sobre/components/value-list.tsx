import {
  Clock4,
  HeartHandshake,
  MailCheck,
  MessagesSquare,
  Puzzle,
  TrendingUp,
} from 'lucide-react'
import { ElementType } from 'react'
import { ValueItem } from './value-item'

export interface ValueItemProps {
  icon: ElementType
  title: string
  description: string
}

const valuesList: ValueItemProps[] = [
  {
    icon: HeartHandshake,
    title: 'Conectar com Clientes',
    description:
      'Estabelecemos relacionamentos sólidos e entregamos soluções personalizadas.',
  },
  {
    icon: Puzzle,
    title: 'Inovação Constante',
    description: 'Abraçamos inovações para soluções de última geração.',
  },
  {
    icon: MessagesSquare,
    title: 'Colaboração Eficaz',
    description:
      'Valorizamos trabalho em equipe para alcançar os melhores resultados.',
  },
  {
    icon: Clock4,
    title: 'Entrega Pontual',
    description: 'Cumprimos prazos rigorosamente para satisfação do cliente.',
  },
  {
    icon: TrendingUp,
    title: 'Nossa equipe faz a diferença',
    description:
      'Acreditamos na força da equipe para superar desafios e inovar.',
  },
  {
    icon: MailCheck,
    title: 'Feedback Proativo',
    description:
      'Compromisso com feedback proativo para atender às necessidades dos clientes.',
  },
]

export function ValueItemList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {valuesList.map(({ icon: Icon, title, description }) => (
        <ValueItem
          key={title}
          icon={Icon}
          title={title}
          description={description}
        />
      ))}
    </div>
  )
}
