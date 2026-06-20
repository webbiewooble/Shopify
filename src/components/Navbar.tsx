import { Search, User, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center pr-10">
            <h1 className="text-2xl font-serif tracking-tighter leading-none font-bold">
              de<br />cons<br />truct&deg;
            </h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-900 hover:text-black font-medium text-xs tracking-widest uppercase">Shop</a>
            <a href="#" className="text-gray-900 hover:text-black font-medium text-xs tracking-widest uppercase">Offers</a>
            <a href="#" className="text-gray-900 hover:text-black font-medium text-xs tracking-widest uppercase">Blogs</a>
            <a href="#" className="text-gray-900 hover:text-black font-medium text-xs tracking-widest uppercase">Refer & Earn</a>
            <a href="#" className="text-gray-900 hover:text-black font-medium text-xs tracking-widest uppercase">Our Philosophy</a>
            <a href="#" className="text-gray-900 hover:text-black font-medium text-xs tracking-widest uppercase">Track Your Order</a>
            <a href="#" className="text-gray-900 hover:text-black font-medium text-xs tracking-widest uppercase">Play & Win</a>
            <a href="#" className="text-gray-900 hover:text-black font-medium text-xs tracking-widest uppercase">Dermat Consultation</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 pl-4">
            <button className="text-gray-600 hover:text-black p-1">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="text-gray-600 hover:text-black p-1">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="text-gray-600 hover:text-black p-1 relative">
              <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
