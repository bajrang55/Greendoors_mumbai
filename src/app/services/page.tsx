import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';

export const metadata = {
    title: 'Our Services | Greendoors',
    description: 'Explore our comprehensive painting services including interior, exterior, and commercial solutions.',
};

export default function ServicesPage() {
    return (
        <div className="bg-white pb-20">
            {/* Header */}
            <div className="bg-gray-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We offer a wide range of professional painting services tailored to meet your specific needs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center p-8 md:p-12 rounded-3xl bg-white shadow-xl border border-gray-100 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                    <span className="font-bold text-2xl">{service.title[0]}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {service.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
                                >
                                    Get a Quote
                                </Link>
                            </div>

                            <div className="w-full md:w-1/2 bg-gray-100 rounded-3xl h-[300px] md:h-[400px] relative overflow-hidden flex items-center justify-center">
                                {/* Placeholder or dynamic image if available in the future */}
                                <span className="text-gray-400 font-medium">Service Application Image</span>
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
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
