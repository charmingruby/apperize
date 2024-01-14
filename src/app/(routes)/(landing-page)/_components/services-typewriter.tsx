'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

const itemsList: string[] = [
  'Software',
  'Sistemas',
  'Aplicativos',
  'Landing Pages',
]

export function ServicesTypewriter() {
  const [items] = useTypewriter({
    words: itemsList,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <h1 className="text-transparent bg-clip-text bg-primary-gradient text-center font-extrabold leading-tight tracking-tight text-3xl lg:text-4xl xl:text-5xl pb-2">
      {items}
      <Cursor cursorColor="#7C3AED" cursorStyle="_" />
    </h1>
  )
}
