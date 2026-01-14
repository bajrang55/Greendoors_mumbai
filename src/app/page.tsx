import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
            alt="Hero Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Color Your World With <br />
            <span className="text-blue-500">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Premium painting services tailored to your style. We bring life to your residential and commercial spaces in Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From detailed interior work to large-scale commercial projects, we handle it all with precision and care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                {/* Icons would ideally differ, using a simple mapping or Lucide here dynamically if we passed components */}
                <span className="font-bold text-xl">{service.title[0]}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 2).map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle2 size={16} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80"
                alt="Painter working"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Mumbai Chooses <br /><span className="text-blue-600">Greendoors</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We don&apos;t just paint walls; we transform environments. Our commitment to quality and customer satisfaction sets us apart.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Professional Team', desc: 'Vetted, trained, and insured painters.' },
                  { title: 'Premium Materials', desc: 'We assume use top-tier paints like Asian Paints Royale & Dulux.' },
                  { title: 'On-Time Completion', desc: 'Strict adherence to timelines and schedules.' },
                  { title: 'Dust-Free Experience', desc: 'Advanced masking and cleaning post-work.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600">Take a look at some of our recent transformations.</p>
          </div>
          <Link href="/projects" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700">
            View All Projects <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="group rounded-2xl overflow-hidden cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold border border-white px-4 py-2 rounded-full">View Details</span>
                </div>
              </div>
              <div className="pt-4">
                <span className="text-orange-500 text-sm font-bold tracking-wider uppercase">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-left">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed opacity-90">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm opacity-70">{testimonial.role || 'Client'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get in touch with us today for a free consultation and quote. We&apos;ll help you bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
