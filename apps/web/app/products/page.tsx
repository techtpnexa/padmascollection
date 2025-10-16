
'use client';
import { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Button } from '@/components/ui/Button';
import { products, categories } from '@/data/products';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFilter || 'all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category.slug === selectedCategory);
    }

    // Sort products


    return filtered;
  }, [selectedCategory, sortBy]);

  const selectedCategoryName = selectedCategory === 'all' 
    ? 'All Products' 
    : categories.find(cat => cat.slug === selectedCategory)?.name || 'All Products';

  return (
    <div className="min-h-screen bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-semibold text-soft-800 mb-2">
              {selectedCategoryName}
            </h1>
            <p className="text-soft-700">
              {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-primary-500 bg-primary-50 px-3 py-2 text-sm text-soft-800 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-primary-50 border border-primary-500 shadow-sm p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-soft-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-3 text-primary-500 focus:ring-primary-400"
                    />
                    <span className="text-sm text-soft-700">All Products</span>
                  </label>
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.slug}
                        checked={selectedCategory === category.slug}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-3 text-primary-500 focus:ring-primary-400"
                      />
                      <span className="text-sm text-soft-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

           

            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredAndSortedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

