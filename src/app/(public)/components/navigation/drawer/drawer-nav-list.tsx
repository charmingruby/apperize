'use client'

import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { navItemsList } from '../navigation-items-list'
import { DrawerNavItem } from './drawer-nav-item'
import { ListOrdered } from 'lucide-react'

export function DrawerNavList() {
  return (
    <ContainerWrapper className="flex flex-col pt-20 pb-0 lg:pb-0 divide-y">
      {navItemsList.map(({ icon: Icon, label, url }) => (
        <DrawerNavItem key={label} icon={Icon} label={label} url={url} />
      ))}

      <DrawerNavItem
        key="fazer-pedido"
        icon={ListOrdered}
        label="Fazer pedido"
        url={'/fazer-pedido'}
      />
    </ContainerWrapper>
  )
}
