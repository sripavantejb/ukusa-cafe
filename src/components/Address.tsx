function Address() {
    return (
      <div className="bg-[#f5f1ed] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-[#4a3728] font-normal mb-2">
              Visit Us
            </h2>
            <div className="mx-auto mt-2 mb-6 w-32 border-t-2 border-[#b5ad9a]" />
            <p className="text-[#8b7355] text-lg font-light">
              Where nature meets you and you meet experience
            </p>
          </div>
  
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e5eed8] rounded-full p-3 flex-shrink-0 mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path 
                      stroke="#6b5444" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    />
                    <circle cx="12" cy="10" r="3" stroke="#6b5444" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#4a3728] mb-1">Address</h3>
                  <p className="text-[#6b5444] text-sm">Plot no. 130, 8-2-293/82, A/130</p>
                  <p className="text-[#6b5444] text-sm">Road Number 10, Jubilee Hills</p>
                  <p className="text-[#6b5444] text-sm">Hyderabad, Telangana 500033</p>
                </div>
              </div>
  
              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e5eed8] rounded-full p-3 flex-shrink-0 mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="#6b5444" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="#6b5444" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#4a3728] mb-1">Hours</h3>
                  <p className="text-[#6b5444] text-sm">Monday - Friday: 11:00 am - 1:00 am</p>
                  <p className="text-[#6b5444] text-sm">Saturday - Sunday: 8:00 am - 1:00 am</p>
                </div>
              </div>
  
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e5eed8] rounded-full p-3 flex-shrink-0 mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path 
                      stroke="#6b5444" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#4a3728] mb-1">Phone</h3>
                  <p className="text-[#6b5444] text-sm">090524 62424</p>
                  <p className="text-[#6b5444] text-xs">(for reservations/inquiries)</p>
                </div>
              </div>
  
              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e5eed8] rounded-full p-3 flex-shrink-0 mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path 
                      stroke="#6b5444" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    />
                    <path 
                      stroke="#6b5444" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#4a3728] mb-1">Website</h3>
                  <p className="text-[#6b5444] text-sm">ukusa.in</p>
                </div>
              </div>
  
              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="https://www.google.com/maps/search/Ukusa+Cafe+Jubilee+Hills+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6b5444] hover:bg-[#5a4435] text-white px-8 py-4 rounded-full font-medium text-base transition-colors duration-300 shadow-lg w-full md:w-auto inline-block text-center"
                >
                  VISIT US TODAY
                </a>
              </div>
            </div>
  
            {/* Right Side - Map */}
            <div className="relative">
              <div className="bg-[#c8e6c9] rounded-2xl overflow-hidden shadow-xl h-96 md:h-[500px] relative">
                {/* Interactive Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.4294!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d4b5c5c5c5%3A0x1234567890abcdef!2sUkusa!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Ukusa+Cafe%2C+Jubilee+Hills%2C+Hyderabad"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Ukusa Cafe Location Map"
                ></iframe>
                
                
                {/* Map Info Card */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-[#4a3728] text-sm">Ukusa Cafe</h4>
                      <p className="text-xs text-[#6b5444]">Plot No. 130, Road Number 10, Jubilee Hills, Hyderabad</p>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                              <path d="M10 2l2.39 6.91h7.26l-5.88 4.3 2.25 6.91L10 13.64l-5.88 4.29 2.25-6.91-5.88-4.3h7.26L10 2z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-[#6b5444] ml-1">4.3 stars • 1,496 reviews</span>
                      </div>
                      <a 
                        href="https://www.google.com/maps/search/Ukusa+Cafe+Jubilee+Hills+Hyderabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-xs mt-1 hover:underline block"
                      >
                        Directions
                      </a>
                    </div>
                  </div>
                </div>
  
                {/* Find Us Here Button */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href="https://www.google.com/maps/search/Ukusa+Cafe+Jubilee+Hills+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-[#4a3728] text-sm font-medium hover:shadow-xl transition-shadow"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Find Us Here
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Address
  