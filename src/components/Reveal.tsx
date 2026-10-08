import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delayClass?: string
}

export function Reveal({ children, className = '', delayClass = '' }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
