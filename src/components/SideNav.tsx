import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
};

function SideNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (sectionId: string) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(doScroll, 50)
    } else {
      doScroll()
    }
  }

  const items: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2h-5v-6H10v6H5a2 2 0 0 1-2-2v-9z" stroke="#6b5444" strokeWidth="1.5"/>
        </svg>
      ),
      action: () => scrollTo('hero')
    },
    {
      id: 'menu',
      label: 'Menu',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="#6b5444" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      action: () => navigate('/menu')
    },
    {
      id: 'story',
      label: 'Story',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 4h10a4 4 0 0 1 4 4v12l-3-2-3 2-3-2-3 2V4z" stroke="#6b5444" strokeWidth="1.5"/>
        </svg>
      ),
      action: () => scrollTo('story')
    },
    {
      id: 'testimonials',
      label: 'Reviews',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10z" stroke="#6b5444" strokeWidth="1.5"/>
        </svg>
      ),
      action: () => scrollTo('testimonials')
    },
    {
      id: 'visit',
      label: 'Visit Us',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" stroke="#6b5444" strokeWidth="1.5"/>
          <circle cx="12" cy="10" r="3" stroke="#6b5444" strokeWidth="1.5"/>
        </svg>
      ),
      action: () => scrollTo('address')
    },
  ]

  return (
    <>
      {/* Desktop/right-side nav */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <nav className="bg-white/70 backdrop-blur-lg border border-[#eee] rounded-2xl shadow-xl p-2 flex flex-col gap-1">
          {items.map(it => (
            <button
              key={it.id}
              onClick={it.action}
              className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#faf6ea] transition-colors"
              aria-label={it.label}
            >
              <span className="opacity-80 group-hover:opacity-100">{it.icon}</span>
              <span className="text-xs tracking-[0.16em] text-[#6b5444] whitespace-nowrap">{it.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile bottom dock */}
      <div className="md:hidden fixed left-1/2 -translate-x-1/2 bottom-4 z-40">
        <nav className="bg-white/80 backdrop-blur-xl border border-[#eee] rounded-full shadow-2xl px-2 py-2 flex items-center gap-1">
          {items.map(it => (
            <button
              key={it.id}
              onClick={it.action}
              className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#faf6ea] active:scale-95 transition-all"
              aria-label={it.label}
            >
              {it.icon}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

export default SideNav


