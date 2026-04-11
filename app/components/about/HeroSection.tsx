import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Replace with your actual image - e.g., forest/farm background */}
          <div className="w-full h-full bg-gradient-to-r from-brand-yellow to-brand-green">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              Since 2016
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            SOME WORDS ABOUT US
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl font-semibold opacity-95">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Preserving Nature's Harvest for a Healthier Tomorrow.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Sustainable Harvesting</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>132+ Products</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Supporting Local Farmers</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}