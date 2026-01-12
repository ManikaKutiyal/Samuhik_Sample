import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Grid3X3, List } from "lucide-react";
import ProductCard from "../components/home/ProductCard";

const categories = [
  "Dals & Pulses", "Dry Fruits", "Dairy", "Beverages", "Edibles",
  "Spices & Masalas", "Home Essential", "Personal Care", "Millets",
  "Oils", "Staples", "Snacks",
];

const allProducts = [
    {id: "1", name: "Organic Rajmudi Rice", price: 152, memberPrice: 129.2, image: "https://organicmandya.com/cdn/shop/files/Rajmudi_Rice_1kg_F_2.jpg?v=1757083700&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/5_Kg_Back_side.png?v=1757090124&width=1000", variants: ["1kg", "5kg"] },
  { id: "2",name: "A2 Desi Cow Ghee", price: 625.5, originalPrice: 695, memberPrice: 591.1, image: "https://organicmandya.com/cdn/shop/files/Ghee_275_PI_48b3900b-1b6c-443d-8701-0ffbcdefe679.png?v=1757071330&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Artboard_1_2.png?v=1757071333&width=1000", variants: ["275ml", "475ml", "700ml"] },
    { name: "Organic Tur/Toor Dal", price: 182, memberPrice: 154.7, image: "https://organicmandya.com/cdn/shop/files/Tur_Dal_7ecb828b-07df-421f-a1be-38676818a051.jpg?v=1757084178&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside.jpg?v=1757090114&width=1000", variants: ["500g", "1Kg"] },
    { name: "Cold Pressed Groundnut Oil", price: 494, originalPrice: 500, memberPrice: 419.9, image: "https://organicmandya.com/cdn/shop/files/Groundnut_Oil_V2_v1_1.jpg?v=1757074168&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Groundnut_1_8b7bc978-d72d-4a7e-a0c9-6f037ad9a532.png?v=1757074168&width=1000", variants: ["1L", "5L"] },
    { name: "Organic Groundnuts", price: 185, memberPrice: 157.25, image: "https://organicmandya.com/cdn/shop/files/Groundnut_1.jpg?v=1757080225&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside_587486fa-649a-45ee-8f6c-85d5b043ae4c.jpg?v=1757090113&width=1000", variants: ["500g", "1Kg"] },
    { name: "Organic Moong Dal", price: 162, memberPrice: 137.7, image: "https://organicmandya.com/cdn/shop/files/Moong_Dal_44e7d4a8-29e8-41fe-8246-c6b216f4cad6.jpg?v=1757083452&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside_587486fa-649a-45ee-8f6c-85d5b043ae4c.jpg?v=1757090113&width=1000", variants: ["500g", "1Kg"] },
    { name: "Cold Pressed Coconut Oil", price: 110, memberPrice: 93.5, image: "https://organicmandya.com/cdn/shop/files/Coconut_Oil_V2_r2_568c7721-800b-480b-a633-24499d2fdcd4.jpg?v=1720680463&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/Coconut_1_c4ffce54-7cbc-447c-9eea-e41ec02dd094.png?v=1720680463&width=1000", variants: ["200ml", "500ml", "1L"] },
    { name: "Organic Green Gram", price: 182, memberPrice: 154.7, image: "https://organicmandya.com/cdn/shop/files/Green_Gram.jpg?v=1757080004&width=1000", hoverImage: "https://organicmandya.com/cdn/shop/files/500g_Backside.jpg?v=1757090114&width=1000", variants: ["500g", "1Kg"] },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("alphabetically");
  const [showCount, setShowCount] = useState("50");

  // Logic to simulate filtering based on category index
  const filteredProducts = selectedCategory
    ? allProducts.filter((_, index) => index % 3 === categories.indexOf(selectedCategory) % 3)
    : allProducts;

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto py-8 px-4">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          <Link to="/" className="flex items-center gap-1 hover:text-brand-green">
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={12} />
          <span>Collections</span>
          <ChevronRight size={12} />
          <span className="text-gray-800">Products</span>
        </nav>

        <motion.h1 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-8"
        >
          Organic Products
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Categories (Visible first on Mobile) */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-brand-light rounded-[32px] p-8 sticky top-24 border border-brand-green/10">
              <h2 className="text-xl font-serif font-bold text-gray-800 mb-6 border-b border-brand-green/10 pb-4">
                Category
              </h2>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left py-2 px-4 rounded-xl text-sm font-bold transition-all ${
                      !selectedCategory ? "bg-brand-green text-white shadow-md" : "text-gray-500 hover:bg-white"
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left py-2 px-4 rounded-xl text-sm font-bold transition-all ${
                        selectedCategory === category ? "bg-brand-green text-white shadow-md" : "text-gray-500 hover:bg-white"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <p className="text-sm font-bold text-gray-400">
                Showing <span className="text-gray-800">{filteredProducts.length}</span> products
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Grid3X3 size={18} className="text-gray-400" />
                  <select 
                    value={showCount} 
                    onChange={(e) => setShowCount(e.target.value)}
                    className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-xs font-bold outline-none focus:ring-1 focus:ring-brand-green"
                  >
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <List size={18} className="text-gray-400" />
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-xs font-bold outline-none focus:ring-1 focus:ring-brand-green"
                  >
                    <option value="alphabetically">Alphabetically, A-Z</option>
                    <option value="alphabetically-desc">Alphabetically, Z-A</option>
                    <option value="price-low">Price, low to high</option>
                    <option value="price-high">Price, high to low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Products;