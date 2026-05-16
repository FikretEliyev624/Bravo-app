import { FiArrowRight } from 'react-icons/fi'
import TierCard from '../ui/TierCard'

const tierItems = [
  { label: 'Basic', progressText: '0/4000 HexaCoin', color: 'var(--tier-basic-bg)', darkText: false },
  { label: 'Bronze', progressText: '4000/8000 HexaCoin', color: 'var(--tier-bronze-bg)', darkText: false },
  { label: 'Silver', progressText: '8000/12000 HexaCoin', color: 'var(--tier-silver-bg)', darkText: true },
  { label: 'Gold', progressText: '12000/16000 HexaCoin', color: 'var(--tier-gold-bg)', darkText: true },
  { label: 'Elite', progressText: '16000+ HexaCoin', color: 'var(--tier-elite-bg)', darkText: false }
]

export default function CustomerTiersCard() {
  return (
    <section className="mx-[var(--page-padding-x)] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--bravo-green-700)]">
      <div className="tier-scroll flex gap-1.5 px-3 pb-2 pt-4">
        {tierItems.map((tier) => (
          <TierCard
            key={tier.label}
            backgroundColor={tier.color}
            darkText={tier.darkText}
            label={tier.label}
            progressText={tier.progressText}
          />
        ))}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <h2 className="text-[18px] font-bold text-[var(--white)]">Customer Tiers</h2>
          <p className="text-[13px] text-[rgb(255_255_255_/_80%)]">Learn about the advantages of each tier</p>
        </div>
        <button
          aria-label="Open customer tiers"
          className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-full)] bg-[rgb(255_255_255_/_20%)] text-[var(--white)]"
          type="button"
        >
          <FiArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}
