const TrustedBrands = () => {
  return (
    <>
    <section id="brands" className="py-24 scroll-mt-20 bg-gradient-to-b from-white via-rose-50/20 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="inline-block h-1 w-16 bg-gradient-to-r from-rose-400 to-deep-mauve rounded-full"></span>
            </div>
            <h2 className="text-6xl font-serif font-bold bg-gradient-to-r from-deep-mauve via-rose-600 to-deep-mauve bg-clip-text text-transparent mb-6 animate-gradient">
              Our Trusted Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              At Padma's Collection, we proudly offer a curated selection from some of the most trusted and loved brands in intimate wear.
            </p>
          </div>
          
          <ul className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {['Jockey', 'Madona', 'Jinal', 'Glory', 'Comfort', 'InCare', , 'Body Care', 'Jasmine', 'VIP'].map((brand, index) => (
              <li
                key={brand}
                className="bg-primary-100 mb-2 backdrop-blur-sm rounded-full  shadow-lg hover:shadow-2xl transition-all duration-500 p-4 flex items-center justify-center border border-gray-100 hover:border-rose-300 group hover:-translate-y-2 hover:scale-105 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-lg font-bold text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-deep-mauve group-hover:to-rose-600 group-hover:bg-clip-text transition-all duration-500 tracking-wide">
                  {brand}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-md rounded-full shadow-lg border border-gray-100">
              <p className="text-gray-700 text-lg font-medium">
                <span className="text-transparent bg-gradient-to-r from-deep-mauve to-rose-600 bg-clip-text font-semibold">Quality, comfort, and style</span> from brands you trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrustedBrands;