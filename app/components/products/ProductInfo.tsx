'use client';
import { Product } from '@/app/lib/productsData';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  // Removed quantity state and handlers since no cart functionality

  return (
    <div className="space-y-6">
      {/* Category Badge */}
      <div>
        <span className="inline-block px-3 py-1 bg-brand-green text-white text-sm rounded-full">
          {product.category}
        </span>
        {product.isPopular && (
          <span className="inline-block ml-2 px-3 py-1 bg-brand-yellow text-white text-sm rounded-full">
            🔥 Popular
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.name}</h1>

      {/* Price section removed - showcase only */}

      {/* Short Description */}
      <p className="text-gray-600 leading-relaxed">{product.description}</p>

      {/* Quantity selector removed */}

      {/* Stock status removed (optional - can keep for info, but no action) */}
      {/* <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-gray-600">
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div> */}

      {/* Action Buttons removed - no cart or buy now */}

      {/* Key Info (keep nutritional/weight info) */}
      {product.weight && (
        <div className="flex items-center gap-2 text-gray-600">
          <span>⚖️</span>
          <span>Net Weight: {product.weight}</span>
        </div>
      )}
      {product.servings && (
        <div className="flex items-center gap-2 text-gray-600">
          <span>🍽️</span>
          <span>Servings: {product.servings}</span>
        </div>
      )}
    </div>
  );
}