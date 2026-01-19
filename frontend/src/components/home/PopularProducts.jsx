import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

const tabs = [
  "All",
  "Staples",
  "Cold Pressed Oils",
  "Snacks & Edibles",
  "Home Essentials",
  "Beverages",
];

const products = {
  All: [
    { name: "Organic Rajmudi Rice", price: 152, memberPrice: 129.2, image: "https://organicmandya.com/cdn/shop/files/Rajmudi_Rice_1kg_F_2.jpg?v=1757083700&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/5_Kg_Back_side.png?v=1757090124&width=1000", variants: ["1kg", "5kg"] },
    { name: "A2 Desi Cow Ghee", price: 625.5, originalPrice: 695, memberPrice: 591.1, image: "https://organicmandya.com/cdn/shop/files/Ghee_275_PI_48b3900b-1b6c-443d-8701-0ffbcdefe679.png?v=1757071330&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Artboard_1_2.png?v=1757071333&width=1000", variants: ["275ml", "475ml", "700ml"] },
    { name: "Organic Tur/Toor Dal", price: 182, memberPrice: 154.7, image: "https://organicmandya.com/cdn/shop/files/Tur_Dal_7ecb828b-07df-421f-a1be-38676818a051.jpg?v=1757084178&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside.jpg?v=1757090114&width=1000", variants: ["500g", "1Kg"] },
    { name: "Cold Pressed Groundnut Oil", price: 494, originalPrice: 500, memberPrice: 419.9, image: "https://organicmandya.com/cdn/shop/files/Groundnut_Oil_V2_v1_1.jpg?v=1757074168&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Groundnut_1_8b7bc978-d72d-4a7e-a0c9-6f037ad9a532.png?v=1757074168&width=1000", variants: ["1L", "5L"] },
    { name: "Organic Groundnuts", price: 185, memberPrice: 157.25, image: "https://organicmandya.com/cdn/shop/files/Groundnut_1.jpg?v=1757080225&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside_587486fa-649a-45ee-8f6c-85d5b043ae4c.jpg?v=1757090113&width=1000", variants: ["500g", "1Kg"] },
    { name: "Organic Moong Dal", price: 162, memberPrice: 137.7, image: "https://organicmandya.com/cdn/shop/files/Moong_Dal_44e7d4a8-29e8-41fe-8246-c6b216f4cad6.jpg?v=1757083452&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside_587486fa-649a-45ee-8f6c-85d5b043ae4c.jpg?v=1757090113&width=1000", variants: ["500g", "1Kg"] },
    { name: "Cold Pressed Coconut Oil", price: 110, memberPrice: 93.5, image: "https://organicmandya.com/cdn/shop/files/Coconut_Oil_V2_r2_568c7721-800b-480b-a633-24499d2fdcd4.jpg?v=1720680463&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Coconut_1_c4ffce54-7cbc-447c-9eea-e41ec02dd094.png?v=1720680463&width=1000", variants: ["200ml", "500ml", "1L"] },
    { name: "Organic Green Gram", price: 182, memberPrice: 154.7, image: "https://organicmandya.com/cdn/shop/files/Green_Gram.jpg?v=1757080004&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside.jpg?v=1757090114&width=1000", variants: ["500g", "1Kg"] },
  ],
  Staples: [
    { name: "Organic Rajmudi Rice", price: 152, memberPrice: 129.2, image: "https://organicmandya.com/cdn/shop/files/Rajmudi_Rice_1kg_F_2.jpg?v=1757083700&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/5_Kg_Back_side.png?v=1757090124&width=1000", variants: ["1kg", "5kg"] },
    { name: "Organic Moong Dal", price: 162, memberPrice: 137.7, image: "https://organicmandya.com/cdn/shop/files/Moong_Dal_44e7d4a8-29e8-41fe-8246-c6b216f4cad6.jpg?v=1757083452&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside_587486fa-649a-45ee-8f6c-85d5b043ae4c.jpg?v=1757090113&width=1000", variants: ["500g", "1Kg"] },
    { name: "Organic Groundnuts", price: 185, memberPrice: 157.25, image: "https://organicmandya.com/cdn/shop/files/Groundnut_1.jpg?v=1757080225&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside_587486fa-649a-45ee-8f6c-85d5b043ae4c.jpg?v=1757090113&width=1000", variants: ["500g", "1Kg"] },
    { name: "Organic Tur/Toor Dal", price: 182, memberPrice: 154.7, image: "https://organicmandya.com/cdn/shop/files/Tur_Dal_7ecb828b-07df-421f-a1be-38676818a051.jpg?v=1757084178&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside.jpg?v=1757090114&width=1000", variants: ["500g", "1Kg"] },
  ],
  "Cold Pressed Oils": [
    { name: "Cold Pressed Groundnut Oil", price: 494, originalPrice: 500, memberPrice: 419.9, image: "https://organicmandya.com/cdn/shop/files/Groundnut_Oil_V2_v1_1.jpg?v=1757074168&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Groundnut_1_8b7bc978-d72d-4a7e-a0c9-6f037ad9a532.png?v=1757074168&width=1000", variants: ["1L", "5L"] },
    { name: "Cold Pressed Coconut Oil", price: 110, memberPrice: 93.5, image: "https://organicmandya.com/cdn/shop/files/Coconut_Oil_V2_r2_568c7721-800b-480b-a633-24499d2fdcd4.jpg?v=1720680463&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Coconut_1_c4ffce54-7cbc-447c-9eea-e41ec02dd094.png?v=1720680463&width=1000", variants: ["200ml", "500ml", "1L"] },
    { name: "Organic Sesame Oil", price: 110, memberPrice: 93.5, image: "https://organicmandya.com/cdn/shop/files/Sesame_Oil_1L_V1_R1.jpg?v=1757090776&width=1000",hoverImage: "https://organicmandya.com/cdn/shop/files/SesameOil1.png?v=1757090784&width=1000", variants: ["200ml", "500ml", "1L"] },
    { name: "Virgin Coconut Oil - Cold Pressed", price: 120, memberPrice: 102, image: "https://organicmandya.com/cdn/shop/files/Virgin_Coconut_Oil_c866a2c6-29cd-4789-a443-2574d8c8929b.jpg?v=1757090861&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/EVCoconutOil1.png?v=1757090866&width=1000", variants: ["200ml", "500ml"] },
  ],
  "Snacks & Edibles": [
    { name: "Millet Murukku", price: 85, memberPrice: 72.25, image: "https://organicmandya.com/cdn/shop/files/Snack_-_Muruku_front.jpg?v=1757075666&width=1000", hoverImage:"https://organicmandya.com/cdn/shop/files/Snack_-_Muruku_Back.jpg?v=1757075683&width=1000", variants: ["500g", "1Kg"] },
    { name: "Kodbale", price: 125, memberPrice: 80.75, image: "https://organicmandya.com/cdn/shop/files/Kodbale.jpg?v=1757074406&width=1000", hoverImage:"https://organicmandya.com/cdn/shop/files/Kodbale_Back.jpg?v=1757074411&width=1000", variants: ["180g"] },
  ],
  "Home Essentials": [
    { name: "Agarbatti - 7 Herbs", price: 145, memberPrice: 153, image: "https://organicmandya.com/cdn/shop/files/SevenHerbs.jpg?v=1757071662&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Backside_1.jpg?v=1757071669&width=1000", variants: ["500g", "1Kg"] },
  ],
  Beverages: [
    { name: "Organic Special Ragi Malt", price: 170, memberPrice: 212.5, image: "https://organicmandya.com/cdn/shop/files/Special_Ragi_Malt_Front.png?v=1757084101&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Special_Ragi_Malt_Back.png?v=1757084106&width=1000", variants: ["200g", "500g"] },
  ],
};


const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState("All");

  const currentProducts = products[activeTab] || products.All;

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
        
        <h2 className="section-title text-xl sm:text-2xl lg:text-3xl">
          Popular Products
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-item whitespace-nowrap px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab 
                ? "bg-brand-green text-white shadow-md shadow-brand-green/20" 
                : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-4 sm:gap-6
          "
        >
          {currentProducts.map((product, index) => (
            <motion.div
              key={`${activeTab}-${product.name}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default PopularProducts;
