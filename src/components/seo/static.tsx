import { Metadata } from 'next'

// export enum PageContent {
//   customer = 'CUSTOMER',
//   admin = 'ADMIN',
//   root = 'ROOT',
// }

interface StaticSEOProps {
  rawTitle: string
  description: string
  hasSuffix?: boolean
  // pageContent?: PageContent
}

const suffix = 'Apperize |'

export function staticSEO({
  rawTitle,
  description,
  hasSuffix = true, // pageContent = PageContent.root,
}: StaticSEOProps) {
  const title = hasSuffix ? `${suffix} ${rawTitle}` : rawTitle

  const metadata: Metadata = {
    title,
    description,
  }

  return metadata
}
