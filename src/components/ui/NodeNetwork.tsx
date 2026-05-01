'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
}

export default function NodeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    const COUNT = 42
    const initParticles = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      particlesRef.current = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2 + 1.5,
        alpha: Math.random() * 0.45 + 0.25,
      }))
    }
    initParticles()

    const MAX_DIST = 140

    const tick = () => {
      const W = canvas.clientWidth
      const H = canvas.clientHeight
      ctx.clearRect(0, 0, W, H)

      const pts = particlesRef.current

      pts.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        p.x = Math.max(0, Math.min(W, p.x))
        p.y = Math.max(0, Math.min(H, p.y))
      })

      // Connection lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX_DIST) {
            const t = 1 - d / MAX_DIST
            const lineAlpha = t * 0.2

            const grad = ctx.createLinearGradient(
              pts[i].x, pts[i].y,
              pts[j].x, pts[j].y,
            )
            grad.addColorStop(0, `rgba(1, 7, 56, ${lineAlpha})`)
            grad.addColorStop(1, `rgba(21, 161, 223, ${lineAlpha * 1.5})`)

            ctx.beginPath()
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.9
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      pts.forEach((p) => {
        // Outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5)
        glow.addColorStop(0, `rgba(21, 161, 223, ${p.alpha * 0.35})`)
        glow.addColorStop(1, `rgba(21, 161, 223, 0)`)
        ctx.beginPath()
        ctx.fillStyle = glow
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2)
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.fillStyle = `rgba(21, 161, 223, ${p.alpha})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      frameRef.current = requestAnimationFrame(tick)
    }

    tick()

    const onResize = () => {
      resize()
      initParticles()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden
    />
  )
}
