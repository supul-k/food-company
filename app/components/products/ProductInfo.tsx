'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import { Product } from '@/app/lib/productsData';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

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

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-brand-yellow">Rs. {product.price}</span>
        {product.originalPrice && (
          <span className="text-lg text-gray-400 line-through">Rs. {product.originalPrice}</span>
        )}
        {product.weight && <span className="text-gray-500">/ {product.weight}</span>}
      </div>

      {/* Short Description */}
      <p className="text-gray-600 leading-relaxed">{product.description}</p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-semibold">Quantity:</span>
        <div className="flex items-center border rounded-lg">
          <button
            onClick={decreaseQuantity}
            className="px-3 py-1 border-r hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4 py-1 min-w-[50px] text-center">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-3 py-1 border-l hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-gray-600">
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button variant="primary" className="flex-1">
          🛒 Add to Cart
        </Button>
        <Button variant="outline" className="flex-1">
          💬 Buy Now
        </Button>
      </div>

      {/* Key Info */}
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