
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data';
import { UI_IMAGES } from '../imageRegistry';

const Categories: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h1 className="text-5xl md:text-6xl font-serif-display text-[#5b0f0f]">Collection</h1>
        <p className="text-gray-400 text-sm font-medium uppercase tracking-[0.5em]">Variable Style / Singular Substance</p>
        <div className="w-12 h-[1px] bg-[#5b0f0f] mx-auto mt-6"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <Link 
            key={cat} 
            to={`/subcategories?cat=${cat}`}
            className="group relative h-[450px] overflow-hidden rounded-[2rem] shadow-lg block animate-reveal"
          >
            <img 
              src={(UI_IMAGES.categoryThumbs as any)[cat] || UI_IMAGES.placeholders.product} 
              alt={cat} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8">
              <h2 className="text-white text-3xl font-serif-display mb-2 capitalize">{cat}</h2>
              <p className="text-white/50 text-[10px] font-black tracking-[0.3em] uppercase mb-4 opacity-0 group-hover:opacity-100 transition-all">Explore selection</p>
              <div className="w-8 h-[1.5px] bg-white group-hover:w-full transition-all duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
