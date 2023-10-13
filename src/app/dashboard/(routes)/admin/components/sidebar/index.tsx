'use client'

import { Cog, Menu } from 'lucide-react'
import { Logo } from './logo'
import { MenuNavigation } from './menu-navigation'
import { NavItem } from './menu-navigation/nav-item'
import { ActiveServicesWidget } from './menu-navigation/active-services-widget'
import { Separator } from '@/components/ui/separator'
import { Profile } from './menu-navigation/profile'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '@/components/ui/button'

export function Sidebar() {
  return (
    <Collapsible.Root className="flex flex-col gap-6 border-b fixed left-0 top-0 h-auto right-0 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen z-20 px-4 pb-4 bg-white lg:right-auto lg:w-80 lg:border-r lg:pb-8 lg:px-4">
      <div className="h-16 flex items-center justify-between ">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 text-muted-foreground" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 gap-6 flex-col data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <MenuNavigation />

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Configurações" icon={Cog} url="/" />
          </nav>

          <ActiveServicesWidget />

          <Separator />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
