import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Mail, Phone } from "lucide-react";
import shyaraLogo from "@/assets/shyara-logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const solutions = [
    { name: "Digital Marketing", href: "https://marketing.shyara.co.in" },
    { name: "Digital Invitations", href: "https://digital.shyara.co.in" },
    { name: "Restaurant POS", href: "https://bitex.shyara.co.in" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Delivery Policy", path: "/delivery-policy" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-background" />
      
      {/* Decorative orb */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        className="container-wide relative py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand section */}
          <motion.div variants={fadeInUp} className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6 group">
              <motion.img 
                src={shyaraLogo} 
                alt="Shyara" 
                className="h-[80px] w-auto dark:invert transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Empowering businesses with thoughtful technology solutions. From digital marketing 
              to smart automation — we build with purpose.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href="mailto:support@shyara.co.in" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={14} className="text-primary" />
                </div>
                <span className="text-sm">support@shyara.co.in</span>
              </a>
              <a 
                href="tel:+919584661610" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                <span className="text-sm">+91 9584661610</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span className="text-sm leading-relaxed">
                  Mahendru, Sampatchak, Patna - 800006, Bihar
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={fadeInUp}
          className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Shyara Tech Solutions (OPC) Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm">
              Made with care in India 🇮🇳
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
