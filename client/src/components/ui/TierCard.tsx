import { Badge } from './badge'

interface TierCardProps {
  label: string
  progressText: string
  backgroundColor: string
  darkText?: boolean
}

export default function TierCard({ label, progressText, backgroundColor, darkText = false }: TierCardProps) {
  return (
    <article
      className="flex h-[52px] w-[90px] flex-col justify-between rounded-[8px] p-2"
      style={{ backgroundColor }}
    >
      <p
        className="text-[9px] font-bold uppercase tracking-[0.4px]"
        style={{ color: darkText ? 'var(--gray-900)' : 'var(--white)' }}
      >
        {label}
      </p>
      <Badge
        className="h-4 w-fit gap-1 bg-transparent px-0 py-0 text-[8px] font-medium"
        style={{ color: darkText ? 'var(--gray-900)' : 'var(--white)' }}
      >
        <span aria-hidden="true">⬡</span>
        {progressText}
      </Badge>
    </article>
  )
}
