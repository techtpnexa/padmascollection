'use client';

import Image from 'next/image';
import { Calendar, Heart, Users, Sparkles } from 'lucide-react';

export default function OurJourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light-blush via-soft-pink to-warm-pink">
      {/* Hero Section with Banner */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Background Elements - Matching Home Page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-warm-pink/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-light-blush/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-muted-rose/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header - Matching Featured Section Style */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-deep-mauve via-muted-rose to-deep-mauve blur-lg opacity-50" />
                <span className="relative bg-gradient-to-r from-deep-mauve to-muted-rose text-neutral-white px-8 py-3 text-xs font-bold tracking-[0.3em] inline-block shadow-xl border-2 border-neutral-white/30">
                  ABOUT US
                </span>
              </div>
            </div>
            
            {/* Main Title with Gradient */}
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-deep-mauve via-muted-rose to-deep-mauve bg-clip-text text-transparent mb-2 drop-shadow-sm">
                Our Journey
              </h1>
              {/* Decorative Underline */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-muted-rose to-muted-rose" />
                <div className="w-2 h-2 bg-muted-rose rotate-45" />
                <div className="h-[2px] w-16 bg-gradient-to-l from-transparent via-muted-rose to-muted-rose" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
              A story of <span className="font-semibold text-deep-mauve">dedication</span>, <span className="font-semibold text-deep-mauve">passion</span>, and <span className="font-semibold text-deep-mauve">excellence</span>
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Founders Image - Premium Design */}
            <div className="relative group">
              {/* Outer Frame Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-muted-rose/20 via-transparent to-muted-rose/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/60 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/founder.webp"
                    alt="Bharat and Padma Pardeshi - Founders of Padma's Collection"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Elegant Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-mauve/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Decorative Corner Accents */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-muted-rose opacity-60" />
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-muted-rose opacity-60" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-muted-rose opacity-60" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-muted-rose opacity-60" />
              </div>
            </div>

            {/* Story Content */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-light-blush/40 via-transparent to-muted-rose/40 rounded-3xl blur-2xl" />
              
              <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl border border-white/60">
                {/* Founders Info */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-3 text-deep-mauve mb-4">
                    <Heart className="h-6 w-6 text-muted-rose" />
                    <h2 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-deep-mauve via-muted-rose to-deep-mauve bg-clip-text text-transparent mb-2 drop-shadow-sm">
                      Bharat & Padma Pardeshi
                    </h2>
                    <Heart className="h-6 w-6 text-muted-rose" />
                  </div>
                  <p className="text-l font-semibold text-primary-600 tracking-wide">Founders</p>
                </div>

                {/* Foundation Date */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-deep-mauve to-muted-rose text-neutral-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:shadow-xl transition-shadow duration-300">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold text-sm">Founded: October 21st, 2000</span>
                  </div>
                </div>

                {/* Story Text */}
                <div className="space-y-6 text-center">
                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                    Padma's Collection is built on years of dedication, hard work, and a love for elegant and comfortable ladies' wear.
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 my-6">
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-muted-rose" />
                    <Sparkles className="w-4 h-4 text-muted-rose" />
                    <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-muted-rose" />
                  </div>
                  
                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                    We are truly grateful to our loyal customers, whose continued support has made this journey possible and inspires us every day to keep bringing joy and style to every woman.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - Enhanced Design */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-deep-mauve mb-3">Our Values</h3>
              <div className="flex items-center justify-center gap-2">
                <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-muted-rose to-muted-rose" />
                <div className="w-2 h-2 bg-muted-rose rotate-45" />
                <div className="h-[2px] w-12 bg-gradient-to-l from-transparent via-muted-rose to-muted-rose" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Dedication Card */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-muted-rose/20 to-deep-mauve/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/60 hover:shadow-2xl hover:border-muted-rose/30 transition-all duration-500 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-deep-mauve to-muted-rose text-neutral-white p-5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Heart className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-deep-mauve mb-3">Dedication</h4>
                    <p className="text-text-secondary leading-relaxed">
                      Over 25 years of unwavering commitment to quality, excellence, and customer satisfaction
                    </p>
                  </div>
                </div>
              </div>

              {/* Legacy Card */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-deep-mauve/20 to-warm-pink/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/60 hover:shadow-2xl hover:border-muted-rose/30 transition-all duration-500 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-deep-mauve to-muted-rose text-neutral-white p-5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Calendar className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-deep-mauve mb-3">Legacy</h4>
                    <p className="text-text-secondary leading-relaxed">
                      Building a trusted name in women's fashion since the year 2000
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Card */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-warm-pink/20 to-muted-rose/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/60 hover:shadow-2xl hover:border-muted-rose/30 transition-all duration-500 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-deep-mauve to-muted-rose text-neutral-white p-5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Users className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-deep-mauve mb-3">Community</h4>
                    <p className="text-text-secondary leading-relaxed">
                      Deeply grateful for the loyal customers who inspire us every single day
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
