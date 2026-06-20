export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: string;
  rating: number;
  reviews: number;
  image: string;
  tags?: string[];
  description?: string;
  options?: string[];
}
