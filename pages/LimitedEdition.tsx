
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { insertionSort } from '../utils';

type SortOption = 'price_asc' | 'price_desc' | 'rating' | 'newest';

const LimitedEdition: React.FC = () => {
  const [sort, setSort] = useState<SortOption>('newest');

  const limitedProducts = useMemo(() => {
    const raw = PRODUCTS.filter(p => p.category === 'Limited');
    
    switch (sort) {
      case 'price_asc':
        return insertionSort(raw, 'price', true);
      case 'price_desc':
        return insertionSort(raw, 'price', false);
      case 'rating':
        return insertionSort(raw, 'rating', false);
      case 'newest':
      default:
        // By default, just show in raw order (already curated in data)
        return raw;
    }
  }, [sort]);

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-reveal">
        <div className="space-y-4 max-w-2xl">
          <p className="text-[#e2b07e] font-black text-[10px] tracking-[0.6em] uppercase">Premium Archive</p>
          <h1 className="text-5xl md:text-8xl font-serif-display text-[#5b0f0f] leading-none">
            Limited <br/> <span className="italic font-normal">Editions</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium leading-relaxed italic">
            Rare silhouettes and singular textures. Once the archive is closed, these pieces remain strictly in history.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-50 border border-gray-100 px-5 py-3 rounded-xl">
            <span className="text-[10px] font-bold text-gray-400 mr-3 uppercase tracking-widest">Insertion Sort By:</span>
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-transparent text-[11px] font-black text-gray-900 focus:outline-none cursor-pointer uppercase tracking-tight"
            >
              <option value="newest">Curation Order</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {limitedProducts.map((p, i) => (
          <div 
            key={p.id} 
            className="animate-reveal opacity-0" 
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <div className="mt-24 p-16 bg-[#5b0f0f] rounded-[3rem] text-center text-white relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif-display italic">The Singular Substance</h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed uppercase tracking-widest font-bold">
            Crafted for the few. Built for longevity. The Limited archive is our commitment to pure, uncompromised craftsmanship.
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>
    </div>
  );
};

export default LimitedEdition;
