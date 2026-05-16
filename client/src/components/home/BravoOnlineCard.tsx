import onlineIllustration from '../../assets/images/bravo_online.svg'
import PromoCard from '../ui/PromoCard'

export default function BravoOnlineCard() {
  return (
    <PromoCard className="mx-[var(--page-padding-x)] h-40 bg-[var(--bravo-green-700)] p-4">
      <div className="relative flex h-full w-full items-center justify-center">
        <img alt="Bravo Online delivery" className="h-[118px] w-auto object-contain" src={onlineIllustration} />
        <p className="absolute bottom-0 left-0 text-[12px] font-medium text-[rgb(255_255_255_/_90%)]">Bravo Online</p>
      </div>
    </PromoCard>
  )
}
