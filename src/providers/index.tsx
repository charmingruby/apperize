import { PropsWithChildren } from 'react'
import { MenuContextProvider } from '@/contexts/menu-context'

export function Providers({ children }: PropsWithChildren) {
  return <MenuContextProvider>{children}</MenuContextProvider>
}
