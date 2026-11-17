import React from 'react';
import { CheckCircle2, ShieldCheck, PhoneCall, MessageSquare, Cpu, Layers, Factory, Recycle } from 'lucide-react';

const etpProducts = [
  {
    id: 1,
    title: "Industrial Effluent Treatment Plant (50 KLD)",
    price: "₹ 14,50,000",
    unit: "/ Plant",
    capacity: "50 KLD (Scalable up to 500+ KLD)",
    technology: "Physico-Chemical + Biological & MBBR",
    application: "Textile, Dyeing, Electroplating, Rubber, Automotive, Engineering Units",
    material: "Mild Steel (Anti-Corrosive Epoxy Coated / Skid Mounted)",
    features: [
      "Customized pH control & chemical coagulation-flocculation unit",
      "Effective removal of COD, BOD, and heavy suspended solids",
      "Fully integrated Pressure Sand & Activated Carbon filters",
      "Meets Punjab Pollution Control Board (PPCB) & Central norms",
      "Automatic Electrical Control Panel with safe interlocking"
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Compact Effluent Treatment Plant (15 KLD)",
    price: "₹ 6,80,000",
    unit: "/ Plant",
    capacity: "10 KLD - 25 KLD",
    technology: "Primary Clarification + Aerobic Biological Treatment",
    application: "Small Scale Industries, Laundries, Dairy Units, Automotive Workshops",
    material: "Mild Steel (Prefabricated / Compact Footprint)",
    features: [
      "Plug & play model requiring minimal civil work on-site",
      "Low operating and electrical maintenance costs",
      "Robust bar screen and oil-grease trap integration",
      "Treated water suitable for floor washing and gardening",
      "Backed by Jyoti Enterprises' 20+ years of manufacturing expertise"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ETPProducts() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#FEFDDF] py-12 px-4 font-sans sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-40 h-72 w-[min(85vw,900px)] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[100px]" />
      
      {/* SEO Meta Tags & Structured Schema Simulation Area */}
      <div className="sr-only">
        <h1>Effluent Treatment Plants (ETP) Manufacturer in Ludhiana Punjab | Jyoti Enterprises</h1>
        <p>
          Leading manufacturer of industrial effluent treatment plants (ETP), sewage treatment plants (STP), and total water technology solutions in Ludhiana, Punjab, India. MSME registered company delivering PPCB compliant ETP systems for textile, electroplating, and manufacturing industries.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-semibold uppercase tracking-wider text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Jyoti Enterprises — Ludhiana, Punjab
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Industrial Effluent Treatment Plants (ETP)
          </h2>
          <p className="text-slate-600 mt-2 max-w-3xl mx-auto">
            Engineered for safe disposal and zero-liquid discharge compliance. Robust physico-chemical and biological treatment solutions designed to treat complex industrial wastewater streams.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {etpProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-[#FFFEF5] rounded-2xl shadow-md border border-emerald-500/20 overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/20"
            >
              <div>
                {/* Product Image & Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#FEFDDF]">
                  <img 
                    src={product.image} 
                    alt={`${product.title} - Jyoti Enterprises Ludhiana`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> MSME Registered Manufacturer
                  </div>
                  {/* <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl shadow-lg">
                    <span className="text-xs text-slate-300 block">Estimated Price</span>
                    <span className="text-xl font-bold text-emerald-300">{product.price}</span>
                    <span className="text-xs text-slate-300 ml-1">{product.unit}</span>
                  </div> */}
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {product.title}
                  </h3>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm  p-4 rounded-xl border border-emerald-500">
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
                      Key Highlights & Compliance Features
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
              <div className="px-6 sm:px-8 py-4 bg-[#FEFDDF] border-t border-emerald-500/15 flex flex-col sm:flex-row items-center gap-3">
                <a 
                  href="tel:+919888832774" 
                  className="w-full sm:flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <PhoneCall className="w-4 h-4" /> Call: +91 98888-32774
                </a>
                <a 
                  href="https://wa.me/919888832774?text=Hello%20Jyoti%20Enterprises,%20I%20am%20interested%20in%20your%20Effluent%20Treatment%20Plants%20(ETP)." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Inquiry
                </a>
              </div>

            </div>
          ))}
        </div>

      

      </div>
    </div>
  );
}