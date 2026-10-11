import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  ExternalLink,
  Zap,
  Shield,
  Users,
  ChevronDown,
  Star,
  Target,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import {
  featuredSolutions,
  coreSolutions,
  type Solution,
} from "@/content/solutions";
import { useRef } from "react";

// Enhanced animation variants with proper typing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 } 
  }
};

const staggerContainer: Variants = {
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
    className="flex flex-col items-center gap-2 hero-scroll-indicator cursor-pointer select-none group"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.5 }}
    onClick={() => {
      window.scrollTo({
        top: window.innerHeight * 0.9,
        behavior: 'smooth'
      });
    }}
  >
    <span className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground/70 group-hover:text-primary transition-colors">
      Scroll
    </span>
    <motion.div
      className="w-5 h-9 rounded-full border-2 border-muted-foreground/25 flex items-start justify-center p-1.5 group-hover:border-primary/50 transition-colors"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm"
        animate={{ y: [0, 10, 0] }}
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
      className="relative min-h-[92vh] flex flex-col items-center justify-between overflow-hidden pt-24 pb-6"
    >
      <FloatingOrbs />
      <FloatingShapes />

      {/* Top spacer to balance vertical centering */}
      <div className="w-full h-1 pointer-events-none" aria-hidden="true" />

      <motion.div 
        className="container-wide relative z-10 my-auto py-4"
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

          {/* Subheading with editorial in-content dofollow backlink */}
          <motion.p 
            variants={fadeInUp}
            className="text-body-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From our flagship wedding platform{" "}
            <a
              href="https://digitalinvite.in"
              target="_blank"
              rel="noopener"
              className="text-foreground font-semibold hover:text-primary transition-colors underline decoration-primary/40 underline-offset-4"
            >
              Digital Invite
            </a>{" "}
            and growth marketing to restaurant POS and education lab hardware—we craft solutions that scale with your ambition. Thoughtful design, robust engineering, measurable results.
          </motion.p>

          {/* CTA Buttons with boundary-safe responsive layout */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto"
          >
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto group justify-center">
              <Link to="/solutions" className="inline-flex items-center justify-center gap-2">
                Explore Solutions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="w-full sm:w-auto group justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2">
                Get in Touch
                <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform shrink-0" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={fadeInUp}
            className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted-foreground"
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

      <div className="relative z-10 pt-4 pb-2">
        <ScrollIndicator />
      </div>
    </section>
  );
};

