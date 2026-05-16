import { Link } from 'react-router-dom'

interface SectionHeaderProps {
  title: string
  href: string
}

export default function SectionHeader({ title, href }: SectionHeaderProps) {
  return (
    <div className="section-block flex items-center justify-between">
      <h2 className="text-[18px] font-bold text-[var(--gray-900)]">{title}</h2>
      <Link className="min-h-11 min-w-11 text-[14px] font-medium text-[var(--bravo-green-500)]" to={href}>
        See all
      </Link>
    </div>
  )
}
