function Footer() {
  return (
    <footer className="bg-[#F6F3EE] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              {/* Ukusa Logo */}
              <img 
                src="https://res.cloudinary.com/dqataciy5/image/upload/v1759818106/Screenshot_2025-10-07_at_11.51.39_AM_x3b8nn.png"
                alt="Ukusa Cafe Logo"
                className="w-12 h-12 object-contain"
              />
              <h3 className="font-serif text-3xl text-[#4a3728]">Ukusa</h3>
            </div>
            <p className="text-[#6b5444] text-base leading-relaxed mb-8 max-w-lg font-light">
              Where nature meets you and you meet experience. 
              Straight out of Pinterest with dreamy floral glass paintings and cozy aesthetic.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/_.ukusa._/" target="_blank" rel="noopener noreferrer" className="bg-[#e5eed8] hover:bg-[#d4d0c0] p-3 rounded-full transition-colors duration-300 group">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-[#6b5444] group-hover:text-[#4a3728]">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@ukusacafe" target="_blank" rel="noopener noreferrer" className="bg-[#e5eed8] hover:bg-[#d4d0c0] p-3 rounded-full transition-colors duration-300 group">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-[#6b5444] group-hover:text-[#4a3728]">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/ukusa.in" target="_blank" rel="noopener noreferrer" className="bg-[#e5eed8] hover:bg-[#d4d0c0] p-3 rounded-full transition-colors duration-300 group">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-[#6b5444] group-hover:text-[#4a3728]">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://ukusa.in" target="_blank" rel="noopener noreferrer" className="bg-[#e5eed8] hover:bg-[#d4d0c0] p-3 rounded-full transition-colors duration-300 group">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-[#6b5444] group-hover:text-[#4a3728]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="w-12 border-t-2 mb-6 border-[#a6b696]" />
            <h4 className="font-serif text-xl text-[#4a3728] mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#6b5444] hover:text-[#4a3728] text-base transition-colors duration-300 font-light">Our Story</a></li>
              <li><a href="#" className="text-[#6b5444] hover:text-[#4a3728] text-base transition-colors duration-300 font-light">Menu</a></li>
              <li><a href="#" className="text-[#6b5444] hover:text-[#4a3728] text-base transition-colors duration-300 font-light">Gallery</a></li>
              <li><a href="#" className="text-[#6b5444] hover:text-[#4a3728] text-base transition-colors duration-300 font-light">Events</a></li>
              <li><a href="#" className="text-[#6b5444] hover:text-[#4a3728] text-base transition-colors duration-300 font-light">Reservations</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="w-12 border-t-2 mb-6 border-[#a6b696]" />
            <h4 className="font-serif text-xl text-[#4a3728] mb-6">Contact</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-[#e5eed8] rounded-full p-2 flex-shrink-0 mt-1">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[#6b5444]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#6b5444] text-base font-light">Plot no. 130, 8-2-293/82, A/130</p>
                  <p className="text-[#6b5444] text-base font-light">Road Number 10, Jubilee Hills</p>
                  <p className="text-[#6b5444] text-base font-light">Hyderabad, Telangana 500033</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#e5eed8] rounded-full p-2 flex-shrink-0 mt-1">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[#6b5444]">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <p className="text-[#6b5444] text-base font-light">+91 40 1234 5678</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#e5eed8] rounded-full p-2 flex-shrink-0 mt-1">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[#6b5444]">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-[#6b5444] text-base font-light">hello@ukusa.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="w-12 border-t-2 mb-6 border-[#a6b696]" />
          <h4 className="font-serif text-xl text-[#4a3728] mb-6">Opening Hours</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[#6b5444] text-base font-light">Monday - Friday</span>
              <span className="text-[#4a3728] text-base font-medium">11:00 am - 1:00 am</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#6b5444] text-base font-light">Saturday - Sunday</span>
              <span className="text-[#4a3728] text-base font-medium">8:00 am - 1:00 am</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e2dbd2] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#8b7355] text-base font-light">
              © 2024 Ukusa Cafe. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[#8b7355] hover:text-[#4a3728] text-base transition-colors duration-300 font-light">Privacy Policy</a>
              <a href="#" className="text-[#8b7355] hover:text-[#4a3728] text-base transition-colors duration-300 font-light">Terms of Service</a>
              <a href="#" className="text-[#8b7355] hover:text-[#4a3728] text-base transition-colors duration-300 font-light">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
