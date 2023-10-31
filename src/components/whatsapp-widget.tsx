import Image from 'next/image'
import { RedirectLink } from './redirect-link'
import whatsappImg from '@/assets/img/socials/whatsapp-logo.png'

export function WhatsAppWidget() {
  return (
    <button className="fixed z-30 bottom-4 right-4 lg:bottom-8 lg:right-8">
      <RedirectLink url="/">
        <Image src={whatsappImg} alt="Logo do WhatsApp" className="h-16 w-16" />
      </RedirectLink>
    </button>
  )
}
