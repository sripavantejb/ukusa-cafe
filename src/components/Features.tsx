function Features() {
  return (
    <div className="bg-gradient-to-br from-[#F6F5F3] to-[#f0ebe5] py-24 px-4 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#8b7355] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#6b5444] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-5xl md:text-6xl text-[#4a3728] font-normal mb-2">
            Why Choose Ukusa
          </h2>
          <div className="mx-auto mt-2 mb-6 w-32 border-t-2 border-[#b5ad9a] animate-fade-in-up animation-delay-200" />
          <p className="text-[#8b7355] text-lg font-light animate-fade-in-up animation-delay-400">
            Experience the perfect blend of comfort, accessibility, and convenience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Accessibility Features */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-200">
            <div className="bg-[#e5eed8] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 animate-scale-in animation-delay-400">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#6b5444]">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#4a3728] mb-4">Fully Accessible</h3>
            <p className="text-[#6b5444] text-sm font-light mb-4">
              Wheelchair-accessible entrance, parking, seating, and gender-neutral toilets. 
              We welcome everyone with open arms.
            </p>
            <ul className="text-[#8b7355] text-sm space-y-1">
              <li>• Wheelchair accessible entrance</li>
              <li>• Accessible parking available</li>
              <li>• Gender-neutral toilets</li>
              <li>• LGBTQ+ friendly space</li>
            </ul>
          </div>

          {/* Payment Options */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-400">
            <div className="bg-[#faf6ea] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 animate-scale-in animation-delay-600">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#6b5444]">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#4a3728] mb-4">Multiple Payment Options</h3>
            <p className="text-[#6b5444] text-sm font-light mb-4">
              We accept all major payment methods for your convenience. 
              No need to worry about carrying cash.
            </p>
            <ul className="text-[#8b7355] text-sm space-y-1">
              <li>• Credit/Debit Cards</li>
              <li>• Google Pay</li>
              <li>• NFC Mobile Payments</li>
              <li>• Cash accepted</li>
            </ul>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-600">
            <div className="bg-[#e5eed8] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 animate-scale-in animation-delay-800">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#6b5444]">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#4a3728] mb-4">Premium Amenities</h3>
            <p className="text-[#6b5444] text-sm font-light mb-4">
              Enjoy our premium facilities designed for your comfort and convenience. 
              Perfect for work, relaxation, or socializing.
            </p>
            <ul className="text-[#8b7355] text-sm space-y-1">
              <li>• Free Wi-Fi</li>
              <li>• Outdoor seating</li>
              <li>• Private dining room</li>
              <li>• Late-night food available</li>
            </ul>
          </div>

          {/* Family Friendly */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-800">
            <div className="bg-[#faf6ea] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 animate-scale-in animation-delay-1000">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#6b5444]">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#4a3728] mb-4">Family & Group Friendly</h3>
            <p className="text-[#6b5444] text-sm font-light mb-4">
              Perfect for families, groups, and university students. 
              We welcome everyone with warm hospitality.
            </p>
            <ul className="text-[#8b7355] text-sm space-y-1">
              <li>• Good for kids</li>
              <li>• Group friendly</li>
              <li>• University student friendly</li>
              <li>• Solo dining welcome</li>
            </ul>
          </div>

          {/* Menu Variety */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-1000">
            <div className="bg-[#e5eed8] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 animate-scale-in animation-delay-1200">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#6b5444]">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#4a3728] mb-4">Diverse Menu</h3>
            <p className="text-[#6b5444] text-sm font-light mb-4">
              Large menu covering breakfast, brunch, lunch, dinner, desserts, 
              sushi, pizza, burgers, and more.
            </p>
            <ul className="text-[#8b7355] text-sm space-y-1">
              <li>• Vegan & Vegetarian options</li>
              <li>• Non-vegetarian dishes</li>
              <li>• Quick bites available</li>
              <li>• Insta-worthy presentation</li>
            </ul>
          </div>

          {/* Service Quality */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-1200">
            <div className="bg-[#faf6ea] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 animate-scale-in animation-delay-1400">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#6b5444]">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#4a3728] mb-4">Excellent Service</h3>
            <p className="text-[#6b5444] text-sm font-light mb-4">
              Known for best ambience in Hyderabad among cafes. 
              Excellent service by chef and staff.
            </p>
            <ul className="text-[#8b7355] text-sm space-y-1">
              <li>• Table service available</li>
              <li>• No-contact delivery</li>
              <li>• Online ordering</li>
              <li>• Reservations recommended</li>
            </ul>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center animate-fade-in-up animation-delay-1400">
          <h3 className="font-serif text-2xl text-[#4a3728] mb-4">Budget Friendly Pricing</h3>
          <p className="text-[#6b5444] text-lg font-light mb-2">
            ₹400 – ₹1800 per person
          </p>
          <p className="text-[#8b7355] text-sm">
            Budget friendly for the locality with exceptional quality and service
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
