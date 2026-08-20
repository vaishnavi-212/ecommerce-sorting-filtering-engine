import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Truck, 
  RotateCcw, 
  Ruler, 
  PackageCheck, 
  ShieldCheck, 
  Clock, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  MapPin, 
  Sparkles, 
  FileText, 
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Box,
  CornerDownRight
} from 'lucide-react';

type ConciergeTab = 'shipping' | 'returns' | 'sizing' | 'tracking';

export const Concierge: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as ConciergeTab) || 'shipping';
  const [activeTab, setActiveTab] = useState<ConciergeTab>(initialTab);

  // Sync with searchParams
  useEffect(() => {
    const tabParam = searchParams.get('tab') as ConciergeTab;
    if (tabParam && ['shipping', 'returns', 'sizing', 'tracking'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const switchTab = (tab: ConciergeTab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Tracking State ---
  const [trackingIdInput, setTrackingIdInput] = useState('VAR-2026-8941');
  const [activeTrackingData, setActiveTrackingData] = useState({
    orderId: 'VAR-2026-8941',
    placedDate: 'August 18, 2026',
    estimatedDelivery: 'August 22, 2026 (by 6:00 PM)',
    status: 'In Transit',
    currentStage: 3, // 1 to 4
    courier: 'VariableS Priority Air Express',
    trackingNumber: 'VS-AIR-98421049281',
    destination: 'Bandra West, Mumbai, MH 400050',
    items: [
      { name: 'Oversized Silk Cashmere Knit', size: 'L', price: 24500, qty: 1, img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=400' },
      { name: 'Architectural Pleated Trouser', size: 'M', price: 18900, qty: 1, img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=400' }
    ],
    timeline: [
      { time: 'Aug 20, 2026 — 04:15 PM', status: 'Departed Mumbai Central Logistics Hub', desc: 'Package in air transit to regional dispatch center', done: true },
      { time: 'Aug 19, 2026 — 08:30 PM', status: 'Customs & Archival Inspection Passed', desc: 'Security tag sealed and verified in temperature-controlled unit', done: true },
      { time: 'Aug 19, 2026 — 11:00 AM', status: 'Dispatched from Primary VariableS Vault', desc: 'Handed over to priority courier', done: true },
      { time: 'Aug 18, 2026 — 02:45 PM', status: 'Order Confirmed & Prepared', desc: 'Hand-packed in bespoke burgundy archival box', done: true }
    ]
  });

  const sampleOrders: Record<string, typeof activeTrackingData> = {
    'VAR-2026-8941': {
      orderId: 'VAR-2026-8941',
      placedDate: 'August 18, 2026',
      estimatedDelivery: 'August 22, 2026 (by 6:00 PM)',
      status: 'In Transit',
      currentStage: 3,
      courier: 'VariableS Priority Air Express',
      trackingNumber: 'VS-AIR-98421049281',
      destination: 'Bandra West, Mumbai, MH 400050',
      items: [
        { name: 'Oversized Silk Cashmere Knit', size: 'L', price: 24500, qty: 1, img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=400' },
        { name: 'Architectural Pleated Trouser', size: 'M', price: 18900, qty: 1, img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=400' }
      ],
      timeline: [
        { time: 'Aug 20, 2026 — 04:15 PM', status: 'Departed Mumbai Central Logistics Hub', desc: 'Package in air transit to regional dispatch center', done: true },
        { time: 'Aug 19, 2026 — 08:30 PM', status: 'Customs & Archival Inspection Passed', desc: 'Security tag sealed and verified in temperature-controlled unit', done: true },
        { time: 'Aug 19, 2026 — 11:00 AM', status: 'Dispatched from Primary VariableS Vault', desc: 'Handed over to priority courier', done: true },
        { time: 'Aug 18, 2026 — 02:45 PM', status: 'Order Confirmed & Prepared', desc: 'Hand-packed in bespoke burgundy archival box', done: true }
      ]
    },
    'VAR-2026-5502': {
      orderId: 'VAR-2026-5502',
      placedDate: 'August 19, 2026',
      estimatedDelivery: 'Today (Out for Delivery)',
      status: 'Out for Delivery',
      currentStage: 4,
      courier: 'VariableS White-Glove VIP Courier',
      trackingNumber: 'VS-VIP-441098521',
      destination: 'Jubilee Hills, Hyderabad, TS 500033',
      items: [
        { name: 'Edition № 04: Obsidian Chronograph', size: 'One Size', price: 62000, qty: 1, img: 'https://plus.unsplash.com/premium_photo-1682125779534-76c5debea767?q=80&w=400' }
      ],
      timeline: [
        { time: 'Today — 08:30 AM', status: 'Out for White-Glove Doorstep Delivery', desc: 'Courier representative: Rahul M. (+91 98765 43210)', done: true },
        { time: 'Yesterday — 07:15 PM', status: 'Arrived at Local Destination Facility', desc: 'Passed final pre-delivery velvet casing verification', done: true },
        { time: 'Aug 19, 2026 — 02:10 PM', status: 'Priority Vault Dispatch', desc: 'Insured transit initiated', done: true },
        { time: 'Aug 19, 2026 — 09:00 AM', status: 'Order Authenticated & Prepared', desc: 'Serial number verified in registry', done: true }
      ]
    },
    'VAR-2026-3108': {
      orderId: 'VAR-2026-3108',
      placedDate: 'August 12, 2026',
      estimatedDelivery: 'Delivered on August 15, 2026',
      status: 'Delivered',
      currentStage: 5,
      courier: 'BlueDart Apex Gold',
      trackingNumber: 'BD-EXP-776210081',
      destination: 'Indiranagar, Bengaluru, KA 560038',
      items: [
        { name: 'Calfskin Minimalist Chelsea Boot', size: 'UK 9', price: 34000, qty: 1, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400' },
        { name: 'Structured Wool Overshirt', size: 'L', price: 16500, qty: 1, img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400' }
      ],
      timeline: [
        { time: 'Aug 15, 2026 — 02:40 PM', status: 'Delivered & Signed', desc: 'Signed by recipient: Verified Customer', done: true },
        { time: 'Aug 15, 2026 — 09:15 AM', status: 'Out for Delivery', desc: 'Dispatched with morning transit wave', done: true },
        { time: 'Aug 14, 2026 — 06:20 PM', status: 'Arrived at Bengaluru Apex Hub', desc: 'Sorted and scanned', done: true },
        { time: 'Aug 12, 2026 — 04:00 PM', status: 'Vault Processing Complete', desc: 'Original seal applied', done: true }
      ]
    }
  };

  const handleTrackLookup = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanId = trackingIdInput.trim().toUpperCase();
    if (sampleOrders[cleanId]) {
      setActiveTrackingData(sampleOrders[cleanId]);
    } else {
      // Dynamic fallback for any entered custom order ID
      setActiveTrackingData({
        orderId: cleanId || 'VAR-CUSTOM',
        placedDate: 'August 20, 2026',
        estimatedDelivery: 'In 3-4 Business Days',
        status: 'Vault Processing',
        currentStage: 2,
        courier: 'VariableS Express Courier',
        trackingNumber: `VS-REG-${Math.floor(10000000 + Math.random() * 90000000)}`,
        destination: 'Client Residence (Address on File)',
        items: [
          { name: 'Curated VariableS Archive Selection', size: 'M', price: 19500, qty: 1, img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=400' }
        ],
        timeline: [
          { time: 'Just Now', status: 'Packaging in Archival Burgundy Box', desc: 'Quality assurance checklist in progress', done: true },
          { time: 'Today', status: 'Payment Verified & Order Confirmed', desc: 'Allocated from exclusive central inventory', done: true }
        ]
      });
    }
  };

  // --- Sizing Guide State ---
  const [sizingCategory, setSizingCategory] = useState<'men' | 'women' | 'shoes' | 'accessories'>('men');
  const [sizingUnit, setSizingUnit] = useState<'in' | 'cm'>('in');

  // --- Returns Interactive Form State ---
  const [returnOrderId, setReturnOrderId] = useState('');
  const [returnReason, setReturnReason] = useState('size_fit');
  const [returnType, setReturnType] = useState<'exchange' | 'refund'>('exchange');
  const [returnSubmitted, setReturnSubmitted] = useState(false);
  const [generatedRMA, setGeneratedRMA] = useState('');

  const handleReturnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rma = `RMA-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedRMA(rma);
    setReturnSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-10 md:py-16 max-w-6xl animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5b0f0f]/5 text-[#5b0f0f] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VariableS Client Services</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif-display text-[#5b0f0f] mb-4">The Concierge</h1>
        <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
          Comprehensive shipping terms, effortless returns, precision tailoring dimensions, and live shipment tracking for your VariableS wardrobe.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 flex-wrap">
        <button
          onClick={() => switchTab('shipping')}
          className={`flex items-center gap-2 px-5 md:px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all shadow-sm ${
            activeTab === 'shipping'
              ? 'bg-[#5b0f0f] text-white shadow-lg scale-105'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black'
          }`}
        >
          <Truck className="w-4 h-4" />
          <span>Shipping Policy</span>
        </button>

        <button
          onClick={() => switchTab('returns')}
          className={`flex items-center gap-2 px-5 md:px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all shadow-sm ${
            activeTab === 'returns'
              ? 'bg-[#5b0f0f] text-white shadow-lg scale-105'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black'
          }`}
        >
          <RotateCcw className="w-4 h-4" />
          <span>Returns & Exchanges</span>
        </button>

        <button
          onClick={() => switchTab('sizing')}
          className={`flex items-center gap-2 px-5 md:px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all shadow-sm ${
            activeTab === 'sizing'
              ? 'bg-[#5b0f0f] text-white shadow-lg scale-105'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black'
          }`}
        >
          <Ruler className="w-4 h-4" />
          <span>Sizing Guide</span>
        </button>

        <button
          onClick={() => switchTab('tracking')}
          className={`flex items-center gap-2 px-5 md:px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all shadow-sm ${
            activeTab === 'tracking'
              ? 'bg-[#5b0f0f] text-white shadow-lg scale-105'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black'
          }`}
        >
          <PackageCheck className="w-4 h-4" />
          <span>Track Order</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* 1. SHIPPING POLICY TAB */}
      {/* ========================================================= */}
      {activeTab === 'shipping' && (
        <div className="space-y-12 animate-fade-in">
          {/* Key Shipping Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#5b0f0f]/10 text-[#5b0f0f] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-serif-display text-gray-900 mb-2">Complimentary Insurance</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                All domestic orders exceeding ₹5,000 receive complimentary door-to-door express delivery with 100% loss and transit damage coverage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#5b0f0f]/10 text-[#5b0f0f] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-serif-display text-gray-900 mb-2">Air Express Dispatch</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Orders placed before 2:00 PM IST are inspected, packaged in climate-controlled units, and dispatched same-day via priority air cargo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#5b0f0f]/10 text-[#5b0f0f] flex items-center justify-center mb-6">
                <Box className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-serif-display text-gray-900 mb-2">Signature Archival Box</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Every garment arrives encased in breathable organic cotton dust covers inside our rigid matte burgundy keepsake box with ribbon seal.
              </p>
            </div>
          </div>

          {/* Delivery Matrix Table */}
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif-display text-[#5b0f0f]">Global & Domestic Delivery Matrix</h2>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mt-1">Estimated transit windows by destination tier</p>
              </div>
              <button 
                onClick={() => switchTab('tracking')} 
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#5b0f0f] hover:underline"
              >
                <span>Track an active parcel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-400 uppercase tracking-widest text-[9px] md:text-[10px] font-black">
                    <th className="pb-4">Region / Destination</th>
                    <th className="pb-4">Service Level</th>
                    <th className="pb-4">Estimated Transit</th>
                    <th className="pb-4 text-right">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 font-bold text-gray-900">
                      Tier 1 Metros (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata)
                    </td>
                    <td className="py-4 text-gray-600">Air Express Priority</td>
                    <td className="py-4 text-[#5b0f0f] font-bold">24 – 48 Hours</td>
                    <td className="py-4 text-right font-black text-emerald-700">Free (Over ₹5,000) / ₹250</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 font-bold text-gray-900">Rest of India (Tier 2 & Regional Hubs)</td>
                    <td className="py-4 text-gray-600">Insured Ground Express</td>
                    <td className="py-4 text-[#5b0f0f] font-bold">2 – 4 Business Days</td>
                    <td className="py-4 text-right font-black text-emerald-700">Free (Over ₹5,000) / ₹350</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 font-bold text-gray-900">International Priority (USA, UK, Europe, UAE, Singapore)</td>
                    <td className="py-4 text-gray-600">DHL Express / FedEx International</td>
                    <td className="py-4 text-[#5b0f0f] font-bold">4 – 6 Business Days</td>
                    <td className="py-4 text-right font-black text-gray-800">₹3,500 ($45 USD)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 font-bold text-gray-900">Worldwide Rest of Globe</td>
                    <td className="py-4 text-gray-600">International Air Courier</td>
                    <td className="py-4 text-[#5b0f0f] font-bold">5 – 8 Business Days</td>
                    <td className="py-4 text-right font-black text-gray-800">₹4,800 ($60 USD)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Shipping Policy Details & FAQs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#5b0f0f]/5 p-8 md:p-10 rounded-[2.5rem] border border-[#5b0f0f]/10">
              <h3 className="text-xl font-serif-display text-[#5b0f0f] mb-4">Customs, Duties & Taxes</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                For international shipments, customs duties and local import taxes are automatically calculated at checkout where supported (DDP - Delivered Duty Paid). For all other territories, our concierge logistics team coordinates customs clearance directly on your behalf to prevent port delays.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5b0f0f]" />
                  <span>Real-time GPS tracking link sent via SMS & Email</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5b0f0f]" />
                  <span>Discreet, tamper-proof external safety seals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5b0f0f]" />
                  <span>Signature required upon final delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-serif-display text-gray-900 mb-4">Address Modification & Order Hold</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                Need to adjust your delivery destination or request a specific delivery time slot? You may modify your shipping address within <strong>60 minutes</strong> of placing your order directly through the Concierge portal or by contacting client support.
              </p>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200/70 text-xs text-gray-600 space-y-1">
                <p className="font-bold text-[#5b0f0f]">Concierge Direct Desk</p>
                <p>Email: <span className="font-medium text-gray-900">concierge@variablesfashion.com</span></p>
                <p>Private Line: <span className="font-medium text-gray-900">+91 22 4988 2000 (10 AM – 8 PM IST)</span></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. RETURNS & EXCHANGES TAB */}
      {/* ========================================================= */}
      {activeTab === 'returns' && (
        <div className="space-y-12 animate-fade-in">
          {/* Guarantee Hero */}
          <div className="bg-[#5b0f0f] text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2 block">Peace of Mind</span>
              <h2 className="text-3xl md:text-5xl font-serif-display mb-4">14-Day Complimentary Returns & Seamless Size Exchanges</h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-medium">
                We believe exceptional garments should fit flawlessly. If a piece does not match your desired silhouette or expectation, we provide doorstep reverse courier pickup with zero return fees.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold">
                <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">Doorstep Pickup Included</span>
                <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">Instant Size Exchange</span>
                <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">Full Refund to Source</span>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 text-[18rem] text-white/5 pointer-events-none -mr-12 -mb-20">
              <RotateCcw className="w-full h-full" />
            </div>
          </div>

          {/* 4-Step Process */}
          <div>
            <h3 className="text-2xl font-serif-display text-[#5b0f0f] text-center mb-8">The Return & Exchange Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm relative">
                <span className="w-8 h-8 rounded-full bg-[#5b0f0f] text-white text-xs font-black flex items-center justify-center mb-4">1</span>
                <h4 className="font-serif-display text-lg text-gray-900 mb-1">Initiate Request</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Enter your order ID below and select whether you prefer a replacement size or full refund.
                </p>
              </div>

              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm relative">
                <span className="w-8 h-8 rounded-full bg-[#5b0f0f] text-white text-xs font-black flex items-center justify-center mb-4">2</span>
                <h4 className="font-serif-display text-lg text-gray-900 mb-1">Doorstep Pickup</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Our courier partner arrives at your address with tamper-evident packaging. No label printing needed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm relative">
                <span className="w-8 h-8 rounded-full bg-[#5b0f0f] text-white text-xs font-black flex items-center justify-center mb-4">3</span>
                <h4 className="font-serif-display text-lg text-gray-900 mb-1">Archival Inspection</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Upon arrival at our atelier, pieces are inspected for original tags and unworn pristine condition.
                </p>
              </div>

              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm relative">
                <span className="w-8 h-8 rounded-full bg-[#5b0f0f] text-white text-xs font-black flex items-center justify-center mb-4">4</span>
                <h4 className="font-serif-display text-lg text-gray-900 mb-1">Refund / Exchange</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Replacement sizes dispatch immediately; refunds reflect in your original payment within 3-5 banking days.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Return Authorization Portal */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-xl max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5b0f0f]">Self-Service Portal</span>
              <h3 className="text-2xl md:text-3xl font-serif-display text-gray-900 mt-1">Initiate Return or Size Exchange</h3>
              <p className="text-gray-400 text-xs font-medium mt-1">Generate your Return Merchandise Authorization (RMA) reference instantly</p>
            </div>

            {returnSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-[2rem] p-8 text-center animate-reveal">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif-display text-emerald-950 mb-2">Request Successfully Lodged</h4>
                <p className="text-emerald-800 text-xs md:text-sm font-medium mb-4">
                  Your Return Reference: <strong className="text-black bg-white px-3 py-1 rounded-md border border-emerald-300">{generatedRMA}</strong>
                </p>
                <p className="text-gray-600 text-xs max-w-md mx-auto leading-relaxed mb-6">
                  Our courier representative will contact you for doorstep collection within 24 to 48 hours. Please ensure original tags remain attached.
                </p>
                <button
                  onClick={() => setReturnSubmitted(false)}
                  className="bg-[#5b0f0f] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors"
                >
                  Initiate Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleReturnSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-700 mb-2">
                    VariableS Order ID *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. VAR-2026-8941"
                    value={returnOrderId}
                    onChange={(e) => setReturnOrderId(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-xs font-bold focus:outline-none focus:border-[#5b0f0f] text-gray-900"
                  />
                  <div className="flex gap-2 mt-2">
                    <span className="text-[10px] text-gray-400">Try sample:</span>
                    <button
                      type="button"
                      onClick={() => setReturnOrderId('VAR-2026-8941')}
                      className="text-[10px] font-black text-[#5b0f0f] hover:underline"
                    >
                      #VAR-2026-8941
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-700 mb-2">
                      Request Type *
                    </label>
                    <select
                      value={returnType}
                      onChange={(e) => setReturnType(e.target.value as any)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold focus:outline-none focus:border-[#5b0f0f] text-gray-900"
                    >
                      <option value="exchange">Exchange for Different Size</option>
                      <option value="refund">Full Refund to Original Payment</option>
                      <option value="credit">Store Vault Credit (+5% Bonus)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-700 mb-2">
                      Reason for Request *
                    </label>
                    <select
                      value={returnReason}
                      onChange={(e) => setReturnReason(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold focus:outline-none focus:border-[#5b0f0f] text-gray-900"
                    >
                      <option value="size_fit">Size too large / small (Need sizing change)</option>
                      <option value="color">Shade / Color appearance differ</option>
                      <option value="fabric">Fabric feel / Silhouette preference</option>
                      <option value="damaged">Transit damage or defect</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5b0f0f] text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.3em] hover:bg-black transition-all shadow-lg active:scale-95"
                >
                  Generate Return & Schedule Pickup
                </button>
              </form>
            )}
          </div>

          {/* Terms & Non-Returnable Items */}
          <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-200/80 text-xs text-gray-600 leading-relaxed max-w-4xl mx-auto space-y-3">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[11px]">Return Conditions & Exclusions</h4>
            <p>
              • Garments must be unworn, unwashed, and returned in their original packaging with all security tags intact.
            </p>
            <p>
              • Footwear must be tested only on clean carpeted surfaces and returned with original box and dust covers.
            </p>
            <p>
              • Customized pieces or intimate wear (fragrances, underwear) are final sale for hygiene protection unless defective.
            </p>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. SIZING GUIDE TAB */}
      {/* ========================================================= */}
      {activeTab === 'sizing' && (
        <div className="space-y-12 animate-fade-in">
          {/* Controls: Category & Unit */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50 p-4 md:p-6 rounded-[2rem] border border-gray-200/60">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <button
                onClick={() => setSizingCategory('men')}
                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  sizingCategory === 'men' ? 'bg-[#5b0f0f] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Men's Silhouette
              </button>
              <button
                onClick={() => setSizingCategory('women')}
                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  sizingCategory === 'women' ? 'bg-[#5b0f0f] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Women's Edit
              </button>
              <button
                onClick={() => setSizingCategory('shoes')}
                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  sizingCategory === 'shoes' ? 'bg-[#5b0f0f] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Footwear & Shoes
              </button>
              <button
                onClick={() => setSizingCategory('accessories')}
                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  sizingCategory === 'accessories' ? 'bg-[#5b0f0f] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Accoutrements & Rings
              </button>
            </div>

            {sizingCategory !== 'accessories' && sizingCategory !== 'shoes' && (
              <div className="flex items-center bg-white rounded-full p-1 border border-gray-200 shadow-sm">
                <button
                  onClick={() => setSizingUnit('in')}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black transition-all ${
                    sizingUnit === 'in' ? 'bg-[#5b0f0f] text-white' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  Inches (in)
                </button>
                <button
                  onClick={() => setSizingUnit('cm')}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black transition-all ${
                    sizingUnit === 'cm' ? 'bg-[#5b0f0f] text-white' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  Centimeters (cm)
                </button>
              </div>
            )}
          </div>

          {/* Men's Size Table */}
          {sizingCategory === 'men' && (
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-serif-display text-[#5b0f0f]">Men's Upperwear & Bottomwear Dimensions</h3>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mt-1">Measured flat on tailored mannequin</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-400 uppercase tracking-widest text-[9px] md:text-[10px] font-black">
                      <th className="pb-4">Size Tag</th>
                      <th className="pb-4">Chest / Bust ({sizingUnit})</th>
                      <th className="pb-4">Shoulder Width ({sizingUnit})</th>
                      <th className="pb-4">Waist ({sizingUnit})</th>
                      <th className="pb-4">Garment Length ({sizingUnit})</th>
                      <th className="pb-4 text-right">Standard Fit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">XS (Extra Small)</td>
                      <td className="py-4 font-semibold">{sizingUnit === 'in' ? '36 – 38"' : '91 – 96 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '17.5"' : '44.5 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '28 – 30"' : '71 – 76 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '27"' : '68.5 cm'}</td>
                      <td className="py-4 text-right text-gray-500 font-medium">Slim Silhouette</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">S (Small)</td>
                      <td className="py-4 font-semibold">{sizingUnit === 'in' ? '38 – 40"' : '96 – 101 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '18.2"' : '46 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '30 – 32"' : '76 – 81 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '28"' : '71 cm'}</td>
                      <td className="py-4 text-right text-gray-500 font-medium">Tailored Fit</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 bg-[#5b0f0f]/5">
                      <td className="py-4 font-black text-[#5b0f0f]">M (Medium) — Most Popular</td>
                      <td className="py-4 font-bold">{sizingUnit === 'in' ? '40 – 42"' : '101 – 106 cm'}</td>
                      <td className="py-4 text-gray-800 font-semibold">{sizingUnit === 'in' ? '19.0"' : '48 cm'}</td>
                      <td className="py-4 text-gray-800 font-semibold">{sizingUnit === 'in' ? '32 – 34"' : '81 – 86 cm'}</td>
                      <td className="py-4 text-gray-800 font-semibold">{sizingUnit === 'in' ? '29"' : '73.5 cm'}</td>
                      <td className="py-4 text-right font-black text-[#5b0f0f]">Classic Variable</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">L (Large)</td>
                      <td className="py-4 font-semibold">{sizingUnit === 'in' ? '42 – 44"' : '106 – 112 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '19.8"' : '50 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '34 – 36"' : '86 – 91 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '30"' : '76 cm'}</td>
                      <td className="py-4 text-right text-gray-500 font-medium">Relaxed Ease</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">XL (Extra Large)</td>
                      <td className="py-4 font-semibold">{sizingUnit === 'in' ? '44 – 46"' : '112 – 117 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '20.5"' : '52 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '36 – 38"' : '91 – 96 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '31"' : '78.5 cm'}</td>
                      <td className="py-4 text-right text-gray-500 font-medium">Generous Drape</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Women's Size Table */}
          {sizingCategory === 'women' && (
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-serif-display text-[#5b0f0f]">Women's Edit Dimensions</h3>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mt-1">Refined tailoring scale for knitwear, dresses & outerwear</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-400 uppercase tracking-widest text-[9px] md:text-[10px] font-black">
                      <th className="pb-4">Size Tag</th>
                      <th className="pb-4">Bust ({sizingUnit})</th>
                      <th className="pb-4">True Waist ({sizingUnit})</th>
                      <th className="pb-4">Low Hips ({sizingUnit})</th>
                      <th className="pb-4 text-right">EU / US Equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">XS</td>
                      <td className="py-4 font-semibold">{sizingUnit === 'in' ? '32 – 33"' : '81 – 84 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '24 – 25"' : '61 – 64 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '34 – 35"' : '86 – 89 cm'}</td>
                      <td className="py-4 text-right text-gray-500 font-medium">EU 34 / US 2</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">S</td>
                      <td className="py-4 font-semibold">{sizingUnit === 'in' ? '34 – 35"' : '86 – 89 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '26 – 27"' : '66 – 69 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '36 – 37"' : '91 – 94 cm'}</td>
                      <td className="py-4 text-right text-gray-500 font-medium">EU 36 / US 4</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 bg-[#5b0f0f]/5">
                      <td className="py-4 font-black text-[#5b0f0f]">M</td>
                      <td className="py-4 font-bold">{sizingUnit === 'in' ? '36 – 37"' : '91 – 94 cm'}</td>
                      <td className="py-4 text-gray-800 font-semibold">{sizingUnit === 'in' ? '28 – 29"' : '71 – 74 cm'}</td>
                      <td className="py-4 text-gray-800 font-semibold">{sizingUnit === 'in' ? '38 – 39"' : '96 – 99 cm'}</td>
                      <td className="py-4 text-right font-black text-[#5b0f0f]">EU 38 / US 6</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">L</td>
                      <td className="py-4 font-semibold">{sizingUnit === 'in' ? '38 – 40"' : '96 – 101 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '30 – 32"' : '76 – 81 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '40 – 42"' : '101 – 106 cm'}</td>
                      <td className="py-4 text-right text-gray-500 font-medium">EU 40 / US 8</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">XL</td>
                      <td className="py-4 font-semibold">{sizingUnit === 'in' ? '41 – 43"' : '104 – 109 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '33 – 35"' : '84 – 89 cm'}</td>
                      <td className="py-4 text-gray-600">{sizingUnit === 'in' ? '43 – 45"' : '109 – 114 cm'}</td>
                      <td className="py-4 text-right text-gray-500 font-medium">EU 42 / US 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Footwear Size Table */}
          {sizingCategory === 'shoes' && (
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-serif-display text-[#5b0f0f]">Footwear & Boot Conversion Scale</h3>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mt-1">VariableS hand-lasted calfskin and runner footwear</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-400 uppercase tracking-widest text-[9px] md:text-[10px] font-black">
                      <th className="pb-4">UK Size (Standard)</th>
                      <th className="pb-4">US Size</th>
                      <th className="pb-4">EU Size</th>
                      <th className="pb-4">Foot Length (CM)</th>
                      <th className="pb-4 text-right">Insole Fit Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">UK 7</td>
                      <td className="py-4 font-semibold">US 8</td>
                      <td className="py-4 text-gray-600">EU 41</td>
                      <td className="py-4 text-gray-600">25.5 cm</td>
                      <td className="py-4 text-right text-gray-500 font-medium">True to Size</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">UK 8</td>
                      <td className="py-4 font-semibold">US 9</td>
                      <td className="py-4 text-gray-600">EU 42</td>
                      <td className="py-4 text-gray-600">26.3 cm</td>
                      <td className="py-4 text-right text-gray-500 font-medium">True to Size</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 bg-[#5b0f0f]/5">
                      <td className="py-4 font-black text-[#5b0f0f]">UK 9</td>
                      <td className="py-4 font-bold">US 10</td>
                      <td className="py-4 text-gray-800 font-semibold">EU 43</td>
                      <td className="py-4 text-gray-800 font-semibold">27.1 cm</td>
                      <td className="py-4 text-right font-black text-[#5b0f0f]">Most Standard</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">UK 10</td>
                      <td className="py-4 font-semibold">US 11</td>
                      <td className="py-4 text-gray-600">EU 44</td>
                      <td className="py-4 text-gray-600">28.0 cm</td>
                      <td className="py-4 text-right text-gray-500 font-medium">True to Size</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="py-4 font-black text-[#5b0f0f]">UK 11</td>
                      <td className="py-4 font-semibold">US 12</td>
                      <td className="py-4 text-gray-600">EU 45</td>
                      <td className="py-4 text-gray-600">28.8 cm</td>
                      <td className="py-4 text-right text-gray-500 font-medium">Generous Toe Box</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Accessories Sizing Note */}
          {sizingCategory === 'accessories' && (
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-lg space-y-6">
              <h3 className="text-2xl font-serif-display text-[#5b0f0f]">Accoutrements & Fine Jewelry Sizing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                VariableS bags, silk scarves, leather cardholders, and eyewear are sculpted as unified <strong>One Size</strong> pieces designed for universal proportion.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Belts & Waist Bands</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Featuring 5 micro-adjusted punched holes fitting waists 28" through 38". Additional bespoke hole punching is provided complimentary upon request.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Signet Rings & Chains</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Signet rings are cast in US Standard Sizes 8, 9, 10, and 11. Chains feature an adjustable 2-inch extender lock.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* How to Measure Guide */}
          <div className="bg-[#5b0f0f]/5 p-8 md:p-12 rounded-[2.5rem] border border-[#5b0f0f]/10">
            <h3 className="text-2xl font-serif-display text-[#5b0f0f] mb-6">How to Measure Your Silhouette</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase text-[#5b0f0f]">1. Chest / Bust</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Pass a soft measuring tape under your arms across the fullest part of your chest, keeping the tape level around your shoulder blades.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-black uppercase text-[#5b0f0f]">2. True Waist</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Measure around your natural waistline, typically situated 1 inch above the belly button. Do not pull the tape too tight.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-black uppercase text-[#5b0f0f]">3. Shoulder Span</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  From the tip of one shoulder bone across the natural curve of your upper back to the opposite shoulder tip.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. TRACK ORDER TAB */}
      {/* ========================================================= */}
      {activeTab === 'tracking' && (
        <div className="space-y-12 animate-fade-in">
          {/* Tracking Search Box */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-xl max-w-3xl mx-auto text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5b0f0f]">Live Logistics</span>
            <h2 className="text-3xl font-serif-display text-gray-900 mt-1 mb-2">Track Your VariableS Shipment</h2>
            <p className="text-gray-400 text-xs font-medium mb-8">Enter your Order ID (e.g. VAR-2026-8941) to monitor live status & GPS milestones</p>

            <form onSubmit={handleTrackLookup} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={trackingIdInput}
                  onChange={(e) => setTrackingIdInput(e.target.value)}
                  placeholder="Enter Order ID"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3.5 text-xs font-bold focus:outline-none focus:border-[#5b0f0f] text-gray-900"
                />
              </div>
              <button
                type="submit"
                className="bg-[#5b0f0f] text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Track Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live Sample Parcels:</span>
              {Object.keys(sampleOrders).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setTrackingIdInput(id);
                    setActiveTrackingData(sampleOrders[id]);
                  }}
                  className={`text-[10px] font-black px-3 py-1 rounded-lg border transition-all ${
                    activeTrackingData.orderId === id
                      ? 'bg-[#5b0f0f] text-white border-[#5b0f0f]'
                      : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  #{id}
                </button>
              ))}
            </div>
          </div>

          {/* Active Order Card & Stage Bar */}
          <div className="bg-white p-6 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl max-w-4xl mx-auto space-y-10">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-gray-100">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl md:text-3xl font-serif-display text-[#5b0f0f]">{activeTrackingData.orderId}</h3>
                  <span className="bg-[#5b0f0f]/10 text-[#5b0f0f] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeTrackingData.status}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Placed on {activeTrackingData.placedDate}</p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block">Estimated Arrival</span>
                <span className="text-sm md:text-base font-bold text-gray-900">{activeTrackingData.estimatedDelivery}</span>
              </div>
            </div>

            {/* Visual Step Progress Bar */}
            <div>
              <div className="grid grid-cols-4 gap-2 relative">
                {/* Stage 1: Placed */}
                <div className="text-center space-y-2">
                  <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-black ${
                    activeTrackingData.currentStage >= 1 ? 'bg-[#5b0f0f] text-white shadow-md' : 'bg-gray-200 text-gray-400'
                  }`}>
                    1
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-gray-800 block">Confirmed</span>
                </div>

                {/* Stage 2: Packaged */}
                <div className="text-center space-y-2">
                  <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-black ${
                    activeTrackingData.currentStage >= 2 ? 'bg-[#5b0f0f] text-white shadow-md' : 'bg-gray-200 text-gray-400'
                  }`}>
                    2
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-gray-800 block">Archival Pack</span>
                </div>

                {/* Stage 3: In Transit */}
                <div className="text-center space-y-2">
                  <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-black ${
                    activeTrackingData.currentStage >= 3 ? 'bg-[#5b0f0f] text-white shadow-md' : 'bg-gray-200 text-gray-400'
                  }`}>
                    3
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-gray-800 block">Air Transit</span>
                </div>

                {/* Stage 4: Out for Delivery / Delivered */}
                <div className="text-center space-y-2">
                  <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-black ${
                    activeTrackingData.currentStage >= 4 ? 'bg-[#5b0f0f] text-white shadow-md' : 'bg-gray-200 text-gray-400'
                  }`}>
                    4
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-gray-800 block">Delivered</span>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Courier & Destination */}
              <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-200/60 text-xs">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-[#5b0f0f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Courier Carrier:</span>
                    <p className="text-gray-600">{activeTrackingData.courier}</p>
                    <p className="text-gray-400 font-mono text-[10px] mt-0.5">AWB: {activeTrackingData.trackingNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-gray-200">
                  <MapPin className="w-5 h-5 text-[#5b0f0f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Delivery Destination:</span>
                    <p className="text-gray-600">{activeTrackingData.destination}</p>
                  </div>
                </div>
              </div>

              {/* Items in this Shipment */}
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">Package Contents ({activeTrackingData.items.length})</span>
                {activeTrackingData.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <img src={item.img} alt={item.name} className="w-12 h-14 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-gray-900 text-xs truncate">{item.name}</h5>
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-0.5">
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded font-black text-black">Size: {item.size}</span>
                        <span>Qty: {item.qty}</span>
                      </div>
                    </div>
                    <span className="font-bold text-xs text-[#5b0f0f]">₹{item.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Milestones Log */}
            <div className="pt-6 border-t border-gray-100">
              <h4 className="text-lg font-serif-display text-gray-900 mb-6">Activity Timeline</h4>
              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                {activeTrackingData.timeline.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-4 relative pl-2">
                    <div className="w-3 h-3 rounded-full bg-[#5b0f0f] border-2 border-white shadow shrink-0 mt-1 z-10"></div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h5 className="font-bold text-xs md:text-sm text-gray-900">{event.status}</h5>
                        <span className="text-[10px] text-gray-400 font-medium">{event.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Concierge;
