import { PropsWithChildren } from 'react'
import { TrpcProvider } from './trpc'
import { ClerkAuthProvider } from './clerk'
import { MenuContextProvider } from '@/contexts/menu-context'

export function Providers({ children }: PropsWithChildren) {
  return (
    <TrpcProvider>
      <ClerkAuthProvider>
        <MenuContextProvider>{children}</MenuContextProvider>
      </ClerkAuthProvider>
    </TrpcProvider>
  )
}
