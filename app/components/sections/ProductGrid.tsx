import ProductCard from '../products/ProductCard';
import Button from '../ui/Button';
import { products } from '@/app/lib/productsData';
import Link from 'next/link';

export default function ProductGrid() {
  // Show first 8 products as sample
  const popularProducts = products.filter(p => p.isPopular).slice(0, 4);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="secondary">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}