import { FiPlus } from 'react-icons/fi'
import type { Product } from '../../types/product'
import { Badge } from './badge'
import { Button } from './button'

interface ProductCardProps {
  product: Product
  onAdd?: (productId: string) => void
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="product-card w-[140px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--gray-200)] bg-[var(--white)] shadow-[var(--shadow-card)]">
      <div className="relative flex h-[110px] items-center justify-center bg-[var(--gray-50)] p-2">
        {product.imageUrl ? (
          <img alt={product.name} className="h-full w-full object-contain" src={product.imageUrl} />
        ) : (
          <span aria-hidden="true" className="text-[40px]">
            {product.emoji ?? '🛒'}
          </span>
        )}
        {product.isRecommended && typeof product.matchScore === 'number' ? (
          <Badge className="absolute right-2 top-2" variant="success">
            {product.matchScore}%
          </Badge>
        ) : null}
      </div>
      <div className="space-y-1 p-[10px]">
        <h3 className="line-clamp-2 min-h-[32px] text-[13px] font-semibold leading-4 text-[var(--gray-900)]">{product.name}</h3>
        <p className="truncate text-[11px] text-[var(--gray-500)]">
          {[product.brand, product.weight].filter(Boolean).join(' ')}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-[16px] font-bold text-[var(--bravo-green-600)]">
            {product.price.toFixed(2)} {product.currency}
          </p>
          <Button
            aria-label={`Add ${product.name}`}
            className="h-8 w-8"
            onClick={() => onAdd?.(product.id)}
            size="icon"
            type="button"
          >
            <FiPlus size={16} />
          </Button>
        </div>
      </div>
    </article>
  )
}
