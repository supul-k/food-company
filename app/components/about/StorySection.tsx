import Button from '../ui/Button';
import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are ?</h2>
              <p className="text-brand-green font-semibold text-lg mb-3">About Sustenance Lanka (Pvt) Ltd</p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-brand-yellow text-xl">🌿</span>
                  <p className="text-gray-600 leading-relaxed">
                    Our primary objective is to develop innovative products using fruits, vegetables, and tubers that naturally thrive in the rich forests and fertile lands of Uva Wellassa.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-brand-yellow text-xl">🏷️</span>
                  <p className="text-gray-600 leading-relaxed">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    These products will be introduced to the market under the brand name <span className="font-semibold text-brand-green">"Wild Pick"</span>.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-brand-yellow text-xl">👨‍🌾</span>
                  <p className="text-gray-600 leading-relaxed">
                    This initiative offers consumers the chance to enjoy the authentic flavors of naturally sourced harvests, while also creating an additional source of income for local farmers in the region.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-brand-yellow text-xl">🔬</span>
                  <p className="text-gray-600 leading-relaxed">
                    In addition, Sustenance Lanka (Pvt) Ltd is actively engaged in research and development to create value-added products from the surplus agricultural harvest in the Uva Province.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-brand-yellow text-xl">🎃</span>
                  <p className="text-gray-600 leading-relaxed">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    As an outcome of these efforts, alongside the "Wild Pick" range, we plan to introduce a new product line made from pumpkin, under the brand name <span className="font-semibold text-brand-green">"Pepo"</span>.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-white font-bold">WP</div>
                    <div>
                      <p className="text-xs text-gray-500">Brand</p>
                      <p className="font-semibold text-gray-800">Wild Pick</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">PE</div>
                    <div>
                      <p className="text-xs text-gray-500">Brand</p>
                      <p className="font-semibold text-gray-800">Pepo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl flex items-center justify-center text-8xl relative overflow-hidden">
                <span className="relative z-10">🌾</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-transparent opacity-50"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-40 rounded-2xl flex flex-col items-center justify-center">
                  <span className="text-5xl mb-2">🥒</span>
                  <span className="text-sm font-semibold text-gray-700">Fresh Produce</span>
                </div>
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-40 rounded-2xl flex flex-col items-center justify-center">
                  <span className="text-5xl mb-2">🎃</span>
                  <span className="text-sm font-semibold text-gray-700">Pumpkin Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}