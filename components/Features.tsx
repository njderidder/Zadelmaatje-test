import React from 'react';
import { FEATURES } from '../constants';
import { Shield, CloudRain, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ item: typeof FEATURES[0], index: number }> = ({ item, index }) => {
    const icons = [Zap, CloudRain, Heart, Shield];
    const Icon = icons[index % icons.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm group"
        >
            <div className="mb-6 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{item.description}</p>
        </motion.div>
    );
};

const Features: React.FC = () => {
    return (
        <section className="py-32 bg-brand-dark relative" id="specs">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm uppercase tracking-widest text-brand-accent mb-4 font-bold"
                    >
                        Specificaties
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white max-w-3xl leading-tight"
                    >
                        Ontworpen voor de <br /> Urban Jungle.
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((item, index) => (
                        <FeatureCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;