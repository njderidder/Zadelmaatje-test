import { NavItem, FeatureItem } from './types';

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
  // Let op: deze video staat in de map 'videos'
  video: "/videos/tinyvid_optimized_zadelmaatje-Het-kussentje-waarbij-liefde-voorop-gaat.mp4",
  logo: "/images/Logo-zadelmaatje-400-x-100-px.png",
  images: {
    // Ik zag deze niet in je lijstje, dus heb even de stang-3 gepakt. 
    // Als je een andere landscape foto hebt geupload, pas de naam hieronder aan!
    productMain: "/images/zadelmaatje_amore_fietskussen_stang-3.jpg",
    productLandscape: "/images/zadelmaatje_amore_fietskussen_stang-3.jpg", 
    
    lifestyle1: "/images/IMG_6739-768x512.jpg",
    
    // Deze zag ik niet in je uploadlijst, check even of je deze hebt geupload, anders werkt hij niet!
    // Ik heb hem even op de IMG_6739 gezet als fallback.
    lifestyle2: "/images/IMG_6739-768x512.jpg", 
    
    founders: "/images/zadelmaatje-oprichters-768x432.webp",
    square1: "/images/zadelmaatje-museumplein-voorop-de-stang-vanmoof-300x300.png",
    square2: "/images/1-1-300x300.png",
    square3: "/images/zadelmaatje-amsterdam-fietsen-300x300.png",
    square4: "/images/2-2-300x300.png"
  }
};
