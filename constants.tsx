import { 
  Bot, 
  MessageCircle, 
  Calendar, 
  Globe, 
  Zap, 
  Code, 
  Stethoscope, 
  Home, 
  Coffee, 
  GraduationCap, 
  ShoppingCart, 
  Dumbbell, 
  DollarSign, 
  Car, 
  Briefcase 
} from 'lucide-react';
import { Feature, Industry, PricingPlan, NavItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 'sales',
    title: 'AI Sales Agent',
    description: 'Nurture leads and close deals 24/7 without human intervention.',
    icon: DollarSign,
  },
  {
    id: 'support',
    title: 'AI Support Agent',
    description: 'Instant answers to customer queries, resolving 80% of tickets.',
    icon: MessageCircle,
  },
  {
    id: 'booking',
    title: 'AI Booking Agent',
    description: 'Seamlessly schedule appointments directly into your calendar.',
    icon: Calendar,
  },
  {
    id: 'whatsapp',
    title: 'AI WhatsApp Agent',
    description: 'Engage customers where they live—on their favorite chat app.',
    icon: MessageCircle,
  },
  {
    id: 'website',
    title: 'AI Website Agent',
    description: 'A smart widget that guides visitors and captures leads.',
    icon: Globe,
  },
  {
    id: 'custom',
    title: 'Custom Workflows',
    description: 'Tailored automation for your unique business logic.',
    icon: Zap,
  },
];

export const INDUSTRIES: Industry[] = [
  { name: 'Clinics', icon: Stethoscope },
  { name: 'Real Estate', icon: Home },
  { name: 'Hospitality', icon: Coffee },
  { name: 'Education', icon: GraduationCap },
  { name: 'E-Commerce', icon: ShoppingCart },
  { name: 'Fitness', icon: Dumbbell },
  { name: 'Finance', icon: DollarSign },
  { name: 'Automotive', icon: Car },
  { name: 'Enterprise', icon: Briefcase },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Essential',
    price: '$499',
    period: '/mo',
    features: ['1 AI Agent', 'Basic Support', 'Email Integration', 'Standard Analytics'],
    cta: 'Book Demo',
  },
  {
    name: 'Growth',
    price: '$999',
    period: '/mo',
    features: ['3 AI Agents', 'Priority Support', 'CRM Integration', 'Advanced Analytics', 'WhatsApp Support'],
    cta: 'Book Demo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited Agents', '24/7 Dedicated Support', 'Custom Integrations', 'White Labeling', 'On-Premise Deployment'],
    cta: 'Contact Sales',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    type: 'text',
    quote: "The lovely team at RJ Global has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction.",
    author: "Patrick Nawrocki",
    role: "UX Manager at Superhabits",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 2,
    type: 'video',
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
    author: "Pri Patel",
    role: "Product Designer at Lightdash",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 3,
    type: 'text',
    quote: "RJ Global has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
    author: "Rob West",
    role: "CEO of Kingdom Advisors",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 4,
    type: 'text',
    quote: "Implementing these AI agents was the best decision we made this year. Customer satisfaction is up 40% and our support team is finally sleeping. The ROI was immediate.",
    author: "Sarah Jenks",
    role: "COO at FinTech Flow",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 5,
    type: 'text',
    quote: "Simply mind-blowing. The way the AI handles complex queries felt indistinguishable from our best human agents. Truly next-level technology.",
    author: "Marcus Chen",
    role: "Director at Elevate Systems",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
  }
];