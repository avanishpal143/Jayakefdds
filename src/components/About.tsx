import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const conditions = [
    'Severe tooth loss',
    'Failing dentition',
    'Decayed or broken teeth',
    'Ill-fitting dentures'
  ];

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We are a surgically focused dental practice dedicated to providing advanced full-mouth rehabilitation using All-On-X Hybrid Implant Bridges. Our team specializes in treating patients dealing with:
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-lg border border-pink-100/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-300 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            Using state-of-the-art surgical techniques, guided implant placement, and custom hybrid zirconia/titanium bridges, we restore complete dental arches with unmatched precision and predictability.
          </p>
        </div>
      </div>
    </section>
  );
}
