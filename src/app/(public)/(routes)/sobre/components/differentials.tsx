import { Check } from 'lucide-react'

interface Differential {
  title: string
  description: string
}

const differentials: Differential[] = [
  {
    title: 'Transparência',
    description:
      'Fornecer informações claras sobre o processo de desenvolvimento, custos e cronograma para que os clientes tenham visibilidade total.',
  },
  {
    title: 'Manutenção e suporte pós-lançamento',
    description:
      'Oferece serviços de suporte contínuo, correções de bugs e atualizações para garantir que o software funcione sem problemas após o lançamento.',
  },
  {
    title: 'Cumprimento de prazos',
    description:
      'Compromisso com prazos de entrega, garantindo que os projetos sejam concluídos dentro do prazo acordado.',
  },
  {
    title: 'Comunicação eficaz',
    description:
      'Mantém uma comunicação aberta e regular com os clientes para manter todos informados sobre o progresso do projeto e para responder prontamente a quaisquer preocupações ou mudanças.',
  },
]

export function Differentials() {
  return (
    <div className="mt-12 space-y-6">
      {differentials.map(({ title, description }) => (
        <div className="flex gap-4" key={title}>
          <div className="">
            <div className="bg-background-highlight-dark w-6 h-6 rounded-full flex items-center justify-center">
              <Check className="text-primary h-4 w-4" />
            </div>
          </div>

          <div>
            <strong>{title}:</strong>{' '}
            <span className="text-sm w-full leading-relaxed">
              {description}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
