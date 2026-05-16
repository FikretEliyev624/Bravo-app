import type { PropsWithChildren } from 'react'
import { cn } from '../../lib/utils'

interface PromoCardProps extends PropsWithChildren {
  className?: string
}

export default function PromoCard({ className, children }: PromoCardProps) {
  return (
    <article className={cn('overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]', className)}>
      {children}
    </article>
  )
}
