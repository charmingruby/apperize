import Link from 'next/link'
import { ElementType } from 'react'

interface SocialLinkProps {
  url: string
  icon: ElementType
}

export function SocialLink({ url, icon: Icon }: SocialLinkProps) {
  return (
    <Link href={url} prefetch={false} className="group ">
      <Icon className="text-muted-foreground" strokeWidth={1.5} />
    </Link>
  )
}
