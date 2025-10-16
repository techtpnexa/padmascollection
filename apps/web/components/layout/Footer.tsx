import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-accent-900 text-primary-50 border-t-4 border-muted-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left Side - Brand & Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Brand */}
            <div>
              <div className="mb-0">
                <Image 
                  src="/images/padmas_new_logo.webp" 
                  alt="Padma's Collection Logo" 
                  width={250} 
                  height={250}
                  className="transition-opacity"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <p className="text-primary-200 mb-2 max-w-md opacity-90 leading-relaxed">
                Discover elegance in every piece. We curate premium women's fashion that celebrates 
                sophistication, comfort, and timeless style.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-serif font-bold mb-5 text-neutral-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-primary-200 hover:text-muted-rose transition-colors opacity-90 hover:opacity-100 inline-flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-muted-rose transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/our-journey" className="text-primary-200 hover:text-muted-rose transition-colors opacity-90 hover:opacity-100 inline-flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-muted-rose transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Our Journey
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-primary-200 hover:text-muted-rose transition-colors opacity-90 hover:opacity-100 inline-flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-muted-rose transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Location & Map */}
          <div className="lg:col-span-7">
            <h4 className="text-xl font-serif font-bold mb-5 text-neutral-white">Visit Our Store</h4>
            
            {/* Address Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Address Card */}
              <div className="bg-accent-800/50 backdrop-blur-sm rounded-lg p-4 border border-muted-rose/20 hover:border-muted-rose/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <MapPin className="h-5 w-5 text-muted-rose mt-1" />
                  </div>
                  <div>
                    <h5 className="text-primary-100 font-semibold mb-1 text-sm">Address</h5>
                    <p className="text-primary-200 text-sm opacity-90 leading-relaxed">
                      297, Housan Road, Opposite Bharat Cold Drinks, Devlali Camp, Nashik, Maharashtra – 422401
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-accent-800/50 backdrop-blur-sm rounded-lg p-4 border border-muted-rose/20 hover:border-muted-rose/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Clock className="h-5 w-5 text-muted-rose mt-1" />
                  </div>
                  <div>
                    <h5 className="text-primary-100 font-semibold mb-1 text-sm">Store Hours</h5>
                    <p className="text-primary-200 text-sm opacity-90">
                      11:00 AM – 9:30 PM
                    </p>
                    <p className="text-muted-rose text-sm font-medium mt-1">
                      Closed on Mondays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-muted-rose/30 hover:border-muted-rose/50 transition-all duration-300 group">
              {/* Map Overlay Label */}
              <div className="absolute top-4 left-4 z-10 bg-deep-mauve/90 backdrop-blur-sm text-neutral-white px-4 py-2 rounded-lg shadow-lg border border-muted-rose/30">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Padma's Collection
                </p>
              </div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5410607028693!2d73.82902902328556!3d19.90159195925991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd959abb1a5eb5%3A0x6f2cbf34ca2db6ea!2sPadma&#39;s%20Collection!5e0!3m2!1sen!2sin!4v1760606772903!5m2!1sen!2sin" 
                width="100%" 
                height="350" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                title="Padma's Collection Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-200 text-sm opacity-80 text-center md:text-left">
          © 2025 Padma's Collection. All rights reserved. Crafted with ❤️ by Pramod and Tushar.
          </p>
          {/* <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/privacy" className="text-primary-200 hover:text-muted-rose text-sm transition-colors opacity-80 hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary-200 hover:text-muted-rose text-sm transition-colors opacity-80 hover:opacity-100">
              Terms of Service
            </Link>
            <Link href="/our-journey" className="text-primary-200 hover:text-muted-rose text-sm transition-colors opacity-80 hover:opacity-100">
              About Us
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
