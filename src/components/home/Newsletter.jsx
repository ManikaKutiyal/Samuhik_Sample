import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="bg-[hsl(71_56%_47%)] py-12 md:py-16">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-2xl md:text-4xl font-bold font-serif
              text-[hsl(151_80%_95%)]
              mb-4
            "
          >
            Stay home & get your daily needs from our shop
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              text-[hsl(151_80%_95%/0.8)]
              mb-8
            "
          >
            Start Your Daily Shopping with Samuhik Utthan Sewa Samiti (SUSS)
          </motion.p>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4 sm:px-0"
          >

            {/* INPUT */}
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                flex-1 px-4 sm:px-6 py-3 rounded-full
                bg-[hsl(151_80%_95%)]
                text-[hsl(0_0%_9%)]
                placeholder:text-[hsl(0_0%_9%/0.6)]
                focus:outline-none
                focus:ring-2 focus:ring-[hsl(166_76%_96%)]
                text-sm sm:text-base min-w-0
              "
            />

            {/* BUTTON */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-[hsl(166_76%_96%)]
                text-[hsl(173_80%_40%)]
                flex items-center justify-center gap-2
                whitespace-nowrap
                px-6 py-3 rounded-full font-medium
                hover:shadow-lg transition-all
              "
            >
              Subscribe
              <Send size={18} />
            </motion.button>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
