
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const cat = searchParams.get('cat');
  const sub = searchParams.get('sub');

  const filteredProducts = PRODUCTS.filter(p => {
    if (cat && p.category?.toLowerCase() !== cat?.toLowerCase()) return false;
    if (sub && p.subcategory?.toLowerCase() !== sub?.toLowerCase()) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <nav className="text-[9px] md:text-[10px] text-gray-400 mb-6 md:mb-10 font-bold tracking-[0.1em] uppercase overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
        <Link to="/categories" className="hover:text-[#5b0f0f] transition-colors">Collections</Link>
        {cat && (
          <>
            <span className="mx-2 opacity-30">/</span>
            <Link to={`/subcategories?cat=${cat}`} className="hover:text-[#5b0f0f] transition-colors capitalize">{cat}</Link>
          </>
        )}
        {sub && (
          <>
            <span className="mx-2 opacity-30">/</span>
            <span className="text-[#5b0f0f] capitalize">{sub}</span>
          </>
        )}
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
        <div>
          <h1 className="text-4xl md:text-7xl font-serif-display text-[#5b0f0f] leading-none mb-2 md:mb-3 capitalize">
            {sub ? sub : cat ? cat : 'The Collection'}
          </h1>
          <p className="text-gray-400 font-medium text-xs md:text-sm italic tracking-wide">
            {filteredProducts.length} curated pieces found in selection
          </p>
        </div>
        <Link to="/filter" className="bg-[#5b0f0f] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-black shadow-xl transition-all flex items-center gap-3">
          <i className="fa-solid fa-sliders text-[9px]"></i>
          Refine Search
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-8 xl:gap-12">
        {filteredProducts.map((product, i) => (
          <div key={product.id} className="animate-reveal opacity-0" style={{ animationDelay: `${(i % 15) * 0.05}s` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-32 text-center animate-reveal">
          <i className="fa-solid fa-folder-open text-6xl text-gray-100 mb-6"></i>
          <h2 className="text-2xl font-serif-display text-gray-300">Archive Empty</h2>
          <p className="text-gray-400 text-xs mt-2 font-bold uppercase tracking-widest">No products matching this specific criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
