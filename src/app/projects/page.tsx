import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';

export const metadata = {
    title: 'Our Projects | Greendoors',
    description: 'View our portfolio of completed residential and commercial painting projects.',
};

export default function ProjectsPage() {
    return (
        <div className="bg-white pb-20">
            {/* Header */}
            <div className="bg-gray-900 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        A showcase of our finest work, delivering excellence across Mumbai.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Simple Filter mock (can be functional later) */}
                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    {['All', 'Residential', 'Commercial', 'Restoration'].map((cat) => (
                        <button
                            key={cat}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${cat === 'All'
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-medium">View Project Details</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-blue-600 text-xs font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <span className="text-gray-400 text-xs">{project.completionDate}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
                                    📍 {project.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link href="/" className="text-gray-500 hover:text-gray-900 flex items-center justify-center gap-2 font-medium">
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
