import SectionHeader from './SectionHeader';
import { Play } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <SectionHeader title="Philosophy" />
        
        <p className="text-gray-800 text-lg md:text-xl font-light mb-10 leading-relaxed font-serif">
          Deconstruct offers Beginner-friendly, Highly Effective Yet Gentle products for those who<br className="hidden md:block"/> are starting their science-backed skincare journey.
        </p>
        
        <button className="border border-black text-black px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors mb-20">
          Know More
        </button>
        
        {/* Video Placeholder */}
        <div className="relative w-full aspect-video bg-[#f3f3f3] flex items-center justify-center cursor-pointer group">
           <div className="w-16 h-16 bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
           </div>
        </div>
      </div>
    </section>
  );
}
