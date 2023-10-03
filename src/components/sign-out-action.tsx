import { SignOutButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'

export function SignOutAction() {
  return (
    <SignOutButton>
      <div className="">
        <LogOut className="text-destructive" />
      </div>
    </SignOutButton>
  )
}
