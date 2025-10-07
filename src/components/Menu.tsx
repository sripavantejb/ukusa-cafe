import React from 'react'
import SideNav from './SideNav'

type MenuItem = {
  item: string;
  price: string;
  description?: string;
  category?: string;
};

type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  columns?: ('item'|'price'|'description'|'category')[];
};

const sections: MenuSection[] = [
  {
    id: 'beverages-hot-coffee',
    title: 'Hot Coffee',
    subtitle: 'Crafted with freshly roasted beans',
    items: [
      { item: 'Espresso', price: '₹150' },
      { item: 'Americano', price: '₹199' },
      { item: 'Cappuccino', price: '₹210' },
      { item: 'Latte', price: '₹210' },
      { item: 'Flat White', price: '₹210' },
      { item: 'Cafe Mocha', price: '₹230' },
      { item: 'Roasted Hazelnut', price: '₹240' },
      { item: 'Salted Caramel', price: '₹240' },
      { item: 'Lotus Latte', price: '₹270' },
      { item: 'Rose Latte', price: '₹240' },
      { item: 'Saffron Latte', price: '₹240' },
    ],
    columns: ['item','price']
  },
  {
    id: 'beverages-cold-latte',
    title: 'Cold Latte',
    items: [
      { item: 'Iced Americano', price: '₹210' },
      { item: 'Vanilla Latte', price: '₹220' },
      { item: 'Saffron Latte', price: '₹220' },
      { item: 'Iced Classic Latte', price: '₹210' },
      { item: 'Iced Cappuccino', price: '₹220' },
      { item: 'Mango Latte', price: '₹220' },
      { item: 'Affagato', price: '₹230' },
      { item: 'Vietnamese Shakerato & Traditional', price: '₹250 / ₹280' },
    ],
    columns: ['item','price']
  },
  {
    id: 'beverages-frappe',
    title: 'Frappe',
    items: [
      { item: 'Classic Cold Coffee', price: '₹280' },
      { item: 'Peanut Blast', price: '₹260' },
      { item: 'Jig Jig Nutella', price: '₹260' },
      { item: 'Lotus Biscoff', price: '₹290' },
      { item: 'Chunky Banana Caramel', price: '₹260' },
      { item: 'Mango Frappe', price: '₹260' },
    ],
    columns: ['item','price']
  },
  {
    id: 'beverages-hand-brew',
    title: 'Hand Brew',
    items: [
      { item: 'Aeropress', price: '₹190' },
      { item: 'Origami', price: '₹190' },
      { item: 'Clever Dripper', price: '₹190' },
    ],
    columns: ['item','price']
  },
  {
    id: 'beverages-cold-brew',
    title: 'Cold Brew',
    items: [
      { item: 'Classic', price: '₹190' },
      { item: 'Coconut', price: '₹210' },
      { item: 'Mango', price: '₹210' },
      { item: 'Peach', price: '₹210' },
      { item: 'Cranberry', price: '₹210' },
    ],
    columns: ['item','price']
  },
  {
    id: 'beverages-hot-tea',
    title: 'Hot Tea',
    items: [
      { item: 'Chamomile Mint Green Tea', price: '₹179' },
      { item: 'Turmeric Amla Ginger Green Tea', price: '₹179' },
      { item: 'Me-Time Green Tea', price: '₹179' },
      { item: 'Ashwagandha Mint Herbal Tea', price: '₹179' },
      { item: 'Spiced Hibiscus Herbal Tea', price: '₹179' },
    ],
    columns: ['item','price']
  },
  {
    id: 'beverages-coolers',
    title: 'Coolers & Sodas',
    items: [
      { item: 'Lemon Ice Tea', price: '₹290' },
      { item: 'Peach Ice Tea', price: '₹290' },
      { item: 'Salt Lime Soda', price: '₹199' },
      { item: 'Sweet Lime Soda', price: '₹199' },
      { item: 'Sweet & Salt Lime soda', price: '₹199' },
    ],
    columns: ['item','price']
  },
  {
    id: 'food-soups-salads',
    title: 'Soups & Salads',
    items: [
      { category: 'Soups', item: 'Hungarian Mushroom Soup', price: '₹259', description: 'Creamy soup with tender mushrooms, garlic, onions, herbs, smoked paprika.' },
      { category: 'Soups', item: 'Mexican Tortilla', price: 'Veg: ₹259 / Chicken: ₹289', description: 'Traditional soup with fried corn tortilla in spiced tomato broth.' },
      { category: 'Salads', item: 'Pear Salad with Candied Walnuts', price: '₹339', description: 'Roasted pears, lettuce, carrot spaghetti, radish, candied walnuts, mango basil dressing.' },
      { category: 'Salads', item: 'Ceaser Salad', price: '₹389', description: 'Romaine lettuce, seasoned dressing, Parmesan, croutons.' },
      { category: 'Salads', item: 'Mediterranean Salad', price: '₹369', description: 'Raw greens, veggies, toppings with sun-dried pesto dressing.' },
    ],
    columns: ['category','item','price','description']
  },
  {
    id: 'food-starters',
    title: 'Starters',
    items: [
      { category: 'Veg Starters', item: 'Raw Banana Cheese Sticks', price: '₹359', description: 'Baked raw banana mixed with cheese and Indian flavours.' },
      { category: 'Veg Starters', item: 'Broccoli Maggie Aranchini', price: '₹359', description: 'Fried balls of Maggie, broccoli, and mozzarella, crumb-coated.' },
      { category: 'Veg Starters', item: 'Zucchini Rings', price: '₹349', description: 'Battered or crumbed zucchini rings, deep-fried.' },
      { category: 'Veg Starters', item: 'Fried Lotus Stem', price: '₹369', description: 'Asian style fried lotus stem.' },
      { category: 'Veg Starters', item: 'Broccoli Croquettes', price: '₹359', description: 'Crumb coated broccoli fried to perfection.' },
      { category: 'Veg Starters', item: 'Moroccan Mint Cottage Cheese', price: '₹399', description: 'Moroccan spice flavoured mint paneer sticks.' },
      { category: 'Non Veg Starters', item: 'Chilli Basil Lime Chicken', price: '₹449', description: 'Pan-fried chicken with chilli, basil, and lime.' },
      { category: 'Non Veg Starters', item: 'Chicken Satay Thai style', price: '₹399', description: 'Grilled chicken supreme with sweet chilli peanut butter sauce.' },
      { category: 'Non Veg Starters', item: 'Chicken Solanki', price: '₹399', description: 'Lemon herb and garlic marinated chicken with tzatziki.' },
      { category: 'Non Veg Starters', item: 'Parmesan Garlic Chicken Wings', price: '₹449', description: 'Batter-fried wings with creamy parmesan and garlic.' },
      { category: 'Non Veg Starters', item: 'Schezwan Chicken', price: '₹399', description: 'Crispy chicken with peppers, garlic, ginger & Szechuan sauce.' },
      { category: 'Non Veg Starters', item: 'Crumb Fried Chicken', price: '₹399', description: 'Herb-marinated, crumb-fried chicken.' },
      { category: 'Non Veg Starters', item: 'Chilly Basil Prawns', price: '₹449', description: 'Tempura-battered prawns with chilli and basil.' },
      { category: 'Non Veg Starters', item: 'Fish Fingers', price: '₹429', description: 'Crumb-fried fish with mustard and dill leaves.' },
      { category: 'Non Veg Starters', item: 'Fish Cakes', price: '₹429', description: 'Golden fried fish cakes.' },
    ],
    columns: ['category','item','price','description']
  },
  {
    id: 'food-main-course',
    title: 'Main Course',
    items: [
      { category: 'Veg Main Course', item: 'Ratatouille with Polenta Cake', price: '₹399', description: 'Layers of polenta with ratatouille.' },
      { category: 'Veg Main Course', item: 'Grill Tofu with Mashed potato & Herb Beans', price: '₹429', description: 'Spicy marinated tofu, mashed potato and herb beans.' },
      { category: 'Non Veg Main Course', item: 'Grilled Chicken with Mashed Potato & Veggies', price: '₹629', description: 'Chicken breast, garlic mash, sautéed vegetables, Romesco sauce.' },
      { category: 'Non Veg Main Course', item: 'Spinach Artichoke Stuffed Chicken', price: '₹629', description: 'Stuffed chicken with grilled veggies, herb rice, mushroom sauce.' },
      { category: 'Non Veg Main Course', item: 'Black and Fish with Quinoa and Veggies', price: '₹649', description: 'Basa fillet with Cajun spice and caper lemon butter.' },
    ],
    columns: ['category','item','price','description']
  },
  {
    id: 'food-bowls-stews',
    title: 'Bowls & Stews',
    items: [
      { category: 'Bowls', item: 'Mexican Chicken Bowl', price: '₹649', description: 'Mexican rice, sweet corn & salsa, sour cream.' },
      { category: 'Bowls', item: 'Southern Chicken Bowl', price: '₹549', description: 'Homemade chicken curry with ghee-flavoured rice.' },
      { category: 'Bowls', item: 'Ghee Roast Lamb Bowl', price: '₹699', description: 'Ghee roasted lamb with coriander ghee rice.' },
      { category: 'Bowls', item: 'POWI', price: '₹1077', description: 'Ghee roasted lamb keema curry with coriander ghee rice.' },
      { category: 'Stews', item: 'Veg Stew', price: '₹549', description: 'Lightly spiced stew with mixed vegetables, herb rice.' },
      { category: 'Stews', item: 'Chicken Stew', price: '₹599', description: 'Lightly spiced stew with chicken, herb rice.' },
    ],
    columns: ['category','item','price','description']
  },
  {
    id: 'food-pizzas',
    title: 'Pizzas (Puff Base)',
    items: [
      { item: 'Classic Margherita', price: '₹599', description: 'Napoli sauce, mozzarella, basil.' },
      { item: 'Exotic', price: '₹699', description: 'BBQ sauce, cottage cheese, onion, pepper, olive, mozzarella.' },
      { item: 'Hawaiian', price: '₹649', description: 'Chicken ham, pineapple, mozzarella, onion, Napoli sauce.' },
      { item: 'BBQ Cottage Cheese', price: '₹699', description: 'Cottage cheese, BBQ, onion, pepper, mozzarella.' },
      { item: 'Southern Chicken', price: '₹699', description: 'Homemade curry chicken, Napoli, mozzarella.' },
      { item: 'Lamb Pepperoni', price: '₹749', description: 'Lamb pepperoni, Napoli, mozzarella.' },
      { item: 'Ghee Roasted Chicken', price: '₹699', description: 'Ghee roasted chicken, Napoli, mozzarella.' },
      { item: 'Ghee Roasted Lamb', price: '₹699', description: 'Ghee roasted lamb, Napoli, mozzarella.' },
    ],
    columns: ['item','price','description']
  },
  {
    id: 'food-pastas',
    title: 'Pastas (Penne & Spaghetti)',
    items: [
      { item: 'Alfredo', price: '₹449', description: 'Creamy butter, parmesan, garlic, mushroom.' },
      { item: 'Arrabiata', price: '₹449', description: 'Tomato-base pasta, butter, parmesan, garlic.' },
      { item: 'Parma Rosa', price: '₹499', description: 'Mix of alfredo and marinara.' },
      { item: 'Aglio Olio', price: '₹499', description: 'Garlic, olive oil, herbs, parmesan.' },
      { item: 'Add-ons', price: 'Chicken: ₹50 , Egg: ₹30 , Cheese: ₹20' },
    ],
    columns: ['item','price','description']
  },
  {
    id: 'food-burgers',
    title: 'Burgers, Sandwiches & Paninis',
    items: [
      { category: 'Burgers', item: 'Falafel', price: '₹249', description: 'Sesame bun, veggies, falafel, tzatziki.' },
      { category: 'Burgers', item: 'Cottage Cheese Patty', price: '₹399', description: 'Sesame bun, cottage cheese patty, cheese slice.' },
      { category: 'Burgers', item: 'Chicken and Cheese', price: '₹399', description: 'Onion-flavoured chicken patty, cheese.' },
      { category: 'Sandwiches', item: 'Spinach & Mushroom', price: '₹269', description: 'Multi-grain bread, creamy mushroom & spinach.' },
      { category: 'Sandwiches', item: 'Chicken & Cheese', price: '₹249', description: 'Seasoned chicken breast, mayo, cheese.' },
      { category: 'Panini', item: 'Pesto Egg White Cheese', price: '₹389', description: 'Panini bread, pesto, egg white.' },
      { category: 'Panini', item: 'Chicken Parmesan', price: '₹399', description: 'Crumb-fried chicken, marinara, pesto, parmesan.' },
    ],
    columns: ['category','item','price','description']
  },
  {
    id: 'food-desserts',
    title: 'Desserts',
    items: [
      { item: 'Pineapple Upside Down Cake', price: '₹199' },
      { item: 'Blueberry Cheesecake', price: '₹285' },
      { item: 'Strawberry Cheesecake', price: '₹285' },
      { item: 'Banana Loaf', price: '₹169' },
      { item: 'Tres Leches', price: '₹285' },
      { item: 'Intense Chocolate Cake', price: '₹275' },
      { item: 'Lamington', price: '₹210' },
      { item: 'Brownie', price: '₹179' },
      { item: 'Biscoff Eclair', price: '₹210' },
      { item: 'French Biscuit Cake', price: '₹239' },
      { item: 'Mango Pudding', price: '₹295' },
      { item: 'Serradura', price: '₹239' },
      { item: 'Red Velvet Cupcakes', price: '₹129' },
    ],
    columns: ['item','price']
  }
];

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h3 className="font-serif text-3xl md:text-4xl text-[#4a3728] font-normal tracking-tight animate-fade-in-up">
        {title}
      </h3>
      {subtitle && (
        <p className="text-[#8b7355] text-sm md:text-base mt-1 italic animate-fade-in-up animation-delay-200">{subtitle}</p>
      )}
      <div className="mt-4 w-16 border-t-2 border-[#b5ad9a]" />
    </div>
  )
}

