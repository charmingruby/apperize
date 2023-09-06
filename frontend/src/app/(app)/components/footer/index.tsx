import Link from 'next/link';
import { links } from '@/constants/links';

export function Footer() {
  return (
    <footer>
      <span>
        Built by
        {' '}
        <Link href={links.linkedin} prefetch={false}>Gustavo Dias</Link>
        . The source code in on
        {' '}
        <Link href={links.repo} prefetch={false}>Github</Link>
        .
      </span>
    </footer>
  );
}
