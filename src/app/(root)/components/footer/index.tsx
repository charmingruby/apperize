import Link from 'next/link'
import { links } from '@/constants/links'

export function Footer() {
  return (
    <footer className="container pt-16 pb-10 ">
      <span className="text-muted-foreground text-sm">
        Criado por{' '}
        <Link
          href={links.linkedin}
          prefetch={false}
          className="underline underline-offset-4"
        >
          Gustavo Dias
        </Link>
        . O código fonte está no{' '}
        <Link
          href={links.repo}
          prefetch={false}
          className="underline underline-offset-4"
        >
          Github
        </Link>
        .
      </span>
    </footer>
  )
}