const SolutionCard = ({
  solution,
  index,
  featured = false,
}: {
  solution: Solution;
  index: number;
  featured?: boolean;
}) => (
  <motion.div
    variants={fadeInUp}
    custom={index}
    className="group relative"
  >
    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    
    <a
      href={solution.link}
      target="_blank"
      rel={solution.isDofollow ? "noopener" : "noopener noreferrer"}
      className={`relative block rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm card-glow ${
        featured ? "p-6 sm:p-8 md:p-10" : "p-6 sm:p-8"
      }`}
    >
      {/* Icon with gradient background */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} p-0.5 mb-6`}>
        <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center">
          <solution.icon className="text-foreground" size={24} />
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          {solution.badge}
        </span>
        {featured && (
          <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{solution.shortDescription}</p>
      
      <div className="flex flex-wrap items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all break-words max-w-full">
        <span className="break-words">{solution.linkText}</span>
        <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
      </div>
    </a>
  </motion.div>
);

// Solutions preview section with premier Flagship Spotlight on Digital Invite at top
const SolutionsPreview = () => {
  const flagshipSolution = featuredSolutions.find((s) => s.id === "digitalinvite") || featuredSolutions[0];
  const otherFeatured = featuredSolutions.filter((s) => s.id !== flagshipSolution.id);
  const core = coreSolutions;

  return (
    <Section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="relative">
        <SectionHeader 
          title="What We Build"
          subtitle="Focused technology platforms and solutions — led by our flagship wedding platform Digital Invite, alongside growth marketing, smart POS, and education hardware."
        />

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Top Flagship Spotlight: Digital Invite (digitalinvite.in) */}
          <motion.div
            variants={fadeInUp}
            className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 shadow-2xl overflow-hidden group max-w-full"
          >
            <div className="relative rounded-[22px] bg-card/95 backdrop-blur-xl p-5 sm:p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-500/15 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-2xl min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase border border-primary/20">
                      <Sparkles size={13} className="text-primary animate-pulse" />
                      Flagship Consumer Platform
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold">
                      Websites from ₹1,699 + GST
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                      Live at digitalinvite.in
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 break-words">
                    Digital Invite — Digital Wedding Invitations for Indian Weddings
                  </h3>

                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                    Our premier celebration platform at{" "}
                    <a
                      href="https://digitalinvite.in"
                      target="_blank"
                      rel="noopener"
                      className="text-foreground font-semibold underline decoration-primary/50 underline-offset-4 hover:text-primary transition-colors"
                    >
                      digitalinvite.in
                    </a>
                    . Invitation websites with interactive RSVP, downloadable digital cards, and video invites—all in one place. One link on WhatsApp, zero apps needed for guests, with real-time headcount tracking for couples.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      "Interactive Websites with Built-in RSVP",
                      "WhatsApp-First Sharing (No App for Guests)",
                      "Downloadable Cards (Instant PNG & PDF)",
                      "Cinematic Video Invites in 24–48 Hours",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-sm text-foreground/90">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons with mobile-boundary safety and zero overflow */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-full">
                    <Button asChild variant="hero" size="lg" className="w-full sm:w-auto shadow-lg group/btn justify-center">
                      <a
                        href="https://digitalinvite.in"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center gap-2 text-center"
                      >
                        <span>Visit Digital Invite</span>
                        <span className="hidden sm:inline">(digitalinvite.in)</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform shrink-0" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto justify-center">
                      <a
                        href="https://digitalinvite.in/templates"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center text-center"
                      >
                        Browse Wedding Websites
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Quick Access Card for digitalinvite.in offerings */}
                <div className="w-full lg:w-80 shrink-0 p-5 sm:p-6 rounded-2xl bg-secondary/40 border border-border/60 max-w-full">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Explore digitalinvite.in
                  </div>
                  <div className="space-y-2.5">
                    <a
                      href="https://digitalinvite.in/templates"
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-between p-3 rounded-xl bg-card hover:bg-primary/10 transition-colors text-sm font-medium group/link"
                    >
                      <span>Invitation Websites</span>
                      <ExternalLink size={14} className="text-muted-foreground group-hover/link:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://digitalinvite.in/cards"
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-between p-3 rounded-xl bg-card hover:bg-primary/10 transition-colors text-sm font-medium group/link"
                    >
                      <span>Digital Cards</span>
                      <ExternalLink size={14} className="text-muted-foreground group-hover/link:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://digitalinvite.in/videos"
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-between p-3 rounded-xl bg-card hover:bg-primary/10 transition-colors text-sm font-medium group/link"
                    >
                      <span>Video Invites</span>
                      <ExternalLink size={14} className="text-muted-foreground group-hover/link:text-primary transition-colors" />
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground flex items-center justify-between">
                    <span>Shyara Flagship Brand</span>
                    <span className="font-semibold text-primary">CIN Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other featured solutions */}
          <motion.div className="grid md:grid-cols-2 gap-6">
            {otherFeatured.map((solution, index) => (
              <SolutionCard key={solution.id} solution={solution} index={index} featured />
            ))}
          </motion.div>

          {/* Core solutions */}
          <motion.div className="grid md:grid-cols-3 gap-6">
            {core.map((solution, index) => (
              <SolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

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
        <motion.div variants={fadeInUp} className="w-full sm:w-auto">
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto group justify-center">
            <Link to="/about" className="inline-flex items-center justify-center gap-2">
              Our Story 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform shrink-0" />
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
  { value: "4+", label: "Active Products" },
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

// CTA Section with boundary-safe styling
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
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto"
      >
        <Button asChild variant="hero" size="xl" className="w-full sm:w-auto group justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2">
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto justify-center">
          <Link to="/solutions" className="inline-flex items-center justify-center">
            View All Solutions
          </Link>
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
        title="Shyara Tech Solutions | Digital Invite, Technology & Growth Platforms"
        description="Shyara Tech Solutions builds focused technology platforms: Digital Invite (digital wedding invitations with RSVP at digitalinvite.in), Shyara Marketing, BiteX restaurant POS, and Shyara Education Labs."
        keywords="Digital Invite, digitalinvite.in, digital wedding invitations, wedding invitation websites, Indian wedding invitations, RSVP online, digital cards, video invites, technology solutions, digital marketing, restaurant POS, education electronics"
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