function Table({ items, columns }: { items: MenuItem[]; columns: NonNullable<MenuSection['columns']> }) {
  return (
    <>
      {/* Desktop and tablets */}
      <div className="hidden md:block overflow-hidden rounded-2xl shadow-sm border border-[#eee] bg-white/80 backdrop-blur-sm animate-fade-in-up animation-delay-200">
        <table className="w-full">
          <thead>
            <tr className="bg-[#faf6ea] text-left">
              {columns.map((c) => (
                <th key={c} className="px-6 py-3 text-sm tracking-wide text-[#8b7355] font-medium">
                  {c === 'item' ? 'Item' : c === 'price' ? 'Price' : c === 'description' ? 'Description' : 'Category'}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => (
              <tr key={row.item + idx} className={idx % 2 ? 'bg-white' : 'bg-[#FFFEFC]'}>
                {columns.map((c) => (
                  <td key={c} className={`px-6 py-4 text-[#6b5444] ${c==='price' ? 'whitespace-nowrap text-right' : c==='item' ? 'font-medium text-[#4a3728]' : 'align-top'}`}>
                    {c === 'category' ? row.category : c === 'description' ? row.description : c === 'item' ? row.item : row.price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3 animate-fade-in-up animation-delay-200">
        {items.map((row, idx) => (
          <div key={row.item + idx} className="rounded-2xl border border-[#eee] bg-white/90 shadow-sm px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {row.category && (
                    <span className="text-[10px] uppercase tracking-[0.18em] bg-[#faf6ea] text-[#8b7355] px-2 py-1 rounded-full">
                      {row.category}
                    </span>
                  )}
                </div>
                <div className="text-[#4a3728] font-medium mt-1 break-words">{row.item}</div>
                {row.description && (
                  <div className="text-[#6b5444] text-xs mt-1 leading-relaxed">{row.description}</div>
                )}
              </div>
              <div className="text-[#4a3728] font-semibold whitespace-nowrap ml-2">{row.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function Menu() {
  const groups = [
    { id: 'beverages', title: 'Beverages', color: '#6b5444' },
    { id: 'food', title: 'Food Menu', color: '#99ad83' },
  ];

  const groupToSections: Record<string, MenuSection[]> = {
    beverages: sections.filter(s => s.id.startsWith('beverages-')),
    food: sections.filter(s => s.id.startsWith('food-')),
  };

  const [activeSection, setActiveSection] = React.useState<MenuSection | null>(null)
  const [showModal, setShowModal] = React.useState(false)
  const [showCategorySheet, setShowCategorySheet] = React.useState(false)

  const openModal = (section: MenuSection) => {
    setActiveSection(section)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setTimeout(() => setActiveSection(null), 250)
  }

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = showModal ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [showModal])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f1ed] to-[#f0ebe5] px-4 pb-24 pt-28 relative overflow-hidden">
      <SideNav />
      {/* Subtle background stains */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#8b7355] to-transparent rounded-full blur-2xl vintage-stain"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-[#6b5444] to-transparent rounded-full blur-2xl vintage-stain"></div>
      </div>

      {/* Page header */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-5xl md:text-6xl text-[#4a3728] tracking-[0.12em] font-light animate-fade-in-up" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Our Menu</h1>
        <p className="text-[#a89c8a] italic font-light mt-4 animate-fade-in-up animation-delay-400">Where nature meets you and you meet experience</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-[220px,1fr] gap-8">
        {/* Sticky sidebar */}
        <aside className="hidden md:block sticky top-24 h-max bg-white/70 border border-[#eee] rounded-2xl shadow-sm p-4 animate-fade-in-up">
          {groups.map(g => (
            <div key={g.id} className="mb-4">
              <div className="text-sm uppercase tracking-[0.18em] text-[#8b7355] mb-2" style={{ color: g.color }}>{g.title}</div>
              <div className="flex flex-col gap-1">
                {groupToSections[g.id].map(s => (
                  <button key={s.id} onClick={() => openModal(s)} className="text-left text-[#4a3728]/80 hover:text-[#4a3728] px-3 py-2 rounded-lg hover:bg-[#faf6ea] transition-colors">
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <div className="space-y-14">
          {/* Beverages group title */}
          <div className="rounded-2xl p-6 bg-[#FDFCFA] border border-[#f0eadd] shadow-sm animate-fade-in-up">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full" style={{ background: '#6b5444' }}></span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#4a3728]">Beverages</h2>
            </div>
            <p className="text-[#8b7355] text-sm">Hot & cold signatures, teas and more</p>
          </div>

          {groupToSections['beverages'].map(sec => (
            <section key={sec.id} id={sec.id} className="scroll-mt-28">
              <SectionHeader title={sec.title} subtitle={sec.subtitle} />
              <Table items={sec.items} columns={sec.columns || ['item','price']} />
            </section>
          ))}

          {/* Food group title */}
          <div className="rounded-2xl p-6 bg-[#F6F5F3] border border-[#eae8e3] shadow-sm animate-fade-in-up">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full" style={{ background: '#99ad83' }}></span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#4a3728]">Food Menu</h2>
            </div>
            <p className="text-[#8b7355] text-sm">From soups to pizzas, crafted fresh</p>
          </div>

          {groupToSections['food'].map(sec => (
            <section key={sec.id} id={sec.id} className="scroll-mt-28">
              <SectionHeader title={sec.title} />
              <Table items={sec.items} columns={sec.columns || ['item','price']} />
            </section>
          ))}
        </div>
      </div>

      {/* Modal overlay for section details */}
      {showModal && activeSection && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-3 md:p-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-100" onClick={closeModal}></div>

          {/* Modal content */}
          <div className="relative w-full max-w-3xl bg-gradient-to-br from-[#FFFEFC] to-white border border-[#eee] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="px-5 md:px-6 py-4 bg-[#faf6ea] border-b border-[#eee] flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#8b7355]">Category</div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#4a3728]">{activeSection.title}</h3>
              </div>
              <button onClick={closeModal} aria-label="Close" className="w-9 h-9 rounded-full bg-white text-[#6b5444] border border-[#eee] hover:shadow-md transition-shadow flex items-center justify-center">
                ×
              </button>
            </div>

            {/* Body */}
            <div className="p-4 md:p-6">
              <Table items={activeSection.items} columns={activeSection.columns || ['item','price']} />
            </div>
          </div>
        </div>
      )}

      {/* Mobile category bottom sheet */}
      <div className="md:hidden">
        {/* Floating button */}
        <button
          onClick={() => setShowCategorySheet(true)}
          className="fixed top-20 right-4 z-40 bg-[#6b5444] text-white px-5 py-3 rounded-full shadow-2xl button-glow"
          aria-label="Browse categories"
        >
          Browse Menu
        </button>

        {showCategorySheet && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setShowCategorySheet(false)}></div>
            <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-2xl border-t border-[#eee] shadow-2xl p-4 max-h-[70vh] overflow-y-auto animate-fade-in-up">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs uppercase tracking-[0.18em] text-[#8b7355]">All Categories</div>
                <button onClick={() => setShowCategorySheet(false)} aria-label="Close" className="w-9 h-9 rounded-full bg-[#faf6ea] text-[#6b5444] border border-[#eee]">×</button>
              </div>
              {groups.map(g => (
                <div key={g.id} className="mb-4">
                  <div className="text-sm font-semibold text-[#4a3728] mb-2">{g.title}</div>
                  <div className="grid grid-cols-1 gap-2">
                    {groupToSections[g.id].map(s => (
                      <button
                        key={s.id}
                        onClick={() => { setShowCategorySheet(false); openModal(s); }}
                        className="text-left px-3 py-3 rounded-xl bg-[#FFFEFC] border border-[#eee] hover:bg-[#faf6ea] text-[#4a3728]/90"
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu


