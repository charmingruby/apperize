import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'

export function ClerkAuthProvider({ children }: { children: ReactNode }) {
  return <ClerkProvider localization={ptBR}>{children}</ClerkProvider>
}
