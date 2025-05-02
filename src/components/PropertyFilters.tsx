import React, { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { LocationType, PropertyType } from '../types';

interface PropertyFiltersProps {
  onFilterChange: (filters: {
    propertyType?: PropertyType | 'all';
    location?: LocationType | 'all';
    priceRange?: string;
    search?: string;
  }) => void;
}

export const PropertyFilters: React.FC<PropertyFiltersProps> = ({ onFilterChange }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    propertyType: 'all',
    location: 'all',
    priceRange: 'all',
    search: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-grow relative">
            <input
              type="text"
              name="search"
              placeholder="Search by property name or address..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.search}
              onChange={handleInputChange}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <button
            type="button"
            className="md:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
            onClick={toggleFilters}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
            {isFiltersOpen ? (
              <ChevronUp className="w-4 h-4 ml-2" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-2" />
            )}
          </button>

          <div
            className={`${
              isFiltersOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0`}
          >
            <select
              name="propertyType"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.propertyType}
              onChange={handleInputChange}
            >
              <option value="all">Property Type</option>
              <option value="house">House</option>
              <option value="condominium">Condominium</option>
              <option value="lot">Lot</option>
            </select>

            <select
              name="location"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.location}
              onChange={handleInputChange}
            >
              <option value="all">Location</option>
              <option value="manila">Manila</option>
              <option value="cavite">Cavite</option>
              <option value="laguna">Laguna</option>
              <option value="batangas">Batangas</option>
            </select>

            <select
              name="priceRange"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.priceRange}
              onChange={handleInputChange}
            >
              <option value="all">Price Range</option>
              <option value="0-5000000">₱0 - ₱5,000,000</option>
              <option value="5000000-10000000">₱5,000,000 - ₱10,000,000</option>
              <option value="10000000-20000000">₱10,000,000 - ₱20,000,000</option>
              <option value="20000000+">₱20,000,000+</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <Search className="w-4 h-4 mr-2" />
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};