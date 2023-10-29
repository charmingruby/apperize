'use client'

import { MenuContext } from '@/contexts/menu-context'
import { Menu, X } from 'lucide-react'
import { useContext } from 'react'

export function MenuButton() {
  const { isOpen, toggleMenu } = useContext(MenuContext)

  return (
    <button className="block lg:hidden text-primary" onClick={toggleMenu}>
      {isOpen ? <X /> : <Menu />}
    </button>
  )
}
