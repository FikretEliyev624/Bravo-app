import { FiHome, FiMenu, FiTag, FiVolume2 } from 'react-icons/fi'
import { RiRobot2Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const navItems = [
  { icon: FiHome, label: 'Home', to: '/' },
  { icon: FiVolume2, label: 'Campaigns', to: '/campaigns' },
  { icon: RiRobot2Line, label: 'AI Rec.', to: '/ai' },
  { icon: FiTag, label: 'Coupons', to: '/coupons' },
  { icon: FiMenu, label: 'More', to: '/more' }
]

export default function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 mx-auto grid w-full max-w-[430px] grid-cols-5 border-t border-[var(--gray-200)] bg-[var(--white)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <NavLink
            key={item.to}
            className={({ isActive }) =>
              `nav-item flex min-h-16 flex-col items-center justify-center gap-1 ${
                isActive ? 'text-[var(--bravo-green-500)]' : 'text-[var(--gray-400)]'
              }`
            }
            to={item.to}
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}
