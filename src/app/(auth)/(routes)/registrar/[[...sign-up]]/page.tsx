import { Logo } from '@/app/(auth)/components/logo'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Logo />
        <SignUp />
      </div>
    </div>
  )
}
