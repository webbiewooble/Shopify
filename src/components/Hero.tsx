export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#0a0a0a]">
      {/* Left side image/banner area */}
      <div className="w-full md:w-1/2 relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Placeholder for the complex graphic on left */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
        <div className="z-20 text-center px-4">
           {/* Mocking the graphic since I don't have the exact image */}
           <h2 className="text-white text-3xl md:text-5xl font-serif mb-2 tracking-wide font-bold">UPGRADE<br/><span className="font-sans font-light tracking-widest text-xl">YOUR SKIN</span></h2>
           <div className="my-6">
              <span className="text-white text-4xl md:text-6xl font-light">Flat</span>
              <span className="text-white text-5xl md:text-7xl font-bold ml-2">25%</span>
              <span className="text-white text-3xl md:text-5xl font-light ml-1">Off</span>
           </div>
           <div className="inline-block border border-white/50 px-6 py-2 mt-2">
             <p className="text-white/70 text-xs">USE CODE</p>
             <p className="text-white font-bold text-xl uppercase tracking-widest">FLAT25</p>
           </div>
        </div>
      </div>

      {/* Right side text & actions */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-12 lg:p-20 text-center">
        <div className="w-12 h-[1px] bg-white mb-8"></div>
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-snug mb-12">
          HIGHLY EFFECTIVE YET GENTLE<br />SKINCARE
        </h2>
        <div className="flex flex-col sm:flex-row w-full max-w-sm gap-4 justify-center">
          <button className="flex-1 bg-white hover:bg-gray-100 text-black py-4 px-6 text-sm font-semibold tracking-widest uppercase transition-colors">
            Play & Win
          </button>
          <button className="flex-1 bg-white hover:bg-gray-100 text-black py-4 px-6 text-sm font-semibold tracking-widest uppercase transition-colors">
            AI Skin Analyser
          </button>
        </div>
      </div>
    </div>
  );
}
