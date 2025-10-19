import Link from 'next/link';
import { Product } from '@/types';
import { FastProductImage } from '@/components/ui/FastImage';
import { useState, useCallback } from 'react';
import './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [touchStartTime, setTouchStartTime] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartTime(Date.now());
    setTouchStartX(e.touches[0].clientX);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    // For touch events, check if this was a drag
    if ('touches' in e || 'changedTouches' in e) {
      const touchEvent = e as React.TouchEvent;
      const touchEndTime = Date.now();
      const touchDuration = touchEndTime - touchStartTime;
      
      // If touch was held for more than 200ms or moved significantly, it might be a drag
      if (touchDuration > 200) {
        const touchEndX = touchEvent.changedTouches?.[0]?.clientX || touchEvent.touches?.[0]?.clientX || touchStartX;
        const touchDistance = Math.abs(touchEndX - touchStartX);
        
        // If moved more than 10px, prevent navigation
        if (touchDistance > 10) {
          e.preventDefault();
          return false;
        }
      }
    }
  }, [touchStartTime, touchStartX]);

  return (
      <Link
        href={`/product/${product.id}`}
        className="product-card group block w-full h-full text-left relative"
        onTouchStart={handleTouchStart}
        onClick={handleClick}
      >
        <div className="flex flex-col h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden border-2 border-muted-rose/20 hover:border-muted-rose/50 cursor-pointer transform hover:-translate-y-2">
          {/* Image Container */}
          <div className="relative overflow-hidden bg-gradient-to-br from-warm-pink/30 to-light-blush aspect-[3/4]">
            <FastProductImage
              src={product.images[0]}
              alt={product.name}
              fill
              className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              aspectRatio="3/4"
              eager={true}
            />
            {product.new && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-muted-rose to-deep-mauve text-neutral-white px-4 py-1.5 text-xs font-bold shadow-xl rounded-full animate-pulse-slow border-2 border-white/50">
                ✨ NEW
              </div>
            )}
            
            {/* Hover Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-mauve/60 via-muted-rose/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
          
          {/* Content Container */}
          <div className="flex-1 flex flex-col p-5 space-y-2.5 bg-gradient-to-b from-light-blush to-white group-hover:from-warm-pink/20 group-hover:to-light-blush transition-all duration-500">
            <h3 className="text-base md:text-lg font-bold text-deep-mauve group-hover:text-muted-rose transition-colors line-clamp-2 min-h-[3rem]">
              {product.name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-secondary font-semibold uppercase tracking-wide">{product.category.name}</p>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-muted-rose to-deep-mauve flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
}
