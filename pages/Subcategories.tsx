
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSubcategories } from '../data';
import { UI_IMAGES } from '../imageRegistry';

const Subcategories: React.FC = () => {
  const [searchParams] = useSearchParams();
  const cat = searchParams.get('cat') || 'men';
  const subcats = getSubcategories(cat);

  return (
    <div className="container mx-auto px-6 py-12">
      <nav className="text-[10px] text-gray-400 mb-10 font-bold tracking-[0.1em] uppercase">
        <Link to="/categories" className="hover:text-[#5b0f0f] transition-colors">Collections</Link>
        <span className="mx-2 opacity-30">/</span>
        <span className="text-[#5b0f0f] capitalize">{cat}</span>
      </nav>

      <h1 className="text-5xl md:text-6xl font-serif-display text-[#5b0f0f] mb-16 leading-none">
        <span className="capitalize">{cat}</span> <span className="italic font-normal">Collection</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {subcats.map((sub, i) => (
          <Link 
            key={sub} 
            to={`/products?cat=${cat}&sub=${sub}`}
            className="group relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 animate-reveal"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <img 
              src={(UI_IMAGES.subcategoryThumbs as any)[cat]?.[sub] || UI_IMAGES.placeholders.product} 
              alt={sub} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="relative h-full flex flex-col justify-end p-10 z-10 space-y-3">
              <h2 className="text-3xl md:text-4xl font-serif-display text-white group-hover:text-amber-400 transition-colors duration-500 capitalize">{sub}</h2>
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-white group-hover:w-12 transition-all duration-500"></span>
                <p className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em]">Explore selection</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subcategories;
