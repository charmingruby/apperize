'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

const itemsList: string[] = [
  'Software',
  'Sistemas',
  'Applicativos',
  'Landing Pages',
]

export function ServicesTypewriter() {
  const [items] = useTypewriter({
    words: itemsList,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <span className="block text-transparent bg-clip-text bg-primary-gradient pb-2">
      {items}
      <Cursor cursorColor="#7C3AED" cursorStyle="_" />
    </span>
  )
}
