import { Lightbulb, MessagesSquare, Code2, Headphones } from 'lucide-react'
import { ValueItem } from './value-item'

export function USP() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ValueItem
        icon={Lightbulb}
        title="Ideia"
        description="Envie uma mensagem dizendo seus problemas e necessidades, e retornaremos uma mensagem."
        percentage={25}
      />

      <ValueItem
        icon={MessagesSquare}
        title="Conversa com equipe"
        description="Agendaremos uma reunião para alinhar ideias de ambos os lados e apresentarmos nossas opções de solução, juntamente do orçamento."
        percentage={50}
      />

      <ValueItem
        icon={Code2}
        title="Desenvolvimento"
        description="Enquanto desenvolvemos o seu produto, certificamo-nos de fornecer atualizações frequentes e descritivas sobre o andamento do desenvolvimento."
        percentage={75}
      />

      <ValueItem
        icon={Headphones}
        title="Suporte"
        description="Após a entrega da primeira versão, oferecemos suporte, tanto para corrigir bugs inesperados quanto para o desenvolvimento de novas funcionalidades."
        percentage={100}
      />
    </div>
  )
}
