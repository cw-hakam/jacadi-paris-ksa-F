export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: string[];
  categories: string[];
  ageRange: { min: number; max: number };
  stock: number;
  rating: number;
  reviewCount: number;
  badges?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image?: string;
  color: string;
  productCount: number;
}

export type AgeGroup = 'baby' | 'toddler' | 'kids' | 'tweens';

export interface AgeFilter {
  id: AgeGroup;
  label: string;
  range: { min: number; max: number };
}
