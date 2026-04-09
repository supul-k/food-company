'use client';

import { PRODUCTS } from '@/app/lib/constants';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Image from 'next/image';

export default function ProductGrid() {
  const featuredProducts = PRODUCTS.filter(p => p.featured);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Products
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our range of authentic Italian products, made with the finest ingredients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-6xl">🍝</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-700">
                    ${product.price}
                  </span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}