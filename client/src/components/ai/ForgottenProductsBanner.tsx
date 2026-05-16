import { FiBell, FiClock, FiMapPin } from 'react-icons/fi'

interface ForgottenBannerProps {
  lastPurchaseDate: string
  branchName: string
}

export default function ForgottenProductsBanner({ lastPurchaseDate, branchName }: ForgottenBannerProps) {
  return (
    <section
      className="mx-[var(--page-padding-x)] rounded-[var(--radius-lg)] border p-4"
      style={{
        borderColor: 'var(--warning-amber-400)',
        borderWidth: '1.5px',
        background: 'linear-gradient(135deg, var(--warning-amber-50) 0%, var(--warning-amber-100) 100%)'
      }}
    >
      <div>
        <div className="flex items-center gap-2">
          <FiBell color="var(--warning-amber-500)" size={18} />
          <h2 className="text-[15px] font-bold text-[var(--gray-900)]">Yaddan çıxan məhsullar</h2>
        </div>
        <p className="mt-1 flex flex-wrap items-center gap-1 text-[12px] text-[var(--gray-600)]">
          <FiClock size={12} />
          Ödəniş: {lastPurchaseDate}
          <span aria-hidden="true">|</span>
          <FiMapPin size={12} />
          {branchName}
        </p>
      </div>
    </section>
  )
}
