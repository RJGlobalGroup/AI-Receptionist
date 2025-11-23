export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Industry {
  name: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: number;
  type: 'text' | 'video';
  quote?: string;
  author: string;
  role: string;
  avatar: string;
  thumbnail?: string;
}