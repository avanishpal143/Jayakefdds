import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Procedure from './components/Procedure';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/30 via-pink-50/20 to-pink-100/40">
      <Header />
      <main>
        <Hero />
        <About />
        <Procedure />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
