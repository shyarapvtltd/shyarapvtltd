import { Link } from "react-router-dom";
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
  Zap,
  Shield,
  Users
} from "lucide-react";

// Animation variants
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

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background gradient orbs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
    </div>

    <div className="container-wide relative z-10">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Building Digital Futures
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          variants={fadeInUp}
          className="text-display font-semibold mb-6"
        >
          Technology that{" "}
          <span className="text-gradient">empowers</span>{" "}
          your vision
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          variants={fadeInUp}
          className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          From digital marketing to smart automation, we craft solutions that 
          scale with your ambition. Thoughtful design, robust engineering, 
          measurable results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-16"
        >
          <Button asChild variant="hero" size="xl">
            <Link to="/solutions">
              Explore Solutions
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div 
      className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
        <motion.div 
          className="w-1 h-2 bg-muted-foreground rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  </section>
);

// Solutions preview cards
const solutions = [
  {
    icon: TrendingUp,
    title: "Shyara Marketing",
    description: "Digital growth strategies, paid ads, websites, and GMB optimization that drive real results.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Sparkles,
    title: "Shyara Digital",
    description: "Beautiful digital invitations and shareable event experiences that delight your guests.",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: UtensilsCrossed,
    title: "BiteX by Shyara",
    description: "Smart restaurant POS with QR ordering, live analytics, and seamless operations.",
    color: "from-orange-500/20 to-amber-500/20",
  },
];

const SolutionsPreview = () => (
  <Section className="bg-card/30">
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
        <motion.div
          key={solution.title}
          variants={fadeInUp}
          className="group relative p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300"
        >
          {/* Gradient background on hover */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <solution.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
            <Link 
              to="/solutions" 
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

// Why Shyara section
const values = [
  {
    icon: Zap,
    title: "Execution First",
    description: "We move fast without breaking things. Ideas are great, results are better."
  },
  {
    icon: Shield,
    title: "Built to Scale",
    description: "Every solution is designed for growth — from MVP to enterprise-ready."
  },
  {
    icon: Users,
    title: "Partner Mindset",
    description: "We're invested in your success. Your wins are our wins."
  },
];

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
          className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block"
        >
          Why Shyara
        </motion.span>
        <motion.h2 
          variants={fadeInUp}
          className="text-headline font-semibold mb-6"
        >
          We don't just build software.{" "}
          <span className="text-muted-foreground">We solve problems.</span>
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
          <Button asChild variant="outline" size="lg">
            <Link to="/about">
              Our Story <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="grid gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            variants={fadeInUp}
            className="flex gap-5 p-6 rounded-xl bg-secondary/30 border border-border/50"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <value.icon className="text-primary" size={22} />
            </div>
            <div>
              <h4 className="font-semibold mb-1">{value.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </Section>
);

// Process section
const steps = [
  { number: "01", title: "Discover", description: "We listen, research, and understand your goals." },
  { number: "02", title: "Design", description: "Crafting intuitive experiences and smart architecture." },
  { number: "03", title: "Develop", description: "Building with precision and performance in mind." },
  { number: "04", title: "Deliver", description: "Launch, iterate, and grow together." },
];

const ProcessSection = () => (
  <Section className="bg-card/30">
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
          className="relative"
        >
          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
          )}
          
          <div className="p-6">
            <span className="text-4xl font-bold text-primary/20 mb-4 block">{step.number}</span>
            <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

// Trust metrics
const metrics = [
  { value: "3+", label: "Active Products" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "Fast", label: "Turnaround Time" },
  { value: "24/7", label: "Support Ready" },
];

const TrustSection = () => (
  <Section>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{metric.value}</div>
          <div className="text-muted-foreground text-sm">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  </Section>
);

// CTA Section
const CTASection = () => (
  <Section className="bg-gradient-to-b from-card/50 to-background">
    <motion.div 
      className="max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 
        variants={fadeInUp}
        className="text-headline font-semibold mb-6"
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
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">
            Start a Conversation
            <ArrowRight size={18} />
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
