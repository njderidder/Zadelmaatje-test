import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProductScroll from "../components/ProductScroll";
import Features from "../components/Features";
import Footer from "../components/Footer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "editable-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "data-prop"?: string;
        "data-component"?: string;
      };
    }
  }
}

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white bg-noise selection:bg-brand-accent selection:text-white">
      <Navigation />
      <main>
        {/* Hero is nu 1 component editable region met hero.json als data */}
        <editable-component data-prop="@file[hero.json]" data-component="hero">
          <Hero />
        </editable-component>

        <ProductScroll />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;



