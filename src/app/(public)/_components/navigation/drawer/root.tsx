'use client'

import { MenuContext } from '@/contexts/menu-context'
import { PropsWithChildren, useContext } from 'react'

export function DrawerRoot({ children }: PropsWithChildren) {
  const { isOpen } = useContext(MenuContext)

  return (
    <div
      className={`
      ${isOpen ? 'opacity-1 z-40 ' : 'opacity-0 -z-50'}
      fixed h-screen w-full bg-background transition-opacity`}
    >
      {children}
    </div>
  )
}
