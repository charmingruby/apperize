import { MainNav } from './main-nav'
import { Actions } from './actions'
import { MenuButton } from './menu-button'
import { Separator } from '@/components/ui/separator'
import { Logo } from './logo'

export function Header() {
  return (
    <header className=" border-b border-border flex items-center fixed w-full z-50 bg-background shadow-sm">
      <div className="container gap-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-3 xl:gap-6">
          <MenuButton />
          <Logo />

          <Separator orientation="vertical" className="h-8 hidden lg:flex" />

          <MainNav />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-4">
              <Actions />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
