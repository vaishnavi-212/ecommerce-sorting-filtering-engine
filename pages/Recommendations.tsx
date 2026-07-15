
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../AppContext';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { vectorizeProduct, cosineSimilarity, mergeSort } from '../utils';

const Recommendations: React.FC = () => {
  const { state } = useStore();
  const navigate = useNavigate();
  
  const recommended = React.useMemo(() => {
    // 1. Build the User DNA Profile Vector
    const wishlistItems = PRODUCTS.filter(p => state.wishlist.includes(p.id));
    const cartItems = state.cart;
    
    // Check if we have enough data for personalized content-based filtering
    const hasData = wishlistItems.length > 0 || cartItems.length > 0;
    
    if (!hasData) {
      // If no data, fall back to top rated using Merge Sort
      return mergeSort([...PRODUCTS], 'rating', false).slice(0, 15);
    }

    // 2. Aggregate features (Cart weighted higher than Wishlist)
    const userVector = new Array(15).fill(0);
    
    wishlistItems.forEach(item => {
      const v = vectorizeProduct(item);
      v.forEach((val, idx) => userVector[idx] += val * 5); // Weight for wishlist
    });

    cartItems.forEach(item => {
      const v = vectorizeProduct(item);
      v.forEach((val, idx) => userVector[idx] += val * 10); // Weight for cart
    });

    // 3. Calculate similarity score for every product
    const scoredProducts = PRODUCTS.map(p => {
      // Skip if already in cart
      if (state.cart.some(c => c.id === p.id)) return { p, score: -1 };
      
      const pVector = vectorizeProduct(p);
      const similarity = cosineSimilarity(userVector, pVector);
      
      // Bonus for high ratings
      const ratingBonus = (parseFloat(String(p.rating)) || 0) / 100;
      
      return { p, score: similarity + ratingBonus };
    });

    // 4. Sort by score using basic sort (as it's a simple number score array)
    // but the final display order is mathematically personalized.
    return scoredProducts
      .sort((a, b) => b.score - a.score)
      .slice(0, 15)
      .map(item => item.p);

  }, [state.wishlist, state.cart]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mb-16 animate-reveal">
        <p className="text-[#5b0f0f] font-black text-[10px] tracking-[0.5em] uppercase mb-4">Style Matching Algorithm</p>
        <h1 className="text-5xl md:text-7xl font-serif-display text-gray-900 mb-6 tracking-tight leading-none">Your Style <br/><span className="italic font-normal">Archive</span></h1>
        <p className="text-gray-400 font-medium text-base leading-relaxed max-w-xl">
          Personalized selection driven by Cosine Similarity. Our engine maps your preference vectors to our material and silhouette archives.
        </p>
        <div className="w-16 h-[1.5px] bg-[#5b0f0f] mt-10"></div>
      </div>

      {/* Outfit Generator Hero Section */}
      <div className="p-16 bg-[#5b0f0f] rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-[0_35px_60px_-15px_rgba(91,15,15,0.3)] animate-reveal mb-24">
        <div className="flex-1 relative z-10 space-y-8 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-serif-display tracking-tight leading-tight">Numerical <br/> Aesthetic</h2>
          <p className="text-lg text-white/70 font-medium leading-relaxed max-w-md">
            The archive evolved from your interactions. We calculate similarity across 15 distinct feature dimensions to find your perfect match.
          </p>
          <button 
            onClick={() => navigate('/outfit-generator')}
            className="bg-white text-[#5b0f0f] px-12 py-4 rounded-full font-black text-[12px] uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl active:scale-95"
          >
            Outfit For You
          </button>
        </div>
        <div className="hidden lg:flex w-80 h-80 border border-white/10 rounded-full items-center justify-center relative z-10 bg-white/5 backdrop-blur-3xl shadow-inner">
           <div className="text-center">
             <div className="text-8xl mb-3 font-serif-display opacity-80">✦</div>
             <p className="text-[11px] font-black tracking-[0.6em] uppercase opacity-40">Personal DNA</p>
           </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-serif-display text-gray-900 mb-8 border-b border-gray-100 pb-4 italic">Mathematical <span className="not-italic font-bold">Picks</span></h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
          {recommended.map((p, i) => (
            <div key={p.id} className="animate-reveal opacity-0" style={{ animationDelay: `${i * 0.05}s` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
