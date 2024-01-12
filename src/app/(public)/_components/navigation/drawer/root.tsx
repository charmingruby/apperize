'use client'

import { MenuContext } from '@/contexts/menu-context'
import { PropsWithChildren, useContext } from 'react'

export function DrawerRoot({ children }: PropsWithChildren) {
  const { isOpen } = useContext(MenuContext)

  return (
    <div
      className={`
      ${isOpen ? 'translate-x-[0%] z-[100]' : '-z-50 -translate-x-[100%]'}
      fixed h-screen bg-background w-4/5 transition-all border-r border-border`}
    >
      {children}
    </div>
  )
}
