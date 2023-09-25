'use client'

import { ReactNode } from 'react'
import { motion as mt } from 'framer-motion'

interface PoppingProps {
  children: ReactNode
  delay: number
}

export function PoppingAnimation({ children, delay }: PoppingProps) {
  return (
    <mt.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {children}
    </mt.div>
  )
}
