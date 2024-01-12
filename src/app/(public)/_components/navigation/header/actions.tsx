import { ToggleTheme } from '@/components/theme/toggle-theme'
import { Button } from '@/components/ui/button'
import { MailPlus } from 'lucide-react'
import Link from 'next/link'

export function Actions() {
  return (
    <div className="flex gap-4 items-center">
      <div className="hidden lg:flex ">
        <ToggleTheme />
      </div>

      <Link href="/fazer-pedido" prefetch={false}>
        <Button variant="default" className="gap-2">
          <span className="hidden lg:flex text-base">Fazer pedido</span>
          <MailPlus className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  )
}
