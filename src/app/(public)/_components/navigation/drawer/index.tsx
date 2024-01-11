import { DrawerNavList } from './drawer-nav-list'
import { DrawerRoot } from './root'

export function Drawer() {
  return (
    <DrawerRoot>
      <div className="flex flex-col h-full">
        <DrawerNavList />
      </div>
    </DrawerRoot>
  )
}
