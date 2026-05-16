import type { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  Sparkles,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  Globe,
  BarChart3,
  Users,
  Palette,
  QrCode,
  Zap,
  Microchip,
  BookOpen,
  Mail,
  Link2,
  LayoutTemplate,
  CircuitBoard,
} from "lucide-react";

export type SolutionFeature = {
  icon: LucideIcon;
  text: string;
};

export type Solution = {
  id: string;
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  shortDescription: string;
  features: SolutionFeature[];
  link: string;
  linkText: string;
  gradient: string;
  bgGradient: string;
  featured?: boolean;
};

export const solutions: Solution[] = [
  {
    id: "education",
    icon: GraduationCap,
    badge: "Shyara Education Labs",
    title: "Simplified Electronics for Student Labs",
    shortDescription:
      "Development boards and FPGA kits in active design—affordable, curriculum-ready hardware for colleges and training labs.",
    description:
      "We're designing development boards and FPGA learning kits built for educational institutions—affordable, well-documented, and curriculum-ready. Join the waitlist at tech.shyara.co.in while we finalize the product line.",
    features: [
      { icon: CircuitBoard, text: "Student Development Boards" },
      { icon: Microchip, text: "FPGA Learning Kits" },
      { icon: BookOpen, text: "Curriculum-Ready Documentation" },
      { icon: Zap, text: "Waitlist — Products in Design Phase" },
    ],
    link: "https://tech.shyara.co.in",
    linkText: "Explore Shyara Education Labs",
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    featured: true,
  },
  {
    id: "invites",
    icon: Heart,
    badge: "Invites by Shyara",
    title: "Luxury Digital Wedding Invitations",
    shortDescription:
      "Self-serve wedding invite platform with beautiful templates, RSVP tracking, and a guest dashboard—one link for every guest.",
    description:
      "Create stunning digital wedding invitations with premium templates, RSVP tracking, guest management, and multi-event support. One beautiful link for all your guests—no app required.",
    features: [
      { icon: LayoutTemplate, text: "Premium Wedding Templates" },
      { icon: Mail, text: "RSVP & Guest Management" },
      { icon: Users, text: "Host Dashboard & Analytics" },
      { icon: Link2, text: "Shareable Link & Custom Domains" },
    ],
    link: "https://invitesbyshyara.com",
    linkText: "Explore Invites by Shyara",
    gradient: "from-rose-500 to-pink-400",
    bgGradient: "from-rose-500/10 via-pink-500/5 to-transparent",
    featured: true,
  },
  {
    id: "marketing",
    icon: TrendingUp,
    badge: "Shyara Marketing",
    title: "Digital Marketing & Growth",
    shortDescription:
      "Digital growth strategies, paid ads, websites, and GMB optimization that drive real results.",
    description:
      "Comprehensive digital marketing solutions that drive measurable growth. From SEO and paid advertising to websites and GMB optimization, we craft strategies that connect you with your ideal audience.",
    features: [
      { icon: Globe, text: "Search Engine Optimization (SEO)" },
      { icon: BarChart3, text: "Google & Meta Ads Management" },
      { icon: Users, text: "Social Media Marketing" },
      { icon: Zap, text: "Websites, Apps & GMB Optimization" },
    ],
    link: "https://marketing.shyara.co.in",
    linkText: "Explore Shyara Marketing",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
  },
  {
    id: "digital",
    icon: Sparkles,
    badge: "Shyara Digital",
    title: "Digital Invitations & Events",
    shortDescription:
      "Custom invitation videos, digital cards, and full invitation websites handcrafted for your celebration.",
    description:
      "Transform your celebrations with beautiful, shareable digital invitations. Custom video invites, invitation websites, RSVP systems, and event experiences—crafted for weddings, engagements, and every milestone.",
    features: [
      { icon: Palette, text: "Custom Invitation Design & Videos" },
      { icon: Users, text: "RSVP & Guest Management" },
      { icon: Zap, text: "Invitation Websites & Event Pages" },
      { icon: Globe, text: "Multi-language Support" },
    ],
    link: "https://digital.shyara.co.in",
    linkText: "Explore Shyara Digital",
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 via-purple-500/5 to-transparent",
  },
  {
    id: "bitex",
    icon: UtensilsCrossed,
    badge: "BiteX by Shyara",
    title: "Restaurant POS & Automation",
    shortDescription:
      "Smart restaurant POS with QR ordering, live analytics, and seamless operations.",
    description:
      "Smart restaurant management with QR-based ordering, real-time analytics, and seamless operations. Built for modern dining experiences.",
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
  },
];

export const featuredSolutions = solutions.filter((s) => s.featured);
export const coreSolutions = solutions.filter((s) => !s.featured);

export const footerSolutionLinks = [
  { name: "Digital Marketing", href: "https://marketing.shyara.co.in" },
  { name: "Digital Invitations (Custom)", href: "https://digital.shyara.co.in" },
  { name: "Wedding Invite Platform", href: "https://invitesbyshyara.com" },
  { name: "Restaurant POS", href: "https://bitex.shyara.co.in" },
  { name: "Education Labs", href: "https://tech.shyara.co.in" },
] as const;
