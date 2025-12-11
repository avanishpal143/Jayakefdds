import { Building2, MapPin, Microscope, Award, TrendingUp, Wrench, Gem } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Building2,
      text: 'Surgically focused full-arch specialist'
    },
    {
      icon: MapPin,
      text: 'Located in San Diego, serving advanced implant cases'
    },
    {
      icon: Microscope,
      text: 'Advanced 3D digital planning'
    },
    {
      icon: Award,
      text: '200+ full-arch implant cases completed'
    },
    {
      icon: TrendingUp,
      text: 'High success rate with same-day solutions'
    },
    {
      icon: Wrench,
      text: 'Expertise in complex & failing dentition cases'
    },
    {
      icon: Gem,
      text: 'Premium hybrid prosthetics for long-term comfort'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Patients Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated expertise in full-arch implant solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-pink-50/30 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed pt-2">
                    {reason.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
