import { navItemsList } from '../navigation-items-list'
import { NavItem } from './nav-item'

export function MainNav() {
  return (
    <div className="hidden lg:flex md:gap-3 lg:gap-6">
      {navItemsList.map(({ label, url }) => (
        <NavItem key={label} label={label} url={url} />
      ))}
    </div>
  )
}
