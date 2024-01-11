import { Metadata } from 'next'

interface StaticSEOProps {
  rawTitle: string
  description: string
  hasPrefix?: boolean
}

const prefix = 'apperize |'

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
