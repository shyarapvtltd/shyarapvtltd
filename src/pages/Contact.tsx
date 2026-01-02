import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageCircle, 
  MapPin,
  ArrowRight,
  Send,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { z } from "zod";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick questions? Chat with us directly.",
    action: "+91 9584661610",
    href: "https://wa.me/919584661610?text=Hi%20Shyara%20Team%2C%20I'd%20like%20to%20discuss%20a%20project.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed inquiries and proposals.",
    action: "support@shyara.co.in",
    href: "mailto:support@shyara.co.in",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Shyara Tech Solutions (OPC) Pvt. Ltd.",
    action: "Patna, Bihar, India",
    href: "",
    gradient: "from-violet-500 to-purple-500"
  }
];

// Floating background elements
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full"
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
    <motion.div
      className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full hidden lg:block"
      style={{
        background: 'radial-gradient(circle, hsl(var(--glow-secondary) / 0.08) 0%, transparent 70%)',
      }}
      animate={{
        scale: [1.1, 1, 1.1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<ContactFormData> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us"
        description="Get in touch with Shyara Tech Solutions. Whether you have a project in mind or just want to explore possibilities, we'd love to hear from you."
        canonical="/contact"
      />
      
      {/* Hero */}
      <Section className="relative pt-20 md:pt-28 pb-8 overflow-hidden">
        <FloatingOrbs />
        
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
            Get in Touch
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-display mb-6"
          >
            Let's start a{" "}
            <span className="text-gradient">conversation</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-xl leading-relaxed max-w-2xl mx-auto"
          >
            Whether you have a project in mind or just want to explore possibilities, 
            we'd love to hear from you. No pressure, just clarity.
          </motion.p>
        </motion.div>
      </Section>

      {/* Contact Methods + Form */}
      <Section className="pt-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Methods */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl font-bold mb-8"
            >
              Other Ways to Reach Us
            </motion.h2>

            {contactMethods.map((method) => {
              const isClickable = method.href !== "";
              
              const cardContent = (
                <>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} p-0.5 shrink-0`}>
                    <div className={`w-full h-full rounded-[10px] bg-card flex items-center justify-center ${isClickable ? 'group-hover:bg-transparent' : ''} transition-colors`}>
                      <method.icon className={`text-foreground ${isClickable ? 'group-hover:text-white' : ''} transition-colors`} size={24} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                    <span className={`${isClickable ? 'text-primary' : 'text-foreground'} font-semibold inline-flex items-center gap-1 ${isClickable ? 'group-hover:gap-2' : ''} transition-all`}>
                      {method.action}
                      {isClickable && <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />}
                    </span>
                  </div>
                </>
              );

              if (isClickable) {
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm card-glow group cursor-pointer"
                  >
                    {cardContent}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={method.title}
                  variants={fadeInUp}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm card-glow"
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="p-8 md:p-12 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              {isSubmitted ? (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-glow">
                    <CheckCircle2 className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground text-lg mb-10">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="text-primary" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold">Send us a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`h-12 rounded-xl bg-secondary/30 border-border/50 focus:border-primary/50 ${errors.name ? "border-destructive" : ""}`}
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`h-12 rounded-xl bg-secondary/30 border-border/50 focus:border-primary/50 ${errors.email ? "border-destructive" : ""}`}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or ask us anything..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`rounded-xl bg-secondary/30 border-border/50 focus:border-primary/50 resize-none ${errors.message ? "border-destructive" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm">{errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="xl" 
                      className="w-full sm:w-auto group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Teaser */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent rounded-3xl" />
        
        <motion.div 
          className="relative text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl font-bold mb-4"
          >
            Have questions?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-lg mb-8"
          >
            Check out our solutions page to learn more about what we offer, 
            or reach out directly — we're always happy to chat.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/solutions">
                Explore Solutions
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Contact;
