import { cn } from '@/lib/utils'

type ThemeLogoProps = {
  src: string
  alt: string
  size?: number
  className?: string
  invert?: boolean
}

export function ThemeLogo({ src, alt, size = 48, className, invert = false }: ThemeLogoProps) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elevated)] p-1.5',
        className,
      )}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        width={size - 12}
        height={size - 12}
        className={cn('size-full object-contain', invert && 'invert')}
        loading="lazy"
      />
    </span>
  )
}
