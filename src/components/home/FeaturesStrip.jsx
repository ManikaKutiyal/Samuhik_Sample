import { motion } from "framer-motion";
import { Truck, Leaf, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders above ₹500",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Certified products",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "All cards accepted",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support",
  },
];

const FeaturesStrip = () => {
  return (
    <section className="border-y border-[hsl(0_0%_83%)] bg-[hsl(0_0%_98%)]">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div
                className="w-12 h-12 rounded-full 
                bg-[hsl(71_56%_47%/0.1)] 
                flex items-center justify-center flex-shrink-0"
              >
                <feature.icon
                  className="w-6 h-6 text-[hsl(71_56%_47%)]"
                />
              </div>

              <div>
                <h4 className="font-semibold text-[hsl(0_0%_9%)]">
                  {feature.title}
                </h4>

                <p className="text-sm text-[hsl(0_0%_9%/0.6)]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
