import React from 'react'
import SideNav from './SideNav'
import HeroDecor from './HeroDecor'
import HeroScene from './HeroScene'

function HeroPage() {
    // Parallax effects for swirls only
    React.useEffect(() => {
        const parallaxNodes: HTMLElement[] = Array.from(document.querySelectorAll('.parallax-swirl')) as HTMLElement[];
        let mouseX = 0;
        let mouseY = 0;

        // Parallax move for swirls
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            parallaxNodes.forEach((el, i) => {
                const depth = 8 + i * 4;
                const tx = (mouseX / window.innerWidth - 0.5) * depth;
                const ty = (mouseY / window.innerHeight - 0.5) * depth;
                el.style.transform = `translate(${tx}px, ${ty}px)`;
            });
        };

        // Add event listener
        document.addEventListener('mousemove', handleMouseMove);

        // Reveal on intersection
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('reveal');
            })
        }, { threshold: 0.1 })
        parallaxNodes.forEach((n) => io.observe(n))

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            io.disconnect()
        };
    }, []);

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f5f1ed] to-[#f0ebe5] flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#8b7355] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#6b5444] rounded-full blur-3xl"></div>
        </div>

        {/* Watercolor stains and vintage textures */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#8b7355] to-transparent rounded-full blur-2xl vintage-stain"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-tl from-[#6b5444] to-transparent rounded-full blur-2xl vintage-stain"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#a89c8a] to-transparent rounded-full blur-xl vintage-stain"></div>
        </div>

        {/* Hand-drawn corner doodles */}
        <div className="absolute top-8 left-8 w-24 h-24 opacity-20 corner-doodle">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,20 Q30,10 50,25 T90,20" stroke="#8b7355" strokeWidth="2" fill="none" className="doodle-line"/>
            <path d="M15,35 Q35,25 55,40 T85,35" stroke="#6b5444" strokeWidth="1.5" fill="none" className="doodle-line"/>
            <circle cx="25" cy="30" r="2" fill="#8b7355" className="doodle-dot"/>
            <circle cx="65" cy="28" r="1.5" fill="#6b5444" className="doodle-dot"/>
          </svg>
        </div>
        <div className="absolute top-8 right-8 w-24 h-24 opacity-20 corner-doodle">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M90,20 Q70,10 50,25 T10,20" stroke="#8b7355" strokeWidth="2" fill="none" className="doodle-line"/>
            <path d="M85,35 Q65,25 45,40 T15,35" stroke="#6b5444" strokeWidth="1.5" fill="none" className="doodle-line"/>
            <circle cx="75" cy="30" r="2" fill="#8b7355" className="doodle-dot"/>
            <circle cx="35" cy="28" r="1.5" fill="#6b5444" className="doodle-dot"/>
          </svg>
        </div>
        <div className="absolute bottom-8 left-8 w-24 h-24 opacity-20 corner-doodle">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,80 Q30,90 50,75 T90,80" stroke="#8b7355" strokeWidth="2" fill="none" className="doodle-line"/>
            <path d="M15,65 Q35,75 55,60 T85,65" stroke="#6b5444" strokeWidth="1.5" fill="none" className="doodle-line"/>
            <circle cx="25" cy="70" r="2" fill="#8b7355" className="doodle-dot"/>
            <circle cx="65" cy="72" r="1.5" fill="#6b5444" className="doodle-dot"/>
          </svg>
        </div>
        <div className="absolute bottom-8 right-8 w-24 h-24 opacity-20 corner-doodle">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M90,80 Q70,90 50,75 T10,80" stroke="#8b7355" strokeWidth="2" fill="none" className="doodle-line"/>
            <path d="M85,65 Q65,75 45,60 T15,65" stroke="#6b5444" strokeWidth="1.5" fill="none" className="doodle-line"/>
            <circle cx="75" cy="70" r="2" fill="#8b7355" className="doodle-dot"/>
            <circle cx="35" cy="72" r="1.5" fill="#6b5444" className="doodle-dot"/>
          </svg>
        </div>

        {/* Floating elements container */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating tea leaves */}
          <div className="floating-leaf absolute top-1/4 left-1/4 w-6 h-6 opacity-30">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#8b7355]">
              <path d="M12 2C8 6 4 10 2 14c2 4 6 6 10 4s6-6 10-4c-2-4-6-8-10-12z" fill="currentColor"/>
            </svg>
          </div>
          <div className="floating-leaf absolute top-1/3 right-1/4 w-5 h-5 opacity-25">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#6b5444]">
              <path d="M12 2C8 6 4 10 2 14c2 4 6 6 10 4s6-6 10-4c-2-4-6-8-10-12z" fill="currentColor"/>
            </svg>
          </div>
          <div className="floating-leaf absolute bottom-1/3 left-1/3 w-4 h-4 opacity-35">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#a89c8a]">
              <path d="M12 2C8 6 4 10 2 14c2 4 6 6 10 4s6-6 10-4c-2-4-6-8-10-12z" fill="currentColor"/>
            </svg>
          </div>

          {/* Floating coffee beans */}
          <div className="floating-bean absolute top-1/2 left-1/6 w-3 h-4 opacity-20">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#4a3728]">
              <ellipse cx="12" cy="12" rx="8" ry="12" fill="currentColor"/>
              <path d="M8 8c0-2 2-4 4-4s4 2 4 4" stroke="currentColor" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          <div className="floating-bean absolute top-2/3 right-1/6 w-2.5 h-3.5 opacity-25">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#6b5444]">
              <ellipse cx="12" cy="12" rx="8" ry="12" fill="currentColor"/>
              <path d="M8 8c0-2 2-4 4-4s4 2 4 4" stroke="currentColor" strokeWidth="1" fill="none"/>
            </svg>
          </div>

          {/* Coffee cup steam swirls */}
          <div className="steam-swirl absolute top-1/4 left-1/2 w-8 h-8 opacity-15">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#8b7355]">
              <path d="M12 4c-2 0-4 2-4 4s2 4 4 4c1 0 2-1 3-2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M12 8c-1 0-2 1-2 2s1 2 2 2c1 0 2-1 2-2" stroke="currentColor" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          <div className="steam-swirl absolute top-1/3 right-1/3 w-6 h-6 opacity-20">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#6b5444]">
              <path d="M12 4c-2 0-4 2-4 4s2 4 4 4c1 0 2-1 3-2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>

        {/* New decorative ambient layer behind content */}
        <HeroDecor />
        {/* Foreground ambient scene elements placed around hero (not behind text/buttons) */}
        <HeroScene />

        
        <div className="text-center max-w-5xl mx-auto relative z-10">
          {/* Ukusa Logo */}
          <div className="pt-16 pb-12 flex justify-center animate-fade-in-up">
            <img 
              src="https://res.cloudinary.com/dqataciy5/image/upload/v1759819275/ukusa_logo_draft_kxmgby.png"
              alt="Ukusa Cafe Logo"
              className="w-32 h-32 object-contain drop-shadow-lg animate-scale-in"
            />
          </div>

          {/* Main Heading with minimalist icons and swirls */}
          <div className="relative inline-block">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl text-[#4a3728] pb-8 tracking-[0.15em] font-light animate-fade-in-up animation-delay-200"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Ukusa
            </h1>
            {/* Thin parallax floral swirls */}
            <div className="parallax-swirl absolute -left-14 -top-6 opacity-0">
              <svg width="90" height="60" viewBox="0 0 90 60" fill="none">
                <path d="M2 40 C20 10, 50 10, 70 35 S88 55, 88 55" stroke="#a89c8a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="28" r="2" fill="#8b7355"/>
                <circle cx="62" cy="30" r="1.5" fill="#6b5444"/>
              </svg>
            </div>
            <div className="parallax-swirl absolute -right-16 -bottom-2 opacity-0">
              <svg width="110" height="70" viewBox="0 0 110 70" fill="none">
                <path d="M108 30 C90 5, 60 8, 35 30 S10 58, 10 58" stroke="#b5ad9a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Minimalist jiggle icons */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 jiggle-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="opacity-80">
                <path d="M4 10h11a3 3 0 013 3v1a5 5 0 01-5 5H9a5 5 0 01-5-5v-4z" stroke="#6b5444" strokeWidth="1.5"/>
                <path d="M18 11h2a2 2 0 010 4h-2" stroke="#6b5444" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="absolute -right-16 top-0 jiggle-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-80">
                <path d="M3 14c2-6 16-6 18 0 0 3-4 5-9 5s-9-2-9-5z" stroke="#8b7355" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 jiggle-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-80">
                <path d="M12 21V8M7 13c0-3 2-5 5-5 0 3-2 5-5 5zm10 0c-3 0-5-2-5-5 3 0 5 2 5 5z" stroke="#99ad83" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#a89c8a] italic font-light pb-10 leading-loose max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            Where nature meets you and you meet experience
          </p>

          {/* CTA Button */}
          <div className="pb-16 animate-fade-in-up animation-delay-800">
            <a href="/menu" className="bg-[#6b5444] hover:bg-[#5a4435] text-white px-8 py-4 rounded-[32px] text-base font-medium shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 w-64 h-12 flex items-center justify-center mx-auto button-glow">
              Discover Our Menu
            </a>
            {/* Parallax swirl near button */}
            <div className="parallax-swirl opacity-0 mx-auto mt-4 w-48">
              <svg width="100%" height="40" viewBox="0 0 160 40" fill="none">
                <path d="M2 30 C40 10, 70 10, 105 22 S158 34, 158 34" stroke="#cdbf9b" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow">
            <p className="text-xs text-[#a89c8a] tracking-[0.3em] mb-4 opacity-70">SCROLL</p>
            <div className="flex justify-center">
              <svg 
                width="24" 
                height="36" 
                viewBox="0 0 24 36" 
                fill="none"
                className="animate-pulse"
              >
                <path 
                  d="M12 6L12 24M12 24L6 18M12 24L18 18" 
                  stroke="#a89c8a" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="opacity-60"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Global right/ bottom dock navbar */}
        <SideNav />
      </div>
    );
  };

export default HeroPage