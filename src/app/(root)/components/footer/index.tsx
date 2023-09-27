import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  TabletSmartphone,
} from 'lucide-react'
import { SocialLink } from './social-link'

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Top */}
      <div className="container w-full flex-col ">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full py-12 md:py-16 gap-8">
          <div>
            <span className="font-medium text-2xl">
              Sinta-se a vontade para entrar em contato com a gente
            </span>
          </div>

          {/* Location */}
          <div className="flex gap-4">
            <MapPin className="text-primary h-8 w-8" strokeWidth={1.5} />

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <span className="text-lg font-medium">Nossa localidade</span>
              </div>

              <span className="text-muted-foreground">
                Juiz de Fora - MG, Brasil
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-4">
            <Mail className="text-primary h-8 w-8" strokeWidth={1.5} />

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <span className="text-lg font-medium">
                  Como podemos ajudar?
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground">
                  contato@apperize.com
                </span>
                <span className="text-muted-foreground">
                  gustavodiasa2121@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-6 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 container gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <TabletSmartphone className="text-primary" />
            <div className="font-alt font-semibold text-2xl">
              <span className="text-primary">App</span>
              <span>erize</span>
            </div>
          </div>
          {/* Copyright */}
          <div className="flex items-center text-muted-foreground text-sm">
            © 2023 Apperize | Todos direitos reservados
          </div>
          {/* Social medias */}
          <div className="flex items-center lg:justify-end gap-4">
            <SocialLink url="/" icon={Instagram} />
            <SocialLink url="/" icon={Facebook} />
            <SocialLink url="/" icon={Linkedin} />
          </div>
        </div>
      </div>
    </footer>
  )
}
