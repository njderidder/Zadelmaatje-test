import React from "react";
import { motion } from "framer-motion";
import { ASSETS } from "../constants";
import { fadeUp, staggerContainer } from "../services/animationService";
import heroCopy from "../data/pages/home/hero.json";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          // 👇 DIT IS DE NIEUWE REGEL:
          poster={ASSETS.images.productLandscape} 
          className="w-full h-full object-cover opacity-60"
        >
          <source src={ASSETS.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <div className="overflow-hidden mb-4">
            <motion.p
              variants={fadeUp}
              className="text-white uppercase tracking-[0.2em] text-sm font-bold bg-brand-accent inline-block px-4 py-2 rounded-full border border-brand-accent"
              data-editable="text"
              data-prop='@file[/hero.json].pretitle'
            >
              {heroCopy.pretitle}
            </motion.p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.95]">
            <motion.span
              variants={fadeUp}
              className="block"
              data-editable="text"
              data-prop='@file[/hero.json].title'
            >
              {heroCopy.title}
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block text-white/70 italic font-serif"
              data-editable="text"
              data-prop='@file[/hero.json].subtitle'
            >
              {heroCopy.subtitle}
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/90 max-w-lg mb-12 font-normal leading-relaxed drop-shadow-lg"
            data-editable="text"
            data-prop='@file[/hero.json].description'
          >
            {heroCopy.description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button
              className="bg-brand-accent text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg hover:shadow-brand-accent/20"
              data-editable="text"
              data-prop='@file[/hero.json].ctaPrimary'
            >
              {heroCopy.ctaPrimary}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
