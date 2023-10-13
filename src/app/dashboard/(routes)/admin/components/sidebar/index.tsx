import { Logo } from './logo'
import { MenuNavigation } from './menu-navigation'

export function Sidebar() {
  return (
    <aside className="border-r px-5 pb-8">
      <div className="h-16 flex items-center">
        <Logo />
      </div>

      <MenuNavigation />
    </aside>
  )
}
