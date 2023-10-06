import { PropsWithChildren } from 'react'
import { Header } from './components/header'
import { Navbar } from './components/navbar'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const { userId } = auth()

  if (!userId) redirect('/login')

  return (
    <>
      <Header />
      <Navbar />
      <main className="px-8 mt-6">{children}</main>
    </>
  )
}
