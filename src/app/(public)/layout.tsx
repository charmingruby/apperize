import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { Footer } from './_components/footer'
import { Drawer } from './_components/navigation/drawer'
import { Header } from './_components/navigation/header'
import { Overlay } from './_components/navigation/overlay'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Overlay />
      <Header />
      <Drawer />
      <WhatsAppWidget />
      <main>{children}</main>
      <Footer />
    </>
  )
}
