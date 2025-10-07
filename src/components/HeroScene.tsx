import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function HeroScene() {
  const { scrollYProgress } = useScroll()
  const grinderOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 0.4, 0])
  const cupRevealOpacity = useTransform(scrollYProgress, [0.18, 0.28, 0.4], [0, 0.6, 1])

  return (
    <div className="absolute inset-0 pointer-events-none z-20" aria-hidden>
      {/* Ambient moving gradient glow */}
      <motion.div
        className="absolute -inset-10"
        style={{ mixBlendMode: 'multiply' }}
        animate={{ background: [
          'radial-gradient(40% 40% at 15% 30%, rgba(214,196,170,0.25), transparent 60%)',
          'radial-gradient(45% 45% at 80% 50%, rgba(200,174,144,0.22), transparent 65%)',
          'radial-gradient(50% 50% at 25% 70%, rgba(220,202,178,0.2), transparent 65%)',
        ]}}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Parallax window scene (kept to sides, not overlapping hero center) */}
      <motion.div className="absolute left-6 top-10 w-44 h-28 rounded-lg overflow-hidden shadow-sm" style={{ background: '#efe6db', border: '1px solid #e0d6c7' }}
        animate={{ y: [0, -4, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="absolute inset-x-0 top-0 h-6" style={{ background: '#d9c9b4' }} />
        <motion.div className="absolute bottom-3 left-3 right-3 h-8 rounded-md" style={{ background: '#e9dfd2' }}
          animate={{ x: [0, 6, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-6 left-8 w-8 h-6 rounded-sm" style={{ background: '#ceb89a' }}
          animate={{ y: [0, -3, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-6 right-10 w-10 h-6 rounded-sm" style={{ background: '#ceb89a' }}
          animate={{ y: [0, -2, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />
      </motion.div>

      {/* Coffee cup with steam and latte art (left-bottom side) */}
      <div className="absolute left-10 bottom-10">
        <svg width="140" height="120" viewBox="0 0 140 120">
          {/* Cup */}
          <motion.path d="M20 70 h70 a20 20 0 0 1 0 40 h-70 a20 20 0 0 1 0-40 z" fill="#fff9f2" stroke="#b89a7a" strokeWidth="2"/>
          <motion.path d="M95 80 h15 a12 12 0 1 1 -6 22" fill="none" stroke="#b89a7a" strokeWidth="2"/>
          {/* Coffee surface */}
          <ellipse cx="55" cy="78" rx="34" ry="10" fill="#6b4c34" opacity="0.95"/>
          {/* Latte art heart */}
          <motion.path
            d="M40 75 c6 -6 12 -2 15 3 c3 -5 9 -9 15 -3 c5 6 -3 13 -15 18 c-12 -5 -20 -12 -15 -18 z"
            fill="#ddc7a7" opacity="0.85"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Steam */}
          <motion.path d="M45 45 c-8 -15 12 -18 2 -34" fill="none" stroke="#cbb79a" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}/>
          <motion.path d="M60 50 c-6 -12 10 -16 1 -28" fill="none" stroke="#cbb79a" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}/>
        </svg>
      </div>

      {/* Pour from moka pot (upper-left side) */}
      <div className="absolute left-24 top-8">
        <svg width="120" height="90" viewBox="0 0 120 90">
          {/* simplified moka pot */}
          <path d="M20 20 l20 -8 l20 8 l-6 14 h-28 z" fill="#d5c4ad" stroke="#b9a184"/>
          <rect x="32" y="10" width="16" height="10" fill="#c9b79e" stroke="#b9a184"/>
          {/* pour stream */}
          <motion.path d="M70 32 C80 50, 70 60, 60 72" stroke="#6b4c34" strokeWidth="3" fill="none" strokeLinecap="round"
            strokeDasharray="60" strokeDashoffset="60"
            animate={{ strokeDashoffset: [60, 0, 60] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} />
        </svg>
      </div>

      {/* Gently falling coffee beans along sides */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div key={i} className="absolute" style={{ left: i % 2 ? 'auto' : `${4 + i*2}%`, right: i % 2 ? `${6 + i*2}%` : 'auto', top: `${8 + i*12}%` }}
          animate={{ y: [0, 12, 0], rotate: [0, i%2?6:-6, 0] }} transition={{ duration: 8 + (i%3)*2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}>
          <svg viewBox="0 0 24 24" width="16" height="20" style={{ opacity: 0.5 }}>
            <ellipse cx="12" cy="12" rx="7.5" ry="11" fill="#5a3d2b"/>
            <path d="M9 8c0-2 2-4 3.5-4s3.5 2 3.5 4" stroke="#3b281d" strokeWidth="1" fill="none"/>
          </svg>
        </motion.div>
      ))}

      {/* Pastries floating in softly around sides */}
      <motion.div className="absolute right-8 top-16" animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}>
        <svg viewBox="0 0 64 40" width="56" height="32">
          <path d="M4 28c3-10 12-16 28-16s25 6 28 16c-6 4-18 6-28 6S10 32 4 28z" fill="none" stroke="#d4b98c" strokeWidth="2"/>
          <path d="M10 26c2-5 9-10 22-10" fill="none" stroke="#c7a972" strokeWidth="1.5"/>
        </svg>
      </motion.div>
      <motion.div className="absolute right-16 bottom-16" animate={{ y: [0, -8, 0], rotate: [0, -6, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}>
        <svg viewBox="0 0 64 40" width="48" height="28">
          <path d="M4 28c3-10 12-16 28-16s25 6 28 16c-6 4-18 6-28 6S10 32 4 28z" fill="none" stroke="#e0c79e" strokeWidth="2"/>
        </svg>
      </motion.div>

      {/* Espresso machine line-art with subtle steam (right side) */}
      <div className="absolute right-10 top-10">
        <svg width="140" height="90" viewBox="0 0 140 90">
          <path d="M15 35 h80 v30 h-80 z" fill="none" stroke="#b9a184" strokeWidth="2"/>
          <path d="M30 35 v-10 h50 v10" fill="none" stroke="#b9a184" strokeWidth="2"/>
          <rect x="40" y="50" width="12" height="10" fill="#b9a184" opacity="0.6"/>
          <motion.path d="M46 60 v10" stroke="#6b4c34" strokeWidth="3" strokeLinecap="round" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity }} />
          <motion.path d="M90 38 c-6 -10 8 -10 2 -20" fill="none" stroke="#cbb79a" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 6, repeat: Infinity }} />
        </svg>
      </div>

      {/* Map pin bounce with cafe icon (top-right area) */}
      <motion.div className="absolute right-8 top-1/2" animate={{ y: [0, -6, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}>
        <svg width="30" height="40" viewBox="0 0 30 40">
          <path d="M15 38 c-8 -12 -12 -18 -12 -24 a12 12 0 1 1 24 0 c0 6 -4 12 -12 24z" fill="#b48c67"/>
          <circle cx="15" cy="14" r="5" fill="#fff5ea"/>
          <path d="M13 12 h6 a3 3 0 1 1 -3 5" fill="none" stroke="#8f6b4d" strokeWidth="1.5"/>
        </svg>
      </motion.div>

      {/* Musical notes floating (top-right) */}
      {[0,1,2].map((n) => (
        <motion.div key={n} className="absolute right-6" style={{ top: `${10 + n*6}%` }} animate={{ y: [0, -10, 0] }} transition={{ duration: 8 + n*2, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" style={{ opacity: 0.5 }}>
            <path d="M4 4 v6 a2 2 0 1 0 1 1 V4 h7 v6 a2 2 0 1 0 1 1 V4" fill="none" stroke="#b9a184" strokeWidth="1"/>
          </svg>
        </motion.div>
      ))}

      {/* Scroll-triggered grinder to cup transform indicator (bottom center but outside hero text) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
        <motion.div style={{ opacity: grinderOpacity }}>
          <svg width="90" height="60" viewBox="0 0 90 60">
            <rect x="10" y="20" width="70" height="20" rx="4" fill="none" stroke="#b9a184" />
            <rect x="38" y="10" width="14" height="10" fill="#b9a184"/>
            <motion.circle cx="45" cy="45" r="8" fill="#6b4c34" animate={{ r: [8, 6, 8] }} transition={{ duration: 1.6, repeat: Infinity }} />
          </svg>
        </motion.div>
        <motion.div style={{ position: 'absolute', left: -28, bottom: 0, opacity: cupRevealOpacity }}>
          <svg width="90" height="60" viewBox="0 0 90 60">
            <path d="M15 28 h40 a10 10 0 0 1 0 20 h-40 a10 10 0 0 1 0-20 z" fill="#fff9f2" stroke="#b89a7a"/>
            <ellipse cx="35" cy="30" rx="20" ry="6" fill="#6b4c34"/>
          </svg>
        </motion.div>
      </div>

      {/* CTA ripple effect via CSS (target existing .button-glow) */}
      <style>{`
        .button-glow { position: relative; overflow: hidden; }
        .button-glow::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: inherit;
          background: radial-gradient(120px 120px at var(--rx,50%) var(--ry,50%), rgba(214,196,170,.35), transparent 60%);
          opacity: 0; transition: opacity .4s ease;
          pointer-events: none;
        }
        .button-glow:hover::after { opacity: 1; }
      `}</style>

      {/* Keep mobile subtle */}
      <style>{`
        @media (max-width: 640px) {
          .z-20[aria-hidden] svg, .z-20[aria-hidden] div { opacity: .32 !important }
        }
      `}</style>
    </div>
  )
}

export default HeroScene


