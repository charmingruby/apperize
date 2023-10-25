import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LucideIcon, HeartHandshake, AreaChart, Bot } from 'lucide-react'

interface Mission {
  icon: LucideIcon
  title: string
  description: string
}

const missions: Mission[] = [
  {
    title: 'Gestão de Dados Ineficiente',
    description:
      'A falta de uma gestão de dados eficiente pode levar a um acúmulo de informações desorganizadas e inacessíveis. Isso resulta em tomada de decisão ineficaz, perda de tempo na busca por dados relevantes e a possibilidade de erros críticos devido a informações desatualizadas ou imprecisas.',
    icon: AreaChart,
  },
  {
    title: 'Automação de Processos',
    description:
      ' A ausência de automação de processos pode causar ineficiências operacionais significativas. Tarefas manuais repetitivas consomem tempo valioso e aumentam o risco de erros humanos. Além disso, a falta de automação pode impedir a escalabilidade e a capacidade de responder rapidamente às mudanças nas demandas do mercado.',
    icon: Bot,
  },
  {
    title: 'Assistência ao Cliente',
    description:
      'A falta de um sistema eficaz de assistência ao cliente pode resultar em uma experiência do cliente insatisfatória. Os clientes podem enfrentar longos tempos de espera, respostas inconsistentes e falta de soluções para seus problemas. Isso pode levar à perda de clientes, reputação prejudicada e menor fidelidade à marca.',
    icon: HeartHandshake,
  },
]
export function Missions() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {missions.map(({ icon: Icon, title, description }) => (
        <Card key={title} className="flex flex-col ">
          <CardHeader className="">
            <div className="bg-background-highlight-dark w-fit p-2 border-4 mb-4 border-background-highlight-main rounded-full">
              <Icon className="w-10 h-10 text-primary" />
            </div>

            <CardTitle className="text-primary font-semibold text-xl block">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
