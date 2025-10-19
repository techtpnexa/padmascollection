'use client';

import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { useEffect, useRef, useState, useCallback } from 'react';
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
  
  // Touch/Swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);
  const displayedProducts = products.slice(startIndex, endIndex);

  // Swipe detection constants
  const minSwipeDistance = 50;

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

  // Touch/Swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!isMobile) return;
    
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(false); // Reset dragging state
    // Don't set dragging immediately - wait for actual movement
  }, [isMobile]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isMobile || touchStart === null) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;
    
    // Only start dragging if movement is significant (prevents accidental drags)
    if (Math.abs(diff) > 5) {
      if (!isDragging) {
        setIsDragging(true);
      }
      
      // Prevent scrolling when dragging
      e.preventDefault();
      
      // Limit drag offset to prevent over-scrolling
      const maxOffset = 100;
      const limitedOffset = Math.max(-maxOffset, Math.min(maxOffset, diff));
      setDragOffset(limitedOffset);
      setTouchEnd(currentTouch);
    }
  }, [isMobile, isDragging, touchStart]);

  const handleTouchEnd = useCallback(() => {
    if (!isMobile || !touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentPage < totalPages - 1) {
      handleNext();
    } else if (isRightSwipe && currentPage > 0) {
      handlePrev();
    }

    // Reset states
    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  }, [isMobile, touchStart, touchEnd, minSwipeDistance, currentPage, totalPages]);

  // Mouse handlers removed - desktop uses navigation buttons only

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
          ref={containerRef}
          className={`relative overflow-hidden ${styles.swipeContainer} ${isDragging ? styles.dragging : ''}`}
          {...(isMobile && {
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd,
          })}
          style={{
            cursor: isDragging ? 'grabbing' : 'default',
            userSelect: isDragging ? 'none' : 'auto',
          }}
        >
          {/* Drag hint areas for mobile - only show when there are multiple pages */}
          {isMobile && totalPages > 1 && (
            <>
              <div className="absolute left-0 top-0 w-12 h-full z-20 flex items-center justify-center bg-gradient-to-r from-black/5 to-transparent pointer-events-none">
                <div className="w-1 h-8 bg-muted-rose/30 rounded-full"></div>
              </div>
              <div className="absolute right-0 top-0 w-12 h-full z-20 flex items-center justify-center bg-gradient-to-l from-black/5 to-transparent pointer-events-none">
                <div className="w-1 h-8 bg-muted-rose/30 rounded-full"></div>
              </div>
            </>
          )}
          <div 
            ref={gridRef}
            className={styles.premiumGalleryGrid}
            style={{
              transform: `translateX(${-dragOffset}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            }}
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
      </div>

      {/* Mobile Swipe Indicator */}
      {isMobile && totalPages > 1 && (
        <div className="flex items-center justify-center mt-8 mb-4">
          <div className="bg-gradient-to-r from-muted-rose/20 to-deep-mauve/20 px-4 py-2 rounded-full border border-muted-rose/30">
            <div className="flex items-center gap-2 text-sm text-deep-mauve">
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="font-medium">Swipe to browse</span>
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      )}

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

