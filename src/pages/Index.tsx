import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Sparkles, 
  UtensilsCrossed, 
  ArrowRight,
  Zap,
  Shield,
  Users,
  ChevronDown,
  Star,
  Target,
  Layers
} from "lucide-react";
import { useRef } from "react";

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

// Floating background orbs component
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Primary orb */}
    <motion.div
      className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full"
      style={{
        background: 'radial-gradient(circle, hsl(var(--glow-primary) / 0.15) 0%, transparent 70%)',
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.7, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    {/* Secondary orb */}
    <motion.div
      className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full"
      style={{
        background: 'radial-gradient(circle, hsl(var(--glow-secondary) / 0.1) 0%, transparent 70%)',
      }}
      animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
    {/* Accent orb */}
    <motion.div
      className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full hidden lg:block"
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
);

// Geometric floating shapes
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Ring 1 */}
    <motion.div
      className="absolute top-20 right-[15%] w-16 h-16 border-2 border-primary/20 rounded-full hidden lg:block"
      animate={{ 
        y: [-10, 10, -10],
        rotate: [0, 180, 360]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
    {/* Ring 2 */}
    <motion.div
      className="absolute bottom-32 left-[10%] w-24 h-24 border border-primary/10 rounded-full hidden lg:block"
      animate={{ 
        y: [10, -10, 10],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Dot grid */}
    <div className="absolute inset-0 dot-pattern opacity-30" />
  </div>
);

// Animated scroll indicator
const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-scroll-indicator"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.5, duration: 0.5 }}
  >
    <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll</span>
    <motion.div
      className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
      whileHover={{ borderColor: 'hsl(var(--primary) / 0.5)' }}
    >
      <motion.div
        className="w-1.5 h-1.5 bg-primary rounded-full"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  </motion.div>
);

// Badge pill component
const BadgePill = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    variants={fadeInUp}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-sm"
  >
    <motion.span 
      className="w-2 h-2 bg-primary rounded-full"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <span className="text-sm font-medium text-foreground/80">{children}</span>
  </motion.div>
);

