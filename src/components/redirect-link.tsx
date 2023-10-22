import Link from 'next/link'
import { ReactNode } from 'react'

type RedirectLinkProps = {
  url: string
  children: ReactNode
}

export function RedirectLink({ url, children }: RedirectLinkProps) {
  return (
    <Link prefetch={false} href={url} className="outline-none w-full md:w-fit">
      {children}
    </Link>
  )
}
