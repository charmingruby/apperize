'use client'

import { navItemsList } from '../navigation-items-list'
import { DrawerNavItem } from './drawer-nav-item'

export function DrawerNavList() {
  return (
    <div className="flex flex-col divide-y divide-border">
      {navItemsList.map(({ label, url }) => (
        <DrawerNavItem key={label} label={label} url={url} />
      ))}

      <DrawerNavItem key="fazer-pedido" label="Fazer pedido" url={'#contato'} />
    </div>
  )
}
