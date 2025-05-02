import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/85"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Ready to Find Your Dream Property?
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Our team of expert real estate professionals is ready to guide you
          through every step of the process.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
            Browse Properties
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <button className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};