import { PropsWithChildren } from 'react'
import { Header } from './components/header'
import { Navbar } from './components/navbar'
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
    <div className="min-h-screen grid grid-cols-dashboard">
      <Sidebar />
      <div className="px-4 pb-12 lg:col-start-2 lg:px-4 ">
        <Header />
        <Navbar />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  )
}
