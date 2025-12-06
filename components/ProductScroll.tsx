import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../constants';

const ProductScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-brand-dark" id="product">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-10 md:gap-20 px-6 md:px-20 items-center">
            
            {/* Intro Text */}
            <div className="min-w-[90vw] md:min-w-[40vw] flex flex-col justify-center">
                 <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-none">
                    Pijnlijke billen <br />
                    <span className="text-brand-accent">verleden tijd.</span>
                </h2>
                <p className="text-xl text-white/60 max-w-md">
                    Samen op de fiets. Onderweg naar nieuwe herinneringen. Maar voorop de stang? Instabiel, hard en ongemakkelijk.
                </p>
            </div>

            {/* Slide 1 - Lifestyle */}
            <div className="min-w-[85vw] md:min-w-[60vw] relative group">
                <div className="aspect-[16/9] rounded-sm overflow-hidden bg-zinc-900 relative">
                     <img 
                        src={ASSETS.images.lifestyle1}
                        alt="Samen op weg" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-10 flex flex-col justify-end">
                        <h3 className="text-4xl font-bold text-white mb-2">Samen op weg.</h3>
                        <p className="text-white/70 max-w-md font-light">Comfortabel. Stijlvol. Samen. Elke rit een beleving.</p>
                    </div>
                </div>
            </div>

             {/* Slide 2 - Product Detail */}
            <div className="min-w-[85vw] md:min-w-[50vw] relative group">
                <div className="aspect-[3/4] rounded-sm overflow-hidden bg-zinc-900 relative">
                     <img 
                        src={ASSETS.images.productMain}
                        alt="Product Detail" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-10 flex flex-col justify-end">
                        <h3 className="text-4xl font-bold text-white mb-2">Perfecte match</h3>
                        <p className="text-white/70 max-w-md font-light">Minimalistisch en slim design. Past bij elke urban e-bike. Matte look met bordeauxrode accenten.</p>
                    </div>
                </div>
            </div>

            {/* Slide 3 - Grid of images */}
            <div className="min-w-[90vw] md:min-w-[70vw] grid grid-cols-2 gap-4">
                 <img src={ASSETS.images.square1} className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 1" />
                 <img src={ASSETS.images.square2} className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 2" />
                 <img src={ASSETS.images.square3} className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 3" />
                 <img src={ASSETS.images.square4} className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 4" />
            </div>

             {/* Slide 4 - Founders */}
            <div className="min-w-[85vw] md:min-w-[60vw] relative group">
                <div className="aspect-[16/9] rounded-sm overflow-hidden bg-zinc-900 relative">
                     <img 
                        src={ASSETS.images.founders}
                        alt="Team zadelmaatje" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-10 flex flex-col justify-end">
                        <h3 className="text-4xl font-bold text-white mb-2">Team zadelmaatje</h3>
                        <p className="text-white/70 max-w-lg font-light italic">
                            "Een comfy zitplek op de fietsstang voor je maatjes of soulmate bestond nog niet. Tot nu toe."
                        </p>
                        <p className="text-brand-accent mt-2 text-sm font-bold uppercase tracking-widest">Liefs, Jafeth, Tash en Floris</p>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="min-w-[80vw] md:min-w-[40vw] flex flex-col justify-center px-10">
                <h2 className="text-5xl font-bold text-white mb-6">
                    Klaar voor de rit?
                </h2>
                <button className="bg-brand-accent text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 self-start">
                    Pre-order nu
                </button>
            </div>
        </motion.div>

        {/* Floating progress indicator */}
        <motion.div 
            style={{ scaleX: scrollYProgress, opacity }} 
            className="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent origin-left" 
        />
      </div>
    </section>
  );
};

export default ProductScroll;