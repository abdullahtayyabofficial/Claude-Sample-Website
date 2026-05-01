'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants = {
  primary:
    'gradient-brand text-white shadow-md hover:shadow-lg hover:opacity-95',
  secondary:
    'bg-white text-brand-dark border border-brand-dark/20 hover:border-brand-light hover:text-brand-light',
  ghost:
    'bg-transparent text-brand-dark hover:text-brand-light',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  external,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer select-none',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 pointer-events-none',
    className,
  )

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  }

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      )
    }
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
