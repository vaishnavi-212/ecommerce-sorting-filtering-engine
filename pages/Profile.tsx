
import React from 'react';
import { UI_IMAGES } from '../imageRegistry';

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <aside className="lg:col-span-1 space-y-10">
          <div className="bg-white border-2 border-[#5b0f0f] rounded-[2.5rem] p-12 text-center shadow-xl">
            <div className="w-40 h-40 bg-gray-100 rounded-full mx-auto mb-8 overflow-hidden border-4 border-[#5b0f0f]/10 shadow-inner">
              <img src={UI_IMAGES.placeholders.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-3xl font-serif-display text-[#5b0f0f] mb-2">Aryan Sharma</h2>
            <p className="text-gray-400 mb-8 font-bold text-xs uppercase tracking-widest">Premium Member Since 2023</p>
            <button className="w-full py-3.5 rounded-full border-2 border-[#5b0f0f] text-[#5b0f0f] font-black text-[10px] uppercase tracking-widest hover:bg-[#5b0f0f] hover:text-white transition-all">
              Edit Silhouette Profile
            </button>
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-10 space-y-6">
            <h3 className="font-serif-display text-2xl text-[#5b0f0f] border-b border-gray-100 pb-4">Account Summary</h3>
            <div className="flex justify-between text-xs uppercase tracking-widest">
              <span className="text-gray-400 font-bold">Archives Accessed</span>
              <span className="font-black text-[#5b0f0f]">4 Orders</span>
            </div>
            <div className="flex justify-between text-xs uppercase tracking-widest">
              <span className="text-gray-400 font-bold">Member Status</span>
              <span className="font-black text-yellow-600">Platinum</span>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-2 space-y-16">
          <section>
            <h1 className="text-5xl md:text-6xl font-serif-display text-[#5b0f0f] mb-12">Personal Space</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-500">
                <i className="fa-solid fa-box text-4xl text-[#5b0f0f] mb-6"></i>
                <h3 className="text-2xl font-serif-display mb-3">Track Orders</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">View real-time status of your active shipments and returns.</p>
              </div>
              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-500">
                <i className="fa-solid fa-credit-card text-4xl text-[#5b0f0f] mb-6"></i>
                <h3 className="text-2xl font-serif-display mb-3">Saved Methods</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">Manage your premium payment cards and shipping addresses.</p>
              </div>
            </div>
          </section>

          <section className="bg-[#5b0f0f]/5 p-16 rounded-[4rem] relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif-display text-[#5b0f0f] mb-8 leading-tight">The VariableS Label</h2>
              <div className="prose prose-lg text-gray-600 space-y-6 font-medium italic">
                <p className="text-lg">
                  VariableS is a curated label that blends quiet luxury with thoughtful utility. 
                  We craft limited drops and wardrobe staples with premium fabrics and careful attention to detail. 
                  Our collections are created for people who prefer subtlety over noise — 
                  classic palettes, elevated cuts and pieces made to last.
                </p>
                <p className="text-base text-gray-500">
                  Sustainability matters to us: we focus on better sourcing, measured production runs, 
                  and packaging that minimizes waste. Every piece tells a story of craftsmanship and intention.
                </p>
              </div>
              <button className="mt-12 text-[#5b0f0f] font-black text-[10px] uppercase tracking-[0.4em] border-b-2 border-[#5b0f0f] pb-1 hover:opacity-50 transition-all">
                The Sourcing Archive —
              </button>
            </div>
            <div className="absolute top-0 right-0 p-12 text-[15rem] text-[#5b0f0f]/5 pointer-events-none">
              <i className="fa-solid fa-signature"></i>
            </div>
          </section>

          <div className="flex gap-6">
            <button className="px-10 py-4 bg-red-50 text-red-600 font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-red-100 transition-colors">
              Sign Out
            </button>
            <button className="px-10 py-4 bg-gray-100 text-gray-500 font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors">
              Contact Concierge
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
