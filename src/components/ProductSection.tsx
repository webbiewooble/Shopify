import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';
import { Product } from '../types';

interface ProductSectionProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
}

export default function ProductSection({ title, products, showViewAll }: ProductSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SectionHeader title={title} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {showViewAll && (
        <div className="flex justify-center mt-12">
          <button className="bg-[#111] text-white px-12 py-3 text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors min-w-[200px]">
            View All
          </button>
        </div>
      )}
    </section>
  );
}
