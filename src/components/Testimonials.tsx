import { useState } from 'react';

const testimonials = [
  {
    quote: "Perfect for date nights! The ambience is absolutely beautiful with those dreamy floral glass paintings. Highly recommend for vegetarians.",
    name: "Priya Sharma",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    stars: 5,
  },
  {
    quote: "The Lotus Biscoff Frappe is to die for! And the Tomato Basil Bruschetta is a must-try. Great for groups and university students.",
    name: "Rahul Kumar",
    role: "Student",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    stars: 5,
  },
  {
    quote: "Straight out of Pinterest! Every corner is Instagram-worthy. The service is excellent and the food is amazing.",
    name: "Ananya Reddy",
    role: "Food Blogger",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    stars: 5,
  },
  {
    quote: "Best ambience in Hyderabad among cafes. The glass roof seating gives such a nice indoor-outdoor feel. Perfect for working on laptop.",
    name: "Vikram Singh",
    role: "Freelancer",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    stars: 5,
  },
  {
    quote: "Excellent service by chef and staff. The Dynamite Chicken and Peri Peri Fries are fantastic. Great for families with kids.",
    name: "Meera Patel",
    role: "Customer",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    stars: 5,
  },
  {
    quote: "Budget friendly for the locality with such amazing quality. The Hazelnut Latte and Mango Pudding are my favorites!",
    name: "Arjun Nair",
    role: "Regular Customer",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    stars: 5,
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex(idx => (idx === 0 ? testimonials.length - 1 : idx - 1));
  const handleNext = () =>
    setActiveIndex(idx => (idx === testimonials.length - 1 ? 0 : idx + 1));

  return (
    <div className="min-h-[70vh] bg-[#F6F5F3] flex flex-col pt-24 pb-16 items-center px-2">
      {/* Title and decor */}
      <h2 className="font-serif text-5xl md:text-6xl text-[#4a3728] font-normal mb-2 text-center">
        What Our Guests Say
      </h2>
      <div className="mx-auto mt-2 mb-6 w-32 border-t-2 border-[#b5ad9a]" />
      <p className="mb-16 text-[#8b7355] text-md font-light text-center">
        4.3 star rating from 1,496 Google reviews
      </p>

      {/* Testimonial Card */}
      <div className="relative flex items-center justify-center w-full">
        {/* Left arrow */}
        <button
          className="absolute left-0 z-10 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center text-[#a6b696] hover:scale-110 transition-transform"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          &#x2039;
        </button>

        <div className="bg-white rounded-2xl shadow-xl mx-auto px-8 md:px-20 py-12 w-full max-w-3xl flex flex-col items-center relative">
          {/* Quotation icon (top-left) */}
          <span className="absolute top-6 left-10 text-[#e5eed8] text-3xl select-none">&#10077;</span>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: testimonials[activeIndex].stars }).map((_, i) => (
              <svg key={i} width="21" height="21" fill="#bfa975" viewBox="0 0 20 20">
                <path d="M10 2l2.39 6.91h7.26l-5.88 4.3 2.25 6.91L10 13.64l-5.88 4.29 2.25-6.91-5.88-4.3h7.26L10 2z"/>
              </svg>
            ))}
          </div>
          {/* Testimonial Main Quote */}
          <blockquote className="italic text-[#6b5444] text-xl md:text-2xl mb-8 text-center font-light leading-relaxed">
            {testimonials[activeIndex].quote}
          </blockquote>
          {/* Avatar */}
          <img
            src={testimonials[activeIndex].avatar}
            alt={testimonials[activeIndex].name}
            className="rounded-full w-16 h-16 mb-2 object-cover"
          />
          {/* Name/Role */}
          <div className="font-serif text-[#4a3728] text-lg mb-1">{testimonials[activeIndex].name}</div>
          <div className="text-[#b5ad9a] text-sm">{testimonials[activeIndex].role}</div>
        </div>

        {/* Right arrow */}
        <button
          className="absolute right-0 z-10 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center text-[#a6b696] hover:scale-110 transition-transform"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          &#x203a;
        </button>
      </div>

      {/* Carousel dots */}
      <div className="flex gap-4 mt-8 justify-center">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full ${activeIndex === i ? 'bg-[#a6b696] border-2 border-[#4a3728]' : 'bg-[#e5eed8]'}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
