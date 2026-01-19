import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import footerbg from "../../assets/footerbg.png";

const footerLinks = {
  "Quick Links": ["About Us", "Our Story", "Careers", "Store Locations", "Blog"],
  Categories: [
    "Staples",
    "Cold Pressed Oils",
    "A2 Dairy Products",
    "Fruits & Vegetables",
    "Snacks"
  ],
  "Customer Care": [
    "Contact Us",
    "FAQs",
    "Shipping Policy",
    "Return Policy",
    "Privacy Policy"
  ]
};

const Footer = () => {
  return (
    <footer className="relative w-full">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerbg})` }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* BRAND */}
            <div className="lg:col-span-2 flex flex-col items-start">

              <img
                src="https://www.sewasamitingo.org/wp-content/uploads/2017/06/logo.jpg"
                alt="Samuhik Utthan Sewa Samiti"
                className="h-16 sm:h-20 w-auto object-contain bg-white rounded-lg p-2"
              />

              <p className="mt-4 text-sm leading-relaxed max-w-md text-[hsla(0,1%,27%,1)]">
                Samuhik Utthan Sewa Samiti (SUSS) is a Non Profit Organisation founded
                by Mr. Vijay Kumar Singh in March 2010. Over a decade, SUSS carried a
                long way to serving society and still carry on, to serve nation in
                best possible manner with based on sustainable Livelihood, Justice,
                Dignity, Freedom and Equity.
              </p>

              {/* CONTACT */}
              <div className="mt-6 space-y-3">

                <div className="flex items-start gap-3 text-sm text-[hsla(0,1%,27%,1)]">
                  <MapPin size={18} />
                  <span>Indiranagar, Bangalore, Karnataka 560038</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-[hsla(0,1%,27%,1)]">
                  <Phone size={18} />
                  <span>+91 9590922000</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-[hsla(0,1%,27%,1)]">
                  <Mail size={18} />
                  <span>support@samuhikuthan.com</span>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="flex flex-wrap gap-3 mt-6">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="
                      w-10 h-10 rounded-full
                      bg-white/10
                      flex items-center justify-center
                      hover:bg-[hsl(166_76%_96%)]
                      hover:text-[hsl(173_80%_40%)]
                      transition-colors
                    "
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* LINKS */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="sm:text-left text-center">

                <h4 className="font-bold text-base sm:text-lg mb-4">
                  {title}
                </h4>

                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[hsla(0,1%,27%,1)] hover:text-[hsl(166_76%_96%)] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

              <p className="text-sm text-[hsla(0,1%,27%,1)]">
                © 2024 Samuhik Utthan Sewa Samiti. All Rights Reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm text-[hsla(0,1%,27%,1)]">
                  We Accept:
                </span>

                {["Visa", "Mastercard", "UPI", "PayTM"].map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-white/10 rounded text-xs font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
