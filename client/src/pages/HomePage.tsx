import BravoOnlineCard from '../components/home/BravoOnlineCard'
import CampaignCard from '../components/home/CampaignCard'
import CustomerTiersCard from '../components/home/CustomerTiersCard'
import HeroSection from '../components/home/HeroSection'
import MyCampaignsSection from '../components/home/MyCampaignsSection'
import MyCouponsSection from '../components/home/MyCouponsSection'
import ProductSection from '../components/ui/ProductSection'
import type { Product } from '../types/product'

const homeSmartProducts: Product[] = [
  {
    id: 'h1',
    name: 'Yunan Yoğurtu',
    brand: 'Milla',
    weight: '350g',
    price: 2.95,
    currency: '₼',
    emoji: '🥣',
    category: 'Süd məhsulları',
    isRecommended: true,
    matchScore: 89
  },
  {
    id: 'h2',
    name: 'Qranola',
    brand: 'Naturella',
    weight: '250g',
    price: 4.4,
    currency: '₼',
    emoji: '🥜',
    category: 'Qurudulmuş məhsullar',
    isRecommended: true,
    matchScore: 84
  },
  {
    id: 'h3',
    name: 'Bal',
    brand: 'Ari',
    weight: '300g',
    price: 7.15,
    currency: '₼',
    emoji: '🍯',
    category: 'Şirinliklər',
    isRecommended: true,
    matchScore: 81
  }
]

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <div className="section-stack pt-6">
        <CustomerTiersCard />
        <CampaignCard />
        <BravoOnlineCard />
        <MyCampaignsSection />
        <MyCouponsSection />
        <ProductSection products={homeSmartProducts} title="Sizin üçün AI seçimləri" />
      </div>
    </div>
  )
}
