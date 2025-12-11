import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'James L.',
      location: 'San Diego',
      quote: 'After struggling with dentures for years, All-On-X changed my life. I finally smile confidently again.'
    },
    {
      name: 'Sophia R.',
      location: 'California',
      quote: 'The entire surgical process was smooth. I woke up with a brand new set of teeth the same day.'
    },
    {
      name: 'Michael D.',
      location: 'La Jolla',
      quote: 'The hybrid bridge feels completely natural. Chewing is effortless now.'
    },
    {
      name: 'Ariana P.',
      location: 'San Diego',
      quote: 'Best clinic in San Diego for full arch implants. Truly life-changing results.'
    },
    {
      name: 'Carlos E.',
      location: 'Pacific Beach',
      quote: 'The team explained everything clearly and my recovery was easier than expected.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Patient Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients who transformed their smiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-pink-400" />
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-pink-300 text-pink-300" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
