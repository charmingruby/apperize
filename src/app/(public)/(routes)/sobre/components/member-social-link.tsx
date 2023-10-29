import Link from 'next/link'
import { ElementType } from 'react'

interface MemberSocialLinkProps {
  icon: ElementType
  url: string
}

export function MemberSocialLink({ icon: Icon, url }: MemberSocialLinkProps) {
  return (
    <Link href={url} prefetch={false} className="group">
      <div className="border w-fit group-hover:border-background-highlight-dark group-hover:bg-background-highlight-dark p-2 rounded-full shadow-sm">
        <Icon
          strokeWidth={1}
          className="fill-muted-foreground/30 text-muted-foreground/30 h-5 w-5 group-hover:fill-primary group-hover:text-primary transition-colors cursor-pointer"
        />
      </div>
    </Link>
  )
}
