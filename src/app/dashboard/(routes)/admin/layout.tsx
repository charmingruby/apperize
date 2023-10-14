import { PropsWithChildren } from 'react'
import { auth, clerkClient } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { Sidebar } from './components/sidebar'

async function getUserDataById(userId: string) {
  const user = await clerkClient.users.getOrganizationMembershipList({ userId })
  return user
}

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const { userId } = auth()

  let isAdmin = false

  if (userId) {
    const orgs = await getUserDataById(userId)

    isAdmin = orgs[0]?.role === 'admin'
  }

  if (!isAdmin) redirect('/')

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-dashboard bg-background">
      <Sidebar />
      <div className="px-4 pb-12 lg:col-start-2 lg:px-4 ">
        <main className="mt-20 lg:mt-4">{children}</main>
      </div>
    </div>
  )
}
