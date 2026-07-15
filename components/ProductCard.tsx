
import React, { useState } from 'react';
import { Product } from '../types';
import { useStore } from '../AppContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { state, dispatch } = useStore();
  const [added, setAdded] = useState(false);
  const isWishlisted = state.wishlist.includes(product.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product.id });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
    dispatch({ type: 'TRACK_CLICK', payload: product.category || 'general' });
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const getSizeLabel = () => {
    if (product.sizes) return product.sizes;
    const cat = product.category?.toLowerCase() || '';
    if (cat === 'accessories' || product.subcategory?.toLowerCase() === 'handbags' || product.subcategory?.toLowerCase() === 'toys') {
      return 'One Size';
    }
    
    const idHash = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    let sizes = ['S', 'M', 'L', 'XL'];
    
    if (idHash % 4 === 0) {
      sizes = sizes.filter(s => s !== 'S');
    }
    if (idHash % 10 === 0) {
      sizes = sizes.filter(s => s !== 'M');
    }
    
    return sizes.join(' / ');
  };

  return (
    <div className="group relative bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute top-3 right-3 md:top-5 md:right-5 z-10">
          <button 
            onClick={handleWishlist}
            className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all shadow-sm ${isWishlisted ? 'bg-white text-red-500 shadow-lg' : 'bg-white/60 text-gray-800 hover:bg-white hover:shadow-md backdrop-blur-sm'}`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <i className={`fa-${isWishlisted ? 'solid' : 'regular'} fa-heart text-sm md:text-lg`}></i>
          </button>
        </div>
        <div className="absolute bottom-3 left-3 z-10 md:hidden">
           <div className="bg-white/80 backdrop-blur-md px-2 py-1 rounded-full text-[8px] font-black text-amber-600 shadow-sm">
              <i className="fa-solid fa-star mr-1"></i>{product.rating}
           </div>
        </div>
        {product.category === 'Limited' && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#5b0f0f] text-white text-[7px] md:text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-lg">
              Limited
            </span>
          </div>
        )}
      </div>

      <div className="p-3 md:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2 md:space-y-4 mb-4">
          <div>
            <div className="hidden md:flex justify-between items-start mb-1">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5b0f0f]/40 block capitalize truncate">
                {product.subcategory || product.category}
              </span>
              <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500">
                <i className="fa-solid fa-star"></i>
                <span>{product.rating}</span>
              </div>
            </div>
            <h3 className="text-sm md:text-lg font-serif-display text-gray-900 group-hover:text-[#5b0f0f] transition-colors leading-tight capitalize truncate">
              {product.name}
            </h3>
            <p className="text-[#5b0f0f] font-black text-sm md:text-base mt-1 tracking-tight">
              ₹{product.price.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-gray-50/70 p-2.5 md:p-3.5 rounded-xl md:rounded-2xl border border-gray-100">
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[8px] md:text-[9px] uppercase tracking-tighter font-bold">
               <div className="flex flex-col truncate">
                  <span className="mb-0.5 opacity-90 text-gray-500">Fit</span> 
                  <span className="text-gray-800 capitalize truncate">{product.design || 'Classic'}</span>
               </div>
               <div className="flex flex-col truncate text-right">
                  <span className="mb-0.5 opacity-90 text-gray-500">Material</span> 
                  <span className="text-gray-800 capitalize truncate">{product.material || 'Premium'}</span>
               </div>
               <div className="flex flex-col truncate">
                  <span className="mb-0.5 opacity-90 text-[#5b0f0f]">Size</span> 
                  <span className="text-[#5b0f0f] capitalize truncate">{getSizeLabel()}</span>
               </div>
               <div className="flex flex-col truncate text-right">
                  <span className="mb-0.5 opacity-90 text-gray-500">Detail</span> 
                  <span className="text-gray-800 capitalize truncate">
                    {product.description ? product.description.split(' ')[0] : 'Singular'}
                  </span>
               </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] transition-all shadow-lg active:scale-95 ${
            added 
            ? 'bg-green-600 text-white cursor-default' 
            : 'bg-[#5b0f0f] text-white hover:bg-black opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-2 group-hover:translate-y-0'
          }`}
        >
          {added ? 'Added to Bag' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
