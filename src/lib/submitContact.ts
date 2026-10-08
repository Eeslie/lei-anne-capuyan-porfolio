import { CONTACT_AUTORESPONSE, EMAIL } from '../constants'

export type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

type FormSubmitResponse = {
  success?: string
  message?: string
}

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      _subject: `[Portfolio Contact] ${payload.subject}`,
      _template: 'table',
      _captcha: 'false',
      _autoresponse: CONTACT_AUTORESPONSE,
      _url: typeof window !== 'undefined' ? window.location.origin : '',
    }),
  })

  const data = (await res.json()) as FormSubmitResponse

  if (!res.ok || data.success !== 'true') {
    const msg = data.message ?? 'Unable to send your message right now.'
    if (/activation/i.test(msg)) {
      throw new Error(
        `${msg} Open your live site (not localhost), submit once, then click the activation link in your email for that domain.`,
      )
    }
    throw new Error(msg)
  }
}
