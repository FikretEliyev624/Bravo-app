export interface Product {
  id: string
  name: string
  brand?: string
  weight?: string
  price: number
  currency: string
  imageUrl?: string
  emoji?: string
  category: string
  isRecommended: boolean
  matchScore?: number
}

export interface ForgottenProduct {
  id: string
  name: string
  imageUrl?: string
  emoji?: string
  category: string
}
