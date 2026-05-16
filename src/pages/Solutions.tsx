import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import {
  featuredSolutions,
  coreSolutions,
  type Solution,
} from "@/content/solutions";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const SolutionCard = ({
  solution,
  featured = false,
}: {
  solution: Solution;
  featured?: boolean;
}) => (
  <motion.div variants={fadeInUp} className="group relative">
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
    />

    <a
      href={solution.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm card-glow overflow-hidden ${
        featured ? "p-8 md:p-12" : "p-8 md:p-10"
      }`}
    >
      <div
        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${solution.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}
      />

      <motion.div className="relative flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="flex-1">
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} p-0.5 mb-6`}
          >
            <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <solution.icon
                className="text-foreground group-hover:text-white transition-colors"
                size={featured ? 32 : 28}
              />
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/80 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              {solution.badge}
            </span>
            {featured && (
              <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold tracking-wider uppercase">
                New
              </span>
            )}
          </div>

          <h3 className={`font-bold mb-4 ${featured ? "text-2xl md:text-3xl" : "text-2xl"}`}>
            {solution.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
            {solution.description}
          </p>

          <motion.div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
            {solution.linkText}
            <ExternalLink
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </motion.div>
        </div>

        <div className="lg:w-72 shrink-0">
          <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
            Key Features
          </h4>
          <div className="grid gap-3">
            {solution.features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 group-hover:bg-secondary/50 transition-colors"
              >
                <motion.div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}
                >
                  <feature.icon size={16} className="text-foreground" />
                </motion.div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </a>
  </motion.div>
);

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
      }}
      animate={{
        y: [-20, 20, -20],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full hidden lg:block"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--glow-secondary) / 0.06) 0%, transparent 70%)",
      }}
      animate={{
        y: [20, -20, 20],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
  </motion.div>
);

const Solutions = () => {
  return (
    <Layout>
      <SEO
        title="Our Solutions"
        description="Explore Shyara's five technology brands: Shyara Marketing, Shyara Digital, Invites by Shyara, BiteX restaurant POS, and Shyara Education Labs. Built for performance and ready to scale."
        canonical="/solutions"
      />

      <Section className="relative pt-20 md:pt-28 overflow-hidden">
        <FloatingElements />

        <motion.div
          className="relative max-w-3xl mx-auto text-center"
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
          <motion.h1 variants={fadeInUp} className="text-display mb-6">
            Technology that{" "}
            <span className="text-gradient">works for you</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-body-xl leading-relaxed max-w-2xl mx-auto"
          >
            Five focused brands designed to solve real business problems. Each
            one built with care, optimized for performance, and ready to scale.
          </motion.p>
        </motion.div>
      </Section>

      <Section className="pt-8">
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {featuredSolutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} featured />
          ))}
          {coreSolutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </motion.div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent rounded-3xl" />

        <motion.div
          className="relative max-w-2xl mx-auto text-center py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-headline mb-4">
            Not sure which solution fits?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-body-lg mb-8"
          >
            Let's chat. We'll help you identify the right approach for your
            specific needs — no pressure, just clarity.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contact">
                Schedule a Call
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Solutions;
