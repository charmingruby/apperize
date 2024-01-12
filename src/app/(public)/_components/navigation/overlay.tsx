'use client'

import { MenuContext } from '@/contexts/menu-context'
import { useContext } from 'react'

export function Overlay() {
  const { isOpen } = useContext(MenuContext)

  return (
    <div
      className={`${
        isOpen ? 'bg-black/50 z-[99] opacity-100' : 'z-[-9999] opacity-0'
      } w-full h-screen overflow-hidden fixed inset-0 transition-opacity`}
    />
  )
}
