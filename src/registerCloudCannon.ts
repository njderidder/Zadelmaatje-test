import { registerReactComponent } from "@cloudcannon/editable-regions/react";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProductScroll from "./components/ProductScroll";

registerReactComponent("HeroComponent", Hero);
registerReactComponent("FeaturesComponent", Features);
registerReactComponent("NavigationComponent", Navigation);
registerReactComponent("FooterComponent", Footer);
registerReactComponent("ProductScrollComponent", ProductScroll);
