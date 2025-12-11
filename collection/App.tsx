import React, { Suspense } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

// 👇 We gebruiken lazy imports voor de onderdelen die 'onder de vouw' staan
const ProductScroll = React.lazy(() => import("../components/ProductScroll"));
const Features = React.lazy(() => import("../components/Features"));
const Footer = React.lazy(() => import("../components/Footer"));

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white bg-noise selection:bg-brand-accent selection:text-white">
      <Navigation />
      <main>
        {/* Hero blijft direct staan voor instant feedback */}
        <Hero />

        {/* 👇 Suspense zorgt dat de rest pas laadt als het nodig is */}
        <Suspense fallback={<div className="h-screen bg-brand-dark" />}>
          <ProductScroll />
          <Features />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
