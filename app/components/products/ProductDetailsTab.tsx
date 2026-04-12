'use client';
import { useState } from 'react';
import { Product } from '@/app/lib/productsData';

interface ProductDetailsTabProps {
  product: Product;
}

type TabType = 'description' | 'nutrition' | 'ingredients' | 'storage';

export default function ProductDetailsTab({ product }: ProductDetailsTabProps) {
  const [activeTab, setActiveTab] = useState<TabType>('description');

  const tabs = [
    { id: 'description' as TabType, label: 'Description', icon: '📝' },
    { id: 'nutrition' as TabType, label: 'Nutritional Info', icon: '📊' },
    { id: 'ingredients' as TabType, label: 'Ingredients', icon: '🥗' },
    { id: 'storage' as TabType, label: 'Storage', icon: '❄️' },
  ];

  return (
    <div className="mt-8 sm:mt-12">
      {/* Tab Headers - Made scrollable on mobile */}
      <div className="overflow-x-auto overflow-y-hidden pb-2">
        <div className="flex border-b gap-4 sm:gap-8 min-w-max sm:min-w-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 sm:pb-3 px-2 flex items-center gap-1 sm:gap-2 transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-brand-yellow text-brand-yellow font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-base sm:text-lg">{tab.icon}</span>
              <span className="text-sm sm:text-base">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-4 sm:py-6">
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {product.fullDescription || product.description}
            </p>
          </div>
        )}

        {activeTab === 'nutrition' && product.nutritionalInfo && (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Nutritional Information</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {product.nutritionalInfo.calories && (
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-brand-yellow">{product.nutritionalInfo.calories}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Calories (kcal)</div>
                </div>
              )}
              {product.nutritionalInfo.protein && (
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-brand-yellow">{product.nutritionalInfo.protein}g</div>
                  <div className="text-xs sm:text-sm text-gray-600">Protein</div>
                </div>
              )}
              {product.nutritionalInfo.carbs && (
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-brand-yellow">{product.nutritionalInfo.carbs}g</div>
                  <div className="text-xs sm:text-sm text-gray-600">Carbohydrates</div>
                </div>
              )}
              {product.nutritionalInfo.fat && (
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-brand-yellow">{product.nutritionalInfo.fat}g</div>
                  <div className="text-xs sm:text-sm text-gray-600">Fat</div>
                </div>
              )}
              {product.nutritionalInfo.calcium && (
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-brand-yellow">{product.nutritionalInfo.calcium}mg</div>
                  <div className="text-xs sm:text-sm text-gray-600">Calcium</div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'ingredients' && product.ingredients && (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Ingredients</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
              {product.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">
              * Contains milk. May contain traces of nuts and gluten.
            </p>
          </div>
        )}

        {activeTab === 'storage' && (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Storage Instructions</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {product.storageInstructions || 'Keep refrigerated at 4°C. Consume within 3-4 days of opening. Do not freeze.'}
            </p>
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mt-4">
              <p className="text-xs sm:text-sm text-blue-800">
                💡 Tip: For best taste, consume within 2 days of opening and always use a clean spoon to avoid contamination.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}