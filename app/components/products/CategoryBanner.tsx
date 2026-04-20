'use client';
import Image from 'next/image';

interface CategoryBannerProps {
  categoryName: string;
  categoryDescription: string;
  productCount: number;
  bgGradient: string;
  bannerImage?: string | null;
  icon?: string | null;
}

export default function CategoryBanner({ 
  categoryName, 
  categoryDescription, 
  productCount,
  bgGradient,
  bannerImage,
  icon
}: CategoryBannerProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-8">
      {/* Background Image - full visibility with overlay gradient */}
      <div className="absolute inset-0 z-0">
        {bannerImage ? (
          <>
            <Image 
              src={bannerImage} 
              alt={categoryName} 
              fill 
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </>
        ) : (
          // Fallback gradient if no banner image
          <div className={`w-full h-full bg-gradient-to-r ${bgGradient}`}></div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {/* Icon as Image */}
              {icon && (
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image 
                    src={icon} 
                    alt={categoryName} 
                    fill 
                    className="object-contain"
                  />
                </div>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-white">{categoryName}</h2>
            </div>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              {categoryDescription}
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-center min-w-[100px]">
            <div className="text-2xl font-bold text-white">{productCount}</div>
            <div className="text-xs text-white/80">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
}