import React from 'react';

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface BonusItem {
  title: string;
  description: string;
  price: string;
  isFree: boolean;
  image?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  text: string;
  role?: string;
  image?: string;
  rating?: number;
}