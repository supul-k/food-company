import { productCategories } from '@/app/lib/data';

export default function ProductCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Products line</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Chello’s premium dairy collection combines tradition and innovation to offer products that are as nutritious as they are delicious.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {productCategories.map((cat) => (
            <div key={cat.slug} className="text-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center text-3xl mx-auto mb-2">
                {cat.icon}
              </div>
              <p className="font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}