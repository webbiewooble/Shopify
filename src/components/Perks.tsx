export default function Perks() {
  return (
    <div className="bg-[#f0f0f0] border-t border-b border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row py-8 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <div className="flex-1 text-center font-sans px-4 py-4 md:py-0">
            <h4 className="text-lg font-bold text-black mb-1">Free Shipping</h4>
            <p className="text-sm text-gray-600 font-light">On all orders above ₹499</p>
          </div>
          <div className="flex-1 text-center font-sans px-4 py-4 md:py-0">
            <h4 className="text-lg font-bold text-black mb-1">Exclusive Offers</h4>
            <p className="text-sm text-gray-600 font-light">Lowest Prices on website</p>
          </div>
          <div className="flex-1 text-center font-sans px-4 py-4 md:py-0">
            <h4 className="text-lg font-bold text-black mb-1">Loved By 5M+ Customers</h4>
            <p className="text-sm text-gray-600 font-light">Rated 4.8/5 by thousands</p>
          </div>
        </div>
      </div>
    </div>
  );
}
