import { GraduationCap, LineChart, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Compliance & controls',
    text: 'Proven track record in general accounting, revenue auditing, month-end closing, and Philippine tax (BIR) compliance.',
  },
  {
    icon: LineChart,
    title: 'Operations to leadership',
    text: 'Strong capability in bridging operations and executive leadership through P&L variance analysis, internal controls, and SAP/QuickBooks ledger accuracy.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous growth',
    text: 'MBA Candidate at Philippine Christian University (Expected 2027) and Magna Cum Laude graduate from Cavite State University.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                About Me
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
                Executive summary
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                I am an accounting and finance professional focused on accuracy, audit readiness,
                and clear financial storytelling in fast-paced hospitality environments. From daily
                revenue reconciliation to month-end close and external audit support, I help
                leadership see the numbers behind the business—and act on them with confidence.
              </p>
              <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-gold-400 to-emerald-600" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delayClass={`reveal-delay-${i + 1}`}>
                <div className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="shrink-0 rounded-xl bg-navy-900 p-2.5 text-gold-400">
                    <item.icon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
