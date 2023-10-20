import { Button } from '@/components/ui/button'
import { UserButton, auth, clerkClient } from '@clerk/nextjs'
import { User } from 'lucide-react'
import Link from 'next/link'

async function getUserDataById(userId: string) {
  const user = await clerkClient.users.getOrganizationMembershipList({ userId })
  return user
}

export async function Actions() {
  const { userId } = auth()
  let isAdmin = false

  if (userId) {
    const orgs = await getUserDataById(userId)

    isAdmin = orgs[0]?.role === 'admin'
  }

  return (
    <div className="hidden lg:flex gap-2 items-center">
      {!userId ? (
        <>
          <Link href="/login" prefetch={false}>
            <Button variant="ghost" size="sm" className="text-primary">
              <User className="h-4 w-4" />
              <span className="text-foreground">Entrar</span>
            </Button>
          </Link>

          <Button size="sm" variant="outline">
            Fazer pedido
          </Button>
        </>
      ) : (
        <div className="flex items-center space-x-4">
          <Link
            prefetch={false}
            href={isAdmin ? '/dashboard/admin' : '/dashboard/cliente'}
          >
            <Button size="sm">Dashboard</Button>
          </Link>
          <div className="w-px h-8 bg-border" />
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  )
}
