'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  url: string
}

const navItems: NavItem[] = [
  {
    label: 'Geral',
    url: '/dashboard/admin',
  },
  {
    label: 'Pedidos',
    url: '/',
  },
  {
    label: 'Clientes',
    url: '/',
  },
  {
    label: 'Finanças',
    url: '/',
  },
  {
    label: 'Changelogs',
    url: '/',
  },
]

export function AdminNavigation() {
  const pathname = usePathname()

  return (
    <div className="border-b flex items-center w-full gap-6 h-10">
      {navItems.map(({ label, url }) => (
        <Link
          prefetch={false}
          href={url}
          key={label}
          className={`
            h-10 flex items-center  font-medium text-sm
            ${pathname === url ? 'border-primary  border-b-2 text-primary' : ''}
            `}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
