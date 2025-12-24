import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Sparkles, 
  UtensilsCrossed, 
  ArrowRight,
  CheckCircle2,
  ExternalLink
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
    link: "https://marketing.shyara.co.in",
    linkText: "Explore Shyara Marketing",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500"
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
    link: "https://digital.shyara.co.in",
    linkText: "Explore Shyara Digital",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500"
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
    link: "https://bitex.shyara.co.in",
    linkText: "Explore BiteX",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500"
  }
];

const SolutionCard = ({ solution }: { solution: typeof solutions[0] }) => (
  <motion.a
    href={solution.link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeInUp}
    className="group relative block"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    
    <div className="relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Left content */}
        <div className="flex-1">
          <div className={`w-12 h-12 rounded-lg ${solution.iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
            <solution.icon className={solution.iconColor} size={24} />
          </div>
          
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2 block">
            {solution.badge}
          </span>
          
          <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-xl">
            {solution.description}
          </p>

          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200">
            {solution.linkText}
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Features list */}
        <div className="lg:w-64 shrink-0">
          <h4 className="text-xs font-medium text-muted-foreground mb-3">Key Features</h4>
          <ul className="space-y-2">
            {solution.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.a>
);

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-20 md:pt-24">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span 
            variants={fadeInUp}
            className="text-primary font-medium text-sm tracking-wide uppercase mb-3 block"
          >
            Our Solutions
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-display font-semibold mb-4"
          >
            Technology that{" "}
            <span className="text-gradient">works for you</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-lg leading-relaxed"
          >
            Three focused solutions designed to solve real business problems. 
            Each one built with care, optimized for performance, and ready to scale.
          </motion.p>
        </motion.div>
      </Section>

      {/* Solutions Grid */}
      <Section className="pt-4">
        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
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
            className="text-headline font-semibold mb-4"
          >
            Not sure which solution fits?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-lg mb-6"
          >
            Let's chat. We'll help you identify the right approach for your specific needs — no pressure, just clarity.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button asChild variant="hero" size="xl">
              <a href="/contact">
                Schedule a Call
                <ArrowRight size={18} />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Solutions;
