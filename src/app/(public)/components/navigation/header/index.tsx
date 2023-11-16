import { Logo } from '@/app/(public)/components/navigation/header/logo'
import { MainNav } from './main-nav'
import { Actions } from './actions'
import { MenuButton } from './menu-button'

export function Header() {
  return (
    <header className=" border-b border-border flex items-center fixed w-full z-50 bg-background shadow-sm">
      <div className="container gap-16 flex h-16 items-center justify-between">
        <Logo />

        <div className="flex items-center gap-6">
          <MainNav />
          <Actions />
          <MenuButton />
        </div>
      </div>
    </header>
  )
}
