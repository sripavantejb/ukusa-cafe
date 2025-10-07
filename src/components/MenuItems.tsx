 

const menuItems = [
    {
      title: 'Hazelnut Latte',
      price: '₹180',
      description: 'Rich espresso with creamy hazelnut flavor and steamed milk',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
      accent: '#a48c5e',
    },
    {
      title: 'Lotus Biscoff Frappe',
      price: '₹220',
      description: 'Creamy frappe with the signature Lotus Biscoff cookie flavor',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80',
      accent: '#d2b783',
    },
    {
      title: 'Dynamite Chicken',
      price: '₹350',
      description: 'Spicy chicken with our signature dynamite sauce and fresh vegetables',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
      accent: '#a48c5e',
    }
  ];
  

function MenuItems() {
  return (
    <div className="bg-[#FDFCFA] min-h-screen flex flex-col items-center pt-16 pb-28 px-2">
    {/* Ukusa Logo */}
    <div className="mb-2">
      <img 
        src="https://res.cloudinary.com/dqataciy5/image/upload/v1759818106/Screenshot_2025-10-07_at_11.51.39_AM_x3b8nn.png"
        alt="Ukusa Cafe Logo"
        className="w-10 h-10 object-contain mx-auto"
      />
    </div>
    {/* Title */}
    <h2 className="font-serif text-5xl md:text-6xl text-[#4a3728] mb-2 font-normal text-center">
      Our Specialties
    </h2>
    {/* Underline accent */}
    <div className="mx-auto mt-2 mb-6 w-32 border-t-2 border-[#b5ad9a]"/>
    {/* Subheading */}
    <p className="text-[#8b7355] text-lg font-light mb-12 text-center">
      Diverse, Insta-worthy menu with something for everyone
    </p>
    
    {/* Menu Cards */}
    <div className="flex flex-col md:flex-row gap-7 md:gap-10 justify-center items-center">
      {menuItems.map((item, idx) => (
        <div 
          key={idx}
          className="bg-white rounded-2xl shadow-xl max-w-xs w-full overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl relative"
        >
          {/* Price badge */}
          <span className="absolute top-4 right-4 bg-[#f5f1ed] text-[#4a3728] px-4 py-1 rounded-full text-sm font-medium shadow" style={{letterSpacing: '.5px'}}>
            {item.price}
          </span>
          {/* Menu image */}
          <img
            src={item.image}
            alt={item.title}
            className="h-56 w-full object-cover"
          />
          {/* Card Content */}
          <div className="p-6">
            {/* Card accent line */}
            <div className="w-9 border-t-2 mb-4" style={{ borderColor: item.accent }}></div>
            {/* Name */}
            <h3 className="font-serif text-2xl text-[#4a3728] mb-2">{item.title}</h3>
            {/* Description */}
            <p className="text-[#6b5444] text-base font-light mb-6">{item.description}</p>
            {/* CTA removed per request */}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default MenuItems