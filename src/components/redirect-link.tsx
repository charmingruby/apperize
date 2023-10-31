import Link from 'next/link'
import { ReactNode } from 'react'

type RedirectLinkProps = {
  url: string
  onClick?: () => void
  children: ReactNode
}

export function RedirectLink({ url, children, onClick }: RedirectLinkProps) {
  return (
    <Link
      prefetch={false}
      href={url}
      onClick={onClick}
      className="group outline-none w-full md:w-fit"
    >
      {children}
    </Link>
  )
}
