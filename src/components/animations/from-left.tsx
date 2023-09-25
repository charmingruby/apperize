'use client'

import { motion as mt } from 'framer-motion'
import { ReactNode } from 'react'

interface FromLeftAnimationProps {
  delay: number
  children: ReactNode
}

export function FromLeftAnimation({ delay, children }: FromLeftAnimationProps) {
  return (
    <mt.div
      className="m-0"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, ease: 'easeOut' }}
    >
      {children}
    </mt.div>
  )
}
