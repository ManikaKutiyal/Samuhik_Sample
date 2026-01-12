import { motion } from "framer-motion";

const categories = [
  { name: "Combo & Deals", image: "https://organictattva.com/cdn/shop/files/Deal_800x.gif?v=1758890863", highlight: true },
  { name: "Dry Fruits & Nuts", image: "https://organictattva.com/cdn/shop/files/Dry_Fruit_800x.gif?v=1758890862" },
  { name: "Flour / Atta & Suji", image: "https://organictattva.com/cdn/shop/files/flour_800x.gif?v=1758890862"},
  { name: "Health Foods", image: "https://organictattva.com/cdn/shop/files/Healthy_800x.gif?v=1758890862" },
  { name: "Pulses & Dal", image: "https://organictattva.com/cdn/shop/files/Dal_800x.gif?v=1758890863" },
  { name: "Oils & Ghee", image: "https://organictattva.com/cdn/shop/files/Oil_and_ghee_800x.gif?v=1758891622" },
  { name: "Ready To Cook", image: "https://organictattva.com/cdn/shop/files/Ready_to_cook_800x.gif?v=1758890863" },
  { name: "Rice & Rice Products", image: "https://organictattva.com/cdn/shop/files/Rice_800x.gif?v=1758890862" },
  { name: "Salts & Sugar", image: "https://organictattva.com/cdn/shop/files/Salt_and_Sugar_800x.gif?v=1758890862" },
  { name: "Spices & Masalas", image: "https://organictattva.com/cdn/shop/files/Spices_800x.gif?v=1758890863" },
];

const CategorySection = () => {
  // Duplicate the categories to create the seamless loop effect
  const marqueeList = [...categories, ...categories];

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
          Shop By Category
        </h2>
      </div>

      <div className="relative flex">
        {/* The Scrolling Wrapper */}
        <div className="animate-infinite-scroll flex items-center">
          {marqueeList.map((category, index) => (
            <div
              key={`${category.name}-${index}`}
              className="flex flex-col items-center gap-4 group cursor-pointer px-8 md:px-12 min-w-[150px] md:min-w-[180px]"
            >
              <div className="relative">
                {category.highlight && (
                  <span className="absolute -top-1 -right-1 z-10 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg animate-bounce">
                    HOT
                  </span>
                )}
                
                {/* Circle Container */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-50 flex items-center justify-center border-2 border-transparent group-hover:border-brand-green group-hover:bg-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <span className="text-[11px] md:text-xs text-center font-black uppercase tracking-wider text-gray-500 group-hover:text-brand-green transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;