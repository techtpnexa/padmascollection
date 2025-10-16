import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Padmas Collection - Premium Women\'s Fashion',
  description: 'Discover elegant gowns, luxurious lingerie, and premium women\'s fashion at Padmas Collection. Shop the latest trends in sophisticated style.',
  keywords: 'women fashion, gowns, lingerie, dresses, premium clothing, elegant wear',
  icons: {
    icon: '/images/Padma_logo.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

