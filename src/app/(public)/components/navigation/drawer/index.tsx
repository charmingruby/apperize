'use client'

import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { MenuContext } from '@/contexts/menu-context'
import { useContext } from 'react'

export function Drawer() {
  const { isOpen } = useContext(MenuContext)

  return (
    <div
      className={`
    ${isOpen ? 'opacity-1' : 'opacity-0'}
    z-40 fixed h-screen w-full bg-background-highlight-dark transition-opacity`}
    >
      <ContainerWrapper className="pt-24">oi</ContainerWrapper>
    </div>
  )
}
