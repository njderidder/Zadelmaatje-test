// registerCloudCannon.ts
import { registerReactComponent } from "@cloudcannon/editable-regions/react";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProductScroll from "./components/ProductScroll";

// De namen hieronder gebruik je straks in data-component
registerReactComponent("hero", Hero);
registerReactComponent("features", Features);
registerReactComponent("navigation", Navigation);
registerReactComponent("footer", Footer);
registerReactComponent("productScroll", ProductScroll);

