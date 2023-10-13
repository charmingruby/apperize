import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
  url: string
}

export function NavItem({ icon: Icon, title, url }: NavItemProps) {
  return (
    <Link
      prefetch={false}
      href={url}
      className="text-muted-foreground flex items-center gap-3 rounded-md px-3 py-2 hover:bg-primary/10 group transition-colors"
    >
      <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
      <span className="font-medium group-hover:text-primary transition-colors">
        {title}
      </span>
    </Link>
  )
}

interface DropdownNavItemProps {
  title: string
  icon: ElementType
  url: string
  items: string[]
}

export function DropdownNavItem({
  icon: Icon,
  items,
  title,
  url,
}: DropdownNavItemProps) {
  return (
    <Link
      prefetch={false}
      href={url}
      className="text-muted-foreground flex items-center gap-3 rounded-md px-3 py-2 hover:bg-primary/10 group transition-colors"
    >
      <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
      <span className="font-medium group-hover:text-primary transition-colors">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 group-hover:text-primary/60 transition-colors" />
    </Link>
  )
}
