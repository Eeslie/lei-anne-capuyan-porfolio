import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_LINKS, SECTION_IDS } from '../constants'
import { useActiveSection } from '../hooks/useActiveSection'
import { DownloadCvButton } from './DownloadCvButton'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const cvButtonClass =
    'inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-navy-900/20 transition hover:bg-navy-800 hover:shadow-lg'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200/80 bg-warm-50/95 shadow-sm backdrop-blur-lg'
          : 'bg-warm-50/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#"
          className="min-w-0 shrink"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="block truncate font-display text-sm font-semibold text-navy-950 sm:text-base">
            Lei Anne Capuyan, CFMA MBA
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1)
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-navy-900/10 text-navy-950'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:flex">
          <DownloadCvButton className={cvButtonClass} />
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-navy-900 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-warm-50 px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1)
              const isActive = activeSection === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? 'bg-navy-900/10 text-navy-950' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <DownloadCvButton className={`${cvButtonClass} mt-4 w-full`} onAfterClick={closeMenu} />
        </div>
      )}
    </header>
  )
}
