import { Scan, FileText, Scissors, Link, Gem, Heart } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Scan,
      title: 'Consultation & 3D Scan',
      description: 'Comprehensive oral evaluation + CBCT scan to plan implant positions.'
    },
    {
      icon: FileText,
      title: 'Treatment Planning',
      description: 'Customized surgical plan is created using digital implant design systems.'
    },
    {
      icon: Scissors,
      title: 'Same-Day Extractions & Implants',
      description: 'All damaged teeth are extracted, and implants are placed in one visit.'
    },
    {
      icon: Link,
      title: 'Temporary Fixed Bridge Placement',
      description: 'A temporary fixed bridge is attached immediately (no dentures).'
    },
    {
      icon: Gem,
      title: 'Final Hybrid Bridge Fabrication',
      description: 'A long-span zirconia/titanium hybrid bridge is made to fit your smile.'
    },
    {
      icon: Heart,
      title: 'Follow-Up & Maintenance',
      description: 'Regular care ensures long-term implant success.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How the All-On-X Process Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A streamlined 6-step journey to your new smile
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl flex items-center justify-center text-xl font-bold text-gray-800">
                        {index + 1}
                      </div>
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
