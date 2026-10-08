import { CheckCircle2, Link2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { EMAIL, LINKEDIN_URL, LOCATION, PHONE } from '../constants'
import { submitContactForm } from '../lib/submitContact'
import { DownloadCvButton } from './DownloadCvButton'
import { Reveal } from './Reveal'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [senderEmail, setSenderEmail] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitState('loading')
    setErrorMessage(null)
    setSenderEmail(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const fromEmail = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? 'Portfolio inquiry')
    const message = String(data.get('message') ?? '')

    try {
      await submitContactForm({ name, email: fromEmail, subject, message })
      setSenderEmail(fromEmail)
      setSubmitState('success')
      form.reset()
    } catch (err) {
      setSubmitState('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please email cpyn.leianne@gmail.com directly.',
      )
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Get in Touch
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
              Contact
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Messages are delivered to {EMAIL}. You&apos;ll get an automatic confirmation email
              after sending.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-3" delayClass="reveal-delay-1">
            {submitState === 'success' ? (
              <div
                className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 shadow-sm"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="size-8 shrink-0 text-emerald-600" aria-hidden />
                  <div>
                    <h3 className="text-lg font-semibold text-navy-950">Message sent successfully</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      Your inquiry was delivered to{' '}
                      <span className="font-medium">{EMAIL}</span>.
                      {senderEmail && (
                        <>
                          {' '}
                          An automatic confirmation was also sent to{' '}
                          <span className="font-medium">{senderEmail}</span>.
                        </>
                      )}
                    </p>
                    <button
                      type="button"
                      className="mt-6 text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline"
                      onClick={() => setSubmitState('idle')}
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-1">
                    <span className="mb-1.5 block text-sm font-medium text-slate-700">Name</span>
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      disabled={submitState === 'loading'}
                      className="w-full rounded-xl border border-slate-200 bg-warm-50/50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-1.5 block text-sm font-medium text-slate-700">Email</span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      disabled={submitState === 'loading'}
                      className="w-full rounded-xl border border-slate-200 bg-warm-50/50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">Subject</span>
                  <input
                    required
                    name="subject"
                    type="text"
                    disabled={submitState === 'loading'}
                    className="w-full rounded-xl border border-slate-200 bg-warm-50/50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60"
                    placeholder="How can I help?"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    disabled={submitState === 'loading'}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-warm-50/50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60"
                    placeholder="Tell me about the opportunity or question..."
                  />
                </label>
                {submitState === 'error' && errorMessage && (
                  <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
                    {errorMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {submitState === 'loading' ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="size-4" aria-hidden />
                      Send Message
                    </>
                  )}
                </button>
                <p className="mt-4 text-xs leading-relaxed text-slate-500">
                  Powered by FormSubmit. Each website URL activates once: localhost is already active;
                  for{' '}
                  <a
                    href="https://lei-anne-capuyan-porfolio.vercel.app/#contact"
                    className="text-emerald-700 underline"
                  >
                    your live site
                  </a>
                  , submit the form there once and click the activation link in your email.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal className="lg:col-span-2" delayClass="reveal-delay-2">
            <div className="flex h-full flex-col rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-semibold">Direct contact</h3>
              <p className="mt-2 text-sm text-slate-300">
                Prefer email or a call? Reach out using the details below.
              </p>
              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-start gap-3 transition hover:text-emerald-300"
                  >
                    <Mail className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden />
                    <span className="text-sm break-all">{EMAIL}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PHONE.replace(/-/g, '')}`}
                    className="flex items-start gap-3 transition hover:text-emerald-300"
                  >
                    <Phone className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden />
                    <span className="text-sm">{PHONE}</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-3 text-sm text-slate-200">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden />
                    {LOCATION}
                  </span>
                </li>
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 transition hover:text-emerald-300"
                  >
                    <Link2 className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                </li>
              </ul>
              <div className="mt-auto pt-10 text-center">
                <DownloadCvButton
                  label="Download résumé (PDF)"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gold-400 underline-offset-4 hover:underline"
                  showIcon={false}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
