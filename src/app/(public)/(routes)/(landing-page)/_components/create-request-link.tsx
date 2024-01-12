import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CreateRequestLinkProps {
  label?: string
}

export function CreateRequestLink({ label }: CreateRequestLinkProps) {
  const text = label || 'Fazer pedido'

  return (
    <Button className="w-fit" asChild>
      <a href="#make-request" className="outline-none">
        {text} <ArrowRight className="w-4 h-4" />
      </a>
    </Button>
  )
}
