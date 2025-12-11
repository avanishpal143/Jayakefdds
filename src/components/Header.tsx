import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex-shrink-0 p-2">
            <img
              src="/_jayakefdds.png"
              alt="Jayakefdds"
              className="h-24 sm:h-28 lg:h-32 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('procedure')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Procedure
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              FAQs
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-gradient-to-r from-pink-200 to-pink-300 text-gray-800 font-medium rounded-full hover:shadow-lg transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-base font-medium text-gray-700 hover:text-gray-900">
              About
            </button>
            <button onClick={() => scrollToSection('procedure')} className="block w-full text-left text-base font-medium text-gray-700 hover:text-gray-900">
              Procedure
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-base font-medium text-gray-700 hover:text-gray-900">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left text-base font-medium text-gray-700 hover:text-gray-900">
              Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-base font-medium text-gray-700 hover:text-gray-900">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-base font-medium text-gray-700 hover:text-gray-900">
              FAQs
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-base font-medium text-gray-700 hover:text-gray-900">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 bg-gradient-to-r from-pink-200 to-pink-300 text-gray-800 font-medium rounded-full hover:shadow-lg transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
