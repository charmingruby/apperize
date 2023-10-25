'use client'

import { PropsWithChildren, createContext, useState } from 'react'

interface MenuContextType {
  isOpen: boolean
  toggleMenu: () => void
}

export const MenuContext = createContext({} as MenuContextType)

export function MenuContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
