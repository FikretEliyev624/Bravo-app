import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-[var(--radius-md)] bg-[var(--gray-200)]', className)} {...props} />
}

export { Skeleton }
