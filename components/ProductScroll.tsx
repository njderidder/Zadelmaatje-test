import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import productData from '../data/pages/home/product.json';

// Haal de Base URL op voor GitHub Pages
const BASE = import.meta.env.BASE_URL;

// Helper om te zorgen dat we geen dubbele slashes krijgen als BASE '/' is
const getImg = (path: string) => `${BASE}${path}`.replace('//', '/');

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
                    <span data-editable="text" data-prop="@file[/data/pages/home/product.json].introTitleLine1">{productData.introTitleLine1}</span> <br />
                    <span className="text-brand-accent" data-editable="text" data-prop="@file[/data/pages/home/product.json].introTitleHighlight">{productData.introTitleHighlight}</span>
                </h2>
                <p className="text-xl text-white/60 max-w-md" data-editable="text" data-prop="@file[/data/pages/home/product.json].introDescription">
                    {productData.introDescription}
                </p>
            </div>

            {/* Slide 1 - Lifestyle */}
            <div className="min-w-[85vw] md:min-w-[60vw] relative group">
                <div className="aspect-square md:aspect-[16/9] rounded-sm overflow-hidden bg-zinc-900 relative">
                     <img 
                        src={getImg(productData.slide1Image)}
                        alt="Samen op weg" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        data-editable="image"
                        data-prop="@file[/data/pages/home/product.json].slide1Image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 md:p-10 flex flex-col justify-end">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2" data-editable="text" data-prop="@file[/data/pages/home/product.json].slide1Title">
    {productData.slide1Title}</h3>
                        <p className="text-white/70 max-w-md font-light text-sm md:text-base" data-editable="text" data-prop="@file[/data/pages/home/product.json].slide1Description">
    {productData.slide1Description}</p>
                    </div>
                </div>
            </div>

             {/* Slide 2 - Product Detail */}
            <div className="min-w-[85vw] md:min-w-[50vw] relative group">
                <div className="aspect-[3/4] rounded-sm overflow-hidden bg-zinc-900 relative">
                     <img 
                        src={getImg(productData.slide2Image)}
                        alt="Product Detail" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                        data-editable="image"
                        data-prop="@file[/data/pages/home/product.json].slide2Image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-10 flex flex-col justify-end">
                        <h3 className="text-4xl font-bold text-white mb-2" data-editable="text" data-prop="@file[/data/pages/home/product.json].slide2Title">{productData.slide2Title}</h3>
                        <p className="text-white/70 max-w-md font-light" data-editable="text" data-prop="@file[/data/pages/home/product.json].slide2Description">{productData.slide2Description}</p>
                    </div>
                </div>
            </div>

            {/* Slide 3 - Grid of images */}
            <div className="min-w-[90vw] md:min-w-[70vw] grid grid-cols-2 gap-4">
                 <img src={getImg(productData.grid1)} className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 1" data-editable="image" data-prop="@file[/data/pages/home/product.json].grid1" />
                 <img src={getImg(productData.grid2)} className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 2" data-editable="image" data-prop="@file[/data/pages/home/product.json].grid2" />
                 <img src={getImg(productData.grid3)} className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 3" data-editable="image" data-prop="@file[/data/pages/home/product.json].grid3" />
                 <img src={getImg(productData.grid4)} className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 4" data-editable="image" data-prop="@file[/data/pages/home/product.json].grid4" />
            </div>

             {/* Slide 4 - Founders */}
            <div className="min-w-[85vw] md:min-w-[60vw] relative group">
                <div className="aspect-square md:aspect-[16/9] rounded-sm overflow-hidden bg-zinc-900 relative">
                     <img 
                        src={getImg(productData.slide3Image)}
                        alt="Team zadelmaatje" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                        data-editable="image"
                        data-prop="@file[/data/pages/home/product.json].slide3Image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 md:p-10 flex flex-col justify-end">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2" data-editable="text" data-prop="@file[/data/pages/home/product.json].slide3Title">
    {productData.slide3Title}</h3>
                        <p className="text-white max-w-lg font-bold italic text-sm md:text-base" data-editable="text" data-prop="@file[/data/pages/home/product.json].slide3Quote">
                            {productData.slide3Quote}
                        </p>
                        <p className="text-white mt-2 text-xs md:text-sm font-bold uppercase tracking-widest" data-editable="text" data-prop="@file[/data/pages/home/product.json].slide3SignOff">
    {productData.slide3SignOff}</p>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="min-w-[80vw] md:min-w-[40vw] flex flex-col justify-center px-10">
                <h2 className="text-5xl font-bold text-white mb-6" data-editable="text" data-prop="@file[/data/pages/home/product.json].ctaTitle">
                    {productData.ctaTitle}
                </h2>
                <button className="bg-brand-accent text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 self-start" data-editable="text" data-prop="@file[/data/pages/home/product.json].ctaButton">
                    {productData.ctaButton}
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
