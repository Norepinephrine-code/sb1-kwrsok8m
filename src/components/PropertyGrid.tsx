import React from 'react';
import { PropertyCard } from './PropertyCard';
import { Property, PropertyStatus } from '../types';

interface PropertyGridProps {
  properties: Property[];
  status?: PropertyStatus;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, status }) => {
  // Filter properties by status if one is specified
  const filteredProperties = status
    ? properties.filter((property) => property.status === status)
    : properties;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};