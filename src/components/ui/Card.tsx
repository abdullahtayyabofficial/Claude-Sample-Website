'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white rounded-2xl border border-[var(--color-border)] card-shadow',
        hover && 'cursor-pointer',
        glow && 'glow-brand',
        className,
      )}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: 'var(--shadow-card-hover)',
            }
          : undefined
      }
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
