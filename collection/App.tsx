// src/App.tsx of waar hij nu ook staat
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductScroll from './components/ProductScroll';
import Features from './components/Features';
import Footer from './components/Footer';
import { EditableComponent } from '@cloudcannon/editable-regions/react';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white bg-noise selection:bg-brand-accent selection:text-white">
      <Navigation />
      <main>
        {/* Component Editable Region voor de hele Hero */}
        <EditableComponent
          data-component="hero"
          data-prop='@file[src/constants.ts].HERO_COPY'
        >
          <Hero />
        </EditableComponent>

        <ProductScroll />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;

