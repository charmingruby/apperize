import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <ClerkProvider localization={ptBR}>{children}</ClerkProvider>
}
