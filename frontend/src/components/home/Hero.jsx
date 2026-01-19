import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    subtitle: "Say Hello to Pure Chocolate Bliss",
    title:
      "Now in irresistible flavours — Almonds, Hazelnut, Cranberry, Coffee and Jowar Crisp",
    cta: "Buy Now",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80",
  },
  {
    id: 2,
    subtitle: "Farm Fresh A2 Dairy",
    title:
      "High protein paneer made from pure A2 desi cow milk — nutritious and delicious",
    cta: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&q=80",
  },
  {
    id: 3,
    subtitle: "Cold Pressed Oils",
    title:
      "Traditional wooden pressed oils — retaining natural goodness and authentic taste",
    cta: "Explore",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
  },
  {
    id: 4,
    subtitle: "Become a Co-Op Member",
    title:
      "Get exclusive discounts up to 15% off on all organic products — join today!",
    cta: "Join Now",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative container mx-auto my-6">
      <div className="relative overflow-hidden rounded-[0.75rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[400px] md:min-h-[450px]
              bg-gradient-to-br
              from-[hsl(38_40%_92%)]
              to-[hsl(35_35%_88%)]"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl italic text-[hsl(0_0%_9%)]/80">
                  {slides[currentSlide].subtitle}
                </p>

                <h2 className="text-2xl md:text-4xl font-serif font-semibold text-[hsl(0_0%_9%)] leading-tight">
                  {slides[currentSlide].title}
                </h2>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    inline-flex items-center justify-center
                    rounded-full px-6 py-3
                    bg-[hsl(71_56%_47%)]
                    text-[hsl(151_80%_95%)]
                    font-medium
                    shadow-md
                    transition-all
                    hover:shadow-lg hover:-translate-y-0.5
                  "
                >
                  {slides[currentSlide].cta}
                </motion.button>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative h-64 md:h-80"
              >
                <img
                  src={slides[currentSlide].image}
                  alt=""
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />

                <div className="
                  absolute top-4 right-4
                  rounded-full px-4 py-1 text-sm font-bold
                  bg-[hsl(152_45%_25%)]
                  text-white
                  animate-pulse
                ">
                  NEWLY LAUNCHED
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={() =>
            setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)
          }
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full
            bg-[hsl(0_0%_98%)]/80 backdrop-blur
            shadow-md
            flex items-center justify-center
            hover:bg-[hsl(0_0%_98%)]
          "
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() =>
            setCurrentSlide((p) => (p + 1) % slides.length)
          }
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full
            bg-[hsl(0_0%_98%)]/80 backdrop-blur
            shadow-md
            flex items-center justify-center
            hover:bg-[hsl(0_0%_98%)]
          "
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "w-8 bg-[hsl(71_56%_47%)]"
                : "w-2.5 bg-[hsl(0_0%_83%)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
