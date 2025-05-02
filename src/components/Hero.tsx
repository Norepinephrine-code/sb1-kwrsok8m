import React from 'react';
import { Search } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/50"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 container mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
          Find Your Dream Property
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
          Discover exceptional properties for sale and rent across prime locations, 
          tailored to your lifestyle and preferences.
        </p>

        <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
              <select
                className="w-full px-6 py-4 focus:outline-none text-gray-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Property Type
                </option>
                <option value="house">House</option>
                <option value="condominium">Condominium</option>
                <option value="lot">Lot</option>
              </select>
            </div>
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
              <select
                className="w-full px-6 py-4 focus:outline-none text-gray-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Location
                </option>
                <option value="manila">Manila</option>
                <option value="cavite">Cavite</option>
                <option value="laguna">Laguna</option>
                <option value="batangas">Batangas</option>
              </select>
            </div>
            <div className="flex-1">
              <select
                className="w-full px-6 py-4 focus:outline-none text-gray-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Price Range
                </option>
                <option value="0-5000000">₱0 - ₱5,000,000</option>
                <option value="5000000-10000000">₱5,000,000 - ₱10,000,000</option>
                <option value="10000000-20000000">₱10,000,000 - ₱20,000,000</option>
                <option value="20000000+">₱20,000,000+</option>
              </select>
            </div>
            <button className="bg-blue-800 text-white px-6 py-4 flex items-center justify-center hover:bg-blue-900 transition-colors">
              <Search className="w-5 h-5 mr-2" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};