import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { products } from '@/data/products';

interface RelatedProductsProps {
  currentProduct: Product;
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  // Get related products based on category and age range
  const relatedProducts = products
    .filter((p) => p.id !== currentProduct.id)
    .filter((p) => 
      p.categories.some((cat) => currentProduct.categories.includes(cat)) ||
      (p.ageRange.min <= currentProduct.ageRange.max && p.ageRange.max >= currentProduct.ageRange.min)
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-8 md:py-8">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
