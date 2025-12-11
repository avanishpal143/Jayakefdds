import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Get Started Today
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Schedule your consultation and take the first step toward your new smile
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    3737 Moraga Ave, Suite B212<br />
                    San Diego, CA 92117, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:jay@jayakefdds.com"
                    className="text-gray-600 hover:text-pink-400 transition-colors"
                  >
                    jay@jayakefdds.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:jay@jayakefdds.com?subject=Consultation Request"
                className="flex-1 px-8 py-4 bg-gradient-to-r from-pink-200 to-pink-300 text-gray-800 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                Book Your Consultation
              </a>
              <a
                href="mailto:jay@jayakefdds.com?subject=Call Request"
                className="flex-1 px-8 py-4 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-gray-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                Request a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
