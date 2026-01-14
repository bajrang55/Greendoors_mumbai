export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  completionDate?: string;
  location?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // We'll map this to Lucide icons
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number; // 1-5
  avatarUrl?: string;
}
