import React, { Suspense } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

// 👇 Verwijder deze 'harde' imports
// import ProductScroll from "../components/ProductScroll";
// import Features from "../components/Features";
// import Footer from "../components/Footer";

// 👇 En vervang ze door deze 'lazy' imports:
const ProductScroll = React.lazy(() => import("../components/ProductScroll"));
const Features = React.lazy(() => import("../components/Features"));
const Footer = React.lazy(() => import("../components/Footer"));

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white bg-noise selection:bg-brand-accent selection:text-white">
      <Navigation />
      <main>
        {/* Hero blijft direct staan, want die moet meteen zichtbaar zijn */}
        <Hero />

        {/* 👇 Wrap de zware onderdelen in Suspense */}
        <Suspense fallback={<div className="h-screen bg-brand-dark" />}>
          <ProductScroll />
          <Features />
        </Suspense>
      </main>
      
      {/* 👇 Footer mag ook lazy loaded worden */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
