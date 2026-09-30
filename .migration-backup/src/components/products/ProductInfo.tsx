import { useState } from 'react';
import { Star, Heart, Share2, Truck, RotateCcw, Shield, Leaf, Facebook, Twitter, Link as LinkIcon, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface ProductInfoProps {
  product: Product;
}

function getAgeBadgeVariant(ageRange: { min: number; max: number }) {
  if (ageRange.max <= 2) return 'baby';
  if (ageRange.max <= 4) return 'toddler';
  if (ageRange.max <= 8) return 'kids';
  return 'tweens';
}

export function ProductInfo({ product }: ProductInfoProps) {
  const discountPercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="space-y-4">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {product.isNew && <Badge variant="new">New Arrival</Badge>}
        {product.isBestseller && <Badge variant="bestseller">Bestseller</Badge>}
        {discountPercent > 0 && <Badge variant="sale">{discountPercent}% Off</Badge>}
        <Badge variant={getAgeBadgeVariant(product.ageRange)}>
          Ages {product.ageRange.min}-{product.ageRange.max}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
        {product.title}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-category-toys text-category-toys'
                  : 'text-muted-foreground'
              }`}
            />
          ))}
        </div>
        <span className="font-semibold">{product.rating}</span>
        <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl font-bold text-foreground">
          SAR {product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-xl text-muted-foreground line-through">
            SAR {product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Features */}
      {product.badges && product.badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {product.badges.map((badge) => (
            <Badge key={badge} variant="eco" className="gap-1">
              <Leaf className="h-3 w-3" />
              {badge}
            </Badge>
          ))}
        </div>
      )}

      {/* Stock */}
      <div className="text-sm">
        {product.stock > 10 ? (
          <span className="text-secondary font-medium">✓ In Stock</span>
        ) : product.stock > 0 ? (
          <span className="text-primary font-medium">Only {product.stock} left!</span>
        ) : (
          <span className="text-destructive font-medium">Out of Stock</span>
        )}
      </div>
    </div>
  );
}

export function ProductBenefits() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded">
      <div className="flex items-center gap-2 text-sm">
        <Truck className="h-4 w-4 text-primary" />
        <span>Free shipping over SAR 300</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <RotateCcw className="h-4 w-4 text-primary" />
        <span>30-day easy returns</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Shield className="h-4 w-4 text-primary" />
        <span>Safety tested</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Leaf className="h-4 w-4 text-primary" />
        <span>Eco-friendly</span>
      </div>
    </div>
  );
}

export function ProductActions() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      toast.success('Added to wishlist!', {
        description: 'You can view your wishlist anytime.',
      });
    } else {
      toast.info('Removed from wishlist');
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = document.title;

    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
        setShowShareTooltip(false);
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShowShareTooltip(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Wishlist Button */}
      <button
        onClick={handleWishlist}
        className={cn(
          "flex items-center gap-2 text-sm transition-colors",
          isWishlisted
            ? "text-primary"
            : "text-muted-foreground hover:text-primary"
        )}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart className={cn("h-5 w-5", isWishlisted && "fill-primary")} />
        <span>{isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}</span>
      </button>

      {/* Share Button with Tooltip */}
      <div className="relative">
        <button
          onClick={() => setShowShareTooltip(!showShareTooltip)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-label="Share product"
        >
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </button>

        {/* Share Tooltip */}
        {showShareTooltip && (
          <>
            {/* Backdrop to close tooltip */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowShareTooltip(false)}
            />
            <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded shadow-lg p-3 z-20 min-w-[200px]">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Share via:</p>
              <div className="space-y-1">
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left"
                >
                  <Facebook className="h-4 w-4 text-blue-600" />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left"
                >
                  <Twitter className="h-4 w-4 text-sky-500" />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => handleShare('email')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left"
                >
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span>Email</span>
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left"
                >
                  <LinkIcon className="h-4 w-4 text-primary" />
                  <span>Copy Link</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
