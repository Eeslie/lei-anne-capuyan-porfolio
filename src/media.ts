import accAssoImg from './img/acc-asso.jpg'
import genAccImg from './img/gen-acc.jpg'
import headerImg from './img/header.jpg'
import incomeAuditSupervisorImg from './img/Income-auditor-supervisor.jpg'
import juniorAccImg from './img/junior-acc.jpg'
import resumePdf from './resume/Lei Anne Capuyan-Resume-ver1.pdf'

export const HERO_IMAGE = headerImg

export const CV_PDF_URL = resumePdf

/** Order: income audit → gen acc → junior → acc-asso (matches career timeline) */
export const JOB_IMAGES = {
  'bayleaf-supervisor': incomeAuditSupervisorImg,
  'brittany-ga': genAccImg,
  'brittany-jr': juniorAccImg,
  'bayleaf-associate': accAssoImg,
} as const
