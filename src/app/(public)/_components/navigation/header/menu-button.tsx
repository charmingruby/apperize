'use client'

import { MenuContext } from '@/contexts/menu-context'
import { Menu } from 'lucide-react'
import { useContext } from 'react'

export function MenuButton() {
  const { isOpen, toggleMenu } = useContext(MenuContext)

  return (
    <button className="block lg:hidden" onClick={toggleMenu}>
      <Menu className={isOpen ? 'invisible' : 'block'} />
    </button>
  )
}
