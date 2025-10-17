'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { categories } from '@/data/products';
import Image from 'next/image';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const isHomePage = pathname === '/';
    
    if (isHomePage) {
      // Already on homepage, just scroll
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      if (sectionId === 'home') {
        router.push('/');
      } else {
        router.push(`/#${sectionId}`);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-neutral-white border-b-4 border-muted-rose sticky top-0 z-50 shadow-lg backdrop-blur-sm pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block hover:opacity-80 transition-opacity">
              <Image 
                src="/images/padmas_new_logo.webp" 
                alt="Logo" 
                width={170} 
                height={170}
                priority
                quality={90}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-deep-mauve hover:text-muted-rose px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-light-blush rounded-sm"
              >
                Home
              </button>
              <Link
                href="/our-journey"
                className="text-text-secondary hover:text-muted-rose px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-light-blush rounded-sm"
              >
                Our Journey
              </Link>
              <button
                onClick={() => scrollToSection('featured')}
                className="text-text-secondary hover:text-muted-rose px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-light-blush rounded-sm"
              >
                Featured
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.slug)}
                  className="text-text-secondary hover:text-muted-rose px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-light-blush rounded-sm"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* <button className="text-text-secondary hover:text-muted-rose p-3 transition-all duration-200 hover:bg-light-blush rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-text-secondary hover:text-muted-rose p-3 transition-all duration-200 hover:bg-light-blush rounded-full">
              <User className="h-5 w-5" />
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary hover:text-muted-rose p-3 transition-all duration-200 hover:bg-light-blush rounded-full"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-light-blush border-t-2 border-muted-rose shadow-lg">
            <button
              onClick={() => scrollToSection('home')}
              className="text-deep-mauve hover:text-muted-rose block px-4 py-3 text-base font-semibold hover:bg-neutral-white rounded-sm transition-all duration-200 w-full text-left"
            >
              Home
            </button>
            <Link
              href="/our-journey"
              onClick={() => setIsMenuOpen(false)}
              className="text-text-secondary hover:text-muted-rose block px-4 py-3 text-base font-medium hover:bg-neutral-white rounded-sm transition-all duration-200 w-full text-left"
            >
              Our Journey
            </Link>
            <button
              onClick={() => scrollToSection('featured')}
              className="text-text-secondary hover:text-muted-rose block px-4 py-3 text-base font-medium hover:bg-neutral-white rounded-sm transition-all duration-200 w-full text-left"
            >
              Featured
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.slug)}
                className="text-text-secondary hover:text-muted-rose block px-4 py-3 text-base font-medium hover:bg-neutral-white rounded-sm transition-all duration-200 w-full text-left"
              >
                {category.name}
              </button>
            ))}
            {/* <div className="flex items-center justify-center space-x-4 px-3 py-4 border-t border-muted-rose mt-2">
              <button className="text-text-secondary hover:text-muted-rose p-3 hover:bg-neutral-white rounded-full transition-all duration-200">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-text-secondary hover:text-muted-rose p-3 hover:bg-neutral-white rounded-full transition-all duration-200">
                <User className="h-5 w-5" />
              </button>
              <button className="text-text-secondary hover:text-muted-rose p-3 hover:bg-neutral-white rounded-full transition-all duration-200 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-muted-rose text-neutral-white text-xs w-6 h-6 flex items-center justify-center text-[10px] rounded-full border-2 border-neutral-white shadow-md">
                  0
                </span>
              </button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
}

