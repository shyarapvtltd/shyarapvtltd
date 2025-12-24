import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container-wide py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-base">
                S
              </div>
              <span className="font-semibold text-base tracking-tight">
                Shyara<span className="text-muted-foreground font-normal">.tech</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-4 leading-relaxed">
              Empowering businesses with thoughtful technology solutions. From digital marketing 
              to smart automation — we build with purpose.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <MapPin size={14} />
              <span>India-based, Global Services</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Solutions", path: "/solutions" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-all duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Solutions</h4>
            <ul className="space-y-2">
              {[
                { name: "Digital Marketing", href: "https://marketing.shyara.co.in" },
                { name: "Digital Invitations", href: "https://digital.shyara.co.in" },
                { name: "Restaurant POS", href: "https://bitex.shyara.co.in" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-all duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Shyara Tech Solutions (OPC) Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-all duration-200 text-xs">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-all duration-200 text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
