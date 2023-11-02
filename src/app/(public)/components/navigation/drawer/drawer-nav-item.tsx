'use client'

import { useContext } from 'react'
import { NavItem } from '../navigation-items-list'
import { RedirectLink } from '@/components/redirect-link'
import { MenuContext } from '@/contexts/menu-context'

export function DrawerNavItem({ icon: Icon, label, url }: NavItem) {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <RedirectLink url={url} onClick={toggleMenu}>
      <div className="flex items-center gap-2 text-primary py-4 px-4 group-hover:bg-background-highlight-main transition-colors rounded-lg">
        <Icon className="w-6 h-6" />
        <span className="text-lg mt-0.5 font-medium">{label}</span>
      </div>
    </RedirectLink>
  )
}
