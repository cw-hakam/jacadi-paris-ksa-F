import { useState } from 'react';
import { Star, ThumbsUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  verified: boolean;
}

interface ProductReviewsProps {
  productId: string;
  rating: number;
  reviewCount: number;
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    date: '2024-01-15',
    title: 'Perfect for my toddler!',
    content: 'The quality is amazing and my daughter loves it. It has become her favorite toy. Highly recommend for any parent looking for safe, educational toys.',
    helpful: 12,
    verified: true,
  },
  {
    id: '2',
    author: 'James P.',
    rating: 4,
    date: '2024-01-10',
    title: 'Great quality, slightly pricey',
    content: 'Beautiful craftsmanship and my son enjoys playing with it. The only reason for 4 stars is the price, but you get what you pay for.',
    helpful: 8,
    verified: true,
  },
  {
    id: '3',
    author: 'Emma K.',
    rating: 5,
    date: '2024-01-05',
    title: 'Exceeded expectations!',
    content: 'Bought this as a gift and it was a huge hit. The colors are beautiful and it feels very durable. Will definitely buy from here again.',
    helpful: 15,
    verified: true,
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 7 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 1 },
];

export function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewData, setReviewData] = useState({
    name: '',
    title: '',
    content: '',
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (reviewRating === 0) {
      toast.error('Please select a rating');
      return;
    }

    if (!reviewData.title.trim() || !reviewData.content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.success('Review submitted successfully!', {
      description: 'Thank you for your feedback. Your review will be published shortly.',
    });

    // Reset form
    setReviewData({ name: '', title: '', content: '' });
    setReviewRating(0);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-8 md:py-8 bg-muted/30">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Rating summary */}
          <div className="bg-card rounded p-6 shadow-soft">
            <div className="text-center mb-6">
              <div className="text-5xl font-display font-bold text-foreground mb-2">
                {rating}
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(rating)
                        ? 'fill-category-toys text-category-toys'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{reviewCount} reviews</p>
            </div>

            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="text-sm w-12">{item.stars} stars</span>
                  <Progress value={item.percentage} className="h-2 flex-1" />
                  <span className="text-sm text-muted-foreground w-10">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full mt-6" onClick={() => setIsModalOpen(true)}>
              Write a Review
            </Button>
          </div>

          {/* Reviews list */}
          <div className="md:col-span-2 space-y-6">
            {mockReviews.map((review) => (
              <article
                key={review.id}
                className="bg-card rounded p-6 shadow-soft"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-semibold">{review.author}</span>
                      {review.verified && (
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? 'fill-category-toys text-category-toys'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {review.content}
                </p>

                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </article>
            ))}

            <Button variant="outline" className="w-full">
              Load More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Review Modal */}
    {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        />

        {/* Modal */}
        <div className="relative bg-card rounded shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold">Write a Review</h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmitReview} className="p-6 space-y-6">
            {/* Rating */}
            <div className="space-y-2">
              <Label>Your Rating *</Label>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setReviewRating(i + 1)}
                    onMouseEnter={() => setHoverRating(i + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={cn(
                        "h-8 w-8 transition-colors",
                        (hoverRating || reviewRating) > i
                          ? "fill-category-toys text-category-toys"
                          : "text-muted-foreground"
                      )}
                    />
                  </button>
                ))}
                {reviewRating > 0 && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    {reviewRating} {reviewRating === 1 ? 'star' : 'stars'}
                  </span>
                )}
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="reviewName">Your Name *</Label>
              <Input
                id="reviewName"
                value={reviewData.name}
                onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="reviewTitle">Review Title *</Label>
              <Input
                id="reviewTitle"
                value={reviewData.title}
                onChange={(e) => setReviewData({ ...reviewData, title: e.target.value })}
                placeholder="Sum up your experience"
                required
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label htmlFor="reviewContent">Your Review *</Label>
              <Textarea
                id="reviewContent"
                value={reviewData.content}
                onChange={(e) => setReviewData({ ...reviewData, content: e.target.value })}
                placeholder="Share your thoughts about this product..."
                rows={6}
                required
              />
              <p className="text-xs text-muted-foreground">
                Minimum 50 characters ({reviewData.content.length}/50)
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Submit Review
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )}
  </>
  );
}
