import { Layers, Scissors, Link, Navigation, Bone, Gem } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Layers,
      title: 'All-On-X Full Arch Hybrid Bridges',
      description: 'Complete rehabilitation of upper or lower arches using 4–6 implants.'
    },
    {
      icon: Scissors,
      title: 'Same-Day Teeth Extractions',
      description: 'Remove all compromised teeth in one visit.'
    },
    {
      icon: Link,
      title: 'Implant-Supported Long-Span Bridges',
      description: 'Permanent bridges for full-mouth stability and comfort.'
    },
    {
      icon: Navigation,
      title: 'Guided Implant Surgery',
      description: '3D planning + fully guided implant placement for accuracy.'
    },
    {
      icon: Bone,
      title: 'Bone Grafting & Sinus Procedures',
      description: 'For patients needing additional bone support.'
    },
    {
      icon: Gem,
      title: 'Hybrid Zirconia and Titanium Bridges',
      description: 'Premium materials ensuring high durability and excellent aesthetics.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive surgical dental implant solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-100/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
