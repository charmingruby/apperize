import { PropsWithChildren } from 'react'
import { Navbar } from './components/navbar'

export default function CustomersDashboardLayout({
  children,
}: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
