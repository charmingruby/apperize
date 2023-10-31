import { Metadata } from 'next'

interface StaticSEOProps {
  rawTitle: string
  description: string
  hasPrefix?: boolean
}

const prefix = 'Apperize |'

export function staticSEO({
  rawTitle,
  description,
  hasPrefix = true, // pageContent = PageContent.root,
}: StaticSEOProps) {
  const title = hasPrefix ? `${prefix} ${rawTitle}` : rawTitle

  const metadata: Metadata = {
    title,
    description,
  }

  return metadata
}
