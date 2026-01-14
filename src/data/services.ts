import { Service } from '@/types';

export const services: Service[] = [
    {
        id: 'residential-interior',
        title: 'Residential Interior',
        description: 'Transform your living space with our premium interior painting services. We pay attention to every detail.',
        iconName: 'Home',
        features: ['Wall Preparation', 'Colour Consultation', 'Premium Paints', 'Furniture Protection']
    },
    {
        id: 'residential-exterior',
        title: 'Residential Exterior',
        description: 'Boost your curb appeal and protect your home from the elements with our durable exterior finishes.',
        iconName: 'Sun',
        features: ['Weather-resistant Coatings', 'Deck Staining', 'Surface Cleaning', 'Trim Painting']
    },
    {
        id: 'commercial',
        title: 'Commercial Painting',
        description: 'Professional painting solutions for offices, retail spaces, and industrial facilities.',
        iconName: 'Building',
        features: ['Minimal Disruption', 'Safety Compliance', 'Large-scale Projects', 'Maintenance Programs']
    },
    {
        id: 'consultation',
        title: 'Colour Consultation',
        description: 'Expert advice to help you choose the perfect palette for your space.',
        iconName: 'Palette',
        features: ['Trend Analysis', 'Sample Testing', 'Digital Visualization', 'Lighting Assessment']
    }
];
