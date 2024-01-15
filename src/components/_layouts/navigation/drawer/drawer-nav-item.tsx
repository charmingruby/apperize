'use client'

import { useContext } from 'react'
import { NavItem } from '../navigation-items-list'
import { RedirectLink } from '@/components/redirect-link'
import { MenuContext } from '@/contexts/menu-context'

export function DrawerNavItem({ label, url }: NavItem) {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <RedirectLink url={url} onClick={toggleMenu}>
      <div className="flex items-center gap-2 py-4 px-4 group-hover:bg-background-alt transition-colors rounded-lg">
        <span className="text-base mt-0.5 font-medium">{label}</span>
      </div>
    </RedirectLink>
  )
}
