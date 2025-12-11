import { NavItem, FeatureItem } from './types';

// 👇 Dit zorgt dat linkjes op GitHub Pages (/Zadelmaatje-test/...) ook werken!
const BASE = import.meta.env.BASE_URL;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Amore', href: '#product' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Universele bevestiging",
    description: "Perfect aansluitend op jouw e-bike. Dankzij de verstelbare klittenband-aansluiting makkelijk te bevestigen op o.a. VanMoof, Veloretti en Tenways.",
  },
  {
    title: "Weerbestendig",
    description: "Bestand tegen het onvoorspelbare Nederlandse weer. Door de water-resistant buitenhoes, HR-schuim en speciale stiksels.",
  },
  {
    title: "Zacht, zachter, zachtst",
    description: "De ultieme bijrijder ervaring door het comfortabele HR-schuim. Geliefd door de ondersteuning, veerkracht en lange levensduur.",
  },
  {
    title: "Met vertrouwen op weg",
    description: "De antislip laag aan de binnenkant en de stevige Velcro-aansluiting verzekert een soepele rit met z’n tweeën.",
  }
];

export const HERO_COPY = {
  pretitle: "Born in Amsterdam",
  title: "Samen op weg.",
  subtitle: "Safe, Soft & Stylish.",
  description: "Van harde fietsstang naar comfortabele zitplek. zadelmaatje maakt van elke rit een onvergetelijk moment.",
  ctaPrimary: "Pre-order nu",
  ctaSecondary: "Bekijk video"
};

export const ASSETS = {
  // Let op: 'BASE' plakt automatisch de juiste map ervoor (of niets op Vercel)
  // En: Ik heb de bestandsnamen aangepast aan jouw screenshot!
  
  video: `${BASE}videos/tinyvid_optimized_zadelmaatje-Het-kussentje-waarbij-liefde-voorop-gaat.mp4`,
  logo: `${BASE}images/Logo-zadelmaatje-400-x-100-px.png`,
  
  images: {
    // 'stang-3' is de enige die je hebt geupload als main product shot
    productMain: `${BASE}images/zadelmaatje_amore_fietskussen_stang-3.jpg`,
    productLandscape: `${BASE}images/zadelmaatje_amore_fietskussen_stang-3.jpg`, 
    
    lifestyle1: `${BASE}images/IMG_6739-768x512.jpg`,
    lifestyle2: `${BASE}images/Website-afbeelding-2-1-600x400.png`, 
    
    founders: `${BASE}images/zadelmaatje-oprichters-768x432.webp`,
    
    // Deze hadden allemaal -300x300 in de naam in jouw screenshot
    square1: `${BASE}images/zadelmaatje-museumplein-voorop-de-stang-vanmoof-300x300.png`,
    square2: `${BASE}images/1-1-300x300.png`,
    square3: `${BASE}images/zadelmaatje-amsterdam-fietsen-300x300.png`,
    square4: `${BASE}images/2-2-300x300.png`
  }
};
