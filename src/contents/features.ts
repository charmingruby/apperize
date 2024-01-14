import { Check, HeartHandshake, LucideIcon, User } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Check,
    title: 'Entregas Rápidas',
    description:
      'Nossa estratégia MVP se destaca pela rápida implementação, acelerando o desenvolvimento de projetos e produtos para que os clientes vejam resultados tangíveis em um curto período.',
  },
  {
    icon: HeartHandshake,
    title: 'Feedbacks Contínuos',
    description:
      'Ao estabelecer canais de comunicação, garantimos que o feedback seja uma contribuição valiosa e essencial para o contínuo aprimoramento do software..',
  },
  {
    icon: User,
    title: 'Experiência de Usuário',
    description:
      'Nossos produtos são cuidadosamente projetados com um foco absoluto na experiência do usuário, visando proporcionar interações suaves e gratificantes.',
  },
  {
    icon: User,
    title: 'falta esse 1',
    description:
      'Nossos produtos são cuidadosamente projetados com um foco absoluto na experiência do usuário, visando proporcionar interações suaves e gratificantes.',
  },
]
