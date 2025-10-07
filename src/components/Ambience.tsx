
const sampleImages = [
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844446/WhatsApp_Image_2025-10-07_at_19.09.20_2_gydkvl.jpg',
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844447/WhatsApp_Image_2025-10-07_at_19.09.20_ibktps.jpg',
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844446/WhatsApp_Image_2025-10-07_at_19.09.21_2_gry7us.jpg',
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844446/WhatsApp_Image_2025-10-07_at_19.09.21_vwmfmv.jpg',
  // Insert the last screenshot in the middle to improve flow
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844810/Screenshot_2025-10-07_at_7.16.41_PM_vonh6t.png',
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844446/WhatsApp_Image_2025-10-07_at_19.09.21_vwmfmv.jpg',
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844446/WhatsApp_Image_2025-10-07_at_19.09.22_1_k8hf2t.jpg',
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844446/WhatsApp_Image_2025-10-07_at_19.09.21_1_qkkvhv.jpg',
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844446/WhatsApp_Image_2025-10-07_at_19.09.22_s5l7rd.jpg',
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844749/Screenshot_2025-10-07_at_7.15.17_PM_fpz2lj.png',
  'https://res.cloudinary.com/dqataciy5/image/upload/v1759844810/Screenshot_2025-10-07_at_7.16.41_PM_vonh6t.png'
]

function Ambience() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#f5f1ed] to-[#f0ebe5] overflow-hidden">
      {/* Subtle background stains to match theme */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#8b7355] to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tl from-[#6b5444] to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl text-[#4a3728] tracking-[0.12em] font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Café Ambience</h2>
          <p className="text-[#a89c8a] italic font-light mt-3">Warm corners, quiet chatter, and cozy light</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-2">
          {sampleImages.map((src, i) => {
            const layouts = [
              { wrap: 'col-span-2 md:col-span-2 md:row-span-2 h-56 md:h-[28rem]' },
              { wrap: 'col-span-1 h-40 md:h-64' },
              { wrap: 'col-span-1 md:row-span-2 h-56 md:h-[26rem]' },
              { wrap: 'col-span-1 h-44 md:h-60' },
              { wrap: 'col-span-2 md:col-span-1 h-48 md:h-72' },
              { wrap: 'col-span-1 h-40 md:h-56' },
              { wrap: 'col-span-1 h-44 md:h-64' },
              { wrap: 'col-span-2 md:col-span-2 h-52 md:h-80' },
              { wrap: 'col-span-1 h-40 md:h-60' },
              { wrap: 'col-span-1 h-44 md:h-64' },
            ] as const
            const pick = layouts[i % layouts.length]
            return (
              <div key={i} className={`relative group overflow-hidden rounded-2xl border border-[#eee] ${pick.wrap}`}>
                <img src={src} alt="Cafe ambience" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )
          })}
        </div>

        {/* Caption strip */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-2 text-[#8b7355]">
          <span className="text-[10px] uppercase tracking-[0.2em] bg-[#faf6ea] px-3 py-1 rounded-full">Wood & Warm Light</span>
          <span className="text-[10px] uppercase tracking-[0.2em] bg-[#faf6ea] px-3 py-1 rounded-full">Soft Jazz</span>
          <span className="text-[10px] uppercase tracking-[0.2em] bg-[#faf6ea] px-3 py-1 rounded-full">Freshly Brewed</span>
        </div>
      </div>
    </section>
  )
}

export default Ambience


