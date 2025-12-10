import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProductScroll from "../components/ProductScroll";
import Features from "../components/Features";
import Footer from "../components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white bg-noise selection:bg-brand-accent selection:text-white">
      <Navigation />
      <main>
        {/* Hero gewoon direct renderen */}
        <Hero />

        <ProductScroll />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
