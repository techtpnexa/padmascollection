'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  // Custom optimization props
  eager?: boolean; // Load immediately when in viewport
  fadeIn?: boolean; // Smooth fade-in animation
  showSkeleton?: boolean; // Show skeleton while loading
  aspectRatio?: string; // e.g., "4/5", "16/9"
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

// Generate a simple blur placeholder
const generateBlurDataURL = (width: number = 8, height: number = 8): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Create a gradient blur effect
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(0.5, '#e5e7eb');
  gradient.addColorStop(1, '#d1d5db');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

// Predefined blur data URL for better performance
const DEFAULT_BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  quality = 85,
  sizes,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
  eager = false,
  fadeIn = true,
  showSkeleton = true,
  aspectRatio,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority || eager);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || eager || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, eager, isInView]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Determine the blur data URL
  const effectiveBlurDataURL = blurDataURL || DEFAULT_BLUR_DATA_URL;

  // Container styles
  const containerStyles = aspectRatio 
    ? { aspectRatio } 
    : fill 
    ? {} 
    : { width, height };

  // Skeleton component
  const Skeleton = () => (
    <div 
      className={cn(
        "animate-pulse bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_200%]",
        fill ? "absolute inset-0" : "",
        className
      )}
      style={containerStyles}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
    </div>
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
      <div className="text-center">
        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-xs">Failed to load</p>
      </div>
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
      {showSkeleton && isLoading && !hasError && <Skeleton />}
      
      {/* Show error fallback */}
      {hasError && <ErrorFallback />}
      
      {/* Main image - only render when in view or priority */}
      {isInView && !hasError && (
        <Image
          src={src}
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
            fadeIn && isLoading ? 'opacity-0' : 'opacity-100',
            fadeIn ? 'transition-opacity duration-500 ease-out' : '',
            className
          )}
          priority={priority}
          quality={quality}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={effectiveBlurDataURL}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
      
      {/* Loading overlay with fade effect */}
      {fadeIn && isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Preset configurations for common use cases
export const ProductImage = (props: Omit<OptimizedImageProps, 'quality' | 'sizes' | 'placeholder'>) => (
  <OptimizedImage
    quality={90}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    placeholder="blur"
    fadeIn={true}
    showSkeleton={true}
    {...props}
  />
);

export const ThumbnailImage = (props: Omit<OptimizedImageProps, 'quality' | 'sizes' | 'placeholder'>) => (
  <OptimizedImage
    quality={75}
    sizes="80px"
    placeholder="blur"
    fadeIn={true}
    showSkeleton={false}
    {...props}
  />
);

export const HeroImage = (props: Omit<OptimizedImageProps, 'quality' | 'sizes' | 'priority' | 'placeholder'>) => (
  <OptimizedImage
    quality={95}
    sizes="100vw"
    priority={true}
    placeholder="blur"
    fadeIn={true}
    showSkeleton={true}
    {...props}
  />
);

export const CategoryImage = (props: Omit<OptimizedImageProps, 'quality' | 'sizes' | 'placeholder'>) => (
  <OptimizedImage
    quality={85}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    placeholder="blur"
    fadeIn={true}
    showSkeleton={true}
    {...props}
  />
);
