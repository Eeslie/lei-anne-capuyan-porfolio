import { Download } from 'lucide-react'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import { CV_DOWNLOAD_FILENAME, CV_PDF_URL } from '../constants'

type DownloadCvButtonProps = {
  className?: string
  showIcon?: boolean
  label?: string
  onAfterClick?: () => void
}

export function DownloadCvButton({
  className = '',
  showIcon = true,
  label = 'Download CV',
  onAfterClick,
}: DownloadCvButtonProps) {
  const [busy, setBusy] = useState(false)

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setBusy(true)
    onAfterClick?.()

    const link = document.createElement('a')
    link.href = CV_PDF_URL
    link.download = CV_DOWNLOAD_FILENAME
    link.rel = 'noopener'
    document.body.appendChild(link)
    link.click()
    link.remove()

    window.setTimeout(() => setBusy(false), 400)
  }

  return (
    <a
      href={CV_PDF_URL}
      download={CV_DOWNLOAD_FILENAME}
      onClick={handleClick}
      aria-busy={busy}
      className={className}
    >
      {showIcon && <Download className="size-4 text-gold-400" aria-hidden />}
      {busy ? 'Downloading…' : label}
    </a>
  )
}
