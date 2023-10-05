import { Button } from '@/components/ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'

export function Actions() {
  const { userId } = auth()

  return (
    <div className="hidden lg:flex gap-2 items-center">
      {!userId ? (
        <>
          <Link href="/login" prefetch={false}>
            <Button variant="outline" size="sm">
              Entrar
            </Button>
          </Link>

          <Button size="sm">Fazer pedido</Button>
        </>
      ) : (
        <div className="flex items-center space-x-4">
          <Link prefetch={false} href="/dashboard">
            <Button size="sm">Ver pedidos</Button>
          </Link>
          <div className="w-px h-8 bg-border" />
          <UserButton />
        </div>
      )}
    </div>
  )
}
