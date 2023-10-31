import { MenuContext } from '@/contexts/menu-context'
import { useContext } from 'react'
import { DrawerNavList } from './drawer-nav-list'
import { Profile } from './profile'
import { DrawerRoot } from './root'

export function Drawer() {
  return (
    <DrawerRoot>
      <div className="flex flex-col h-full">
        <DrawerNavList />

        <Profile />
      </div>
    </DrawerRoot>
  )
}
