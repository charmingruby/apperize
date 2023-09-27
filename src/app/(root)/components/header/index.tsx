import { Logo } from '@/app/(root)/components/header/logo'
import { NavItem } from './nav-item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-border flex items-center fixed w-full z-20 bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden lg:flex gap-6">
          <NavItem label="Início" url="/" />
          <NavItem label="Pedidos" url="/unknown" />
          <NavItem label="Produtos" url="/unknown" />
          <NavItem label="Sobre" url="/sobre" />
          <NavItem label="Contato" url="/unknown" />
        </div>

        <div className="hidden lg:flex gap-2 items-center">
          <Link href="/login" prefetch={false}>
            <Button variant="outline" size="sm">
              Entrar
            </Button>
          </Link>

          <Button size="sm">Fazer pedido</Button>
        </div>

        <div className="flex lg:hidden">
          <Menu />
        </div>
      </div>
    </header>
  )
}
