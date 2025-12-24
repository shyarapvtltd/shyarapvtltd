import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Sparkles, 
  UtensilsCrossed, 
  Globe,
  Smartphone,
  BarChart3,
  Mail,
  QrCode,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const solutions = [
  {
    id: "marketing",
    icon: TrendingUp,
    badge: "Shyara Marketing",
    title: "Digital Marketing & Growth",
    description: "Comprehensive digital marketing solutions that drive measurable growth. From SEO to paid advertising, we craft strategies that connect you with your ideal audience.",
    features: [
      "Search Engine Optimization (SEO)",
      "Google & Meta Ads Management",
      "Google My Business Optimization",
      "Social Media Marketing",
      "Analytics & Performance Tracking"
    ],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400"
  },
  {
    id: "development",
    icon: Globe,
    badge: "Web & Apps",
    title: "Websites & Applications",
    description: "Custom-built digital experiences that look stunning and perform flawlessly. From landing pages to full-stack applications, we bring your vision to life.",
    features: [
      "Responsive Website Design",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Custom Web Applications",
      "API Development & Integration"
    ],
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400"
  },
  {
    id: "digital",
    icon: Sparkles,
    badge: "Shyara Digital",
    title: "Digital Invitations & Events",
    description: "Transform your celebrations with beautiful, shareable digital invitations. Create memorable experiences that guests can access anywhere, anytime.",
    features: [
      "Custom Invitation Design",
      "RSVP & Guest Management",
      "Event Countdown & Reminders",
      "Photo & Video Integration",
      "Multi-language Support"
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400"
  },
  {
    id: "bitex",
    icon: UtensilsCrossed,
    badge: "BiteX by Shyara",
    title: "Restaurant POS & Automation",
    description: "Smart restaurant management with QR-based ordering, real-time analytics, and seamless operations. Built for modern dining experiences.",
    features: [
      "QR Code Table Ordering",
      "Live Order Management",
      "Inventory Tracking",
      "Sales Analytics & Reports",
      "Multi-outlet Support"
    ],
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400"
  }
];

const SolutionCard = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => (
  <motion.div
    variants={fadeInUp}
    className="group relative"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    
    <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        {/* Left content */}
        <div className="flex-1">
          <div className={`w-14 h-14 rounded-xl ${solution.iconBg} flex items-center justify-center mb-6`}>
            <solution.icon className={solution.iconColor} size={28} />
          </div>
          
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 block">
            {solution.badge}
          </span>
          
          <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
            {solution.description}
          </p>

          <Button asChild variant="outline" size="lg" className="group/btn">
            <Link to="/contact">
              Get Started
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Features list */}
        <div className="lg:w-72 shrink-0">
          <h4 className="text-sm font-medium text-muted-foreground mb-4">Key Features</h4>
          <ul className="space-y-3">
            {solution.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-12 md:pt-20">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span 
            variants={fadeInUp}
            className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block"
          >
            Our Solutions
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-display font-semibold mb-6"
          >
            Technology that{" "}
            <span className="text-gradient">works for you</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-lg leading-relaxed"
          >
            Four focused solutions designed to solve real business problems. 
            Each one built with care, optimized for performance, and ready to scale.
          </motion.p>
        </motion.div>
      </Section>

      {/* Solutions Grid */}
      <Section className="pt-8">
        <motion.div 
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-card/30">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-headline font-semibold mb-6"
          >
            Not sure which solution fits?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-lg mb-8"
          >
            Let's chat. We'll help you identify the right approach for your specific needs — no pressure, just clarity.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Schedule a Call
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Solutions;
