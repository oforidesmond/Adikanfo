import { Link } from 'react-router';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cocoa-950 via-cocoa-900 to-cocoa-950 text-cocoa-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-10">
          {/* Company Info */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.img
                src="/index.png"
                alt="Adikanfo Commodities logo"
                className="w-30 h-14 rounded-lg object-cover shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
              <span className="text-white">Adikanfo Commodities Ltd.</span>
            </div>
            <p className="text-sm">
              Licensed cocoa buying company<br /> committed to sustainable practices.
              <br />Quality assurance,
              and empowering<br /> Ghanaian farmers.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-brand transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/market-insights" className="hover:text-brand transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Traceable cocoa sourcing & Purchasing</li>
              <li>Quality Assessment & Logistics</li>
              <li>Farmer registration & traceability systems</li>
              <li>GAP training & Productivity support</li>
              <li>Sustainable Agroforestry initiatives</li>
              <li>Community support</li>
            </ul>
          </motion.div>

          {/* Contact Info  */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>21 Dr. Tagoe Avenue, East Legon<br />
                Accra, Ghana<br />
                <br />
                Neem Avenue, Ridge<br />
                Kumasi, Ghana<br />
                <br />
                P.O. Box MP 4655 Mamprobi - Accra<br />
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+233 (0) 307 010 132</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@adikanfoghana.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <motion.a
                href="#"
                className="hover:text-brand transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-brand transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-brand transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-cocoa-800 mt-8 pt-8 text-sm text-center text-cocoa-200">
          <p>&copy; 2026 Adikanfo Commodities Ltd. All rights reserved. Licensed by Ghana Cocoa Board (COCOBOD).</p>
        </div>
      </div>
    </footer>
  );
}