import { Award, Building2, FileCheck, Receipt, TrendingUp } from 'lucide-react'
import { Reveal } from './Reveal'

const stats = [
  {
    icon: TrendingUp,
    value: 'PHP 11M – 18M+',
    label: 'Monthly revenue streams managed and audited across hotel and restaurant divisions.',
  },
  {
    icon: Receipt,
    value: '300+ Receipts / Day',
    label: 'Daily transactions audited across PMS, POS, Maya, cash, and credit card channels.',
  },
  {
    icon: FileCheck,
    value: '6 External Audits',
    label: 'Revenue requests handled for quarterly and year-end reporting with full validation.',
  },
  {
    icon: Building2,
    value: '100+ Corporate Accounts',
    label: 'Managed end-to-end AR client accounts, billing, aging, and collections.',
  },
  {
    icon: Award,
    value: 'Magna Cum Laude',
    label: 'BS in Business Management (Financial Management).',
  },
]

export function Stats() {
  return (
    <section
      id="metrics"
      className="scroll-mt-24 border-y border-slate-200/80 bg-gradient-to-b from-white to-warm-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
              Key Performance & Impact
            </h2>
            <p className="mt-3 text-slate-600">
              Quantifiable outcomes from hospitality finance, revenue audit, and corporate
              accounting.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.value} delayClass={`reveal-delay-${Math.min(i + 1, 4)}`}>
              <article className="group h-full rounded-2xl border border-slate-200/80 bg-warm-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-600/25 hover:bg-white hover:shadow-lg hover:shadow-slate-200/80">
                <div className="mb-4 inline-flex rounded-xl bg-navy-900/5 p-3 text-emerald-700 transition group-hover:bg-emerald-600/10">
                  <stat.icon className="size-6" aria-hidden />
                </div>
                <p className="font-display text-2xl font-semibold text-navy-950">{stat.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
