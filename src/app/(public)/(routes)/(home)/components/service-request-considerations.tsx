import { CheckCircle2 } from 'lucide-react'

interface ServiceRequestConsideration {
  consideration: string
}

const serviceRequestConsiderations: ServiceRequestConsideration[] = [
  {
    consideration: 'Soluções personalizadas',
  },
  {
    consideration: 'Controle de custos',
  },
  {
    consideration: 'Suporte técnico',
  },
]

export function ServiceRequestConsiderations() {
  return (
    <div className="space-y-2">
      {serviceRequestConsiderations.map(({ consideration }) => (
        <div key={consideration} className="flex items-center gap-1">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <span className="font-medium">{consideration}</span>
        </div>
      ))}
    </div>
  )
}
