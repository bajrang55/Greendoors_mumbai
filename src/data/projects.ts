import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'Luxury Villa Makeover',
        description: 'Complete interior and exterior renovation for a modern villa in Bandra.',
        imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
        category: 'Residential',
        location: 'Bandra, Mumbai',
        completionDate: '2025-12'
    },
    {
        id: '2',
        title: 'Corporate Office Revamp',
        description: 'Modern minimalist design for a tech startup office space.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
        category: 'Commercial',
        location: 'BKC, Mumbai',
        completionDate: '2025-11'
    },
    {
        id: '3',
        title: 'Heritage Home Restoration',
        description: 'Careful restoration of a heritage property preserving its original charm.',
        imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef2cf?auto=format&fit=crop&q=80',
        category: 'Restoration',
        location: 'Colaba, Mumbai',
        completionDate: '2025-10'
    }
];
