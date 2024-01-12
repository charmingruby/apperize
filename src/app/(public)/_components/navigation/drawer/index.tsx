'use client'

import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { DrawerNavList } from './drawer-nav-list'
import { DrawerRoot } from './root'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { MenuContext } from '@/contexts/menu-context'
import { useContext } from 'react'
import { Logo } from '../header/logo'
import { ToggleTheme } from '@/components/theme/toggle-theme'

export function Drawer() {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <DrawerRoot>
      <ContainerWrapper className="flex py-3 lg:py-3 gap-2">
        <div className="flex flex-col flex-1 gap-8">
          <div className="flex items-center gap-4">
            <Logo />
            <ToggleTheme />
          </div>

          <DrawerNavList />
        </div>

        <Button variant="ghost" onClick={toggleMenu}>
          <X />
        </Button>
      </ContainerWrapper>
    </DrawerRoot>
  )
}
