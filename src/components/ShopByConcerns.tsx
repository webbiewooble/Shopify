import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function ShopByConcerns() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Shop By Concerns" />
        
        <div className="flex items-center justify-between mt-8 hidden md:flex">
           <button className="p-4 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-10 h-10 text-gray-800" strokeWidth={1} />
           </button>
           
           <div className="flex-1 flex gap-4 overflow-hidden px-8 justify-center items-center">
             {/* Imagine circles/icons for concerns here */}
             <div className="w-full h-[100px] border border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-light text-sm">
                Concern Categories Slider Placeholder
             </div>
           </div>

           <button className="p-4 hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-10 h-10 text-gray-800" strokeWidth={1} />
           </button>
        </div>
      </div>
    </section>
  );
}
