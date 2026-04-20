'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Preload all images on mount
  useEffect(() => {
    images.forEach((image) => {
      const img = document.createElement('img');
      img.src = image;
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(image));
      };
    });
  }, [images]);

  const isImageLoaded = loadedImages.has(images[selectedImage]);

  return (
    <div className="space-y-4">
  {/* Main Image Container - Fixed height with flex centering */}
  <div className="rounded-2xl h-96 flex items-center justify-center overflow-hidden">
    <div className="relative w-full h-full flex items-center justify-center">
      <Image 
        src={images[selectedImage]} 
        alt={productName} 
        height={300}
        width={400}
        className="object-contain max-w-full max-h-full"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative aspect-square rounded-lg overflow-hidden transition ${
                selectedImage === idx ? 'ring-2 ring-brand-yellow ring-offset-2' : 'hover:opacity-80'
              }`}
            >
              <Image 
                src={image} 
                alt={`${productName} ${idx + 1}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 80px, 100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}