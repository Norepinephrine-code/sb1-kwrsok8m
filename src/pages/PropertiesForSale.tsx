import React, { useState } from 'react';
import { PropertyFilters } from '../components/PropertyFilters';
import { PropertyGrid } from '../components/PropertyGrid';
import { properties } from '../data/properties';
import { LocationType, Property, PropertyType } from '../types';

export const PropertiesForSalePage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(
    properties.filter((property) => property.status === 'sale')
  );

  const handleFilterChange = (filters: {
    propertyType?: PropertyType | 'all';
    location?: LocationType | 'all';
    priceRange?: string;
    search?: string;
  }) => {
    let result = properties.filter((property) => property.status === 'sale');

    if (filters.propertyType && filters.propertyType !== 'all') {
      result = result.filter(
        (property) => property.type === filters.propertyType
      );
    }

    if (filters.location && filters.location !== 'all') {
      result = result.filter(
        (property) => property.location === filters.location
      );
    }

    if (filters.priceRange && filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (min && !max) {
        // For the "1000000+" case
        result = result.filter((property) => property.price >= min);
      } else if (min && max) {
        result = result.filter(
          (property) => property.price >= min && property.price <= max
        );
      }
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(searchLower) ||
          property.description.toLowerCase().includes(searchLower) ||
          property.address.toLowerCase().includes(searchLower)
      );
    }

    setFilteredProperties(result);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Properties For Sale
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our extensive collection of properties for sale, from modern
            city apartments to spacious family homes and valuable land
            investments.
          </p>
        </div>

        <PropertyFilters onFilterChange={handleFilterChange} />

        {filteredProperties.length > 0 ? (
          <PropertyGrid properties={filteredProperties} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No properties found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};