/* eslint-disable */

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  label: string
  url: string
}

export function NavItem({ label, url }: NavItemProps) {
  const currentPath = usePathname()
  const isTheCurrentPath = url === currentPath

  return (
    <Link
      href={url}
      prefetch={false}
      className={`
        ${isTheCurrentPath
          ? 'text-foreground border-primary'
          : 'text-muted-foreground border-background'
        }
        flex items-center h-16 font-medium border-b-2
      `}
    >
      {label}
    </Link>
  )
}
