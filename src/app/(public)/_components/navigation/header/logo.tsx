import { TabletSmartphone } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" prefetch={false} className="flex items-center gap-2">
      <TabletSmartphone className="text-primary h-6 w-6" />

      <strong className="text-2xl font-semibold font-alt tracking-wider">
        <span className="text-primary">app</span>
        erize
      </strong>
    </Link>
  )
}
