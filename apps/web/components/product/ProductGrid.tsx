'use client';

import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { useEffect, useRef, useState } from 'react';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
  title?: string;
  className?: string;
}

export function ProductGrid({ products, title, className = '' }: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);
  const displayedProducts = products.slice(startIndex, endIndex);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      // Reset to first page when switching between mobile/desktop
      setCurrentPage(0);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;

    // Create intersection observer for scroll reveal
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.productVisible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    // Observe all product cards
    const cards = gridRef.current.querySelectorAll(`.${styles.productCardWrapper}`);
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [currentPage, displayedProducts]);

  const handleNext = () => {
    if (currentPage < totalPages - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 800);
      
      // Smooth scroll to top of grid
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 800);
      
      // Smooth scroll to top of grid
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const goToPage = (page: number) => {
    if (page !== currentPage && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(page);
      setTimeout(() => setIsAnimating(false), 800);
      
      // Smooth scroll to top of grid
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  if (products.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-soft-600">No products found.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-mauve mb-12 text-center tracking-wide">
          {title}
        </h2>
      )}
      
      <div className="relative">
        {/* Navigation Buttons */}
        {totalPages > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 0 || isAnimating}
              className={`${styles.galleryNavBtn} ${styles.galleryNavPrev}`}
              aria-label="Previous products"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1 || isAnimating}
              className={`${styles.galleryNavBtn} ${styles.galleryNavNext}`}
              aria-label="Next products"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </>
        )}

        {/* Product Grid */}
        <div 
          ref={gridRef}
          className={styles.premiumGalleryGrid}
        >
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className={styles.productCardWrapper}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                disabled={isAnimating}
                className={`${styles.paginationDot} ${
                  currentPage === index ? styles.active : ''
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-sm text-muted-rose font-medium ml-4">
            {startIndex + 1}-{endIndex} of {products.length}
          </div>
        </div>
      )}
    </div>
  );
}

