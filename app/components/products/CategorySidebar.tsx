'use client';

import Image from "next/image";

interface CategorySidebarProps {
  categories: { name: string; slug: string; count: number; icon: string }[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategorySidebar({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategorySidebarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 sticky top-24">
      <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Our Product Line</h3>
      <div className="space-y-1 sm:space-y-2">
        <button
          onClick={() => onSelectCategory('')}
          className={`w-full text-left px-3 py-2 rounded-lg transition text-sm sm:text-base ${
            selectedCategory === ''
              ? 'bg-brand-yellow text-white'
              : 'hover:bg-gray-100 text-gray-700'
          }`}
        >
          <span className="flex items-center justify-between gap-2">
            <span>All Products</span>
            <span className="text-xs opacity-75 whitespace-nowrap">
              {categories.reduce((acc, cat) => acc + cat.count, 0)} products
            </span>
          </span>
        </button>
        
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onSelectCategory(category.name)}
            className={`w-full text-left px-3 py-2 rounded-lg transition flex items-center justify-between gap-2 text-sm sm:text-base ${
              selectedCategory === category.name
                ? 'bg-brand-yellow text-white'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <span className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-center justify-center">
                <Image src={category.icon} alt={category.name} width={22} height={22} className="object-contain" />
              </div>
              <span className="truncate">{category.name}</span>
            </span>
            <span className="text-xs opacity-75 flex-shrink-0">
              {category.count} products
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}