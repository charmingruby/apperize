'use client'

import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { MenuContext } from '@/contexts/menu-context'
import { useContext } from 'react'
import { DrawerNavList } from './drawer-nav-list'

export function Drawer() {
  const { isOpen } = useContext(MenuContext)

  return (
    <div
      className={`
    ${isOpen ? 'opacity-1 z-40 ' : 'opacity-0 -z-50'}
    fixed h-screen w-full bg-primary transition-opacity`}
    >
      <ContainerWrapper className="pt-20">
        <DrawerNavList />
      </ContainerWrapper>
    </div>
  )
}
