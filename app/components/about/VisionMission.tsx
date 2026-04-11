import Image from 'next/image';

export default function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Vision & Mission
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition">
                👁️
              </div>
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-brand-yellow mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To store Sri Lankan agricultural post-harvest using the best preservation methods and thereby introduce nutritious new products to the market.
              </p>
              <div className="mt-6 flex items-center gap-2 text-brand-yellow">
                <span className="text-sm font-semibold">Innovation for Tomorrow</span>
                <span>→</span>
              </div>
            </div>
            
            {/* Mission Card */}
            <div className="group relative bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition">
                🎯
              </div>
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-brand-green mb-4">Our Mission</h3>
              <div className="space-y-3">
                <p className="text-gray-700 text-md leading-relaxed">
                  ✓ To preserve agricultural commodities by applying best post-harvest solutions and storage them.
                </p>
                <p className="text-gray-700 text-md leading-relaxed">
                  ✓ Processing, packing, storage, distribution and sale of value-added food and beverage products.
                </p>
                <p className="text-gray-700 text-md leading-relaxed">
                  ✓ Research and Development of innovative food & beverage products.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-brand-green">
                <span className="text-sm font-semibold">Our Commitment to Quality</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}