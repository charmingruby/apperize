import { StaticImageData } from 'next/image'

export interface RecentWork {
  image: StaticImageData
  demoUrl?: string
  description: string
}
