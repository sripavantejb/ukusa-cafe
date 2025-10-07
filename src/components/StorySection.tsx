const mainImg = 'https://res.cloudinary.com/dqataciy5/image/upload/v1759820113/Screenshot_2025-10-07_at_12.25.03_PM_bxgw8s.png'; // Story large image
const miniImg = 'https://res.cloudinary.com/dqataciy5/image/upload/v1759819275/ukusa_logo_draft_kxmgby.png'; // Ukusa Cafe logo (matches hero)

const StorySection = () => (
  <div className="bg-[#f5f1ed] py-24 flex flex-col items-center px-4">
    <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-10">
      {/* Images block */}
      <div className="relative w-full max-w-lg flex-shrink-0 flex items-center justify-center">
        <img
          src={mainImg}
          alt="Beautiful cafe food spread with pastries and coffee"
          className="rounded-2xl shadow-xl w-full object-cover h-[340px] md:h-[380px] bg-[#eee]"
        />
        <img
          src={miniImg}
          alt="Coffee and pastries close-up"
          className="absolute left-[60%] top-[65%] w-40 h-28 rounded-lg border-4 border-white shadow-lg object-cover bg-[#eee]"
        />
        
      </div>
      {/* Story text */}
      <div className="md:w-[55%] flex flex-col items-start">
        <div className="w-12 border-t-2 mb-4 border-[#a6b696]" />
        <h2 className="font-serif text-4xl md:text-5xl text-[#4a3728] font-normal mb-6">
          Our Story
        </h2>
        <p className="text-[#6b5444] text-base mb-4 font-light">
          Nestled in the heart of Jubilee Hills, Hyderabad, Ukusa Cafe stands as a testament to the vibrant spirit and creativity of the city's youth culture. Founded by national-level bike race champion <span className="font-bold text-lg text-[#4a3728]">Sandeep Nadimpalli</span>, Ukusa brings together the beauty of nature, artistic elegance, and culinary innovation under one stunning glass roof.
        </p>
        <p className="text-[#6b5444] text-base mb-4 font-light">
          From the moment you step inside, you are greeted by dreamy floral glass paintings, lush greenery, and an atmosphere that feels serenely upmarket yet cozy—making every visit "Insta-worthy." Ukusa is more than just a cafe; it's an experience where hospitality meets heart and every detail, from handcrafted coffees to designer desserts, is curated to delight.
        </p>
        <p className="text-[#6b5444] text-base mb-6 font-light">
          The menu, famed for its Hazelnut Latte, Vietnamese Coffee, unique sushi rolls, and oven-fresh pizzas, tells a story of local flavor crossed with global inspiration. With over 1,400 five-star reviews and a loyal social media following, Ukusa has quickly become the go-to destination for brunch dates, family gatherings, university meetups, and solo creators looking for that 'perfect corner.'
        </p>
        <p className="text-[#6b5444] text-base mb-6 font-light">
          Whether you're here for the curated music, warm staff, or simply to soak in the romantic yet lively ambiance, Ukusa promises that both nature and experience will meet you at the table. Join the journey that began with a racer's dream—and continues to foster community, comfort, and creativity with every plate and sip.
        </p>
        <button className="border border-[#6b5444] text-[#6b5444] rounded-full px-8 py-3 font-medium text-base transition-shadow hover:shadow-md hover:bg-[#f5f1ed]">
          OUR JOURNEY
        </button>
      </div>
    </div>
    {/* Features row */}
    <div className="flex flex-col md:flex-row justify-center mt-20 gap-12 md:gap-20 w-full max-w-4xl bg-[#FDFCFA] rounded-2xl py-10 px-8">
      {/* Feature 1 */}
      <div className="flex flex-col items-center text-center">
        <span className="bg-[#faf6ea] rounded-full p-4 mb-4">
          <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="13" stroke="#cdbf9b" strokeWidth="2"/><path d="M16 10v6l4 2" stroke="#bfa975" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <div className="font-serif text-lg text-[#4a3728] mb-2">LGBTQ+ Friendly</div>
        <div className="text-[#8b7355] text-sm font-light">Inclusive space welcoming everyone with open arms</div>
      </div>
      {/* Feature 2 */}
      <div className="flex flex-col items-center text-center">
        <span className="bg-[#e5eed8] rounded-full p-4 mb-4">
          <svg width="32" height="32" fill="none"><path d="M16 5C21.5 10.5 21.5 19.5 16 25C10.5 19.5 10.5 10.5 16 5Z" stroke="#99ad83" strokeWidth="2"/></svg>
        </span>
        <div className="font-serif text-lg text-[#4a3728] mb-2">Wheelchair Accessible</div>
        <div className="text-[#8b7355] text-sm font-light">Fully accessible entrance, parking, seating, and facilities</div>
      </div>
      {/* Feature 3 */}
      <div className="flex flex-col items-center text-center">
        <span className="bg-[#faf6ea] rounded-full p-4 mb-4">
          <svg width="32" height="32" fill="none"><path d="M16 6l3 9h9l-7.5 5.5L23 25l-7-5-7 5 2.5-7.5L2 15h9l3-9z" stroke="#bfa975" strokeWidth="2" strokeLinejoin="round"/></svg>
        </span>
        <div className="font-serif text-lg text-[#4a3728] mb-2">Free Wi-Fi</div>
        <div className="text-[#8b7355] text-sm font-light">Perfect for working on laptop or staying connected</div>
      </div>
    </div>
  </div>
);

export default StorySection;
