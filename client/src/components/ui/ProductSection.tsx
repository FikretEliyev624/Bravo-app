import ProductCard from './ProductCard'
import { ScrollArea } from './scroll-area'
import { Skeleton } from './skeleton'
import { Button } from './button'
import { Separator } from './separator'
import type { Product } from '../../types/product'

interface ProductSectionProps {
  title: string
  products: Product[]
  showSeeAll?: boolean
  onSeeAll?: () => void
  loading?: boolean
  emptyMessage?: string
}

export default function ProductSection({
  title,
  products,
  showSeeAll = true,
  onSeeAll,
  loading = false,
  emptyMessage = 'Məhsul tapılmadı'
}: ProductSectionProps) {
  return (
    <section>
      <div className="section-block">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-6 w-[3px] rounded-[var(--radius-full)] bg-[var(--bravo-green-500)]" />
            <h2 className="text-[17px] font-bold leading-5 text-[var(--gray-900)]">{title}</h2>
          </div>
          {showSeeAll ? (
            <Button className="h-auto min-h-0 p-0 text-[13px] text-[var(--bravo-green-500)]" onClick={onSeeAll} variant="ghost">
              Hamsına bax →
            </Button>
          ) : null}
        </div>
      </div>
      <Separator className="mt-3" />
      {loading ? (
        <div className="product-scroll">
          {Array.from({ length: 3 }, (_, idx) => (
            <Skeleton key={idx} className="h-[196px] w-[140px] rounded-[var(--radius-md)]" />
          ))}
        </div>
      ) : null}
      {!loading && products.length > 0 ? (
        <ScrollArea className="product-scroll" role="region">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollArea>
      ) : null}
      {!loading && products.length === 0 ? (
        <p className="section-block mt-3 text-[13px] text-[var(--gray-500)]">{emptyMessage}</p>
      ) : null}
    </section>
  )
}
