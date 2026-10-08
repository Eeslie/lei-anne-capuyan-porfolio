import { BadgeCheck, BookOpen } from 'lucide-react'
import { Reveal } from './Reveal'

const credentials = [
  { name: 'Chartered Financial Management Analyst (CFMA)', year: '2024' },
  { name: 'Certified Bookkeeper', year: '2025' },
  { name: 'QuickBooks ProAdvisor & Online Certified', year: null },
  { name: 'Civil Service Professional Eligible (PD 907)', year: null },
  { name: 'Power BI & International Business & Finance Certified', year: '2026' },
  { name: 'Value-Based Pricing Strategy', year: '2026' },
]

const education = [
  {
    degree: 'Master of Business Administration (MBA Candidate, Expected 2027)',
    school: 'Philippine Christian University',
  },
  {
    degree: 'BS in Business Management – Financial Management (Magna Cum Laude, 2023)',
    school: 'Cavite State University',
  },
]

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-t border-slate-200/80 bg-warm-100/50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Credentials
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
              Certifications & Education
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal delayClass="reveal-delay-1">
            <div>
              <div className="mb-5 flex items-center gap-2">
                <BadgeCheck className="size-5 text-emerald-600" aria-hidden />
                <h3 className="font-semibold text-navy-950">Certifications & Credentials</h3>
              </div>
              <ul className="space-y-3">
                {credentials.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-4 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-sm transition hover:shadow-md"
                  >
                    <span className="text-sm font-medium text-slate-700">{item.name}</span>
                    {item.year && (
                      <span className="shrink-0 rounded-full bg-navy-900/5 px-2.5 py-0.5 text-xs font-semibold text-navy-900">
                        {item.year}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayClass="reveal-delay-2">
            <div>
              <div className="mb-5 flex items-center gap-2">
                <BookOpen className="size-5 text-gold-500" aria-hidden />
                <h3 className="font-semibold text-navy-950">Education</h3>
              </div>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li
                    key={item.degree}
                    className="rounded-2xl border border-emerald-600/20 bg-gradient-to-br from-white to-emerald-50/30 p-5 shadow-sm"
                  >
                    <p className="font-medium leading-snug text-navy-950">{item.degree}</p>
                    <p className="mt-2 text-sm text-emerald-800/90">{item.school}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
