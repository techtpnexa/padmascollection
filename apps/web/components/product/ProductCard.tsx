import Link from 'next/link';
import { Product } from '@/types';
import { ProductImage } from '@/components/ui/OptimizedImage';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <Link 
        href={`/product/${product.id}`}
        className="product-card group block w-full h-full text-left relative"
      >
        <div className="flex flex-col h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden border-2 border-muted-rose/20 hover:border-muted-rose/50 cursor-pointer transform hover:-translate-y-2">
          {/* Image Container */}
          <div className="relative overflow-hidden bg-gradient-to-br from-warm-pink/30 to-light-blush aspect-[3/4]">
            <ProductImage
              src={product.images[0]}
              alt={product.name}
              fill
              className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              aspectRatio="3/4"
              fadeIn={true}
              showSkeleton={true}
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

            {/* View Details Badge on Hover */}
            {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-2xl border-2 border-muted-rose/30">
                <span className="text-deep-mauve font-bold text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Details
                </span>
              </div>
            </div> */}
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

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
