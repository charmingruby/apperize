import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  TabletSmartphone,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Top */}
      <div className="container w-full flex-col ">
        <div className="grid grid-cols-3 w-full py-16 ">
          <div>
            <span className="font-medium text-2xl">
              Sinta-se a vontade para entrar em contato com a gente
            </span>
          </div>

          {/* Location */}
          <div>
            <MapPin />
          </div>

          {/* Contact */}
          <div>
            <Mail />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-10 border-t border-border">
        <div className="grid grid-cols-3 container">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <TabletSmartphone className="text-primary" />
            <div className="font-alt font-semibold text-2xl">
              <span className="text-primary">App</span>
              <span>erize</span>
            </div>
          </div>
          {/* Copyright */}
          <div>© 2023 Apperize | Todos direitos reservados</div>
          {/* Social medias */}
          <div className="flex ">
            <Instagram />
            <Linkedin />
            <Facebook />
          </div>
        </div>
      </div>
    </footer>
  )
}
