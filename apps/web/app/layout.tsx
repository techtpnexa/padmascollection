import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://padmascollection.com'),
  title: 'Padmas Collection - Women\'s Fashion in Nashik | Gowns, Lingerie & Night Wear',
  description: 'Padmas Collection - Discover elegant gowns, luxurious lingerie, and premium women\'s fashion in Nashik, Deolali Camp, and Nashik Road. Shop the latest trends in sophisticated style with 25+ years of trust since 2000.',
  keywords: 'padmas collection, padmascollection, padmas collection nashik, women fashion nashik, gowns nashik, lingerie nashik, night wear nashik, deolali camp fashion, nashik road shopping, premium clothing nashik, elegant wear, women\'s fashion store nashik, ladies wear nashik, corset nashik, night suits nashik, padma pardeshi, bharat pardeshi, fashion boutique nashik',
  authors: [{ name: 'Padmas Collection' }],
  creator: 'Padmas Collection',
  publisher: 'Padmas Collection',
  robots: 'index, follow',
  icons: {
    icon: '/images/Padma_logo.webp',
    apple: '/images/Padma_logo.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://padmascollection.com',
    siteName: 'Padmas Collection',
    title: 'Padmas Collection - Women\'s Fashion in Nashik',
    description: 'Padmas Collection - Discover elegant gowns, luxurious lingerie, and premium women\'s fashion in Nashik, Deolali Camp, and Nashik Road. Trusted since 2000.',
    images: [
      {
        url: '/images/banner_img.webp',
        width: 1200,
        height: 630,
        alt: 'Padmas Collection - Premium Women\'s Fashion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padmas Collection - Women\'s Fashion in Nashik',
    description: 'Padmas Collection - Discover elegant gowns, luxurious lingerie, and premium women\'s fashion in Nashik. Trusted since 2000.',
    images: ['/images/banner_img.webp'],
  },
  alternates: {
    canonical: 'https://padmascollection.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Padmas Collection",
    "alternateName": "Padma's Collection",
    "url": "https://padmascollection.com",
    "logo": "https://padmascollection.com/images/Padma_logo.webp",
    "description": "Premium women's fashion store in Nashik specializing in elegant gowns, lingerie, and night wear since 2000.",
    "foundingDate": "2000-10-21",
    "founders": [
      {
        "@type": "Person",
        "name": "Bharat Pardeshi"
      },
      {
        "@type": "Person", 
        "name": "Padma Pardeshi"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nashik",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Nashik"
      },
      {
        "@type": "Place",
        "name": "Deolali Camp"
      },
      {
        "@type": "Place", 
        "name": "Nashik Road"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "Padmas Collection",
    "description": "Premium women's fashion store in Nashik specializing in elegant gowns, lingerie, and night wear since 2000.",
    "url": "https://padmascollection.com",
    "telephone": "+91-8087704122",
    "email": "padmapardeshi44@gmail.com",
    "foundingDate": "2000-10-21",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "297, Housan Road, Opposite Bharat Cold Drinks",
      "addressLocality": "Deolali Camp",
      "addressRegion": "Maharashtra",
      "postalCode": "422401",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.9975",
      "longitude": "73.7898"
    },
    "openingHours": "Tu-Su 11:00-21:30",
    "priceRange": "₹₹"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Padmas Collection",
    "alternateName": "Padma's Collection",
    "url": "https://padmascollection.com",
    "description": "Premium women's fashion in Nashik - gowns, lingerie, and night wear",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://padmascollection.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}

