import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { Footer } from './_components/footer'
import { Drawer } from './_components/navigation/drawer'
import { Header } from './_components/navigation/header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Drawer />
      <WhatsAppWidget />
      <main>{children}</main>
      <Footer />
    </>
  )
}
