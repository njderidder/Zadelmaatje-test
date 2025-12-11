import React from 'react';
import { Shield, CloudRain, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import featuresData from '../data/pages/home/features.json';

// We gebruiken hier de types uit de JSON data voor typescript support, of 'any' voor gemak
const FeatureCard: React.FC<{ item: typeof featuresData.items[0], index: number }> = ({ item, index }) => {
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
            {/* Let op de index in de data-prop voor de lijst items */}
            <h3 
                className="text-2xl font-bold text-white mb-4"
                data-editable="text"
                data-prop={`@file[/features.json].items.${index}.title`}
            >
                {item.title}
            </h3>
            <p 
                className="text-white/60 leading-relaxed font-light"
                data-editable="text"
                data-prop={`@file[/features.json].items.${index}.description`}
            >
                {item.description}
            </p>
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
                        data-editable="text"
                        data-prop="@file[/features.json].sectionTitle"
                    >
                        {featuresData.sectionTitle}
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white max-w-3xl leading-tight"
                    >
                        <span data-editable="text" data-prop="@file[/features.json].mainTitleLine1">{featuresData.mainTitleLine1}</span> <br /> 
                        <span data-editable="text" data-prop="@file[/features.json].mainTitleLine2">{featuresData.mainTitleLine2}</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuresData.items.map((item, index) => (
                        <FeatureCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
