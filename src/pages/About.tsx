import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  Code2,
  Palette,
  Zap,
  Sparkles
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every line of code, every pixel placed serves a purpose. We build with intention, not just to ship.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Thoughtful Innovation",
    description: "Innovation isn't about chasing trends — it's about solving problems in smarter ways.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Rocket,
    title: "Execution Excellence",
    description: "Ideas are cheap, execution is everything. We ship fast, iterate faster, and never compromise on quality.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Heart,
    title: "Genuine Partnership",
    description: "Your success is our success. We're not vendors — we're partners invested in your growth.",
    gradient: "from-pink-500 to-rose-500"
  }
];

const expertise = [
  {
    icon: Code2,
    title: "Engineering",
    description: "Full-stack development with modern technologies. Clean architecture that scales.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Palette,
    title: "Design",
    description: "User-centered design that's both beautiful and functional. Experiences that convert.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Growth",
    description: "Data-driven marketing strategies that deliver measurable results.",
    gradient: "from-orange-500 to-amber-500"
  }
];

const timeline = [
  {
    year: "2023",
    title: "The Beginning",
    description: "Shyara Tech Solutions was founded with a simple mission: make technology accessible to businesses of all sizes.",
    icon: Sparkles
  },
  {
    year: "2024",
    title: "Expanding Horizons",
    description: "Launched specialized sub-brands to serve specific verticals with focused solutions.",
    icon: Rocket
  },
  {
    year: "2025",
    title: "Building the Future",
    description: "Continuing to innovate with AI-powered solutions and automated platforms that scale.",
    icon: Target
  }
];

// Floating background elements
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, hsl(var(--glow-primary) / 0.1) 0%, transparent 70%)',
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
  </div>
);

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About Us"
        description="Learn about Shyara Tech Solutions — an India-based technology company focused on creating digital products and services that help businesses grow."
        canonical="/about"
      />
      
      {/* Hero */}
      <Section className="relative pt-24 md:pt-32 overflow-hidden">
        <FloatingOrbs />
        
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
            About Shyara
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-display mb-6"
          >
            We build technology that{" "}
            <span className="text-gradient">matters</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-xl leading-relaxed"
          >
            Shyara Tech Solutions is an India-based technology company focused on 
            creating digital products and services that genuinely help businesses 
            grow. We combine design thinking with engineering precision to deliver 
            solutions that work.
          </motion.p>
        </motion.div>
      </Section>

      {/* Philosophy & Values */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-headline mb-8"
            >
              Our Philosophy
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="space-y-6 text-muted-foreground text-body-lg leading-relaxed"
            >
              <p>
                We believe technology should empower, not complicate. In a world 
                drowning in complexity, we choose simplicity. In an industry 
                obsessed with features, we focus on outcomes.
              </p>
              <p>
                Every project we take on starts with understanding — not just 
                what you want to build, but why. The 'why' shapes everything, 
                from architecture decisions to interface design.
              </p>
              <p>
                We're not interested in building software that collects dust. 
                We build platforms, tools, and experiences that become integral 
                to how businesses operate and grow.
              </p>
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
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} p-0.5 shrink-0`}>
                  <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center group-hover:bg-transparent transition-colors">
                    <value.icon className="text-foreground group-hover:text-white transition-colors" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* What We Bring */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-card/30" />
        
        <div className="relative">
          <SectionHeader 
            title="What We Bring"
            subtitle="A blend of technical expertise and creative thinking, unified by a commitment to quality."
          />

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {expertise.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="relative text-center p-10 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm card-glow group"
              >
                {/* Decorative gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`} />
                
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 mx-auto mb-8`}>
                  <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center group-hover:bg-transparent transition-colors">
                    <item.icon className="text-foreground group-hover:text-white transition-colors" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader 
          title="Our Journey"
          subtitle="From a simple idea to a multi-product technology company."
        />

        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              variants={fadeInUp}
              className="relative pl-16 pb-16 last:pb-0"
            >
              {/* Timeline line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-[27px] top-16 bottom-0 w-px bg-gradient-to-b from-primary/50 to-border" />
              )}
              
              {/* Timeline node */}
              <div className="absolute left-0 top-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-glow">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
              </div>

              <div className="pt-1">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Vision CTA */}
      <Section className="relative overflow-hidden">
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
            Looking Ahead
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-xl leading-relaxed mb-10"
          >
            We're building towards a future where businesses of all sizes have 
            access to enterprise-grade technology. Through platforms, automation, 
            and AI-powered solutions, we're making sophisticated tech accessible 
            and affordable.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contact">
                Let's Build Together
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default About;
