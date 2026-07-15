
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../AppContext';

const Navbar: React.FC = () => {
  const { state, dispatch } = useStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/filter?q=${encodeURIComponent(search)}`);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Collection', path: '/categories' },
    { label: 'Limited', path: '/limited' },
    { label: 'Filter', path: '/filter' },
    { label: 'Recommended', path: '/recommendations' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-[#5b0f0f] text-white py-3 md:py-4 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] border-b border-white/10">
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-12">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>

          {/* Logo */}
          <Link to="/" className="brand-logo-container group scale-75 md:scale-100 origin-left">
            <span className="logo-v">V</span>
            <span className="logo-mid">ariable</span>
            <span className="logo-s">S</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.4em]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link transition-all py-1 ${
                  location.pathname === item.path ? 'text-white border-b-2 border-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-3 md:space-x-8">
          <form onSubmit={handleSearch} className="relative hidden xl:flex items-center group">
            <input 
              type="text" 
              placeholder="SEARCH" 
              className="bg-white/10 border border-white/20 rounded-full px-6 py-2 text-[10px] font-bold outline-none w-48 focus:w-64 transition-all placeholder:text-white/40 tracking-[0.2em] text-white focus:bg-white/20 shadow-inner"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="absolute right-4 text-white/50 group-hover:text-white transition-all hover:scale-110">
              <i className="fa-solid fa-magnifying-glass text-[12px]"></i>
            </button>
          </form>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to="/wishlist" className="p-2 hover:scale-110 transition-all relative">
              <i className="fa-regular fa-heart text-xl md:text-2xl"></i>
              {state.wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-white text-[#5b0f0f] text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black shadow-md">
                  {state.wishlist.length}
                </span>
              )}
            </Link>
            
            <button 
              onClick={() => dispatch({ type: 'SET_CART_OPEN', payload: true })} 
              className="p-2 hover:scale-110 transition-all relative"
            >
              <i className="fa-solid fa-bag-shopping text-xl md:text-2xl"></i>
              {state.cart.length > 0 && (
                <span className="absolute top-1 right-1 bg-white text-[#5b0f0f] text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black shadow-md">
                  {state.cart.reduce((a, b) => a + b.qty, 0)}
                </span>
              )}
            </button>

            <Link to="/profile" className="hidden sm:block p-2 hover:scale-110 transition-all">
              <i className="fa-regular fa-user text-xl md:text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`lg:hidden fixed inset-0 top-[64px] bg-[#5b0f0f] z-[40] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 flex flex-col space-y-8">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input 
              type="text" 
              placeholder="SEARCH COLLECTION" 
              className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-[12px] font-bold outline-none w-full placeholder:text-white/40 tracking-[0.2em] text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[14px] font-black uppercase tracking-[0.4em] pb-2 border-b border-white/5 ${
                  location.pathname === item.path ? 'text-white' : 'text-white/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="text-[14px] font-black uppercase tracking-[0.4em] text-white/60"
            >
              My Profile
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
