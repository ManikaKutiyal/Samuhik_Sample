import { motion } from "framer-motion";
import { Crown, Check } from "lucide-react";

const benefits = [
  "15% off on all products",
  "Free delivery on orders above ₹500",
  "Early access to new products",
  "Exclusive member-only deals",
];

const MembershipBanner = () => {
  return (
    <section className="container mx-auto py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r 
from-[hsl(71_56%_47%)] 
via-[hsl(71_56%_47%)] 
to-[hsl(152_40%_35%)]
 p-8 md:p-12"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
<div className="flex items-center gap-3 mb-4">
  <Crown className="w-8 h-8 text-[hsl(45_70%_50%)]" />

  <span className="text-sm font-bold uppercase tracking-wider 
  bg-[hsl(45_70%_50%/0.2)] px-3 py-1 rounded-full">
    Co-Op Membership
  </span>
</div>   {/* 👈 THIS WAS MISSING */}

<h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
  Become a Co-Op Member Today!
</h2>

<p className="text-[hsl(151_80%_95%/0.8)] mb-6">
  Join our community of health-conscious individuals and enjoy exclusive
  benefits on all organic products.
</p>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-5 h-5 rounded-full 
                  bg-[hsl(45_70%_50%)]
                  flex items-center justify-center">

                  <Check size={12} className="text-[hsl(71_56%_47%)]" />
                  </span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
            <motion.button
              className="bg-[hsl(166_76%_96%)] 
              text-[hsl(173_80%_40%)]
              px-8 py-3 rounded-full font-bold
              hover:shadow-xl transition-shadow"
            >
              Join Now - ₹199
            </motion.button>

            <motion.button
              className="border-2 border-[hsl(151_80%_95%)]
              text-[hsl(151_80%_95%)]
              px-8 py-3 rounded-full font-bold
              hover:bg-[hsl(151_80%_95%/0.1)]"
            >
              Learn More
            </motion.button>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80"
                alt="Fresh Organic Produce"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-card text-foreground p-4 rounded-xl shadow-xl">
                <div className="text-2xl font-bold text-accent">15%</div>
                <div className="text-sm text-muted-foreground">Savings</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MembershipBanner;
