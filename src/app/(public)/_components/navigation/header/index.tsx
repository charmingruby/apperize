import { Logo } from '@/app/(public)/_components/navigation/header/logo'
import { MainNav } from './main-nav'
import { Actions } from './actions'
import { MenuButton } from './menu-button'
import { Separator } from '@/components/ui/separator'

export function Header() {
  return (
    <header className=" border-b border-border flex items-center fixed w-full z-50 bg-background shadow-sm">
      <div className="container gap-16 flex h-16 items-center justify-between">
        <Logo />

        <div className="flex items-center gap-6">
          <MainNav />
          <Separator orientation="vertical" className="h-8" />
          <Actions />
          <MenuButton />
        </div>
      </div>
    </header>
  )
}
