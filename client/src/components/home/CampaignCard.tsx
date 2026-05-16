import { FiArrowRight } from 'react-icons/fi'
import bravoLogo from '../../assets/images/logo.png'
import PromoCard from '../ui/PromoCard'

export default function CampaignCard() {
  return (
    <PromoCard className="mx-[var(--page-padding-x)] min-h-[180px] bg-[var(--bravo-red-600)]">
      <div className="flex min-h-[180px] flex-col justify-between p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="w-[98px] rounded-[12px] bg-[var(--white)] p-2">
            <span className="mb-2 inline-flex rounded-[var(--radius-full)] bg-[var(--promo-magenta-400)] px-2 py-[2px] text-[11px] text-[var(--white)]">
              yalnız
            </span>
            <img
              alt="Bravo"
              className="h-10 w-10 object-contain"
              src={bravoLogo}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="mt-2 inline-flex rounded-[var(--radius-full)] bg-[var(--bravo-green-500)] px-2 py-[2px] text-[10px] text-[var(--white)]">
              tətbiqə
            </span>
          </div>
          <div className="text-right">
            <p className="text-[64px] font-black leading-[0.9] text-[var(--bravo-gold-400)]">50%</p>
            <p className="-mt-1 text-[20px] italic text-[var(--bravo-gold-300)]">-dək</p>
            <p className="-mt-1 font-semibold italic text-[22px] text-[var(--bravo-gold-300)]">endirim!</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-[12px] text-[rgb(255_255_255_/_85%)]">Offers are valid until 26 may.</p>
          <button
            aria-label="Open campaign details"
            className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[var(--bravo-red-500)] text-[var(--white)]"
            type="button"
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </PromoCard>
  )
}
