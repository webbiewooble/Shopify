import SectionHeader from './SectionHeader';

export default function Blogs() {
  const blogPosts = [
    {
      title: "GEL SUNSCREEN: THE BEST SPF SUNSCREEN FOR OILY AND ACNE-PRONE SKIN",
      date: "AUGUST 27, 2024"
    },
    {
      title: "SPF LIP BALMS VS. REGULAR LIP BALM: UNDERSTANDING THE DIFFERENCE",
      date: "JUNE 26, 2024"
    },
    {
      title: "GUIDE TO LIGHTWEIGHT GEL SUNSCREEN FOR OILY SKIN",
      date: "JULY 15, 2024"
    },
    {
      title: "STAY SAFE IN THE SUN: ESSENTIAL SPF 50 SUNSCREEN FOR ALL SKIN TYPES",
      date: "JUNE 20, 2024"
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Blogs" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="bg-[#0a0a0a] text-white aspect-[3/4] flex flex-col justify-end p-8 hover:bg-black transition-colors cursor-pointer relative overflow-hidden group">
               <div className="absolute top-8 left-8 w-8 h-[1px] bg-white opacity-50 group-hover:opacity-100 transition-opacity"></div>
               <h3 className="text-sm font-semibold tracking-wide leading-relaxed mb-8 uppercase">
                 {post.title}
               </h3>
               <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                 {post.date}
               </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="bg-[#111] text-white px-12 py-3 text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors min-w-[200px]">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
