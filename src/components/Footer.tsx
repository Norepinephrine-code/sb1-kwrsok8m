import React from 'react';
import { Home, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Link } from './Link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="w-6 h-6" />
              <span className="text-xl font-serif font-bold">EstateVue</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-xs">
              Your trusted partner in the real estate market, helping you find
              your dream property since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-blue-100 hover:text-amber-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/sale"
                  className="text-blue-100 hover:text-amber-300 transition-colors"
                >
                  Properties for Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/rent"
                  className="text-blue-100 hover:text-amber-300 transition-colors"
                >
                  Properties for Rent
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-blue-100 hover:text-amber-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-100 hover:text-amber-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-amber-400" />
                <span className="text-blue-100">info@estatevue.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-amber-400" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <Home className="w-5 h-5 mr-3 mt-0.5 text-amber-400" />
                <span className="text-blue-100">
                  123 Real Estate Avenue,<br />
                  Property City, PC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} EstateVue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};