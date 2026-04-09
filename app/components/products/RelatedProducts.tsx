'use client';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { Product } from '@/app/lib/productsData';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}