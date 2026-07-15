
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, LIMITED_EDITION_PRODUCTS } from '../data';
import { useStore } from '../AppContext';
import { UI_IMAGES } from '../imageRegistry';
import { HERO_SLIDES } from '../heroData';
import { REVIEWS } from '../reviewsData';

const Home: React.FC = () => {
  const { state, dispatch } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const galleryImages = UI_IMAGES.gallery;

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-black">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
               <img 
                src={slide.img} 
                alt={slide.subtitle} 
                className={`absolute inset-0 w-full h-full object-cover opacity-50 md:opacity-60 transition-transform duration-[7000ms] ease-out ${
                  index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/95"></div>
            
            <div className="relative h-full flex items-center justify-center text-center px-4 md:px-6">
              <div className="max-w-4xl">
                <p className={`text-[#e2b07e] text-[8px] md:text-[11px] font-black uppercase tracking-[0.8em] md:tracking-[1em] mb-4 md:mb-6 transition-all duration-[1200ms] delay-200 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slide.subtitle}
                </p>
                <h1 className={`text-white text-3xl md:text-7xl font-serif-display leading-tight mb-4 md:mb-6 italic transition-all duration-[1200ms] delay-400 transform drop-shadow-lg ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}>
                  {slide.title}
                </h1>
                
                <p className={`text-white/70 md:text-white/80 text-xs md:text-lg font-light tracking-wide max-w-2xl mx-auto mb-8 md:mb-12 transition-all duration-[1200ms] delay-500 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  {slide.description}
                </p>

                <div className={`transition-all duration-[1200ms] delay-700 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <Link 
                    to={slide.link} 
                    className="group relative inline-flex items-center bg-white text-[#5b0f0f] px-8 md:px-12 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] hover:bg-[#5b0f0f] hover:text-white transition-all shadow-xl overflow-hidden"
                  >
                    <span className="relative z-10">{slide.cta}</span>
                    <div className="absolute inset-0 bg-[#5b0f0f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:space-x-4">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="group relative h-[2px] w-6 md:w-10 bg-white/20 overflow-hidden"
            >
              <div 
                className={`absolute inset-0 bg-[#e2b07e] transition-transform duration-[7000ms] ease-linear origin-left ${
                  idx === currentSlide ? 'translate-x-0' : '-translate-x-full'
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* 2. Explore Collections */}
      <section className="py-12 md:py-20 container mx-auto px-4 md:px-12">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-[#5b0f0f] text-[9px] font-black tracking-[0.5em] uppercase mb-2 block">Curated Series</span>
          <h2 className="text-3xl md:text-5xl font-serif-display text-gray-900 italic leading-none">Explore Collections</h2>
          <div className="w-12 h-[1.5px] bg-[#5b0f0f] mx-auto mt-4 md:mt-6"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat} 
              to={`/subcategories?cat=${cat}`}
              className="group relative h-[240px] md:h-[420px] overflow-hidden rounded-[1rem] md:rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-700"
              onClick={() => dispatch({ type: 'TRACK_CLICK', payload: cat })}
            >
              <img 
                src={(UI_IMAGES.homeCollectionThumbs as any)[cat] || UI_IMAGES.placeholders.product} 
                alt={cat} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <h3 className="text-lg md:text-2xl font-serif-display tracking-[0.1em] uppercase">{cat}</h3>
                <div className="w-0 group-hover:w-10 h-[1.5px] bg-white transition-all duration-500 mt-2"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Limited Edition Slider - Unique Items */}
      <section className="py-12 md:py-20 bg-[#5b0f0f] text-white overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-center md:text-left">
            <div className="max-w-xl">
              <span className="text-white/40 text-[9px] font-black tracking-[0.7em] uppercase mb-2 block">Premium Drop</span>
              <h2 className="text-3xl md:text-5xl font-serif-display leading-tight italic">Limited Edition</h2>
            </div>
            <Link 
              to="/filter" 
              className="text-[9px] font-black uppercase tracking-[0.4em] text-white/70 border-b border-white/20 pb-1 hover:text-white hover:border-white transition-all"
            >
              Full Archive —
            </Link>
          </div>
        </div>
        
        <div className="relative overflow-visible px-4 md:px-12">
          <div className="flex overflow-x-auto gap-4 md:gap-6 no-scrollbar pb-6 scroll-smooth">
            {LIMITED_EDITION_PRODUCTS.map((p) => {
              const isWishlisted = state.wishlist.includes(p.id);
              return (
                <div 
                  key={p.id} 
                  className="flex-shrink-0 w-[240px] md:w-72 h-[380px] md:h-[460px] relative group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-full h-full overflow-hidden rounded-[1rem] md:rounded-[1.5rem] shadow-xl border border-white/5 bg-black relative">
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-black text-amber-400">
                       <i className="fa-solid fa-star"></i>
                       <span>{p.rating}</span>
                    </div>

                    <img 
                      src={p.img} 
                      alt={p.name} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent flex flex-col justify-end p-5 md:p-6 text-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white text-sm md:text-md font-serif-display mb-1 truncate uppercase tracking-wider">{p.name}</h4>
                      <p className="text-white/40 text-[8px] md:text-[10px] mb-4 line-clamp-2 italic">{p.description}</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={(e) => { e.stopPropagation(); dispatch({ type: 'ADD_TO_CART', payload: p }); }}
                          className="flex-1 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] bg-white text-black py-2.5 md:py-3 rounded-xl hover:bg-black hover:text-white transition-all shadow-lg active:scale-95"
                        >
                          Add Bag
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); dispatch({ type: 'TOGGLE_WISHLIST', payload: p.id }); }}
                          className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#5b0f0f]'}`}
                        >
                          <i className={`fa-${isWishlisted ? 'solid' : 'regular'} fa-heart`}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Philosophy Section */}
      <section className="pt-16 pb-6 md:pt-24 md:pb-10 bg-white flex flex-col items-center justify-center text-center px-6 md:px-12 border-b border-gray-50">
        <span className="text-[9px] font-black uppercase tracking-[0.8em] text-gray-300 mb-6">Our Philosophy</span>
        <h3 className="text-xl md:text-4xl font-serif-display text-gray-900 leading-tight max-w-4xl italic px-4">
          "Everyday Elegance. Timeless Quality. <br className="hidden md:block"/>
          <span className="text-[#5b0f0f] not-italic font-bold">Elevated essentials crafted for your daily life.</span>"
        </h3>
      </section>

      {/* 5. Brand Visuals Gallery */}
      <section className="pt-6 pb-16 md:pt-10 md:pb-20 bg-white overflow-hidden">
        <div className="text-center mb-10 px-6">
          <span className="text-[#5b0f0f] text-[9px] font-black tracking-[0.5em] uppercase mb-2 block">Brand Visuals</span>
          <h2 className="text-3xl md:text-5xl font-serif-display text-gray-900 italic leading-none">Variable Identity</h2>
          <div className="w-12 h-[1.5px] bg-[#5b0f0f] mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div className="animate-marquee space-x-4 md:space-x-6">
            {[...galleryImages, ...galleryImages].map((img, idx) => (
              <div 
                key={idx} 
                className="w-48 md:w-64 h-[260px] md:h-[400px] flex-shrink-0 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-lg grayscale-[0.3] hover:grayscale-0 transition-all duration-700 cursor-crosshair"
              >
                <img 
                  src={img} 
                  alt={`Identity Piece ${idx}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client Archives */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <span className="text-[#5b0f0f] text-[10px] font-black tracking-[0.5em] uppercase mb-2 block">Variable Community</span>
            <h2 className="text-3xl md:text-6xl font-serif-display text-gray-900 italic leading-none">Client Archives</h2>
            <div className="w-16 h-[1.5px] bg-[#5b0f0f] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-[1400px] mx-auto">
            {REVIEWS.map((review, i) => (
              <div 
                key={i} 
                className="group px-6 md:px-8 py-6 md:py-8 bg-white rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 hover:bg-[#5b0f0f] transition-all duration-700 hover:-translate-y-2 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3 text-[#5b0f0f] group-hover:text-white/20 transition-colors font-serif-display italic">“</div>
                  <p className="text-gray-600 group-hover:text-white text-sm md:text-lg font-light italic leading-relaxed mb-6 transition-colors">
                    {review.text}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#5b0f0f] flex items-center justify-center font-bold text-white group-hover:bg-white group-hover:text-[#5b0f0f] text-[10px] transition-all duration-500 shadow-md">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-900 group-hover:text-white transition-colors">{review.name}</p>
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white/60 transition-colors">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
