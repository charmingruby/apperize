import { Check, HeartHandshake, LucideIcon, User } from 'lucide-react'
import { FeatureItem } from './feature-item'
import { Separator } from '@/components/ui/separator'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export function Features() {
  return (
    <div className="space-y-6">
      <FeatureItem
        icon={Check}
        title="Entregas rápidas e funcionais (MVP)"
        description="Nossa estratégia MVP se destaca pela rápida implementação, acelerando o desenvolvimento de projetos e produtos para que os clientes vejam resultados tangíveis em um curto período, tornando suas ideias realidade de forma eficiente."
      />

      <Separator />

      <FeatureItem
        icon={HeartHandshake}
        title="Acompanhe de perto o desenvolvimento"
        description="Ao estabelecer canais de comunicação, garantimos que o feedback seja uma contribuição valiosa e essencial para o contínuo aprimoramento do software, solicitando e valorizando constantemente suas ideias e necessidades."
      />

      <Separator />

      <FeatureItem
        icon={User}
        title="Foco em quem está usando"
        description="Nossos produtos são cuidadosamente projetados com um foco absoluto na experiência do usuário, visando proporcionar interações suaves e gratificantes."
      />
    </div>
  )
}
