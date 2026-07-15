
import React, { useState } from 'react';
import { useStore } from '../AppContext';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

type GenderMode = 'men' | 'women' | 'kids';

const OutfitGenerator: React.FC = () => {
  const { dispatch } = useStore();
  const [mode, setMode] = useState<GenderMode | null>(null);
  const [outfit, setOutfit] = useState<Product[] | null>(null);
  const [genId, setGenId] = useState(0);

  const getRand = (arr: Product[]) => {
    if (arr.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  const generate = (selectedMode: GenderMode) => {
    const items: Product[] = [];
    
    const addToOutfit = (cat: string, sub: string) => {
      const filtered = PRODUCTS.filter(p => p.category === cat && p.subcategory === sub);
      const picked = getRand(filtered);
      if (picked) items.push(picked);
    };

    if (selectedMode === 'men') {
      addToOutfit('men', 'shirts');
      addToOutfit('men', 'trousers');
      addToOutfit('men', 'hoodies');
      addToOutfit('men', 'shoes');
      addToOutfit('accessories', 'watches');
    } else if (selectedMode === 'women') {
      addToOutfit('women', 'tops');
      addToOutfit('women', 'dresses');
      addToOutfit('women', 'footwear');
      addToOutfit('women', 'handbags');
      // Removed the men's hoodie mixing as requested
    } else if (selectedMode === 'kids') {
      // Pick either a boy's item or a girl's item as the main piece
      const coin = Math.random() > 0.5;
      if (coin) {
        addToOutfit('kids', 'boys');
      } else {
        addToOutfit('kids', 'girls');
      }
      addToOutfit('kids', 'footwear');
      addToOutfit('kids', 'toys');
    }

    if (items.length > 0) {
      setOutfit(items);
      setGenId(prev => prev + 1);
    }
  };

  const handleModeChange = (newMode: GenderMode) => {
    setMode(newMode);
    generate(newMode);
  };

  const addAllToCart = () => {
    if (outfit) {
      outfit.forEach(p => dispatch({ type: 'ADD_TO_CART', payload: p }));
      alert("Whole outfit added to your bag.");
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-reveal">
        <p className="text-[#5b0f0f] font-black text-[9px] tracking-[0.5em] uppercase mb-4">Curated Archive</p>
        <h1 className="text-4xl md:text-7xl font-serif-display text-gray-900 mb-4 md:mb-6 tracking-tight leading-none italic">Outfit <span className="not-italic font-bold">Architect</span></h1>
        <p className="text-gray-400 font-medium text-[10px] md:text-sm uppercase tracking-[0.3em] max-w-xl mx-auto px-4">Generate a cohesive luxury silhouette instantly.</p>
        <div className="w-12 h-[1px] bg-[#5b0f0f] mx-auto mt-8 md:mt-10"></div>
      </div>

      {/* Mode Selection */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 md:mb-16 animate-reveal" style={{ animationDelay: '0.1s' }}>
        {(['men', 'women', 'kids'] as GenderMode[]).map((m) => (
          <button
            key={m}
            onClick={() => handleModeChange(m)}
            className={`flex-1 md:flex-none px-6 md:px-10 py-3.5 md:py-4 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all border-2 ${
              mode === m 
              ? 'bg-[#5b0f0f] text-white border-[#5b0f0f] shadow-2xl scale-105' 
              : 'bg-white text-gray-400 border-gray-100 hover:border-[#5b0f0f] hover:text-[#5b0f0f]'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {outfit ? (
        <div key={genId} className="animate-reveal">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif-display text-gray-900 italic">The Suggested <span className="not-italic font-bold">Silhouette</span></h2>
              <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.4em] mt-2">Curated selection for {mode} archive</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button 
                onClick={() => mode && generate(mode)}
                className="w-full px-6 py-3.5 border-2 border-[#5b0f0f] text-[#5b0f0f] rounded-xl md:rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#5b0f0f] hover:text-white transition-all group"
              >
                <i className="fa-solid fa-rotate-right mr-2 group-hover:rotate-180 transition-transform duration-500"></i> Shuffle
              </button>
              <button 
                onClick={addAllToCart}
                className="w-full px-8 py-3.5 bg-[#5b0f0f] text-white rounded-xl md:rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-black shadow-xl transition-all"
              >
                Add Bag
              </button>
            </div>
          </div>

          <div className={`grid grid-cols-2 ${outfit.length === 5 ? 'lg:grid-cols-5' : outfit.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-3 md:gap-8 mb-20 md:mb-24`}>
            {outfit.map((p, i) => (
              <div key={`${p.id}_${genId}`} className="animate-reveal opacity-0" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative mb-2">
                  <ProductCard product={p} />
                </div>
              </div>
            ))}
          </div>

          <div className="py-16 md:py-24 bg-gray-50 rounded-[2rem] md:rounded-[4rem] text-center px-6 md:px-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-serif-display text-[#5b0f0f] mb-4 md:mb-6 italic">Style Philosophy</h3>
              <p className="text-gray-500 font-medium text-sm md:text-lg max-w-2xl mx-auto leading-relaxed italic">
                "Simple Style. Pure Substance. Our curated archives are built to outlast trends and defined by exceptional quality."
              </p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center space-x-[-2rem] md:space-x-[-4rem] pointer-events-none select-none opacity-[0.03]">
              <div className="text-[10rem] md:text-[18rem] text-[#5b0f0f] font-serif-display font-black italic">V</div>
              <div className="text-[10rem] md:text-[18rem] text-[#5b0f0f] font-serif-display font-black italic transform translate-y-3 md:translate-y-6">S</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center animate-reveal">
           <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-100 rounded-full flex items-center justify-center mb-8 md:mb-10 bg-gray-50">
             <i className="fa-solid fa-wand-magic-sparkles text-3xl md:text-4xl text-gray-200"></i>
           </div>
           <h2 className="text-xl md:text-3xl font-serif-display text-gray-300 italic mb-2">Select Archive</h2>
           <p className="text-gray-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">Choose a category above to start curation</p>
        </div>
      )}
    </div>
  );
};

export default OutfitGenerator;
