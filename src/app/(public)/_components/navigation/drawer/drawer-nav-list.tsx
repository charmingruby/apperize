'use client'

import { navItemsList } from '../navigation-items-list'
import { DrawerNavItem } from './drawer-nav-item'
import { ListOrdered } from 'lucide-react'

export function DrawerNavList() {
  return (
    <div className="flex flex-col divide-y divide-border">
      {navItemsList.map(({ icon: Icon, label, url }) => (
        <DrawerNavItem key={label} icon={Icon} label={label} url={url} />
      ))}

      <DrawerNavItem
        key="fazer-pedido"
        icon={ListOrdered}
        label="Fazer pedido"
        url={'/fazer-pedido'}
      />
    </div>
  )
}
