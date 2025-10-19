'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Heart, Share2, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProductGrid } from '@/components/product/ProductGrid';
import { products } from '@/data/products';
import { Size, Color } from '@/types';
import { FastProductImage, FastThumbnailImage } from '@/components/ui/FastImage';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category.id === product.category.id)
    .slice(0, 4);

  return (
    <div className="bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-mauve/10 via-muted-rose/10 to-deep-mauve/10 blur-xl" />
          <div className="relative bg-gradient-to-r from-deep-mauve to-muted-rose rounded-xl p-6 md:p-8 shadow-2xl border-2 border-white/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                    <span>Online Shopping Coming Soon!</span>
                    <span className="animate-pulse">✨</span>
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    We're preparing an amazing online shopping experience for you. Our e-commerce features will be live very shortly. Stay tuned!
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                  <p className="text-white font-semibold text-sm">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-soft-700 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary-600">Products</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category.slug}`} className="hover:text-primary-600">
            {product.category.name}
          </Link>
          <span>/</span>
          <span className="text-soft-800">{product.name}</span>
        </nav>

        {/* Back button */}
        <Link
          href="/products"
          className="inline-flex items-center text-soft-700 hover:text-primary-600 mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-primary-200 border border-primary-500 overflow-hidden shadow-md">
              <FastProductImage
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                priority
                aspectRatio="4/5"
                eager={true}
              />
              {product.new && (
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 text-sm font-medium">
                  NEW
                </div>
              )}
            </div>
            
            {/* Thumbnail images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-24 bg-primary-200 border overflow-hidden ${
                      selectedImage === index ? 'border-2 border-primary-600' : 'border-primary-500'
                    }`}
                  >
                    <FastThumbnailImage
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      eager={false}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6 bg-primary-50 border border-primary-500 p-8 shadow-sm">
            <div>
              <h1 className="text-3xl font-serif font-semibold text-soft-800 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-soft-600">{product.category.name}</p>
            </div>

            {/* Price */}
          

            {/* Description */}
            <div>
              <p className="text-soft-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Color Selection */}
            {/* <div>
              <h3 className="text-lg font-medium text-soft-800 mb-3">
                Color: {selectedColor.name}
              </h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 border-2 ${
                      selectedColor.id === color.id ? 'border-primary-500' : 'border-soft-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div> */}

         

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-medium text-soft-800 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-soft-300 hover:border-primary-400 text-soft-700"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-lg font-medium w-12 text-center text-soft-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-soft-300 hover:border-primary-400 text-soft-700"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart - Coming Soon */}
            <div className="space-y-3">
              <button
                disabled
                className="w-full bg-gradient-to-r from-deep-mauve to-muted-rose text-white py-4 px-8 font-semibold text-lg cursor-not-allowed opacity-75 flex items-center justify-center gap-3 border-2 border-white/30 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Online Ordering Coming Soon</span>
              </button>
              <p className="text-sm text-center text-soft-600 italic">
                Shopping cart functionality will be available shortly
              </p>
            </div>
        
            {/* Product Info */}
            <div className="border-t border-soft-200 pt-6 space-y-4">
              <div>
                <h4 className="font-medium text-soft-800 mb-2">Product Details</h4>
                <ul className="text-sm text-soft-600 space-y-1">
                  <li>• Premium quality materials</li>
                  <li>• Comfortable fit</li>
                  <li>• Easy care instructions</li>
                  <li>• Ethically sourced</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-serif font-semibold text-soft-800 mb-8">
              You May Also Like
            </h2>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </div>
  );
}

