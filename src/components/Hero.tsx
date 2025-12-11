export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcedure = () => {
    const element = document.getElementById('procedure');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-pink-50/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Transform Your Smile with<br />
            <span className="bg-gradient-to-r from-pink-200 to-pink-300 bg-clip-text text-transparent">
              All-On-X Hybrid Implant Bridges
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Advanced surgical solutions to restore full arches using 4–6 implants supporting a long-span, fixed hybrid bridge. Safe. Permanent. Life-changing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-100 to-pink-200 text-gray-800 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 border border-pink-200/30"
            >
              Book Your Consultation
            </button>
            <button
              onClick={scrollToProcedure}
              className="w-full sm:w-auto px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-full border-2 border-gray-200 hover:border-pink-200 hover:shadow-lg transition-all duration-300"
            >
              Learn About All-On-X
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
