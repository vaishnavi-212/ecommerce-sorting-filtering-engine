
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, CreditCard, Sparkles, ArrowRight, ShieldCheck, Ruler, RotateCcw, Info, CheckCircle2 } from 'lucide-react';
import { UI_IMAGES } from '../imageRegistry';

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Demo Notice Banner */}
      <div className="mb-10 bg-amber-50 border border-amber-200/80 rounded-2xl md:rounded-[2rem] p-5 md:p-6 text-amber-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-start md:items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-200/60 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 md:mt-0">
            <Info className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-amber-200/80 text-amber-900 px-2.5 py-0.5 rounded-md">
                Demo Showcase
              </span>
              <span className="font-serif-display text-base md:text-lg font-bold text-amber-950">
                This is a Concept & Demo Store
              </span>
            </div>
            <p className="text-xs text-amber-800/90 mt-1 font-medium leading-relaxed">
              You are viewing a demonstration profile for VariableS. All items, order records, and checkout flows are prototype simulations designed for design and workflow evaluation.
            </p>
          </div>
        </div>

        <Link
          to="/products"
          className="px-5 py-2.5 bg-amber-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors whitespace-nowrap self-stretch md:self-auto text-center"
        >
          Explore Catalog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <aside className="lg:col-span-1 space-y-10">
          <div className="bg-white border-2 border-[#5b0f0f] rounded-[2.5rem] p-12 text-center shadow-xl">
            <div className="w-40 h-40 bg-gray-100 rounded-full mx-auto mb-8 overflow-hidden border-4 border-[#5b0f0f]/10 shadow-inner">
              <img src={UI_IMAGES.placeholders.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-3xl font-serif-display text-[#5b0f0f] mb-2">Aryan Sharma</h2>
            <p className="text-gray-400 mb-2 font-bold text-xs uppercase tracking-widest">Demo Client Account</p>
            <span className="inline-block bg-[#5b0f0f]/10 text-[#5b0f0f] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-8">
              Sample Persona
            </span>
            <Link 
              to="/concierge?tab=sizing"
              className="block w-full py-3.5 rounded-full border-2 border-[#5b0f0f] text-[#5b0f0f] font-black text-[10px] uppercase tracking-widest hover:bg-[#5b0f0f] hover:text-white transition-all text-center"
            >
              View Silhouette Sizing
            </Link>
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-10 space-y-6">
            <h3 className="font-serif-display text-2xl text-[#5b0f0f] border-b border-gray-100 pb-4">Account Summary</h3>
            <div className="flex justify-between text-xs uppercase tracking-widest">
              <span className="text-gray-400 font-bold">Archives Accessed</span>
              <span className="font-black text-[#5b0f0f]">4 Orders (Demo)</span>
            </div>
            <div className="flex justify-between text-xs uppercase tracking-widest">
              <span className="text-gray-400 font-bold">Member Status</span>
              <span className="font-black text-yellow-600">Platinum Tier</span>
            </div>
            <div className="flex justify-between text-xs uppercase tracking-widest pt-2 border-t border-gray-200/50">
              <span className="text-gray-400 font-bold">Environment</span>
              <span className="font-black text-emerald-600">Interactive Sandbox</span>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm space-y-4">
            <h4 className="font-serif-display text-lg text-gray-900">Concierge Desk</h4>
            <div className="space-y-2 text-xs font-bold">
              <Link to="/concierge?tab=shipping" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#5b0f0f] transition-colors">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#5b0f0f]" /> Shipping Policy</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
              <Link to="/concierge?tab=returns" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#5b0f0f] transition-colors">
                <span className="flex items-center gap-2"><RotateCcw className="w-4 h-4 text-[#5b0f0f]" /> 14-Day Returns</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
              <Link to="/concierge?tab=sizing" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#5b0f0f] transition-colors">
                <span className="flex items-center gap-2"><Ruler className="w-4 h-4 text-[#5b0f0f]" /> Sizing Guide</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-2 space-y-16">
          <section>
            <h1 className="text-5xl md:text-6xl font-serif-display text-[#5b0f0f] mb-12">Personal Space</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                to="/concierge?tab=tracking"
                className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-500 block group"
              >
                <div className="flex justify-between items-start mb-6">
                  <Package className="w-10 h-10 text-[#5b0f0f] stroke-[1.5]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#5b0f0f] bg-[#5b0f0f]/10 px-3 py-1 rounded-full group-hover:bg-[#5b0f0f] group-hover:text-white transition-colors">Live GPS</span>
                </div>
                <h3 className="text-2xl font-serif-display mb-3 text-gray-900">Track Orders</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">View real-time status of your active shipments and returns.</p>
              </Link>
              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-500">
                <CreditCard className="w-10 h-10 text-[#5b0f0f] mb-6 stroke-[1.5]" />
                <h3 className="text-2xl font-serif-display mb-3 text-gray-900">Saved Methods</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">Manage your premium payment cards and shipping addresses.</p>
              </div>
            </div>
          </section>

          {/* Demo Features Overview */}
          <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200/80 shadow-sm">
            <h3 className="font-serif-display text-2xl text-gray-900 mb-3">Demo Product Showcase Details</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 font-medium">
              This interactive boutique demonstrates the full aesthetic and operational workflow of the VariableS luxury commerce platform:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-gray-700">
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Simulated order generation & multi-size cart synchronization</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Real-time GPS parcel milestone tracking simulator</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Instant RMA return authorization and sizing matrix</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>AI outfit composition and limited archival drops</span>
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
            <div className="absolute top-0 right-0 p-12 text-[#5b0f0f]/5 pointer-events-none">
              <Sparkles className="w-64 h-64" />
            </div>
          </section>

          <div className="flex gap-6">
            <button className="px-10 py-4 bg-red-50 text-red-600 font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-red-100 transition-colors">
              Sign Out
            </button>
            <Link 
              to="/concierge?tab=shipping"
              className="px-10 py-4 bg-gray-100 text-gray-500 font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors text-center inline-block"
            >
              Contact Concierge
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;

