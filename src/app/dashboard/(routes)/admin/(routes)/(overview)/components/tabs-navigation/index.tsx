import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { auth, clerkClient } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { Navigation } from './navigation'

async function getUserData() {
  const { userId } = auth()

  if (!userId) {
    return null
  }
  const orgs = await clerkClient.users.getOrganizationMembershipList({ userId })
  return orgs
}

export async function TabsNavigation() {
  const orgs = await getUserData()

  if (!orgs) {
    redirect('/')
  }

  const isAdmin = orgs[0]?.role === 'admin'
  if (!isAdmin) {
    redirect('/')
  }

  return (
    <ScrollArea className="max-w-screen h-12">
      <Navigation />
      <ScrollBar orientation="horizontal" className="translate-y-1 absolute" />
    </ScrollArea>
  )
}
