import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import Link from 'next/link'

export function Actions() {
  return (
    <div className="hidden lg:flex gap-2 items-center">
      <Link href="/login" prefetch={false}>
        <Button variant="ghost" size="sm" className="text-primary">
          <User className="h-4 w-4" />
          <span className="text-foreground">Entrar</span>
        </Button>
      </Link>

      <Button size="sm" variant="outline">
        Fazer pedido
      </Button>
    </div>
  )
}
