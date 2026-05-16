import { FiUser } from 'react-icons/fi'
import birBonusLogo from '../../assets/images/bir_bonus.svg'
import bravoLogo from '../../assets/images/logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-[var(--bravo-green-900)] px-[var(--page-padding-x)]">
      <div className="flex h-full items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <img
            alt="Bravo logo"
            className="h-10 w-10 object-contain"
            src={bravoLogo}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="flex items-center gap-1.5 rounded-[var(--radius-full)] bg-[var(--white)] px-3.5 py-1.5">
            <img alt="BirBonus" className="h-5 w-5 object-contain" src={birBonusLogo} />
            <span className="text-[16px] font-semibold text-[var(--gray-900)]">0,63</span>
          </div>
        </div>
        <button
          aria-label="Open profile"
          className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-full)] bg-transparent"
          style={{ border: '1.5px solid rgb(255 255 255 / 60%)' }}
          type="button"
        >
          <FiUser color="var(--white)" size={22} />
        </button>
      </div>
    </header>
  )
}
