import { Cpu, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

const coreCompetencies = [
  'General Ledger & Journal Entries',
  'Financial Reporting & P&L Analysis',
  'Revenue Auditing',
  'Month-End Close',
  'Account Reconciliations',
  'Philippine Tax & BIR Reporting',
  'Internal Controls',
  'External Audit Support',
]

const software = [
  'SAP ERP',
  'QuickBooks Online',
  'Xero',
  'Advanced Microsoft Excel',
  'Power BI',
  'Microsoft PowerPoint',
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Expertise
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
              Skills & Technology Stack
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal delayClass="reveal-delay-1">
            <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-lg bg-emerald-600/10 p-2 text-emerald-700">
                  <Sparkles className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-navy-950">Core Competencies</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {coreCompetencies.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-200 bg-warm-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-600/30 hover:bg-emerald-50/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayClass="reveal-delay-2">
            <div className="h-full rounded-2xl border border-slate-200/80 bg-gradient-to-br from-navy-900 to-navy-800 p-6 text-white shadow-lg sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-lg bg-white/10 p-2 text-gold-400">
                  <Cpu className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold">Software & Systems</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {software.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-emerald-400/30 hover:bg-white/10"
                  >
                    {tool}
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
