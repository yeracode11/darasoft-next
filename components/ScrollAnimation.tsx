'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function ScrollAnimation({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
