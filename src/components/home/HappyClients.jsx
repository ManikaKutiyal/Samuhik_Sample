import { motion } from "framer-motion";
import { Leaf, Factory, Recycle, Heart, TreeDeciduous, ShieldCheck } from "lucide-react";

const certifications = [
  { icon: Factory, title: "LEED Certified Facilities" },
  { icon: Heart, title: "Made in India" },
  { icon: Recycle, title: "Eco-Friendly" },
  { icon: ShieldCheck, title: "Ethical Practices" },
  { icon: TreeDeciduous, title: "100% Plant-Based" },
  { icon: Leaf, title: "Non-GMO & Organic" },
];
// font
const clients = [
  { name: "Organic Farmers Association", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop&auto=format" },
  { name: "Healthy Living Co", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop&auto=format" },
  { name: "Farm Fresh Network", logo: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=150&h=80&fit=crop&auto=format" },
  { name: "Green Earth Initiative", logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&h=80&fit=crop&auto=format" },
  { name: "Natural Products Inc", logo: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=150&h=80&fit=crop&auto=format" },
  { name: "Wellness Partners", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=80&fit=crop&auto=format" },
  { name: "Sustainable Farms", logo: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=150&h=80&fit=crop&auto=format" },
  { name: "Ayurveda Solutions", logo: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=150&h=80&fit=crop&auto=format" }
];

const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "500+", label: "Products" },
  { value: "100+", label: "Partner Farmers" },
  { value: "25+", label: "Store Locations" }
];

const HappyClients = () => {
  const duplicatedClients = [...clients, ...clients];
  const duplicatedCerts = [...certifications, ...certifications, ...certifications];

  return (
    <section className="py-12 md:py-20 bg-[hsl(0_0%_98%)] overflow-hidden">

      <div className="container mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-4"
        >
          Our Happy Clients
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-[hsl(0_0%_9%/0.6)] mb-12 max-w-2xl mx-auto"
        >
          Trusted by thousands of health-conscious families across India
        </motion.p>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                text-center p-4 md:p-6 rounded-xl
                bg-[hsl(0_0%_96%)]
                shadow-sm border border-[hsl(0_0%_83%)]
              "
            >
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-[hsl(71_56%_47%)] mb-2">
                {stat.value}
              </h3>

              <p className="text-sm md:text-base text-[hsl(0_0%_9%/0.6)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative mb-16">

          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 
          bg-gradient-to-r from-[hsl(0_0%_98%)] to-transparent z-10" />

          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 
          bg-gradient-to-l from-[hsl(0_0%_98%)] to-transparent z-10" />

          {/* Row 1 */}
          <div className="flex overflow-hidden mb-6">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{ x: [0, -50 * clients.length * 2] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="
                    flex-shrink-0 w-32 md:w-40 h-20 md:h-24
                    bg-[hsl(0_0%_96%)]
                    rounded-lg border border-[hsl(0_0%_83%)]
                    flex items-center justify-center p-4
                    hover:shadow-md transition-shadow
                  "
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{ x: [-50 * clients.length * 2, 0] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="
                    flex-shrink-0 w-32 md:w-40 h-20 md:h-24
                    bg-[hsl(0_0%_96%)]
                    rounded-lg border border-[hsl(0_0%_83%)]
                    flex items-center justify-center p-4
                    hover:shadow-md transition-shadow
                  "
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* CERTIFICATION STRIP */}
      <div className="
        bg-[hsl(71_56%_47%/0.05)]
        border-y border-[hsl(0_0%_83%)]
        py-6 overflow-hidden
      ">

        <div className="relative">

          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24
          bg-gradient-to-r from-[hsl(71_56%_47%/0.05)] to-transparent z-10" />

          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24
          bg-gradient-to-l from-[hsl(71_56%_47%/0.05)] to-transparent z-10" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-16"
              animate={{ x: [0, -200 * certifications.length] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
            >
              {duplicatedCerts.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-4"
                >
                  <div
                    className="
                      w-12 h-12 md:w-14 md:h-14 rounded-full
                      bg-[hsl(71_56%_47%/0.1)]
                      flex items-center justify-center
                    "
                  >
                    <cert.icon
                      className="w-6 h-6 md:w-7 md:h-7
                      text-[hsl(71_56%_47%)]"
                    />
                  </div>

                  <span className="
                    text-sm md:text-base font-medium
                    text-[hsl(0_0%_9%)]
                    whitespace-nowrap
                  ">
                    {cert.title}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
