import type React from 'react';

export interface Service {
  icon?: React.ReactNode;
  name: string;
  description?: string;
  price: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}
