import { Product, Category, AgeFilter } from '@/types/product';

// Import product images
import rainbowStacker from '@/assets/product-rainbow-stacker.jpg';
import bearHoodie from '@/assets/product-bear-hoodie.jpg';
import bunnyBook from '@/assets/product-bunny-book.jpg';
import explorerKit from '@/assets/product-explorer-kit.jpg';
import pajamas from '@/assets/product-pajamas.jpg';
import magneticTiles from '@/assets/product-magnetic-tiles.jpg';
import boardBooks from '@/assets/product-board-books.jpg';
import balanceBike from '@/assets/product-balance-bike.jpg';

export const categories: Category[] = [
  { id: 'toys', name: 'Toys & Games', slug: 'toys', icon: '🧸', image: '/cat1.png', color: 'category-toys', productCount: 156 },
  { id: 'clothes', name: 'Clothing', slug: 'clothes', icon: '👕', image: '/cat2.png', color: 'category-clothes', productCount: 243 },
  { id: 'books', name: 'Books', slug: 'books', icon: '📚', image: '/cat3.png', color: 'category-books', productCount: 89 },
  { id: 'outdoor', name: 'Outdoor', slug: 'outdoor', icon: '🌳', image: '/cat4.png', color: 'category-outdoor', productCount: 67 },
];

export const ageFilters: AgeFilter[] = [
  { id: 'baby', label: 'Baby (0-2)', range: { min: 0, max: 2 } },
  { id: 'toddler', label: 'Toddler (2-4)', range: { min: 2, max: 4 } },
  { id: 'kids', label: 'Kids (4-8)', range: { min: 4, max: 8 } },
  { id: 'tweens', label: 'Tweens (8-12)', range: { min: 8, max: 12 } },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Nordic Organic Cotton Pajama Set',
    slug: 'nordic-organic-pajama-set',
    description: 'Dreamy, sensory-friendly pajamas made from 100% GOTS certified organic cotton in muted dusty rose and oat melange. Flat-lock anti-chafe seams.',
    price: 38.00,
    originalPrice: 48.00,
    currency: 'USD',
    images: ['/images/stitch/girl-pajamas-lookbook.jpg', '/images/stitch/hero-children-loungewear.jpg', '/images/stitch/briefs-flatlay-editorial.jpg'],
    categories: ['clothes'],
    ageRange: { min: 2, max: 8 },
    stock: 67,
    rating: 4.9,
    reviewCount: 145,
    badges: ['GOTS Certified', 'OEKO-TEX® 100', 'Anti-Chafe Seams'],
    isBestseller: true,
  },
  {
    id: '2',
    title: 'Scandinavian Earth-Tone Briefs (Pack of 4)',
    slug: 'scandinavian-earth-tone-briefs',
    description: 'Flatlay composition of premium organic cotton children\'s briefs in earthy Scandinavian pastel colors: soft clay pink, sage green, warm almond, and oat melange.',
    price: 28.00,
    currency: 'USD',
    images: ['/images/stitch/briefs-flatlay-editorial.jpg', '/images/stitch/toddler-boy-playing.jpg'],
    categories: ['clothes'],
    ageRange: { min: 2, max: 8 },
    stock: 85,
    rating: 5.0,
    reviewCount: 94,
    badges: ['Organic Cotton', 'Hypoallergenic'],
    isNew: true,
  },
  {
    id: '3',
    title: 'Ribbed Cotton Toddler Loungewear Set',
    slug: 'ribbed-cotton-toddler-set',
    description: 'Editorial Scandinavian loungewear catalog set in soft oatmeal cream. Features breathable bamboo-cotton ribbing and child-safe elastic waistband.',
    price: 42.00,
    originalPrice: 52.00,
    currency: 'USD',
    images: ['/images/stitch/toddler-boy-playing.jpg', '/images/stitch/hero-children-loungewear.jpg'],
    categories: ['clothes'],
    ageRange: { min: 1, max: 5 },
    stock: 42,
    rating: 4.8,
    reviewCount: 112,
    badges: ['Breathable Bamboo', 'GOTS Certified'],
    isBestseller: true,
  },
  {
    id: '4',
    title: 'Wooden Rainbow Stacker',
    slug: 'wooden-rainbow-stacker',
    description: 'Beautiful handcrafted wooden rainbow stacker made from sustainable beech wood with non-toxic water-based paints.',
    price: 34.99,
    currency: 'USD',
    images: [rainbowStacker, rainbowStacker, rainbowStacker],
    categories: ['toys'],
    ageRange: { min: 1, max: 4 },
    stock: 23,
    rating: 4.9,
    reviewCount: 127,
    badges: ['Eco-Friendly', 'Montessori'],
    isBestseller: true,
  },
  {
    id: '5',
    title: 'Cozy Bear Hoodie',
    slug: 'cozy-bear-hoodie',
    description: 'Super soft organic cotton hoodie with adorable bear ears. Perfect for chilly days and outdoor adventures.',
    price: 42.00,
    originalPrice: 56.00,
    currency: 'USD',
    images: [bearHoodie, bearHoodie, bearHoodie],
    categories: ['clothes'],
    ageRange: { min: 2, max: 6 },
    stock: 45,
    rating: 4.8,
    reviewCount: 89,
    badges: ['Organic Cotton'],
    isNew: true,
  },
  {
    id: '6',
    title: 'Adventures of Luna the Bunny',
    slug: 'luna-bunny-book',
    description: 'A heartwarming illustrated storybook about friendship and bravery. Perfect bedtime reading for little ones.',
    price: 18.99,
    currency: 'USD',
    images: [bunnyBook, bunnyBook, bunnyBook],
    categories: ['books'],
    ageRange: { min: 3, max: 7 },
    stock: 78,
    rating: 4.9,
    reviewCount: 203,
    isBestseller: true,
  },
  {
    id: '7',
    title: 'Nature Explorer Kit',
    slug: 'nature-explorer-kit',
    description: 'Complete outdoor exploration set with binoculars, magnifying glass, bug catcher, and nature journal.',
    price: 29.99,
    currency: 'USD',
    images: [explorerKit, explorerKit, explorerKit],
    categories: ['outdoor', 'toys'],
    ageRange: { min: 5, max: 10 },
    stock: 34,
    rating: 4.7,
    reviewCount: 56,
    badges: ['STEM'],
    isNew: true,
  },
  {
    id: '8',
    title: 'Magnetic Building Tiles',
    slug: 'magnetic-building-tiles',
    description: '100-piece magnetic tile set for endless creative building. Develops spatial thinking and creativity.',
    price: 54.99,
    originalPrice: 69.99,
    currency: 'USD',
    images: [magneticTiles, magneticTiles, magneticTiles],
    categories: ['toys'],
    ageRange: { min: 3, max: 10 },
    stock: 89,
    rating: 4.8,
    reviewCount: 312,
    badges: ['STEM', 'Award Winner'],
    isBestseller: true,
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.categories.includes(categorySlug));
};

export const getProductsByAge = (ageGroup: string): Product[] => {
  const filter = ageFilters.find(f => f.id === ageGroup);
  if (!filter) return products;
  return products.filter(p => 
    p.ageRange.min <= filter.range.max && p.ageRange.max >= filter.range.min
  );
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isBestseller || p.isNew).slice(0, 6);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const getBestsellers = (): Product[] => {
  return products.filter(p => p.isBestseller);
};