// Hero Section - Premium redesign
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
    >
      <FloatingOrbs />
      <FloatingShapes />

      <motion.div 
        className="container-wide relative z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <BadgePill>Building Digital Futures</BadgePill>

          {/* Main headline with enhanced typography */}
          <motion.h1 
            variants={fadeInUp}
            className="text-display mt-6 mb-6"
          >
            Technology that{" "}
            <span className="text-gradient-animated">empowers</span>
            <br className="hidden sm:block" />
            your vision
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={fadeInUp}
            className="text-body-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From digital marketing to smart automation, we craft solutions that 
            scale with your ambition. Thoughtful design, robust engineering, 
            measurable results.
          </motion.p>

          {/* CTA Buttons with enhanced styling */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/solutions">
                Explore Solutions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="group">
              <Link to="/contact">
                Get in Touch
                <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted-foreground"
          >
            {[
              { icon: Star, text: "100% Client Satisfaction" },
              { icon: Zap, text: "Fast Turnaround" },
              { icon: Shield, text: "Enterprise Ready" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm">
                <item.icon size={16} className="text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

// Solutions data
const solutions = [
  {
    icon: TrendingUp,
    title: "Shyara Marketing",
    description: "Digital growth strategies, paid ads, websites, and GMB optimization that drive real results.",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
  },
  {
    icon: Sparkles,
    title: "Shyara Digital",
    description: "Beautiful digital invitations and shareable event experiences that delight your guests.",
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-500/5",
  },
  {
    icon: UtensilsCrossed,
    title: "BiteX by Shyara",
    description: "Smart restaurant POS with QR ordering, live analytics, and seamless operations.",
    gradient: "from-orange-500 to-amber-400",
    bgGradient: "from-orange-500/10 to-amber-500/5",
  },
];

// Premium solution card
const SolutionCard = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => (
  <motion.div
    variants={fadeInUp}
    custom={index}
    className="group relative"
  >
    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    
    <Link 
      to="/solutions"
      className="relative block p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm card-glow"
    >
      {/* Icon with gradient background */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} p-0.5 mb-6`}>
        <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center">
          <solution.icon className="text-foreground" size={24} />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
      
      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
        <span>Learn more</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  </motion.div>
);

// Solutions preview section with bento-style grid
const SolutionsPreview = () => (
  <Section className="relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
    
    <div className="relative">
      <SectionHeader 
        title="What We Build"
        subtitle="Three focused solutions, one unified mission — helping businesses thrive in the digital age."
      />

      <motion.div 
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.title} solution={solution} index={index} />
        ))}
      </motion.div>
    </div>
  </Section>
);

// Values data
const values = [
  {
    icon: Zap,
    title: "Execution First",
    description: "We move fast without breaking things. Ideas are great, results are better.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Built to Scale",
    description: "Every solution is designed for growth — from MVP to enterprise-ready.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Partner Mindset",
    description: "We're invested in your success. Your wins are our wins.",
    gradient: "from-violet-500 to-purple-500"
  },
];

// Why Shyara section with split layout
const WhyShyara = () => (
  <Section>
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.span 
          variants={fadeInUp}
          className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          Why Shyara
        </motion.span>
        <motion.h2 
          variants={fadeInUp}
          className="text-headline mb-6"
        >
          We don't just build software.{" "}
          <span className="text-gradient">We solve problems.</span>
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-muted-foreground text-body-lg leading-relaxed mb-8"
        >
          At Shyara, we believe technology should empower, not complicate. 
          Every project starts with understanding your unique challenges and 
          ends with solutions that genuinely move the needle.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/about">
              Our Story 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="grid gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            variants={fadeInUp}
            className="flex gap-5 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm card-hover group"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} p-0.5 shrink-0`}>
              <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center group-hover:bg-transparent transition-colors">
                <value.icon className="text-foreground group-hover:text-white transition-colors" size={22} />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </Section>
);

// Process steps
const steps = [
  { number: "01", title: "Discover", description: "We listen, research, and understand your goals.", icon: Target },
  { number: "02", title: "Design", description: "Crafting intuitive experiences and smart architecture.", icon: Layers },
  { number: "03", title: "Develop", description: "Building with precision and performance in mind.", icon: Zap },
  { number: "04", title: "Deliver", description: "Launch, iterate, and grow together.", icon: Star },
];

// Process section with animated steps
const ProcessSection = () => (
  <Section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-card/30" />
    
    <div className="relative">
      <SectionHeader 
        title="How We Work"
        subtitle="A proven approach that balances speed with quality."
      />

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={fadeInUp}
            className="relative group"
          >
            {/* Connecting line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
            )}
            
            <div className="relative p-6 text-center">
              {/* Step number with glow */}
              <div className="relative inline-flex mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="text-primary" size={28} />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </Section>
);

// Trust metrics with animated counters
const metrics = [
  { value: "3+", label: "Active Products" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
  { value: "24/7", label: "Support Ready" },
];

const TrustSection = () => (
  <Section className="section-padding-sm">
    <motion.div 
      className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-border/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            variants={fadeInScale}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2">
              {metric.value}
            </div>
            <div className="text-muted-foreground text-sm md:text-base">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);

// CTA Section with premium styling
const CTASection = () => (
  <Section className="relative overflow-hidden">
    {/* Background gradient mesh */}
    <div className="absolute inset-0 bg-mesh-gradient" />
    
    <motion.div 
      className="relative max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 
        variants={fadeInUp}
        className="text-headline mb-6"
      >
        Ready to build something{" "}
        <span className="text-gradient">remarkable?</span>
      </motion.h2>
      <motion.p 
        variants={fadeInUp}
        className="text-muted-foreground text-body-lg mb-10 max-w-xl mx-auto"
      >
        Let's discuss how Shyara can help transform your ideas into 
        impactful digital solutions.
      </motion.p>
      <motion.div 
        variants={fadeInUp}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button asChild variant="hero" size="xl" className="group">
          <Link to="/contact">
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <Link to="/solutions">View All Solutions</Link>
        </Button>
      </motion.div>
    </motion.div>
  </Section>
);

// Main Index Page
const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Shyara Tech Solutions | Technology that Empowers"
        description="From digital marketing to smart automation, Shyara Tech Solutions crafts technology solutions that scale with your ambition. Digital marketing, POS systems, and digital invitations."
        canonical="/"
      />
      <HeroSection />
      <SolutionsPreview />
      <WhyShyara />
      <ProcessSection />
      <TrustSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
