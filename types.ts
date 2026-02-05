import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface ContactInfo {
  brand: string;
  distributor: string;
  address: string;
  phone: string;
  email: string;
  instagram: string;
  tiktok: string;
  messenger: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price?: string;
  badge?: string;
  features?: string[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export enum SectionId {
  HERO = 'hero',
  FEATURES = 'features',
  PRODUCTS = 'products',
  LOCATION = 'location',
  CONTACT = 'contact',
}

// Extend JSX namespace to support React Three Fiber elements globally
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      meshPhysicalMaterial: any;
      cylinderGeometry: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      primitive: any;
      directionalLight: any;
    }
  }
}