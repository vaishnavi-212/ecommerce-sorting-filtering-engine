
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';

// Pages
import Home from './pages/Home';
import Categories from './pages/Categories';
import Subcategories from './pages/Subcategories';
import Products from './pages/Products';
import Wishlist from './pages/Wishlist';
import Filter from './pages/Filter';
import Recommendations from './pages/Recommendations';
import Profile from './pages/Profile';
import OutfitGenerator from './pages/OutfitGenerator';
import LimitedEdition from './pages/LimitedEdition';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          
          <main className="flex-1 pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/subcategories" element={<Subcategories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/filter" element={<Filter />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/outfit-generator" element={<OutfitGenerator />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/limited" element={<LimitedEdition />} />
            </Routes>
          </main>

          <footer className="bg-[#5b0f0f] text-white py-20 mt-8 border-t border-white/10">
            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-6">
                <div className="brand-logo-container logo-classic-bw !pl-0 !ml-[-0.5rem] transform scale-110 origin-left">
                  <span className="logo-v">V</span>
                  <span className="logo-mid">ariable</span>
                  <span className="logo-s">S</span>
                </div>
                <p className="text-white/60 font-medium text-sm leading-relaxed pt-4">Elevated wardrobe essentials for the modern silhouette. Variable luxury, thoughtful utility, and a commitment to longevity.</p>
                <div className="flex space-x-6 text-xl text-white/50 pt-4">
                  <i className="fa-brands fa-instagram cursor-pointer hover:text-white transition-colors"></i>
                  <i className="fa-brands fa-facebook cursor-pointer hover:text-white transition-colors"></i>
                  <i className="fa-brands fa-pinterest cursor-pointer hover:text-white transition-colors"></i>
                </div>
              </div>
              
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">Collection</h3>
                <ul className="space-y-3 text-white/50 text-[11px] font-bold uppercase tracking-widest">
                  <li className="hover:text-white transition-colors cursor-pointer">Men's Apparel</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Women's Edit</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Variable Accessories</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Limited Drops</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">Concierge</h3>
                <ul className="space-y-3 text-white/50 text-[11px] font-bold uppercase tracking-widest">
                  <li className="hover:text-white transition-colors cursor-pointer">Shipping Policy</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Sizing Guide</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Track Order</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white">Newsletter</h3>
                <p className="text-white/60 mb-6 text-xs font-medium">Join the circle for early access to the permanent archive.</p>
                <div className="flex border-b border-white/20 pb-2">
                  <input 
                    type="email" 
                    placeholder="EMAIL@VARIABLES.COM" 
                    className="bg-transparent text-[10px] font-bold tracking-widest focus:outline-none flex-1 placeholder:text-white/30 text-white"
                  />
                  <button className="text-[10px] font-black uppercase tracking-widest hover:opacity-50 transition-opacity">
                    Join
                  </button>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-8 mt-16 pt-8 border-t border-white/5 text-center text-white/30 text-[8px] font-bold uppercase tracking-[0.5em]">
              &copy; {new Date().getFullYear()} VariableS Archive. All Rights Reserved.
            </div>
          </footer>

          <CartDrawer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
