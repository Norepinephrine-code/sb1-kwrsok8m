import React from 'react';
import { MapPin, Bed, Bath, SquareCode } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number, status: 'sale' | 'rent') => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(price) + (status === 'rent' ? '/month' : '');
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-56 object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-blue-800 text-white px-3 py-1 m-2 rounded text-sm font-medium capitalize">
          For {property.status}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{property.title}</h3>
        <div className="flex items-center mb-3">
          <MapPin className="w-4 h-4 text-gray-500 mr-1" />
          <span className="text-gray-500 text-sm">{property.address}</span>
        </div>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-2">{property.description}</p>
        <div className="flex flex-wrap gap-4 mb-4">
          {property.bedrooms && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 text-blue-800 mr-1" />
              <span className="text-gray-700">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 text-blue-800 mr-1" />
              <span className="text-gray-700">{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <SquareCode className="w-4 h-4 text-blue-800 mr-1" />
            <span className="text-gray-700">{property.squareMeters} m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-blue-800 font-bold text-xl">
            {formatPrice(property.price, property.status)}
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};