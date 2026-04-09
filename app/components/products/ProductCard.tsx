'use client';
import Link from 'next/link';
import { Product } from '@/app/lib/productsData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getProductIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Drinking Yoghurt': '🥤',
      'Fresh Milk': '🥛',
      'Ice Lollies': '🍦',
      'Set Kiri': '🍮',
      'Soft Drink': '🧃',
      'Yoghurt': '🥣',
    };
    return icons[category] || '🥛';
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group cursor-pointer">
      <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
        {product.isPopular && (
          <span className="absolute top-2 right-2 bg-brand-yellow text-white text-xs px-2 py-1 rounded-full z-10">
            Popular
          </span>
        )}
        <span className="text-6xl">{getProductIcon(product.category)}</span>
      </div>
      <div className="p-4">
        <p className="text-xs text-brand-green font-semibold mb-1">{product.category}</p>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-brand-yellow">Rs. {product.price}</span>
          <Link href={`/products/${product.slug}`}>
            <button className="px-4 py-1 border-2 border-brand-yellow text-brand-yellow rounded-lg hover:bg-brand-yellow hover:text-white transition text-sm font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}