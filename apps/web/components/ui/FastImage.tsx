'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FastImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  eager?: boolean;
}

// Ultra-fast blur placeholder - pre-generated for maximum performance
const FAST_BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

export function FastImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  quality = 85,
  sizes,
  aspectRatio,
  objectFit = 'cover',
  eager = false,
}: FastImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority || eager);
  const imgRef = useRef<HTMLDivElement>(null);

  // Optimized intersection observer with minimal overhead
  useEffect(() => {
    if (priority || eager || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Load earlier for smoother experience
        threshold: 0.01, // Minimal threshold for faster triggering
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, eager, isInView]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Determine WebP source with fallback
  const getOptimizedSrc = (originalSrc: string): string => {
    // If already WebP, use as-is
    if (originalSrc.endsWith('.webp')) {
      return originalSrc;
    }
    
    // Convert to WebP path
    const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  // Container styles
  const containerStyles = aspectRatio 
    ? { aspectRatio } 
    : fill 
    ? {} 
    : { width, height };

  // Fast loading skeleton
  const FastSkeleton = () => (
    <div 
      className={cn(
        "bg-gray-200 animate-pulse",
        fill ? "absolute inset-0" : "",
        className
      )}
      style={containerStyles}
    />
  );

  // Error fallback
  const ErrorFallback = () => (
    <div 
      className={cn(
        "flex items-center justify-center bg-gray-100 text-gray-400",
        fill ? "absolute inset-0" : "",
        className
      )}
      style={containerStyles}
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  );

  return (
    <div 
      ref={imgRef}
      className={cn(
        "relative overflow-hidden",
        fill ? "w-full h-full" : "",
        aspectRatio ? "w-full" : ""
      )}
      style={containerStyles}
    >
      {/* Show skeleton while loading */}
      {isLoading && !hasError && <FastSkeleton />}
      
      {/* Show error fallback */}
      {hasError && <ErrorFallback />}
      
      {/* Main image - only render when in view or priority */}
      {isInView && !hasError && (
        <Image
          src={optimizedSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className={cn(
            objectFit === 'cover' ? 'object-cover' :
            objectFit === 'contain' ? 'object-contain' :
            objectFit === 'fill' ? 'object-fill' :
            objectFit === 'none' ? 'object-none' :
            'object-scale-down',
            'transition-opacity duration-300 ease-out',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          priority={priority}
          quality={quality}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={FAST_BLUR_DATA_URL}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          unoptimized={false}
        />
      )}
    </div>
  );
}

// Preset configurations for common use cases
export const FastProductImage = (props: Omit<FastImageProps, 'quality' | 'sizes'>) => (
  <FastImage
    quality={90}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    {...props}
  />
);

export const FastThumbnailImage = (props: Omit<FastImageProps, 'quality' | 'sizes'>) => (
  <FastImage
    quality={80}
    sizes="120px"
    {...props}
  />
);

export const FastHeroImage = (props: Omit<FastImageProps, 'quality' | 'sizes' | 'priority'>) => (
  <FastImage
    quality={95}
    sizes="100vw"
    priority={true}
    {...props}
  />
);
