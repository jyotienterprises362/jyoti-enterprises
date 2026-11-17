import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, PhoneCall, MessageSquare } from 'lucide-react';

const stpProducts = [
  {
    id: 1,
    title: "Sewage Treatment Plant (200 KLD / MBBR)",
    price: "₹ 9,00,000",
    unit: "/ Plant",
    capacity: "200 KLD (Up to 1500 KLD)",
    technology: "Mixed Bed Bio Reactor (MBBR)",
    application: "Hospital, Residential, Commercial, Hotel, Industrial",
    material: "Mild Steel (Above Ground / Containerized)",
    features: [
      "Factory Fitted - minimum work at site",
      "Ready to use - Plug & Play Model",
      "Meets all environmental parameters",
      "Low Footprint & Low Power Consumption",
      "Automatic Control Module with 2 Blowers"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Commercial & Industrial STP Plant (50 KLD)",
    price: "₹ 15,50,000",
    unit: "/ Plant",
    capacity: "50 KLD (Scalable up to 1000+ KLD)",
    technology: "Advanced MBBR / SBR Technology",
    application: "Mall, Multiplexes, Residential Apartments, Resorts",
    material: "Mild Steel (Prefabricated / Skid Mounted)",
    features: [
      "Excellent performance & high efficiency",
      "Specialized separation of organic substances",
      "Nitrification & Denitrification support",
      "Treated water suitable for Gardening & Flushing",
      "Sturdy construction with long working life"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  }
];

export default function STPProducts() {
  return (
    <div className="bg-[#FEFDDF] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-semibold uppercase tracking-wider text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Industrial & Commercial Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Sewage Treatment Plants (STP)
          </h1>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            High-efficiency, low-energy MBBR and containerized plug-and-play sewage treatment systems built for reliable performance.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stpProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-[#FFFEF5] rounded-2xl shadow-md border border-emerald-500/20 overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-900/5"
            >
              <div>
                {/* Product Image & Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#FEFDDF]">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Trustseal Verified
                  </div>
                 
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {product.title}
                  </h3>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm  p-4 rounded-xl border border-emerald-500/15">
                    <div>
                      <span className="text-slate-500 block text-xs font-medium">Capacity:</span>
                      <span className="font-semibold text-slate-800">{product.capacity}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs font-medium">Technology:</span>
                      <span className="font-semibold text-slate-800">{product.technology}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs font-medium">Application:</span>
                      <span className="font-semibold text-slate-800">{product.application}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs font-medium">Construction:</span>
                      <span className="font-semibold text-slate-800">{product.material}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Highlights & Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 sm:px-8 py-4  border-t border-emerald-500/15 flex flex-col sm:flex-row items-center gap-3">
                <button className="w-full sm:flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm text-sm">
                  <PhoneCall className="w-4 h-4" /> Get Best Price
                </button>
                <button className="w-full sm:flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm text-sm">
                  <MessageSquare className="w-4 h-4" /> WhatsApp Inquiry
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}