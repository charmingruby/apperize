'use client'

// eslint-disable

import { useEffect, useRef, useState } from 'react'
import { TecImage, TecImageProps } from './tec-image'
import { motion as mt } from 'framer-motion'

const tecList: TecImageProps[] = [
  {
    alt: 'React logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    alt: 'Next logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg',
  },
  {
    alt: 'TypeScript logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    alt: 'Tailwind logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    alt: 'Golang logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  },
  {
    alt: 'Node logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    alt: 'Nest logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
  },
  {
    alt: 'PostgreSQL logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    alt: 'MySQL logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    alt: 'Redis logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
  {
    alt: 'Docker logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',
  },
  {
    alt: 'Figma logo',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
]

export function TecList() {
  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    if (carousel?.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 16)
    }
  }, [])

  return (
    <mt.div
      whileTap={{ cursor: 'grabbing' }}
      className="outline-none bg-background-highlight-main cursor-grab overflow-hidden rounded-lg border border-background-highlight-dark"
    >
      <mt.div
        ref={carousel}
        className="flex gap-4 px-4 py-4 w-full"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        transition={{ duration: 0.8 }}
      >
        {tecList.map(({ alt, url }) => (
          <div
            key={url}
            className="bg-background min-w-[6rem] md:min-w-[8rem] w-full h-24 md:h-32 border border-background-highlight-dark rounded-md flex items-center justify-center shadow-md"
          >
            <TecImage alt={alt} url={url} />
          </div>
        ))}
      </mt.div>
    </mt.div>
  )
}
