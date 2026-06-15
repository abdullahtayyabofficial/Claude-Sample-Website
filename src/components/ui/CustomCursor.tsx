'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  // Dot snaps immediately
  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 80 })
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 80 })

  // Ring lags behind for depth
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22 })
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22 })

  useEffect(() => {
    // Only enable on true mouse devices (not touch)
    if (!window.matchMedia('(pointer: fine) and (hover: hover)').matches) return
    setMounted(true)

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setIsPointer(!!el.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]'))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [mouseX, mouseY, isVisible])

  if (!mounted) return null

  return (
    <>
      {/* Dot — mix-blend-difference makes it visible on any bg */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isPointer ? 0 : 1, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-[7px] h-[7px] rounded-full bg-white" />
      </motion.div>

      {/* Ring — expands on hover */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isPointer ? 1.7 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-9 h-9 rounded-full border"
          style={{
            borderColor: isPointer ? '#15a1df' : 'rgba(1,7,56,0.28)',
            transition: 'border-color 0.2s ease',
          }}
        />
      </motion.div>
    </>
  )
}
