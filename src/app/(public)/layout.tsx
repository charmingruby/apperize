import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { Footer } from './components/footer'
import { Drawer } from './components/navigation/drawer'
import { Header } from './components/navigation/header'

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
