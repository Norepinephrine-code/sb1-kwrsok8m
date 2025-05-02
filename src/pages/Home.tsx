import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProperties } from '../components/FeaturedProperties';
import { ServiceSection } from '../components/ServiceSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { CallToAction } from '../components/CallToAction';
import { properties } from '../data/properties';
import { services } from '../data/services';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties properties={properties} />
      <ServiceSection services={services} />
      <TestimonialSection />
      <CallToAction />
    </div>
  );
};