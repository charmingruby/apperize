import { PropsWithChildren } from 'react'
import { ClerkAuthProvider } from './clerk'
import { MenuContextProvider } from '@/contexts/menu-context'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkAuthProvider>
      <MenuContextProvider>{children}</MenuContextProvider>
    </ClerkAuthProvider>
  )
}
