import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  viewMode?: 'grid' | 'list';
}

function getAgeBadgeVariant(ageRange: { min: number; max: number }) {
  if (ageRange.max <= 2) return 'baby';
  if (ageRange.max <= 4) return 'toddler';
  if (ageRange.max <= 8) return 'kids';
  return 'tweens';
}

function getAgeLabel(ageRange: { min: number; max: number }) {
  return `${ageRange.min}-${ageRange.max} yrs`;
}

export function ProductCard({ product, className, viewMode = 'grid' }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  const discountPercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  // List view layout
  if (viewMode === 'list') {
    return (
      <article
        className={cn(
          "group relative bg-card rounded overflow-hidden shadow-soft hover:shadow-card transition-all duration-300",
          className
        )}
        role="article"
        aria-labelledby={`product-${product.id}-title`}
      >
        <div className="flex gap-4">
          {/* Image - full height on the left */}
          <Link to={`/products/${product.slug}`} className="relative flex-shrink-0 w-64">
            <div className="relative h-full bg-muted overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Age badge */}
              <Badge
                variant={getAgeBadgeVariant(product.ageRange)}
                className="absolute top-2 right-2 text-xs"
              >
                {getAgeLabel(product.ageRange)}
              </Badge>
            </div>
          </Link>

          {/* Content - on the right */}
          <div className="flex-1 min-w-0 flex flex-col p-4">
            {/* Top section */}
            <div className="flex-1">
              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                {product.isNew && <Badge variant="new">New</Badge>}
                {product.isBestseller && <Badge variant="bestseller">Bestseller</Badge>}
                {discountPercent > 0 && <Badge variant="sale">-{discountPercent}%</Badge>}
              </div>

              {/* Category */}
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                {product.categories[0]}
              </p>

              {/* Title */}
              <Link to={`/products/${product.slug}`}>
                <h3
                  id={`product-${product.id}-title`}
                  className="font-display font-semibold text-lg text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors"
                >
                  {product.title}
                </h3>
              </Link>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-3.5 w-3.5 fill-category-toys text-category-toys" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
              </div>

              {/* Product badges */}
              {product.badges && product.badges.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.badges.slice(0, 3).map((badge) => (
                    <Badge key={badge} variant="eco" className="text-[10px]">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom section - Price & Actions */}
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-xl text-foreground">
                  SAR {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    SAR {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={`Add ${product.title} to wishlist`}
                  className="h-9 w-9"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  variant="soft"
                  size="sm"
                  onClick={handleAddToCart}
                  aria-label={`Add ${product.title} to cart`}
                  className="gap-2"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Grid view layout (original)
  return (
    <article
      className={cn(
        "group relative bg-card rounded overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1",
        className
      )}
      role="article"
      aria-labelledby={`product-${product.id}-title`}
    >
      {/* Image */}
      <Link to={`/products/${product.slug}`} className="relative aspect-square bg-muted overflow-hidden block">
        <img
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.isNew && <Badge variant="new">New</Badge>}
          {product.isBestseller && <Badge variant="bestseller">Bestseller</Badge>}
          {discountPercent > 0 && <Badge variant="sale">-{discountPercent}%</Badge>}
        </div>

        {/* Age badge */}
        <Badge
          variant={getAgeBadgeVariant(product.ageRange)}
          className="absolute top-3 right-3"
        >
          {getAgeLabel(product.ageRange)}
        </Badge>

        {/* Wishlist button */}
        <button
          className="absolute bottom-3 right-3 h-9 w-9 rounded bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-background hover:scale-110"
          aria-label={`Add ${product.title} to wishlist`}
        >
          <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
        </button>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.categories[0]}
        </p>

        {/* Title */}
        <Link to={`/products/${product.slug}`}>
          <h3
            id={`product-${product.id}-title`}
            className="font-display font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors"
          >
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-3.5 w-3.5 fill-category-toys text-category-toys" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display font-bold text-lg text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            variant="soft"
            size="icon"
            onClick={handleAddToCart}
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>

        {/* Product badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {product.badges.slice(0, 2).map((badge) => (
              <Badge key={badge} variant="eco" className="text-[10px]">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
