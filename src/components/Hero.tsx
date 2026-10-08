import { ArrowDown, Link2, Mail, MapPin } from 'lucide-react'
import { EMAIL, HERO_IMAGE, LINKEDIN_URL, LOCATION } from '../constants'
import { MediaImage } from './MediaImage'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_20%_-10%,rgba(16,185,129,0.14),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_20%,rgba(201,169,98,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div>
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 shadow-sm backdrop-blur sm:text-sm">
                <span className="size-2 animate-pulse rounded-full bg-emerald-500" aria-hidden />
                Open to finance & leadership opportunities
              </p>
            </Reveal>

            <Reveal delayClass="reveal-delay-1">
              <h1 className="font-display text-[2rem] font-semibold leading-[1.12] text-navy-950 min-[480px]:text-4xl sm:text-5xl lg:text-[3.15rem]">
                Lei Anne A. Capuyan,{' '}
                <span className="bg-gradient-to-r from-navy-900 via-navy-800 to-emerald-800 bg-clip-text text-transparent">
                  CFMA
                </span>
              </h1>
            </Reveal>

            <Reveal delayClass="reveal-delay-2">
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
                Accounting & Finance Professional · Income Audit Supervisor · MBA Candidate
              </p>
            </Reveal>

            <Reveal delayClass="reveal-delay-2">
              <p className="mt-6 font-display text-lg leading-relaxed text-navy-900/90 sm:text-xl lg:mt-8 lg:text-2xl">
                Precision-driven financial leadership—transforming complex reconciliations,
                multi-million-peso revenue streams, and internal controls into actionable business
                growth.
              </p>
            </Reveal>

            <Reveal delayClass="reveal-delay-3">
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
                Accounting and finance professional with 3+ years of experience across hotel
                divisions, multi-outlet dining, and corporate reporting. Proficient in SAP,
                QuickBooks, Xero, and Power BI.
              </p>
            </Reveal>

            <Reveal delayClass="reveal-delay-3">
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-10">
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/25 transition hover:-translate-y-0.5 hover:bg-navy-800"
                >
                  View Experience
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-navy-900/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition hover:border-emerald-600/40 hover:bg-emerald-50/60"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-4">
              <ul className="mt-8 flex flex-col gap-3 border-t border-slate-200/80 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 lg:mt-10">
                <li>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(LOCATION)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-700"
                  >
                    <MapPin className="size-4 shrink-0 text-gold-500" aria-hidden />
                    {LOCATION}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-700"
                  >
                    <Mail className="size-4 shrink-0 text-gold-500" aria-hidden />
                    <span className="break-all">{EMAIL}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-700"
                  >
                    <Link2 className="size-4 shrink-0 text-gold-500" aria-hidden />
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delayClass="reveal-delay-1" className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/25 via-transparent to-gold-400/20 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-2xl shadow-navy-900/15 ring-1 ring-slate-200/90">
                <MediaImage
                  src={HERO_IMAGE}
                  alt="Lei Anne A. Capuyan, CFMA — professional portrait"
                  variant="portrait"
                  priority
                  wrapperClassName="aspect-[4/5] w-full rounded-[1.35rem] sm:aspect-[5/6] lg:aspect-[4/5]"
                  className="size-full object-cover object-[center_15%] sm:object-top"
                />
                <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-xl border border-white/25 bg-navy-950/80 px-4 py-3 text-white backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-300 sm:text-xs">
                    CFMA · MBA Candidate
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-white/95">
                    Hospitality & corporate finance leadership
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <a
            href="#metrics"
            className="group flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-400 transition hover:text-emerald-700"
            aria-label="Scroll to key metrics"
          >
            <span>Impact at a glance</span>
            <ArrowDown className="size-4 transition group-hover:translate-y-0.5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
