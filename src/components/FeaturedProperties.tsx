import React from 'react';
import { PropertyGrid } from './PropertyGrid';
import { Property } from '../types';

interface FeaturedPropertiesProps {
  properties: Property[];
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ properties }) => {
  // Filter to only show featured properties
  const featuredProperties = properties.filter((property) => property.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of handpicked properties that showcase the best
            in location, design, and amenities.
          </p>
        </div>

        <PropertyGrid properties={featuredProperties} />

        <div className="mt-12 text-center">
          <button className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};