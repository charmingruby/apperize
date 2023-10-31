'use client'

import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { navItemsList } from '../navigation-items-list'
import { DrawerNavItem } from './drawer-nav-item'
import { useUser } from '@clerk/nextjs'
import { LayoutDashboard } from 'lucide-react'

export function DrawerNavList() {
  const { isSignedIn } = useUser()

  return (
    <ContainerWrapper className="flex flex-col pt-20 pb-8 ">
      {isSignedIn && (
        <DrawerNavItem icon={LayoutDashboard} label="Dashboard" url="" />
      )}

      {navItemsList.map(({ icon: Icon, label, url }) => (
        <DrawerNavItem key={label} icon={Icon} label={label} url={url} />
      ))}
    </ContainerWrapper>
  )
}
