import { products } from '@/app/lib/data';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';

export default function ProductGrid() {
  // Show first 8 products as sample
  const displayedProducts = products.slice(0, 8);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="secondary">Click Here to view all products</Button>
        </div>
      </div>
    </section>
  );
}