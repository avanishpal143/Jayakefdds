export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-pink-50/40 to-pink-100/60 text-gray-800 py-20 border-t border-pink-100/50 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-pink-200/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-100 hover:shadow-3xl hover:scale-105 transition-all duration-500">
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-2xl bg-white shadow-inner">
                <img
                  src="/_jayakefdds.png"
                  alt="Jayakefdds"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-800 font-bold text-xl mb-2">Jayakefdds</h3>
              <p className="text-pink-600 font-medium text-base">Professional Dental Care</p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-4">
            <div className="bg-white/60 backdrop-blur-sm px-8 py-6 rounded-3xl shadow-xl border border-pink-200/50 hover:bg-white/80 transition-all duration-300">
              <p className="text-gray-800 font-bold text-lg mb-3">
                📍 San Diego, California
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                3737 Moraga Ave, Suite B212<br />
                San Diego, CA 92117, USA
              </p>
            </div>
            <p className="text-gray-600 text-sm font-medium mt-6">
              © 2024 Jayakefdds. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
