/* script.js */
const Bestsellers = [
  {
    id: "1",
    name: "Gel Sunscreen For Oily Skin - SPF 50 PA+++ (50 Gm) | In-Viv...",
    originalPrice: 349,
    discountedPrice: 261,
    discountPercentage: "-25% Off",
    rating: 4.4,
    reviews: 1535,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop",
    description: "New-Gen UV filters, Non-Greasy, Lightweight"
  },
  {
    id: "2",
    name: "10% Vitamin C Serum For Glowing Skin With Liposomal...",
    originalPrice: 799,
    discountedPrice: 599,
    discountPercentage: "-25% Off",
    rating: 4.4,
    reviews: 721,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    description: "Brightens and Evens Skin Tone",
    options: ["30ml", "10ml"]
  },
  {
    id: "3",
    name: "Oil-Free Moisturizer For Oily Skin - 3% NMF Complex + 0.2...",
    originalPrice: 349,
    discountedPrice: 261,
    discountPercentage: "-25% Off",
    rating: 4.4,
    reviews: 358,
    image: "https://images.unsplash.com/photo-1615397323282-5c024d08b3ba?q=80&w=600&auto=format&fit=crop",
    description: "Lightweight, Hydrating, Oil-Free"
  },
  {
    id: "4",
    name: "Dark Spot Clearing Serum With Liposomal Technology | 5%...",
    originalPrice: 699,
    discountedPrice: 524,
    discountPercentage: "-25% Off",
    rating: 4.5,
    reviews: 393,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop",
    description: "Clears acne marks & dark spots"
  }
];

const NewArrivals = [
  {
    id: "5",
    name: "Exfoliating AHA BHA PHA Serum With Liposomal Technology",
    originalPrice: 799,
    discountedPrice: 599,
    discountPercentage: "-25% Off",
    rating: 4.4,
    reviews: 70,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop",
    description: "Reduces Excess Oil, Brightens Dull Skin"
  },
  {
    id: "6",
    name: "Deconstruct Bright + Glow 15% Vitamin C Serum With...",
    originalPrice: 799,
    discountedPrice: 599,
    discountPercentage: "-25% Off",
    rating: 4.6,
    reviews: 30,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=600&auto=format&fit=crop",
    description: "Boost Skin Radiance and Brightness"
  },
  {
    id: "7",
    name: "Oil Control Serum With 3% Niacinamide & 2% Salicylic Aci...",
    originalPrice: 799,
    discountedPrice: 599,
    discountPercentage: "-25% Off",
    rating: 4.8,
    reviews: 274,
    image: "https://images.unsplash.com/photo-1570194065650-d602db06bdc9?q=80&w=600&auto=format&fit=crop",
    description: "Reduces pore appearance"
  },
  {
    id: "8",
    name: "Salicylic Acid Gel Sunscreen",
    originalPrice: 449,
    discountedPrice: 449,
    discountPercentage: "",
    rating: 5.0,
    reviews: 1,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop",
    description: "Control Excess Oil & Unclog Pores"
  }
];

const Routines = [
  {
    id: "9",
    name: "Anti-Acne Skincare Routine Kit For Oily Skin | Dermat...",
    originalPrice: 1696,
    discountedPrice: 1199,
    discountPercentage: "-29% Off",
    rating: 4.0,
    reviews: 159,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    description: "Fights Acne & Oil Control",
    tags: ["-29% Off"]
  },
  {
    id: "10",
    name: "Summer Essential Skincare Routine Kit | Top Seller | Men ...",
    originalPrice: 2344,
    discountedPrice: 1758,
    discountPercentage: "-25% Off",
    rating: 4.2,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1615397323282-5c024d08b3ba?q=80&w=600&auto=format&fit=crop",
    description: "Brightens, Protects & Fights Acne",
    tags: ["-25% Off"]
  },
  {
    id: "11",
    name: "Summer Brightening Skincare Routine Kit",
    originalPrice: 1695,
    discountedPrice: 1271,
    discountPercentage: "-25% Off",
    rating: 4.1,
    reviews: 125,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop",
    description: "",
    tags: ["-25% Off"]
  },
  {
    id: "12",
    name: "Skin Brightening Routine Kit For Dull Skin | Top Best Selling...",
    originalPrice: 1846,
    discountedPrice: 1292,
    discountPercentage: "-30% Off",
    rating: 4.7,
    reviews: 237,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=600&auto=format&fit=crop",
    description: "Brightens Skin, Fades Dark Spots",
    tags: ["-30% Off"]
  }
];

function createProductCard(product) {
  const optionsHtml = product.options ? `
    <div class="flex items-center justify-center gap-2 mb-3">
      ${product.options.map(opt => `<span class="border border-gray-300 text-[10px] px-2 py-1 text-gray-600">${opt}</span>`).join('')}
    </div>
  ` : '';

  const originalPriceHtml = product.originalPrice !== product.discountedPrice ? 
    `<span class="text-gray-400 line-through text-sm font-light">₹${product.originalPrice}</span>` : '';

  const discountHtml = product.discountPercentage ? 
    `<span class="bg-[#b3261e] text-white text-[10px] px-1.5 py-0.5 rounded-sm">${product.discountPercentage}</span>` : '';
  
  const tagHtml = product.discountPercentage || (product.tags && product.tags[0]) ? 
    `<div class="absolute top-0 right-0 bg-[#111] text-white text-[10px] font-bold px-3 py-1 tracking-wider z-10">${product.tags?.[0] || product.discountPercentage}</div>` : '';

  return `
    <div class="flex flex-col group h-full">
      <div class="relative bg-[#f8f8f8] aspect-[4/5] overflow-hidden flex items-center justify-center p-6 mb-4">
        ${tagHtml}
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div class="flex flex-col flex-1 text-center px-2">
        <h3 class="text-sm font-medium text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[40px]">
          ${product.name}
        </h3>
        
        <div class="flex items-center justify-center gap-2 mb-2">
          ${originalPriceHtml}
          <span class="text-black font-semibold text-sm">₹${product.discountedPrice}</span>
          ${discountHtml}
        </div>
        
        <div class="flex items-center justify-center gap-1 mb-3">
          <div class="flex text-[#f59e0b] text-xs">
            ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span class="text-[11px] text-gray-500 font-medium">${product.rating} (${product.reviews} Reviews)</span>
        </div>
        
        ${optionsHtml}
        
        <p class="text-xs text-gray-500 mt-auto mb-4 min-h-[16px]">${product.description || ''}</p>
        
        <button class="w-full bg-[#111] text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors mt-auto">
          Add To Cart
        </button>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const bestsellersContainer = document.getElementById('bestsellers-container');
  if (bestsellersContainer) {
    bestsellersContainer.innerHTML = Bestsellers.map(createProductCard).join('');
  }

  const newArrivalsContainer = document.getElementById('new-arrivals-container');
  if (newArrivalsContainer) {
    newArrivalsContainer.innerHTML = NewArrivals.map(createProductCard).join('');
  }

  const routinesContainer = document.getElementById('routines-container');
  if (routinesContainer) {
    routinesContainer.innerHTML = Routines.map(createProductCard).join('');
  }
});
