import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-4 z-40 inline-flex size-11 items-center justify-center rounded-full border border-slate-200/80 bg-white text-navy-900 shadow-lg shadow-slate-300/40 transition hover:-translate-y-0.5 hover:border-emerald-500/30 hover:text-emerald-700 sm:bottom-8 sm:right-6"
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>
  )
}
