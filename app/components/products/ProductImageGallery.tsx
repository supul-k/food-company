'use client';
import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
        <span className="text-8xl">
          {productName.includes('Yoghurt') && '🥣'}
          {productName.includes('Milk') && '🥛'}
          {productName.includes('Drinking') && '🥤'}
          {productName.includes('Kithulpeni') && '🍯'}
        </span>
      </div>
      
      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`bg-gray-100 h-24 rounded-lg flex items-center justify-center text-3xl transition ${
                selectedImage === idx ? 'ring-2 ring-brand-yellow ring-offset-2' : 'hover:bg-gray-200'
              }`}
            >
              {idx === 0 && '🍦'}
              {idx === 1 && '🥛'}
              {idx === 2 && '✨'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}