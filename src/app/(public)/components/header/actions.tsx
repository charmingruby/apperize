import { Button } from '@/components/ui/button'
import { UserButton, auth, clerkClient } from '@clerk/nextjs'
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
            <Button variant="outline" size="sm">
              Entrar
            </Button>
          </Link>

          <Button size="sm">Fazer pedido</Button>
        </>
      ) : (
        <div className="flex items-center space-x-4">
          <Link
            prefetch={false}
            href={isAdmin ? '/dashboard/admin' : '/dashboard'}
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
