import React, { useState, useEffect } from 'react';
import { Home, Search, BookOpen, Mail, Menu, X } from 'lucide-react';
import { Link } from './Link';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Home className={`w-6 h-6 ${isScrolled ? 'text-blue-800' : 'text-white'}`} />
          <span className={`text-xl font-serif font-bold ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
            EstateVue
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-amber-300'
            }`}
          >
            Home
          </Link>
          <Link
            href="/properties/sale"
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-amber-300'
            }`}
          >
            For Sale
          </Link>
          <Link
            href="/properties/rent"
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-amber-300'
            }`}
          >
            For Rent
          </Link>
          <Link
            href="/services"
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-amber-300'
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-amber-300'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/properties/sale"
              className="font-medium text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              For Sale
            </Link>
            <Link
              href="/properties/rent"
              className="font-medium text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              For Rent
            </Link>
            <Link
              href="/services"
              className="font-medium text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="font-medium text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};