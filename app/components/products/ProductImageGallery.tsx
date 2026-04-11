'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-96 relative overflow-hidden">
        {images[selectedImage] ? (
          <Image src={images[selectedImage]} alt={productName} fill className="object-contain" priority />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-8xl">🛒</div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative h-24 rounded-lg overflow-hidden transition ${
                selectedImage === idx ? 'ring-2 ring-brand-yellow ring-offset-2' : 'hover:opacity-80'
              }`}
            >
              {image ? (
                <Image src={image} alt={`${productName} ${idx + 1}`} fill className="object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-2xl">🛒</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}