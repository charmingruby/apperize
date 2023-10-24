import { Logo } from '@/app/(public)/components/header/logo'
import { Menu } from 'lucide-react'
import { MainNav } from './main-nav'
import { Actions } from './actions'

export async function Header() {
  return (
    <header className="border-b border-border flex items-center fixed w-full z-50 bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-16">
          <Logo />
          <MainNav />
        </div>
        <Actions />

        <div className="flex lg:hidden">
          <Menu />
        </div>
      </div>
    </header>
  )
}
