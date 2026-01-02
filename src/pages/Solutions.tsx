import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Sparkles, 
  UtensilsCrossed, 
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Zap,
  Globe,
  BarChart3,
  Users,
  Palette,
  QrCode
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
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
      { icon: Globe, text: "Search Engine Optimization (SEO)" },
      { icon: BarChart3, text: "Google & Meta Ads Management" },
      { icon: Users, text: "Social Media Marketing" },
      { icon: Zap, text: "Analytics & Performance Tracking" },
    ],
    link: "https://marketing.shyara.co.in",
    linkText: "Explore Shyara Marketing",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    accentColor: "blue"
  },
  {
    id: "digital",
    icon: Sparkles,
    badge: "Shyara Digital",
    title: "Digital Invitations & Events",
    description: "Transform your celebrations with beautiful, shareable digital invitations. Create memorable experiences that guests can access anywhere, anytime.",
    features: [
      { icon: Palette, text: "Custom Invitation Design" },
      { icon: Users, text: "RSVP & Guest Management" },
      { icon: Zap, text: "Event Countdown & Reminders" },
      { icon: Globe, text: "Multi-language Support" },
    ],
    link: "https://digital.shyara.co.in",
    linkText: "Explore Shyara Digital",
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 via-purple-500/5 to-transparent",
    accentColor: "violet"
  },
  {
    id: "bitex",
    icon: UtensilsCrossed,
    badge: "BiteX by Shyara",
    title: "Restaurant POS & Automation",
    description: "Smart restaurant management with QR-based ordering, real-time analytics, and seamless operations. Built for modern dining experiences.",
    features: [
      { icon: QrCode, text: "QR Code Table Ordering" },
      { icon: Zap, text: "Live Order Management" },
      { icon: BarChart3, text: "Sales Analytics & Reports" },
      { icon: Globe, text: "Multi-outlet Support" },
    ],
    link: "https://bitex.shyara.co.in",
    linkText: "Explore BiteX",
    gradient: "from-orange-500 to-amber-400",
    bgGradient: "from-orange-500/10 via-amber-500/5 to-transparent",
    accentColor: "orange"
  }
];

const SolutionCard = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => (
  <motion.div
    variants={fadeInUp}
    className="group relative"
  >
    {/* Background gradient on hover */}
    <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    
    <a
      href={solution.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block p-8 md:p-10 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm card-glow overflow-hidden"
    >
      {/* Decorative circle */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${solution.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`} />
      
      <div className="relative flex flex-col lg:flex-row lg:items-start gap-8">
        {/* Left content */}
        <div className="flex-1">
          {/* Icon with gradient border */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} p-0.5 mb-6`}>
            <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <solution.icon className="text-foreground group-hover:text-white transition-colors" size={28} />
            </div>
          </div>
          
          {/* Badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/80 text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-4">
            {solution.badge}
          </span>
          
          <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
            {solution.description}
          </p>

          {/* CTA */}
          <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
            {solution.linkText}
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Features grid */}
        <div className="lg:w-72 shrink-0">
          <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Key Features</h4>
          <div className="grid gap-3">
            {solution.features.map((feature) => (
              <div 
                key={feature.text} 
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 group-hover:bg-secondary/50 transition-colors"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${solution.gradient} bg-opacity-20 flex items-center justify-center`}>
                  <feature.icon size={16} className="text-foreground" />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  </motion.div>
);

// Floating background elements
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full"
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
      }}
      animate={{
        y: [-20, 20, -20],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full hidden lg:block"
      style={{
        background: 'radial-gradient(circle, hsl(var(--glow-secondary) / 0.06) 0%, transparent 70%)',
      }}
      animate={{
        y: [20, -20, 20],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
  </div>
);

const Solutions = () => {
  return (
    <Layout>
      <SEO 
        title="Our Solutions"
        description="Explore Shyara's technology solutions: digital marketing, digital invitations, and BiteX restaurant POS. Built for performance and ready to scale."
        canonical="/solutions"
      />
      
      {/* Hero */}
      <Section className="relative pt-24 md:pt-32 overflow-hidden">
        <FloatingElements />
        
        <motion.div 
          className="relative max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            Our Solutions
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-display mb-6"
          >
            Technology that{" "}
            <span className="text-gradient">works for you</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-xl leading-relaxed"
          >
            Three focused solutions designed to solve real business problems. 
            Each one built with care, optimized for performance, and ready to scale.
          </motion.p>
        </motion.div>
      </Section>

      {/* Solutions Grid */}
      <Section className="pt-8">
        <motion.div 
          className="space-y-8"
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
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent rounded-3xl" />
        
        <motion.div 
          className="relative max-w-2xl mx-auto text-center py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-headline mb-4"
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
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contact">
                Schedule a Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Solutions;
