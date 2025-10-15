import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-accent-900 text-primary-50 border-t-4 border-muted-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 e p-3 inline-block rounded-sm">
              <Image src="/images/padmas_new_logo.png" alt="Logo" width={300} height={300} />
            </div>
            <p className="text-primary-200 mb-6 max-w-md opacity-90">
              Discover elegance in every piece. We curate premium women's fashion that celebrates 
              sophistication, comfort, and timeless style.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-primary-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-primary-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-primary-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-primary-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-primary-200 hover:text-primary-300 transition-colors opacity-90">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=gowns" className="text-primary-200 hover:text-primary-300 transition-colors opacity-90">
                  Gowns
                </Link>
              </li>
              <li>
                <Link href="/products?category=lingerie" className="text-primary-200 hover:text-primary-300 transition-colors opacity-90">
                  Lingerie
                </Link>
              </li>
              <li>
                <Link href="/products?category=dresses" className="text-primary-200 hover:text-primary-300 transition-colors opacity-90">
                  Dresses
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-primary-100">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-primary-200 hover:text-primary-300 transition-colors opacity-90">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-primary-200 hover:text-primary-300 transition-colors opacity-90">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-primary-200 hover:text-primary-300 transition-colors opacity-90">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-primary-200 hover:text-primary-300 transition-colors opacity-90">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200 text-sm opacity-80">
            © 2025 Padmas Collection. All rights reserved. Made by Pramod and Tushar with ❤️
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-primary-200 hover:text-primary-300 text-sm transition-colors opacity-80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary-200 hover:text-primary-300 text-sm transition-colors opacity-80">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
