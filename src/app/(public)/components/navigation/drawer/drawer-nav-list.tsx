import { navItemsList } from '../navigation-items-list'
import { DrawerNavItem } from './drawer-nav-item'

export function DrawerNavList() {
  return (
    <div className="flex flex-col">
      {navItemsList.map(({ icon: Icon, label, url }) => (
        <DrawerNavItem key={label} icon={Icon} label={label} url={url} />
      ))}
    </div>
  )
}
