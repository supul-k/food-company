import { productCategories } from '@/app/lib/data';
import Image from 'next/image';

export default function ProductCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Product Line</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Sustenance Lanka brings you innovative, value-added food and beverage products 
          crafted from locally preserved agricultural commodities. Each product is developed 
          through rigorous research and the best post-harvest methods, ensuring nutrition, 
          quality, and taste in every bite.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {productCategories.map((cat) => (
            <div key={cat.slug} className="text-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center text-3xl mx-auto mb-2">
                <Image src={cat.icon} alt={cat.name} width={60} height={60} className="object-contain" priority />
              </div>
              <p className="font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}