import React from 'react';
import { ASSETS } from '../constants';
import footerData from '../data/global/footer.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
            <div>
                 <img src={ASSETS.logo} alt="zadelmaatje" className="h-16 w-auto mb-6 brightness-0 invert opacity-80" />
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                    <span data-editable="text" data-prop="@file[/footer.json].logoText">{footerData.logoText}</span><span className="text-brand-accent">.</span>
                </h2>
                <p className="text-xl text-white/50 max-w-md font-light" data-editable="text" data-prop="@file[/footer.json].logoSubtext">
                    {footerData.logoSubtext}
                </p>
            </div>
            
            <div className="flex flex-col gap-6 w-full md:w-auto">
                <button className="bg-brand-accent text-white px-12 py-6 rounded-md text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 w-full md:w-auto text-center" data-editable="text" data-prop="@file[/footer.json].ctaButton">
                    {footerData.ctaButton}
                </button>
                <div className="flex justify-between md:justify-end gap-8 text-white/40 text-sm">
                    <p data-editable="text" data-prop="@file[/footer.json].deliveryInfo">{footerData.deliveryInfo}</p>
                    <p data-editable="text" data-prop="@file[/footer.json].guaranteeInfo">{footerData.guaranteeInfo}</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-10">
            <div>
                <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">zadelmaatje</h4>
                <ul className="space-y-3 text-white/60 text-sm">
                    <li><a href="#over-ons" className="hover:text-brand-accent transition-colors">Over ons</a></li>
                    <li><a href="#product" className="hover:text-brand-accent transition-colors">zadelmaatje ‘Amore’</a></li>
                    <li><a href="#faq" className="hover:text-brand-accent transition-colors">Veel gestelde vragen (FAQ)</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Privacy</h4>
                <ul className="space-y-3 text-white/60 text-sm">
                    <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-brand-accent transition-colors">Algemene voorwaarden</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Socials</h4>
                <ul className="space-y-3 text-white/60 text-sm">
                    <li><a href="https://www.instagram.com/zadelmaatje" className="hover:text-brand-accent transition-colors">Instagram</a></li>
                    <li><a href="https://www.tiktok.com/@zadelmaatje" className="hover:text-brand-accent transition-colors">TikTok</a></li>
                    <li><a href="https://www.linkedin.com/company/zadelmaatje/" className="hover:text-brand-accent transition-colors">LinkedIn</a></li>
                </ul>
            </div>
             <div>
                <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Contact</h4>
                <p className="text-white/60 text-sm mb-2" data-editable="text" data-prop="@file[/footer.json].contactEmail">{footerData.contactEmail}</p>
                <p className="text-white/60 text-sm" data-editable="text" data-prop="@file[/footer.json].contactKvk">{footerData.contactKvk}</p>
                <p className="text-white/60 text-sm mt-4" data-editable="text" data-prop="@file[/footer.json].contactCity">{footerData.contactCity}</p>
            </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p data-editable="text" data-prop="@file[/footer.json].copyright">{footerData.copyright}</p>
            <p data-editable="text" data-prop="@file[/footer.json].tagline">{footerData.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
