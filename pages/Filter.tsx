
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, getSubcategories } from '../data';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { mergeSort, quickSort, ProductSegmentTree } from '../utils';

type SortOption = 'relevance' | 'price_asc' | 'price_desc' | 'rating';

const FilterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [minInput, setMinInput] = useState<string>('');
  const [maxInput, setMaxInput] = useState<string>('');
  const [sort, setSort] = useState<SortOption>('relevance');

  // Initialize Segment Tree for Range Queries
  const segmentTree = useMemo(() => new ProductSegmentTree(PRODUCTS), []);

  const filteredProducts = useMemo(() => {
    let result: Product[] = [...PRODUCTS];

    // Logic: Use Segment Tree for Range Filtering if Min/Max is provided
    const minVal = parseFloat(minInput);
    const maxVal = parseFloat(maxInput);
    const hasRange = !isNaN(minVal) || !isNaN(maxVal);

    if (hasRange) {
      const effectiveMin = isNaN(minVal) ? 0 : minVal;
      const effectiveMax = isNaN(maxVal) ? 1000000 : maxVal;
      // Using segment tree query logic for range filtering
      result = segmentTree.query(effectiveMin, effectiveMax);
    }

    // Standard filters
    if (query) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category?.toLowerCase().includes(query.toLowerCase()) ||
        p.subcategory?.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selectedCat) result = result.filter(p => p.category === selectedCat);
    if (selectedSub) result = result.filter(p => p.subcategory === selectedSub);

    // Sorting Logics
    switch (sort) {
      case 'price_asc': 
        // Logic: Use Quick Sort for Price
        return quickSort(result, 'price', true);
      case 'price_desc': 
        // Logic: Use Quick Sort for Price
        return quickSort(result, 'price', false);
      case 'rating': 
        // Logic: Use Merge Sort for Rating
        return mergeSort(result, 'rating', false);
      case 'relevance':
      default: 
        // Logic: Default relevance uses Merge Sort on rating
        return mergeSort(result, 'rating', false);
    }
  }, [selectedCat, selectedSub, minInput, maxInput, sort, query, segmentTree]);

  const resetAll = () => {
    setSelectedCat(null);
    setSelectedSub(null);
    setMinInput('');
    setMaxInput('');
    setSort('relevance');
  };

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-reveal">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-serif-display text-[#5b0f0f]">Product Filter</h1>
          <p className="text-gray-400 text-xs font-medium italic tracking-wide">
            {query ? `Showing ${filteredProducts.length} items for "${query}"` : "Discover pieces that define your aesthetic."}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-50 border border-gray-100 px-5 py-3 rounded-xl">
            <span className="text-[10px] font-bold text-gray-400 mr-3 uppercase tracking-widest">Sort:</span>
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-transparent text-[11px] font-black text-gray-900 focus:outline-none cursor-pointer uppercase tracking-tight"
            >
              <option value="relevance">Recommended</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          <button 
            onClick={resetAll}
            className="text-[10px] font-black text-[#5b0f0f] border-b-2 border-[#5b0f0f] pb-1 hover:opacity-70 transition-all uppercase tracking-[0.3em]"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
        <aside className="lg:col-span-1 space-y-12 lg:sticky lg:top-32 h-fit animate-reveal" style={{ animationDelay: '0.1s' }}>
          <section>
            <h3 className="font-serif-display text-2xl text-[#5b0f0f] mb-6 border-b border-gray-50 pb-3">Collections</h3>
            <div className="flex flex-col space-y-4">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => {setSelectedCat(selectedCat === cat ? null : cat); setSelectedSub(null);}}
                  className={`text-left text-xs transition-all flex items-center justify-between group uppercase tracking-[0.2em] ${
                    selectedCat === cat ? 'text-[#5b0f0f] font-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  <span>{cat}</span>
                  <div className={`w-4 h-[1.5px] bg-[#5b0f0f] transition-all ${selectedCat === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></div>
                </button>
              ))}
            </div>
          </section>

          {selectedCat && (
            <section className="animate-reveal">
              <h3 className="font-serif-display text-2xl text-[#5b0f0f] mb-6 border-b border-gray-50 pb-3">Category</h3>
              <div className="flex flex-wrap gap-2.5">
                {getSubcategories(selectedCat).map(sub => (
                  <button 
                    key={sub}
                    onClick={() => setSelectedSub(selectedSub === sub ? null : sub)}
                    className={`px-4 py-2 rounded-full text-[9px] font-black transition-all border uppercase tracking-widest ${
                      selectedSub === sub 
                      ? 'bg-[#5b0f0f] text-white border-[#5b0f0f] shadow-md' 
                      : 'bg-white text-gray-400 border-gray-100 hover:border-[#5b0f0f]'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </section>
          )}

          <section>
            <h3 className="font-serif-display text-2xl text-[#5b0f0f] mb-6 border-b border-gray-50 pb-3">Price Range</h3>
            
            {/* Custom Input Fields */}
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Min</label>
                <input 
                  type="number" 
                  value={minInput}
                  onChange={(e) => setMinInput(e.target.value)}
                  placeholder="0"
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[11px] font-bold text-[#5b0f0f] focus:outline-none focus:border-[#5b0f0f]/30 transition-all placeholder:text-gray-300"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Max</label>
                <input 
                  type="number" 
                  value={maxInput}
                  onChange={(e) => setMaxInput(e.target.value)}
                  placeholder="10k+"
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[11px] font-bold text-[#5b0f0f] focus:outline-none focus:border-[#5b0f0f]/30 transition-all placeholder:text-gray-300"
                />
              </div>
            </div>
          </section>
        </aside>

        <div className="lg:col-span-5">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-5 gap-6">
              {filteredProducts.map((p, i) => (
                <div 
                  key={p.id} 
                  className="animate-reveal opacity-0" 
                  style={{ animationDelay: `${(i % 10) * 0.05 + 0.2}s` }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center animate-reveal">
              <i className="fa-solid fa-magnifying-glass-minus text-6xl text-gray-100 mb-8"></i>
              <h2 className="text-3xl font-serif-display text-[#5b0f0f] mb-3">Product Search Empty</h2>
              <p className="text-gray-400 text-[11px] max-w-xs mx-auto mb-10 font-medium uppercase tracking-[0.3em] leading-relaxed">No matches found for your current search criteria.</p>
              <button onClick={resetAll} className="bg-[#5b0f0f] text-white px-12 py-3.5 rounded-full font-black text-xs shadow-xl uppercase tracking-widest hover:bg-black transition-all">
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
