import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
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
  Zap
} from "lucide-react";

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

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every line of code, every pixel placed serves a purpose. We build with intention, not just to ship."
  },
  {
    icon: Lightbulb,
    title: "Thoughtful Innovation",
    description: "Innovation isn't about chasing trends — it's about solving problems in smarter ways."
  },
  {
    icon: Rocket,
    title: "Execution Excellence",
    description: "Ideas are cheap, execution is everything. We ship fast, iterate faster, and never compromise on quality."
  },
  {
    icon: Heart,
    title: "Genuine Partnership",
    description: "Your success is our success. We're not vendors — we're partners invested in your growth."
  }
];

const expertise = [
  {
    icon: Code2,
    title: "Engineering",
    description: "Full-stack development with modern technologies. Clean architecture that scales."
  },
  {
    icon: Palette,
    title: "Design",
    description: "User-centered design that's both beautiful and functional. Experiences that convert."
  },
  {
    icon: Zap,
    title: "Growth",
    description: "Data-driven marketing strategies that deliver measurable results."
  }
];

const timeline = [
  {
    year: "Foundation",
    title: "The Beginning",
    description: "Shyara Tech Solutions was founded with a simple mission: make technology accessible to businesses of all sizes."
  },
  {
    year: "Growth",
    title: "Expanding Horizons",
    description: "Launched specialized sub-brands to serve specific verticals with focused solutions."
  },
  {
    year: "Today",
    title: "Building the Future",
    description: "Continuing to innovate with AI-powered solutions and automated platforms that scale."
  }
];

const About = () => {
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
            About Shyara
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-display font-semibold mb-6"
          >
            We build technology that{" "}
            <span className="text-gradient">matters</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-lg leading-relaxed"
          >
            Shyara Tech Solutions is an India-based technology company focused on 
            creating digital products and services that genuinely help businesses 
            grow. We combine design thinking with engineering precision to deliver 
            solutions that work.
          </motion.p>
        </motion.div>
      </Section>

      {/* Philosophy */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-headline font-semibold mb-6"
            >
              Our Philosophy
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="space-y-6 text-muted-foreground leading-relaxed"
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
                className="flex gap-5 p-6 rounded-xl bg-card border border-border/50"
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

      {/* What We Do */}
      <Section className="bg-card/30">
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
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
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
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div>
                <span className="text-xs font-medium tracking-wider uppercase text-primary mb-2 block">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Vision */}
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
            Looking Ahead
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-lg leading-relaxed mb-8"
          >
            We're building towards a future where businesses of all sizes have 
            access to enterprise-grade technology. Through platforms, automation, 
            and AI-powered solutions, we're making sophisticated tech accessible 
            and affordable.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Let's Build Together
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default About;
