import { motion } from "framer-motion";

const banners = [
  {
    title: "Natural, chemical-free cereals to start your day the organic way",
    cta: "Order Now",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    gradient: "from-amber-100 to-orange-100",
  },
  {
    title: "Fuel your day with premium quality dry fruits and seeds",
    cta: "Order Now",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&q=80",
    gradient: "from-yellow-100 to-amber-100",
  },
  {
    title: "Organic, cold pressed cooking oils to nourish your health",
    cta: "Order Now",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
    gradient: "from-lime-100 to-green-100",
  },
];

const PromoBanners = () => {
  return (
    <section className="container mx-auto py-8 md:py-12">
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {banners.map((banner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${banner.gradient} p-6 min-h-[200px] group cursor-pointer`}
          >
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              <h3 className="text-lg font-serif font-semibold text-foreground leading-tight max-w-[70%]">
                {banner.title}
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
className="self-start mt-4 bg-brand-green text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition"
              >
                {banner.cta}
              </motion.button>
            </div>

            {/* Image */}
            <div className="absolute right-0 bottom-0 w-32 h-32 md:w-40 md:h-40">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover rounded-tl-3xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-2 right-2 w-16 h-16 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;
