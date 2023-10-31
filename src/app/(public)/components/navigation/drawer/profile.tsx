'use client'

import { RedirectLink } from '@/components/redirect-link'
import { Button } from '@/components/ui/button'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { UserButton, useUser } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'

export function Profile() {
  const { user, isSignedIn } = useUser()

  if (!isSignedIn) {
    return (
      <ContainerWrapper className="flex items-center pt-8 mt-auto w-full">
        <RedirectLink url="/login">
          <Button variant="secondary" className="w-full" size="lg">
            <span className="text-base">Entrar</span>
          </Button>
        </RedirectLink>
      </ContainerWrapper>
    )
  }

  return (
    <ContainerWrapper className="flex items-center pt-8 mt-auto">
      <div className="w-full flex items-center gap-4 bg-background-highlight-main p-4 rounded-xl border-2 border-[#C0A1F7]">
        <div className="flex items-center gap-2 truncate">
          <UserButton afterSignOutUrl="/" />

          <div className="w-px h-10 bg-background-highlight-dark rounded-full" />

          <div className="flex flex-col truncate">
            <strong className="text-primary">{user?.fullName}</strong>

            <small className="truncate text-sm text-muted-foreground">
              {user?.emailAddresses.at(0)?.emailAddress}
            </small>
          </div>
        </div>

        <div className="ml-auto text-red-500">
          <LogOut strokeWidth={2.5} />
        </div>
      </div>
    </ContainerWrapper>
  )
}
