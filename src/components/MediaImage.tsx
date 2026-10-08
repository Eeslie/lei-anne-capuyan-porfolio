import { Building2, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'

type MediaImageProps = {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
  variant?: 'portrait' | 'job'
  priority?: boolean
}

export function MediaImage({
  src,
  alt,
  className = 'size-full object-cover',
  wrapperClassName = '',
  variant = 'portrait',
  priority = false,
}: MediaImageProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  if (failed) {
    return (
      <div
        className={`flex size-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200/80 text-navy-800/35 ${wrapperClassName}`}
        role="img"
        aria-label={alt}
      >
        {variant === 'job' ? (
          <Building2 className="size-10" aria-hidden />
        ) : (
          <UserRound className="size-16" aria-hidden />
        )}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
