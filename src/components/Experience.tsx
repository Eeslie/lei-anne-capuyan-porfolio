import { Briefcase } from 'lucide-react'
import { JOB_IMAGES } from '../constants'
import { MediaImage } from './MediaImage'
import { Reveal } from './Reveal'

type Role = {
  id: keyof typeof JOB_IMAGES
  title: string
  company: string
  location: string
  period: string
  current?: boolean
  bullets: string[]
}

const roles: Role[] = [
  {
    id: 'bayleaf-supervisor',
    title: 'Income Auditor Supervisor',
    company: 'The Bayleaf Hotel',
    location: 'General Trias, Cavite',
    period: 'Jan 2026 – Present',
    current: true,
    bullets: [
      'Leads end-to-end income audit and revenue reconciliation across hotel divisions.',
      'Reviews POS entries, general ledger postings, and closing schedules to resolve exceptions early.',
      'Successfully handled 6 external-audit revenue requests and provides monthly P&L/SAP financial insights to management.',
    ],
  },
  {
    id: 'brittany-ga',
    title: 'General Accountant',
    company: 'Brittany Hotels and Leisure, Inc',
    location: 'Las Piñas City',
    period: 'Jun 2025 – Jan 2026',
    bullets: [
      'Promoted from Junior Accountant to lead finances for 5 restaurant operations managing PHP 11M–15M monthly revenue.',
      'Handled QuickBooks GL, P&L analyses, MIS reports, cash flow summaries, and BIR tax compliance schedules.',
      'Managed full-cycle AP/AR workflows, credit memos, aging reports, and collections.',
    ],
  },
  {
    id: 'brittany-jr',
    title: 'Junior Accountant – Income Auditor',
    company: 'Brittany Hotels and Leisure, Inc',
    location: 'Las Piñas City',
    period: 'Mar 2024 – Jun 2025',
    bullets: [
      'Supported pre-opening finance operations for a 24-room hotel, 4 outlets and 2 restaurants.',
      'Audited 300+ receipts daily and reconciled PHP 16M–18M monthly across PMS, POS, and digital payment gateways.',
      'Strengthened internal controls through daily cash settlements, bank deposits, petty cash, and VAT reconciliations.',
    ],
  },
  {
    id: 'bayleaf-associate',
    title: 'Accounting Associate',
    company: 'The Bayleaf Hotel',
    location: 'General Trias, Cavite',
    period: 'Aug 2023 – Mar 2024',
    bullets: [
      'Retained after internship; audited PMS/POS revenue transactions and collaborated across teams to resolve variances.',
    ],
  },
]

function ExperienceCard({ role }: { role: Role }) {
  return (
    <article className="relative pl-0 sm:pl-10">
      <div
        className="absolute left-[11px] top-10 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/20 to-transparent sm:block"
        aria-hidden
      />
      <div className="absolute left-2 top-8 hidden size-3 rounded-full border-2 border-emerald-400 bg-navy-950 sm:block" />

      <div
        className={`grid overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:shadow-lg sm:grid-cols-[11.5rem_1fr] md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr] ${
          role.current
            ? 'border-emerald-500/40 ring-1 ring-emerald-500/15'
            : 'border-slate-200/90'
        }`}
      >
        <MediaImage
          src={JOB_IMAGES[role.id]}
          alt={`${role.company} — ${role.title}`}
          variant="job"
          wrapperClassName="relative aspect-[16/10] w-full sm:aspect-auto sm:min-h-[12.5rem] md:min-h-[13.5rem]"
          className="absolute inset-0 size-full object-cover object-center"
        />

        <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-lg font-semibold text-navy-950 md:text-xl">
              {role.title}
            </h3>
            {role.current && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                Current role
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm font-medium text-emerald-800">{role.company}</p>
          <p className="text-sm text-slate-500">
            {role.location} · {role.period}
          </p>

          <ul className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
            {role.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-navy-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
                <Briefcase className="size-6 text-gold-400" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  Career Path
                </p>
                <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  Work Experience
                </h2>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-300 sm:text-right">
              Progressive roles across hospitality finance—from revenue audit to supervisory
              leadership and multi-outlet accounting.
            </p>
          </div>
        </Reveal>

        <div className="space-y-5">
          {roles.map((role, i) => (
            <Reveal key={role.id} delayClass={`reveal-delay-${Math.min(i + 1, 4)}`}>
              <ExperienceCard role={role} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
