import ForgottenProductsBanner from '../components/ai/ForgottenProductsBanner'
import ProductSection from '../components/ui/ProductSection'
import type { Product } from '../types/product'

const mockData: {
  forgottenProducts: {
    lastPurchaseDate: string
    branchName: string
  }
  regularProducts: Product[]
  recommendedProducts: Product[]
} = {
  forgottenProducts: {
    lastPurchaseDate: '16 May, 14:32',
    branchName: 'Nərimanov filiali'
  },
  regularProducts: [
    {
      id: 'r1',
      name: 'Sud 2.5%',
      brand: 'Gencə süd',
      weight: '1L',
      price: 2.49,
      currency: '₼',
      emoji: '🥛',
      category: 'süd məhsulları',
      isRecommended: false
    },
    {
      id: 'r2',
      name: 'Çörək Baton',
      brand: 'Bakı çörəkçisi',
      weight: '400q',
      price: 0.89,
      currency: '₼',
      emoji: '🍞',
      category: 'Çörək',
      isRecommended: false
    },
    {
      id: 'r3',
      name: 'Yumurta',
      brand: 'Kənd təserrufati',
      weight: '10 ed',
      price: 3.2,
      currency: '₼',
      emoji: '🥚',
      category: 'Yumurta',
      isRecommended: false
    },
    {
      id: 'r4',
      name: 'Kefir',
      brand: 'Zerdab',
      weight: '500ml',
      price: 1.75,
      currency: '₼',
      emoji: '🫙',
      category: 'Süd məhsulları',
      isRecommended: false
    }
  ],
  recommendedProducts: [
    {
      id: 'rec1',
      name: 'Pendir Gouda',
      brand: 'Hochland',
      weight: '200q',
      price: 4.99,
      currency: '₼',
      emoji: '🧀',
      category: 'Pendir',
      isRecommended: true,
      matchScore: 92
    },
    {
      id: 'rec2',
      name: 'Zeytun yağı',
      brand: 'Borges',
      weight: '500ml',
      price: 8.5,
      currency: '₼',
      emoji: '🫒',
      category: 'Yağlar',
      isRecommended: true,
      matchScore: 87
    },
    {
      id: 'rec3',
      name: 'Makaron',
      brand: 'Barilla',
      weight: '500q',
      price: 2.2,
      currency: '₼',
      emoji: '🍝',
      category: 'Makaron',
      isRecommended: true,
      matchScore: 85
    }
  ]
}

export default function AIRecommendationPage() {
  return (
    <div className="section-stack pt-4">
      <div className="section-block">
      </div>
      <ForgottenProductsBanner
        branchName={mockData.forgottenProducts.branchName}
        lastPurchaseDate={mockData.forgottenProducts.lastPurchaseDate}
      />
      <ProductSection products={mockData.regularProducts} title="Hər zaman alınan məhsullar" />
      <ProductSection products={mockData.recommendedProducts} title="Səbətinizə uyğun tövsiyyə edilən məhsullar" />
    </div>
  )
}
