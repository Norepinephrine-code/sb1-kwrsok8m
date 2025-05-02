export type PropertyType = 'house' | 'condominium' | 'lot';
export type PropertyStatus = 'sale' | 'rent';
export type LocationType = 'manila' | 'cavite' | 'laguna' | 'batangas';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  status: PropertyStatus;
  type: PropertyType;
  location: LocationType;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  squareMeters: number;
  imageUrl: string;
  amenities?: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}