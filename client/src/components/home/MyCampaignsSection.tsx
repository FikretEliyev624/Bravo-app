import { FiArrowRight } from 'react-icons/fi'
import ornament from '../../assets/images/azerbaijan_ornament.svg'
import SectionHeader from '../ui/SectionHeader'

export default function MyCampaignsSection() {
  return (
    <section className="space-y-3">
      <SectionHeader href="/campaigns" title="My Campaigns" />
      <article
        className="mx-[var(--page-padding-x)] min-h-40 overflow-hidden rounded-[var(--radius-lg)] p-4"
        style={{ background: 'linear-gradient(135deg, var(--campaign-soft-start) 0%, var(--campaign-soft-end) 100%)' }}
      >
        <div className="relative flex min-h-[128px] gap-3">
          <img alt="Azerbaijan ornament" className="h-[110px] w-[90px] object-contain" src={ornament} />
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <p className="text-[11px] text-[var(--gray-600)]">Yurdumuzdan qürurla</p>
              <h3 className="mt-1 text-[22px] font-bold leading-6 text-[var(--gray-900)]">BRAND OF AZERBAIJAN</h3>
            </div>
            <p className="text-[11px] text-[var(--bravo-red-600)]">Click to view all discounts</p>
          </div>
          <button
            aria-label="Open all campaign discounts"
            className="absolute bottom-0 right-0 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[var(--bravo-green-500)] text-[var(--white)]"
            type="button"
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </article>
    </section>
  )
}
