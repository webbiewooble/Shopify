import SectionHeader from './SectionHeader';

export default function Spotlight() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="In The Spotlight" />
        
        <div className="flex flex-col md:flex-row gap-4 mt-8 h-[600px]">
          {/* Left Large Image Placeholder */}
          <div className="w-full md:w-1/2 h-full bg-[#f3f3f3] flex items-center justify-center p-12">
             <div className="w-16 h-[1px] bg-black opacity-20"></div>
          </div>
          
          {/* Right Stacked Images */}
          <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
            <div className="w-full h-1/2 bg-[#f3f3f3] flex items-center justify-center p-12">
               <div className="w-16 h-[1px] bg-black opacity-20"></div>
            </div>
            <div className="w-full h-1/2 bg-[#f3f3f3] flex items-center justify-center p-12">
               <div className="w-16 h-[1px] bg-black opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
