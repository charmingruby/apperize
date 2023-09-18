import { Logo } from '@/app/(root)/components/header/logo'
import { NavItem } from './nav-item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b border-border flex items-center fixed w-full z-20 bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <div className="flex gap-6">
          <NavItem label="Início" url="/" />
          <NavItem label="Sobre" url="/sobre" />
          <NavItem label="Serviços" url="/sobre" />
          <NavItem label="Contato" url="/sobre" />
        </div>

        <div className="flex gap-4 items-center">
          <Link
            href="/"
            prefetch={false}
            className="font-medium text-base text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Button size="sm" className="font-medium text-base ">
            Criar conta
          </Button>
        </div>
      </div>
    </header>
  )
}
