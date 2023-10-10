import { PropsWithChildren } from 'react'
import { Header } from './components/header'
import { Navbar } from './components/navbar'
import { auth, clerkClient } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

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
    <>
      <Header />
      <Navbar />
      <main className="px-8 mt-6">{children}</main>
    </>
  )
}
