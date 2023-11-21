import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Actions() {
  return (
    <div className="hidden lg:flex gap-2 items-center">
      <Link href="/fazer-pedido" prefetch={false}>
        <Button size="sm" variant="default">
          <span className="text-base">Fazer pedido</span>
        </Button>
      </Link>
    </div>
  )
}
