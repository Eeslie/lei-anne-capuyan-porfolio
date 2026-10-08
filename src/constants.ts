export const EMAIL = 'cpyn.leianne@gmail.com'
export const PHONE = '0975-383-6495'
export const LOCATION = 'Dasmariñas City, Cavite'
/** Update with your full LinkedIn profile URL */
export const LINKEDIN_URL = 'https://www.linkedin.com/in/lei-anne-capuyan-cfma/'

export { CV_PDF_URL, HERO_IMAGE, JOB_IMAGES } from './media'

export const CV_DOWNLOAD_FILENAME = 'Lei_Anne_Capuyan_CFMA_CV.pdf'

export const CONTACT_AUTORESPONSE = `Thank you for contacting Lei Anne A. Capuyan, CFMA.

Your message has been sent successfully. This is an automatic confirmation that your inquiry was received at cpyn.leianne@gmail.com.

I will review your message and respond as soon as possible.

Best regards,
Lei Anne A. Capuyan, CFMA`

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#metrics', label: 'Key Metrics' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills & Tools' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
] as const

export const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1))
