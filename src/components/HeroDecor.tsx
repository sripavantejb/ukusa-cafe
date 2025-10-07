import React from 'react'
import { motion } from 'framer-motion'

type DecorPosition = {
  top?: string
  bottom?: string
  left?: string
  right?: string
  scale?: number
  rotate?: number
  opacity?: number
}

const floatY = (distance: number, duration: number) => ({
  animate: {
    y: [0, -distance, 0],
  },
  transition: {
    duration,
    ease: 'easeInOut',
    repeat: Infinity,
  }
})

const slowRotate = (deg: number, duration: number) => ({
  animate: { rotate: [0, deg, 0] },
  transition: { duration, ease: 'easeInOut', repeat: Infinity }
})

const CoffeeBean: React.FC<{ className?: string; opacity?: number; scale?: number } & DecorPosition> = ({ className = '', opacity = 0.5, scale = 1, ...pos }) => (
  <motion.div className={`absolute ${className}`} style={{ ...pos }} {...floatY(10, 8)}>
    <div style={{ opacity, transform: `scale(${scale})` }}>
      <svg viewBox="0 0 24 24" width="20" height="24">
        <ellipse cx="12" cy="12" rx="8" ry="12" fill="#5a3d2b"/>
        <path d="M8 7c0-2 2-4 4-4s4 2 4 4" stroke="#3b281d" strokeWidth="1.2" fill="none"/>
      </svg>
    </div>
  </motion.div>
)

const Pastry: React.FC<{ className?: string; opacity?: number; scale?: number } & DecorPosition> = ({ className = '', opacity = 0.45, scale = 1, ...pos }) => (
  <motion.div className={`absolute ${className}`} style={{ ...pos }} {...floatY(8, 10)} {...slowRotate(8, 16)}>
    <div style={{ opacity, transform: `scale(${scale})` }}>
      <svg viewBox="0 0 64 40" width="48" height="30">
        <path d="M4 28c3-10 12-16 28-16s25 6 28 16c-6 4-18 6-28 6S10 32 4 28z" fill="none" stroke="#d4b98c" strokeWidth="2"/>
        <path d="M10 26c2-5 9-10 22-10" fill="none" stroke="#c7a972" strokeWidth="1.5"/>
      </svg>
    </div>
  </motion.div>
)

const AromaSwirl: React.FC<{ className?: string; opacity?: number; scale?: number } & DecorPosition> = ({ className = '', opacity = 0.5, scale = 1, ...pos }) => (
  <motion.div className={`absolute ${className}`} style={{ ...pos }} {...floatY(6, 7)}>
    <div style={{ opacity, transform: `scale(${scale})` }}>
      <svg viewBox="0 0 60 80" width="26" height="34">
        <motion.path
          d="M30 70c-8-10 8-14 0-26-7-11 7-14 0-26"
          fill="none"
          stroke="#b9ab96"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  </motion.div>
)

const Dot: React.FC<{ className?: string; color?: string; size?: number; opacity?: number } & DecorPosition> = ({ className = '', color = '#cbb79a', size = 8, opacity = 0.35, ...pos }) => (
  <motion.div className={`absolute ${className}`} style={{ ...pos }} {...floatY(6, 9)}>
    <div style={{ width: size, height: size, backgroundColor: color, borderRadius: size, opacity }} />
  </motion.div>
)

const CoffeeRing: React.FC<{ className?: string; opacity?: number; scale?: number } & DecorPosition> = ({ className = '', opacity = 0.25, scale = 1, ...pos }) => (
  <motion.div className={`absolute ${className}`} style={{ ...pos }} {...slowRotate(4, 20)}>
    <div style={{ opacity, transform: `scale(${scale})` }}>
      <svg viewBox="0 0 80 80" width="54" height="54">
        <circle cx="40" cy="40" r="28" fill="none" stroke="#b48c67" strokeOpacity="0.6" strokeWidth="2"/>
        <circle cx="40" cy="40" r="20" fill="none" stroke="#b48c67" strokeOpacity="0.3" strokeWidth="1"/>
      </svg>
    </div>
  </motion.div>
)

function HeroDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 md:-z-0" aria-hidden>
      {/* Beans left */}
      <CoffeeBean left="2%" top="18%" scale={0.9} opacity={0.55}/>
      <CoffeeBean left="4%" bottom="22%" scale={0.8} opacity={0.45}/>
      <CoffeeBean left="6%" top="55%" scale={0.7} opacity={0.5}/>

      {/* Beans right */}
      <CoffeeBean right="3%" top="22%" scale={0.85} opacity={0.5}/>
      <CoffeeBean right="6%" bottom="28%" scale={0.75} opacity={0.4}/>

      {/* Pastries */}
      <Pastry left="6%" bottom="8%" scale={1} opacity={0.5}/>
      <Pastry right="7%" top="10%" scale={0.9} opacity={0.45}/>

      {/* Aroma near top sides */}
      <AromaSwirl left="14%" top="14%" scale={1} opacity={0.6}/>
      <AromaSwirl right="12%" top="18%" scale={0.9} opacity={0.55}/>

      {/* Abstract dots and rings */}
      <Dot left="10%" top="40%" size={6}/>
      <Dot right="9%" top="48%" size={8} opacity={0.3}/>
      <CoffeeRing left="12%" bottom="18%" scale={0.9}/>
      <CoffeeRing right="10%" top="34%" scale={0.8}/>

      {/* Mobile reduction */}
      <style>{`
        @media (max-width: 640px) {
          .absolute[aria-hidden] svg, .absolute[aria-hidden] div { opacity: 0.28 !important; }
        }
      `}</style>
    </div>
  )
}

export default HeroDecor


