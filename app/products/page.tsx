'use client';
import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CategorySidebar from '../components/products/CategorySidebar';
import ProductGrid from '../components/products/ProductGrid';
import ProductSort from '../components/products/ProductSort';
import Pagination from '../components/products/Pagination';
import CategoryBanner from '../components/products/CategoryBanner';
import Select from '../components/ui/Select';
import { products, categories } from '../lib/productsData';
import { getCategoryMetadata } from '../lib/data';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Sustenance Lanka',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory) {
      filtered = products.filter(p => p.category === selectedCategory);
    }
    return filtered;
  }, [selectedCategory]);

  // Get category metadata for banner
  const categoryMetadata = selectedCategory ? getCategoryMetadata(selectedCategory) : null;
  const categoryProductCount = filteredProducts.length;

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case 'popularity':
        return sorted.sort((a, b) => b.popularity - a.popularity);
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  // Paginate products
  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedProducts.slice(start, end);
  }, [sortedProducts, currentPage, itemsPerPage]);

  // Reset page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setIsSidebarOpen(false);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  // Clear category filter
  const handleClearCategory = () => {
    setSelectedCategory('');
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-6">
              <span className="text-gray-700">Home</span> &gt; 
              {selectedCategory ? (
                <>
                  <Link href="/products" className="hover:text-brand-yellow ml-1">Products</Link>
                  <span className="mx-1"> &gt; </span>
                  <span className="text-brand-yellow">{selectedCategory}</span>
                </>
              ) : (
                <span className="text-brand-yellow ml-1"> Our Product Line</span>
              )}
            </div>

            {/* Category Banner - Only show when category is selected */}
            {selectedCategory && categoryMetadata && (
              <CategoryBanner
                categoryName={selectedCategory}
                categoryDescription={categoryMetadata.description}
                productCount={categoryProductCount}
                bgGradient={categoryMetadata.bgGradient}
                bannerImage={categoryMetadata.bannerImage}
                icon={categoryMetadata.icon} 
              />
            )}

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="w-full bg-brand-yellow text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <span>🔍</span>
                {isSidebarOpen ? 'Hide Categories' : 'Show Categories'}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className={`lg:col-span-1 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
                <CategorySidebar
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategoryChange}
                  onClearCategory={handleClearCategory}
                />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Controls Bar */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="text-gray-600 text-sm">
                    Showing {paginatedProducts.length} of {totalProducts} products
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Show</span>
                      <Select
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        options={[
                          { value: 9, label: '9' },
                          { value: 12, label: '12' },
                          { value: 18, label: '18' },
                          { value: 24, label: '24' },
                        ]}
                        className="w-20"
                      />
                    </div>

                    <ProductSort sortBy={sortBy} onSortChange={handleSortChange} />
                  </div>
                </div>

                {/* Products Grid */}
                <ProductGrid products={paginatedProducts} />

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}