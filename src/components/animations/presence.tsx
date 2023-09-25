'use client'

import { motion as mt } from 'framer-motion'
import { ReactNode } from 'react'

interface PresenceAnimationProps {
  children: ReactNode
  delay: number
}

export function PresenceAnimation({ children, delay }: PresenceAnimationProps) {
  return (
    <mt.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {children}
    </mt.div>
  )
}
