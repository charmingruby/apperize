import Link from 'next/link'
import { ElementType } from 'react'

interface SocialLinkProps {
  url: string
  icon: ElementType
}

export function SocialLink({ url, icon: Icon }: SocialLinkProps) {
  return (
    <Link
      href={url}
      prefetch={false}
      className="group p-2 hover:bg-background-highlight-dark rounded-md transition-colors"
    >
      <Icon
        className="text-muted-foreground h-6 w-6 group-hover:text-primary transition-colors"
        strokeWidth={1.5}
      />
    </Link>
  )
}
