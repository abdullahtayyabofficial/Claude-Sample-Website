'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
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

function useMagnetic(strength = 0.28) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 350, damping: 22 })
  const springY = useSpring(y, { stiffness: 350, damping: 22 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(window.matchMedia('(pointer: fine) and (hover: hover)').matches)
  }, [])

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, style: { x: springX, y: springY }, onMouseMove, onMouseLeave }
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
  const { ref, style, onMouseMove, onMouseLeave } = useMagnetic()

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer select-none',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 pointer-events-none',
    className,
  )

  const scaleProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  }

  if (href) {
    if (external) {
      return (
        <motion.a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          style={style}
          onMouseMove={onMouseMove as React.MouseEventHandler<HTMLAnchorElement>}
          onMouseLeave={onMouseLeave}
          {...scaleProps}
        >
          {children}
        </motion.a>
      )
    }
    return (
      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{ display: 'inline-flex', ...style }}
        onMouseMove={onMouseMove as React.MouseEventHandler<HTMLDivElement>}
        onMouseLeave={onMouseLeave}
        {...scaleProps}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      style={style}
      onMouseMove={onMouseMove as React.MouseEventHandler<HTMLButtonElement>}
      onMouseLeave={onMouseLeave}
      {...scaleProps}
    >
      {children}
    </motion.button>
  )
}
