import { Sparkles, Shield, Smile, Award, TrendingUp, Bone } from 'lucide-react';

export default function Procedure() {
  const benefits = [
    { icon: Sparkles, text: 'Same-day extractions + implant placement' },
    { icon: Shield, text: 'Fixed, non-removable hybrid bridge' },
    { icon: Smile, text: 'Restores natural bite & facial aesthetics' },
    { icon: Award, text: 'Eliminates dentures completely' },
    { icon: TrendingUp, text: 'High success rate' },
    { icon: Bone, text: 'Perfect for severe bone loss cases' }
  ];

  return (
    <section id="procedure" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            All-On-X Hybrid Implant Bridges
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            All-On-X is a modern full-arch restoration technique where all remaining teeth in one arch are removed, and 4 to 6 implants are placed strategically to support a strong, permanent, long-span bridge.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Benefits of All-On-X Treatment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-5 bg-gradient-to-br from-gray-50 to-pink-50/30 rounded-2xl hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-800" />
                    </div>
                    <p className="text-gray-700 font-medium leading-snug">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
