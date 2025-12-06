import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export enum SectionType {
  HERO = 'HERO',
  PRODUCT = 'PRODUCT',
  FEATURES = 'FEATURES',
  LIFESTYLE = 'LIFESTYLE',
  FOOTER = 'FOOTER',
}