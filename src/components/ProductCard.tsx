import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col group h-full">
      <div className="relative bg-[#f8f8f8] aspect-[4/5] overflow-hidden flex items-center justify-center p-6 mb-4">
        {product.discountPercentage && (
          <div className="absolute top-0 right-0 bg-[#111] text-white text-[10px] font-bold px-3 py-1 tracking-wider z-10">
            {product.tags?.[0] || product.discountPercentage}
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col flex-1 text-center px-2">
        <h3 className="text-sm font-medium text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          {product.originalPrice !== product.discountedPrice && (
            <span className="text-gray-400 line-through text-sm font-light">₹{product.originalPrice}</span>
          )}
          <span className="text-black font-semibold text-sm">₹{product.discountedPrice}</span>
          {product.discountPercentage && (
            <span className="bg-[#b3261e] text-white text-[10px] px-1.5 py-0.5 rounded-sm">
              {product.discountPercentage}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-center gap-1 mb-3">
          <div className="flex text-[#f59e0b] text-xs">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="text-[11px] text-gray-500 font-medium">{product.rating} ({product.reviews} Reviews)</span>
        </div>
        
        {product.options && (
          <div className="flex items-center justify-center gap-2 mb-3">
            {product.options.map(opt => (
              <span key={opt} className="border border-gray-300 text-[10px] px-2 py-1 text-gray-600">
                {opt}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-xs text-gray-500 mt-auto mb-4 min-h-[16px]">{product.description}</p>
        
        <button className="w-full bg-[#111] text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors mt-auto">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
