import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jayanthi",
    quote:
      "I love the consistency. I always get the products from Organic Mandya as the quality is consistent. It's been the same for so many years. Many people tell me it's all the same, whether organic or not. But, I feel the difference because I use it myself.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "Kumar",
    quote:
      "Usually we don't come here. But when we came to know that all the products are organic and have no chemicals, we started to come here. The fruits and vegetables are really good. Moreover, this helps the local farmers a lot.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "D.V.R. Seshadri",
    role: "Professor of Practice, Indian School of Business",
    quote:
      "My wife switched overnight to an organic, whole food, plant-based diet, sourced from Organic Mandya. All these changes, especially related to food resulted in total stoppage of all medications. Thank you, Organic Mandya.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    name: "Padma",
    quote:
      "Actually, I found the Organic Mandya store some six or seven years ago when I went to Mysore with my family. Since that day, I have come here frequently. Their ghee, I love it. I also buy oil, pulses and millet products from here.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
  {
    name: "Dipti",
    quote:
      "One of my friends, she's a gym-freak and into high protein diet. She asked me to use Organic Mandya products. It's very organic and wholesome in nature. My favorite product is high protein paneer because it's made of A2 milk.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 md:py-20 bg-[#edfdf1] shadow-xl">
      <div className="container mx-auto">
        <h2 className="text-center mb-12 text-3xl md:text-4xl font-bold text-[hsl(0_0%_9%)]">
          Testimonials
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="
                bg-[hsl(0_0%_98%)]
                border border-[hsl(0_0%_83%)]
                rounded-2xl
                p-6 md:p-10
                text-center
                shadow-md
              "
            >
              <Quote className="w-12 h-12 mx-auto mb-6 text-[hsl(71_56%_47%)]/20" />

              <p className="text-lg md:text-xl italic leading-relaxed mb-8 text-[hsl(0_0%_9%)]">
                “{testimonials[currentIndex].quote}”
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="
                    w-16 h-16 rounded-full object-cover mb-4
                    border-4 border-[hsl(71_56%_47%)]/20
                  "
                />

                <h4 className="font-bold text-lg text-[hsl(0_0%_9%)]">
                  {testimonials[currentIndex].name}
                </h4>

                {testimonials[currentIndex].role && (
                  <p className="text-sm mt-1 text-[hsl(0_0%_9%)]/60">
                    {testimonials[currentIndex].role}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prev}
            className="
              absolute left-0 md:-left-16 top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full
              bg-[hsl(0_0%_98%)]
              border border-[hsl(0_0%_83%)]
              shadow-lg
              flex items-center justify-center
              hover:bg-[hsl(0_0%_89%)]
              transition-colors
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="
              absolute right-0 md:-right-16 top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full
              bg-[hsl(0_0%_98%)]
              border border-[hsl(0_0%_83%)]
              shadow-lg
              flex items-center justify-center
              hover:bg-[hsl(0_0%_89%)]
              transition-colors
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-[hsl(71_56%_47%)]"
                  : "w-2 bg-[hsl(0_0%_83%)] hover:bg-[hsl(0_0%_9%)]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
