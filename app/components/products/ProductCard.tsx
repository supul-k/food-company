'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product } from '@/app/lib/productsData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
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
    <div onClick={() => router.push(`/products/${product.slug}`)} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group cursor-pointer">
      <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
        {product.isPopular && (
          <span className="absolute top-2 right-2 bg-brand-yellow text-white text-xs px-2 py-1 rounded-full z-10">
            Popular
          </span>
        )}
        {product.image ? (
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        ) : (
          <span className="text-6xl">{getProductIcon(product.category)}</span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-brand-green font-semibold mb-1">{product.category}</p>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        {/* Price removed for showcase-only */}
        <div className="flex items-center justify-end">
          <button
            onClick={(e) => { e.stopPropagation(); router.push(`/products/${product.slug}`); }}
            className="px-4 py-1 border-2 border-brand-yellow text-brand-yellow rounded-lg hover:bg-brand-yellow hover:text-white transition text-sm font-semibold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}