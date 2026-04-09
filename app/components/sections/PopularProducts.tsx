'use client';
import { products } from '@/app/lib/productsData';
import ProductCard from '../products/ProductCard';
import Button from '../ui/Button';
import Link from 'next/link';

export default function PopularProducts() {
  const popularProducts = products.filter(p => p.isPopular).slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Popular of the Week</h2>
        <p className="text-center text-gray-600 mb-12">Our customers favorite choices</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/products">
            <Button variant="secondary">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}