'use client'

import { motion as mt } from 'framer-motion'
import { ReactNode } from 'react'

interface FromRightAnimationProps {
  delay: number
  children: ReactNode
}

export function FromRightAnimation({
  delay,
  children,
}: FromRightAnimationProps) {
  return (
    <mt.div
      className="m-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      {children}
    </mt.div>
  )
}
