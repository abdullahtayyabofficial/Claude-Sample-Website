import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
}

export default function GradientText({ children, className, reverse }: GradientTextProps) {
  return (
    <span
      className={cn(
        reverse ? 'gradient-brand-text-reverse' : 'gradient-brand-text',
        className,
      )}
    >
      {children}
    </span>
  )
}
