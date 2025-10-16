'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ProductGrid } from '@/components/product/ProductGrid';
import { products, categories } from '@/data/products';
import { ArrowDown } from 'lucide-react';
import TrustedBrands from '@/components/ui/TrustedBrands';
import { FastHeroImage, FastImage } from '@/components/ui/FastImage';
import { useRouter } from 'next/navigation';


export default function HomePage() {
  const featuredProducts = products.filter(product => product.featured);
  const newProducts = products.filter(product => product.new);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Small delay to ensure elements are rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  
  // Group products by category - with safety checks
  const categoryImages = [
    '/images/gowns/1.webp',
    '/images/corset/1.webp',
    '/images/lingerie/3.webp',
  ];
  const productsByCategory = categories.map(category => ({
    category,
    products: products.filter(p => p.category && p.category.id === category.id)
  })).filter(item => item.products.length > 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Fashion Image */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-soft-pink via-light-blush to-warm-pink overflow-hidden">
        <div className="absolute inset-0">
          {/* 3D Fashion Image - Using a high-quality 3D render of elegant dress */}
          <FastHeroImage
            src="/images/banner_img.webp"
            alt="Padmas Collection - Elegant Women's Fashion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-mauve/40 via-muted-rose/30 to-warm-pink/40" />
          
          {/* Decorative floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-warm-pink/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-light-blush/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="mb-6 inline-block">
            <span className="bg-muted-rose/90 text-neutral-white px-6 py-2 text-sm font-semibold tracking-widest backdrop-blur-sm border border-neutral-white/30">
              PREMIUM WOMEN'S FASHION
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 drop-shadow-2xl">
            PADMA'S
            <br />
            <span className="font-bold text-neutral-white">COLLECTION</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto drop-shadow-lg">
            Discover our curated collection of exquisite gowns, lingerie, and fashion pieces
            that celebrate your unique beauty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-neutral-white text-deep-mauve px-6 py-4 font-semibold text-lg hover:bg-light-blush transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => window.location.href = '/our-journey'}
              className="border-2 border-neutral-white text-neutral-white px-6 py-4 font-semibold text-lg hover:bg-neutral-white hover:text-deep-mauve transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              View Our Journey
            </button>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce mt-8 text-neutral-white hover:text-light-blush transition-colors"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
            <span className="text-sm font-medium">Scroll to Explore</span>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24 bg-light-blush border-t-4 border-muted-rose scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="bg-muted-rose text-neutral-white px-4 py-1 text-xs font-bold tracking-widest mb-4 inline-block">
              BROWSE COLLECTIONS
            </span>
            <h2 className="text-5xl font-serif font-bold text-deep-mauve mb-6">
              Shop by Category
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From elegant evening gowns to luxurious lingerie, find the perfect piece for every occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((category, index) => {
              return (
                <button
                  key={category.id}
                  onClick={() => document.getElementById(category.slug)?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative overflow-hidden bg-warm-pink aspect-[4/5] border-4 border-muted-rose shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <FastImage
                    src={categoryImages[index]}
                    alt={category.name}
                    fill
                    className="transition-transform duration-500 group-hover:scale-110"
                    aspectRatio="4/5"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-mauve/80 via-deep-mauve/40 to-transparent group-hover:from-deep-mauve/90 transition-all duration-300" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-3xl font-serif font-bold mb-3">{category.name}</h3>
                    <span className="inline-block bg-neutral-white text-deep-mauve px-4 py-2 text-sm font-semibold group-hover:bg-muted-rose group-hover:text-neutral-white transition-all duration-300">
                      View Collection →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="relative py-32 bg-gradient-to-b from-light-blush via-soft-pink to-warm-pink scroll-mt-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-muted-rose/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-deep-mauve/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm-pink/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium Header */}
          <div className="text-center mb-20">
            {/* Editor's Choice Badge */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-deep-mauve via-muted-rose to-deep-mauve blur-lg opacity-50" />
                <span className="relative bg-gradient-to-r from-deep-mauve to-muted-rose text-neutral-white px-8 py-3 text-xs font-bold tracking-[0.3em] inline-block shadow-xl border-2 border-neutral-white/30">
                  PADMA'S PICK
                </span>
              </div>
            </div>
            
            {/* Main Title with Gradient */}
            <div className="relative inline-block mb-8">
              <h2 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-deep-mauve via-muted-rose to-deep-mauve bg-clip-text text-transparent mb-2 drop-shadow-sm">
                Featured Collection
              </h2>
              {/* Decorative Underline */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-muted-rose to-muted-rose" />
                <div className="w-2 h-2 bg-muted-rose rotate-45" />
                <div className="h-[2px] w-16 bg-gradient-to-l from-transparent via-muted-rose to-muted-rose" />
              </div>
            </div>
            
            {/* Subtitle with Enhanced Typography */}
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
            Curated selections that highlight our promise of {' '}
              <span className="font-semibold text-deep-mauve">sophistication</span> and{' '}
              <span className="font-semibold text-deep-mauve">excellence</span>.
            </p>

            {/* Additional Decorative Element */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-muted-rose" />
              <svg className="w-4 h-4 text-muted-rose" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-muted-rose" />
            </div>
          </div>
          
          {/* Premium Product Grid Container */}
          <div className="relative">
            {/* Subtle Frame Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-muted-rose/20 via-transparent to-muted-rose/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-2xl border border-white/60">
              <ProductGrid products={featuredProducts} />
            </div>
          </div>

      
        </div>
      </section>

      {/* Product Sections by Category */}
      {productsByCategory.map((item, index) => (
        <section 
          key={item.category.id} 
          id={item.category.slug}
          className={`py-24 scroll-mt-20 ${index % 2 === 0 ? 'bg-light-blush' : 'bg-neutral-white'} border-t-2 border-muted-rose`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="bg-warm-pink text-deep-mauve px-4 py-1 text-xs font-bold tracking-widest mb-4 inline-block">
                {item.category.name.toUpperCase()}
              </span>
              <h2 className="text-5xl font-serif font-bold text-deep-mauve mb-6">
                {item.category.name} Collection
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                {item.category.title}
              </p>
            </div>
            
            <ProductGrid products={item.products} />
          </div>
        </section>
      ))}

      <TrustedBrands />
    </div>
  );
}

