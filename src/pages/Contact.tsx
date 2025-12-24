import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
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
  CheckCircle2
} from "lucide-react";
import { z } from "zod";

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
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed inquiries and proposals.",
    action: "hello@shyara.co.in",
    href: "mailto:hello@shyara.co.in",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "India-based, serving globally.",
    action: "View on map",
    href: "#",
    color: "bg-orange-500/10 text-orange-500"
  }
];

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
            Get in Touch
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-display font-semibold mb-6"
          >
            Let's start a{" "}
            <span className="text-gradient">conversation</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-body-lg leading-relaxed"
          >
            Whether you have a project in mind or just want to explore possibilities, 
            we'd love to hear from you. No pressure, just clarity.
          </motion.p>
        </motion.div>
      </Section>

      {/* Contact Methods + Form */}
      <Section className="pt-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
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
              className="text-xl font-semibold mb-6"
            >
              Other Ways to Reach Us
            </motion.h2>

            {contactMethods.map((method) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={fadeInUp}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-200 group"
              >
                <div className={`w-11 h-11 rounded-lg ${method.color} flex items-center justify-center shrink-0`}>
                  <method.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium mb-1">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {method.action}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
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
              className="p-8 md:p-10 rounded-2xl bg-card border border-border"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-destructive" : ""}
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-destructive" : ""}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or ask us anything..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-destructive" : ""}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm">{errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} />
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
      <Section className="bg-card/30">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl font-semibold mb-4"
          >
            Have questions?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground mb-8"
          >
            Check out our solutions page to learn more about what we offer, 
            or reach out directly — we're always happy to chat.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button asChild variant="outline" size="lg">
              <Link to="/solutions">
                Explore Solutions
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Contact;
