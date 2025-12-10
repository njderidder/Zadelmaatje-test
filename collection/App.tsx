import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProductScroll from "./components/ProductScroll";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { EditableComponent } from "@cloudcannon/editable-regions/react";

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white bg-noise selection:bg-brand-accent selection:text-white">
      <Navigation />
      <main>
        {/* Hero als component editable region */}
        <EditableComponent data-component="hero">
          <Hero />
        </EditableComponent>

        {/* De rest kan later ook editable gemaakt worden */}
        <ProductScroll />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
