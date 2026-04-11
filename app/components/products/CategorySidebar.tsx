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
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Our Product Line</h3>
      <div className="space-y-2">
        <button
          onClick={() => onSelectCategory('')}
          className={`w-full text-left px-3 py-2 rounded-lg transition ${selectedCategory === ''
              ? 'bg-brand-yellow text-white'
              : 'hover:bg-gray-100 text-gray-700'
            }`}
        >
          All Products ({categories.reduce((acc, cat) => acc + cat.count, 0)})
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onSelectCategory(category.name)}
            className={`w-full text-left px-3 py-2 rounded-lg transition flex justify-between items-center ${selectedCategory === category.name
                ? 'bg-brand-yellow text-white'
                : 'hover:bg-gray-100 text-gray-700'
              }`}
          >
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={category.icon} alt={category.name} width={28} height={28} className="object-contain" />
              </div>
              <span>{category.name}</span>
            </span>
            <span className="text-sm opacity-75">{category.count} products</span>
          </button>
        ))}
      </div>
    </div>
  );
}