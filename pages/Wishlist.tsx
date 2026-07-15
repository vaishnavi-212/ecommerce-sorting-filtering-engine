
import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../AppContext';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

const Wishlist: React.FC = () => {
  const { state } = useStore();
  const wishlistProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl md:text-6xl text-center font-serif-display text-[#5b0f0f] mb-6">Your Wishlist</h1>
      <p className="text-center text-gray-400 font-medium mb-16 text-base tracking-wide">Pieces saved for your future silhouette ❤️</p>

      {wishlistProducts.length === 0 ? (
        <div className="max-w-md mx-auto text-center py-20 animate-reveal">
          <div className="bg-gray-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
            <i className="fa-regular fa-heart text-4xl text-gray-200"></i>
          </div>
          <h2 className="text-3xl font-serif-display text-gray-800 mb-4">Your wishlist is empty</h2>
          <p className="text-gray-500 text-base mb-10 leading-relaxed">Save items you love while browsing and they will appear here for you to review and shop later.</p>
          <Link 
            to="/categories" 
            className="bg-[#5b0f0f] text-white px-12 py-4 rounded-full font-bold text-sm hover:bg-black shadow-xl transition-all inline-block"
          >
            Explore Collections
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 animate-reveal">
          {wishlistProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
