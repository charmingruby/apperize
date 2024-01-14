import { Check, HeartHandshake, User } from 'lucide-react'
import { FeatureItem } from './feature-item'

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FeatureItem
        icon={Check}
        title="Entregas Rápidas"
        description="Nossa estratégia MVP se destaca pela rápida implementação, acelerando o desenvolvimento de projetos e produtos para que os clientes vejam resultados tangíveis em um curto período."
      />
      <FeatureItem
        icon={Check}
        title="Entregas Rápidas"
        description="Nossa estratégia MVP se destaca pela rápida implementação, acelerando o desenvolvimento de projetos e produtos para que os clientes vejam resultados tangíveis em um curto período."
      />
      <FeatureItem
        icon={HeartHandshake}
        title="Feedbacks Contínuos"
        description="Ao estabelecer canais de comunicação, garantimos que o feedback seja uma contribuição valiosa e essencial para o contínuo aprimoramento do software.."
      />
      <FeatureItem
        icon={User}
        title="Experiência de Usuário"
        description="Nossos produtos são cuidadosamente projetados com um foco absoluto na experiência do usuário, visando proporcionar interações suaves e gratificantes."
      />
    </div>
  )
}
