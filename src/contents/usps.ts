import { Code2, Headphones, Lightbulb, MessagesSquare } from 'lucide-react'
import { ElementType } from 'react'

export interface ValueItemProps {
  icon: ElementType
  title: string
  description: string
  percentage: number
}

export const usps: ValueItemProps[] = [
  {
    icon: Lightbulb,
    title: 'Ideia',
    description:
      'Envie uma mensagem dizendo seus problemas e necessidades, e retornaremos uma mensagem.',
    percentage: 25,
  },
  {
    icon: MessagesSquare,
    title: 'Conversa com equipe',
    description:
      'Agendaremos uma reunião para alinhar ideias de ambos os lados e apresentarmos nossas opções de solução, juntamente do orçamento.',
    percentage: 50,
  },
  {
    icon: Code2,
    title: 'Desenvolvimento',
    description:
      'Enquanto desenvolvemos o seu produto, certificamo-nos de fornecer atualizações frequentes e descritivas sobre o andamento do desenvolvimento.',
    percentage: 75,
  },
  {
    icon: Headphones,
    title: 'Suporte',
    description:
      'Após a entrega da primeira versão, oferecemos suporte, tanto para corrigir bugs inesperados quanto para o desenvolvimento de novas funcionalidades.',
    percentage: 100,
  },
]
