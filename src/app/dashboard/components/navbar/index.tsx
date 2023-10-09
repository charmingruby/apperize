import { auth, clerkClient } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

async function getUserData() {
  const { userId } = auth()

  if (!userId) {
    return null
  }
  const orgs = await clerkClient.users.getOrganizationMembershipList({ userId })
  return orgs
}

export async function Navbar() {
  const orgs = await getUserData()

  if (!orgs) {
    redirect('/')
  }

  const isAdmin = orgs[0]?.role === 'admin'

  if (!isAdmin) {
    return (
      <div className="border-b h-10 px-8 flex items-center gap-6">
        <div className="h-10 flex items-center border-b-2 border-primary text-primary font-medium text-sm">
          Visao geral
        </div>
        <div className="text-muted-foreground font-medium text-sm">
          Serviços
        </div>
        <div className="text-muted-foreground font-medium text-sm">Relatos</div>
        <div className="text-muted-foreground font-medium text-sm">
          Pagamentos
        </div>
        <div className="text-muted-foreground font-medium text-sm">
          Configuraçoes
        </div>
      </div>
    )
  }
  return (
    <div className="border-b h-10 px-8 flex items-center gap-6">
      <div className="h-10 flex items-center border-b-2 border-primary text-primary font-medium text-sm">
        Visao geral
      </div>
      <div className="text-muted-foreground font-medium text-sm">Pedidos</div>
      <div className="text-muted-foreground font-medium text-sm">Clientes</div>
      <div className="text-muted-foreground font-medium text-sm">
        Changelogs
      </div>
      <div className="text-muted-foreground font-medium text-sm">Finanças</div>
      <div className="text-muted-foreground font-medium text-sm">
        Configuraçoes
      </div>
    </div>
  )
}
