import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Am I a candidate for All-On-X implants?',
      answer: 'Yes, if you have missing, loose, or failing teeth or are tired of dentures.'
    },
    {
      question: 'How many implants are needed for a full arch?',
      answer: 'Typically 4–6 implants depending on bone structure.'
    },
    {
      question: 'Will I receive teeth the same day?',
      answer: 'Yes, a temporary fixed bridge is placed the same day as surgery.'
    },
    {
      question: 'Does the procedure hurt?',
      answer: "It's performed under anesthesia for maximum comfort."
    },
    {
      question: 'How long does the final hybrid bridge last?',
      answer: 'With proper care, zirconia/titanium bridges can last decades.'
    },
    {
      question: 'What if I have bone loss?',
      answer: 'The All-On-X technique is ideal for patients with reduced bone volume.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about All-On-X implants
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-pink-50/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
