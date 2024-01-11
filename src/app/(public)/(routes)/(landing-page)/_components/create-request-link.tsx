import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CreateRequestLinkProps {
  label?: string
}

export function CreateRequestLink({ label }: CreateRequestLinkProps) {
  const text = label || 'Fazer pedido'

  return (
    <a href="#make-request" className="w-full md:w-fit outline-none">
      <Button size="lg" className="text-base w-full md:w-fit">
        {text} <ArrowRight className="w-4 h-4" />
      </Button>
    </a>
  )
}
