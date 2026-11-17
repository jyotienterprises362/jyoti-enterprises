import { useState } from 'react';

const clientProjects = [
  {
    company: 'All India Radio (AIR)',
    location: 'Jammu',
    capacity: '35 KLD',
    scope: 'STP',
    status: 'Installed · Operation & maintenance',
  },
  {
    company: 'M/s R. L. Pareek',
    location: 'Dharangadhra, Gujarat',
    capacity: '400, 250, 170, 70 & 35 KLD',
    scope: 'MBBR-based STPs',
    status: 'Installed',
  },
  {
    company: 'M/s R. L. Pareek',
    location: 'Samba, Jammu & Kashmir',
    capacity: '70 KLD',
    scope: 'MBR-based STP',
    status: 'Installed · Operation & maintenance',
  },
  {
    company: 'Geminy Industrial Corporation',
    location: 'G.T. Road, Ludhiana',
    capacity: '15 KLD',
    scope: 'ETP',
    status: 'Installed',
  },
  {
    company: 'R. B. Knit Export',
    location: 'G.T. Road, Doraha',
    capacity: '200 KLD',
    scope: 'Operation & maintenance of ETP/STP',
    status: 'Installed',
  },
  {
    company: 'R. B. Knit Export - II',
    location: 'Cheema Chowk, Ludhiana',
    capacity: '50 KLD',
    scope: 'ETP/STP',
    status: 'Installed',
  },
  {
    company: 'Yanmar Agricultural Machinery India Pvt. Ltd.',
    location: 'Morinda, Punjab · Previously Claas India',
    capacity: 'ETP: 160 & 10 KLD · STP: 50 KLD',
    scope: 'ETP and STP',
    status: 'Installed',
  },
  {
    company: 'Himachal Woollen Mills',
    location: 'Samrala Chowk, Ludhiana',
    capacity: '30 KLD',
    scope: 'ETP',
    status: 'Installed',
  },
  {
    company: 'Nexo Industries Ltd.',
    location: 'Ludhiana',
    capacity: '100 KLD',
    scope: 'DTP',
    status: 'Installed',
  },
  {
    company: 'Sharman Strips',
    location: 'Kanganwal Road, Ludhiana',
    capacity: '30 KLD',
    scope: 'STP',
    status: 'Installed',
  },
  {
    company: 'Kitty Industries Pvt. Ltd.',
    location: 'Panglian, Ludhiana',
    capacity: '200 KLD',
    scope: 'ETP / STP',
    status: 'Operation & maintenance',
  },
  {
    company: 'Active Clothing',
    location: 'Alla Singh Badali',
    capacity: '50 KLD',
    scope: 'ETP / STP',
    status: 'Installed',
  },
  {
    company: 'Palm City',
    location: 'Chandigarh Road, Ludhiana',
    capacity: '100 KLD',
    scope: 'STP',
    status: 'Installed',
  },
  {
    company: 'Palm Enclave',
    location: 'Sidhwan Kanal, Ludhiana',
    capacity: '50 KLD',
    scope: 'STP',
    status: 'Installed',
  },
  {
    company: 'Palm Garden',
    location: '',
    capacity: '150 KLD',
    scope: 'STP',
    status: 'Installed',
  },
  {
    company: 'Palm Heights',
    location: '',
    capacity: '75 KLD',
    scope: 'STP',
    status: 'Installed',
  },
  {
    company: 'Greater Kailash',
    location: '',
    capacity: '75 KLD',
    scope: 'STP',
    status: 'Installed',
  },
];

export default function JyotiEnterprisesWebsite() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderClientCards = (projects, isCopy = false) => projects.map((project) => (
    <article
      key={`${project.company}-${project.location}${isCopy ? '-copy' : ''}`}
      className="group relative min-h-77.5 w-[min(80vw,330px)] shrink-0 overflow-hidden rounded-2xl border border-[#E8DDAA] bg-[#FFFEF5] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#78A8C7] hover:shadow-xl hover:shadow-[#78A8C7]/20"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-[#FFC928] to-[#78A8C7]" />
      <div className="mb-5">
        <p className="break-words text-lg font-bold leading-snug text-slate-900">{project.company}</p>
        {project.location && <p className="mt-1 text-sm text-slate-500">{project.location}</p>}
        <span className="mt-3 inline-flex max-w-full whitespace-normal rounded-full bg-[#FEFDDF] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
          {project.status}
        </span>
      </div>
      <div className="rounded-xl bg-[#F3F7F9] p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Plant capacity</p>
        <p className="mt-1 break-words text-xl font-extrabold text-[#426D89]">{project.capacity}</p>
      </div>
      <div className="mt-4 text-sm">
        <p className="font-semibold text-slate-500">Technology / role</p>
        <p className="mt-1 break-words font-medium text-slate-800">{project.scope}</p>
      </div>
    </article>
  ));

  return (
    <div className="min-h-screen bg-[#FEFDDF] text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-[#FEFDDF] py-14 sm:py-20 lg:pb-28">
        <div className="pointer-events-none absolute left-1/2 top-[32%] h-72 w-[min(85vw,900px)] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEFDDF] border border-[#FFC928] text-emerald-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              MSME Registered 
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Providing Environmental Solutions That Make <span className="text-emerald-500">Economic Sense</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Premier manufacturers of Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), Lead Recycling Systems, and Organic Waste Converters (OWC) based in Ludhiana, Punjab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#solutions" className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-center shadow-xl shadow-emerald-500/25 transition-all">
                Explore Technologies
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-xl bg-[#FFFEF5] border border-emerald-500 hover:bg-[#FEFDDF] text-slate-800 font-semibold text-center transition-all shadow-sm">
                Request Site Audit
              </a>
            </div>
            
            {/* Trust Badges Bar */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-slate-200 pt-6 min-[480px]:grid-cols-3 sm:gap-4 sm:pt-8">
              <div className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-emerald-500/15 bg-[#FFFEF5] px-3 py-4 text-center">
                <p className="text-2xl font-extrabold leading-tight text-slate-900">20+ Years</p>
                <p className="mt-1 text-xs font-medium leading-snug text-slate-500">Industry Expertise</p>
              </div>
              <div className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-emerald-500/15 bg-[#FFFEF5] px-3 py-4 text-center">
                <p className="text-2xl font-extrabold leading-tight text-slate-900">100+</p>
                <p className="mt-1 text-xs font-medium leading-snug text-slate-500">Successful Installations</p>
              </div>
              <div className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-emerald-500/15 bg-[#FFFEF5] px-3 py-4 text-center">
                <p className="text-2xl font-extrabold leading-tight text-slate-900">100%</p>
                <p className="mt-1 text-xs font-medium leading-snug text-slate-500">Regulatory Compliance</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-3xl blur-xl opacity-25 animate-tilt"></div>
              <div className="relative space-y-6 rounded-3xl border border-emerald-500 bg-[#FFFEF5] p-5 shadow-2xl shadow-[#426D89]/10 sm:p-8">
                <h2 className="text-xl font-bold text-slate-900">Core Manufacturing Lines</h2>
                <div className="space-y-3">
                  <div className="flex flex-col items-start justify-between gap-2 rounded-xl border border-[#F3E8B4] bg-[#FEFDDF] p-4 sm:flex-row sm:items-center">
                    <span className="font-semibold text-slate-800 text-sm">Sewage Treatment Plants (STP)</span>
                    <span className="text-xs border border-emerald-500 text-emerald-700 font-bold px-2.5 py-1 rounded-lg">EA,MBBR & MBR</span>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-2 rounded-xl border border-[#F3E8B4] bg-[#FEFDDF] p-4 sm:flex-row sm:items-center">
                    <span className="font-semibold text-slate-800 text-sm">Effluent Treatment Plants (ETP)</span>
                    <span className="text-xs border border-emerald-500 text-emerald-700 font-bold px-2.5 py-1 rounded-lg">Customized</span>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-2 rounded-xl border border-[#F3E8B4] bg-[#FEFDDF] p-4 sm:flex-row sm:items-center">
                    <span className="font-semibold text-slate-800 text-sm">Organic Waste Converters (OWC)</span>
                    <span className="text-xs border border-emerald-500 text-emerald-700 font-bold px-2.5 py-1 rounded-lg">8 to 1100 kg</span>
                  </div>
                  {/* <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="font-semibold text-slate-800 text-sm">Lead Recycling Systems</span>
                    <span className="text-xs bg-slate-200 text-slate-800 font-bold px-2.5 py-1 rounded-lg">Closed Loop</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS & EXPERTISE SECTION */}
      <section id="solutions" className="relative z-10 bg-[#FEFDDF] py-14 sm:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#426D89]">Engineering Excellence</p>
            <h2
              className="text-3xl font-extrabold italic leading-tight text-slate-900 sm:text-4xl md:text-5xl"
              style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
            >
              Our Comprehensive Product & Service Portfolio
            </h2>
            <p className="text-2xl text-slate-600">Engineered with high-grade raw materials and rigorous multi-stage quality testing to ensure sustainable operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: STP */}
            <div id="stp" className="scroll-mt-24 rounded-2xl bg-[#FFFEF5] border border-emerald-500 p-8 hover:shadow-xl hover:shadow-emerald-500/25 transition-all hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-4 sm:mb-6 sm:block">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#78A8C7] text-xl font-bold text-white shadow-md shadow-[#78A8C7]/30">
                  💧
                  </div>
                  <h3 className="mb-0 text-lg font-bold text-slate-900 sm:mb-3 sm:text-xl">Sewage Treatment Plants (STP)</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Turning domestic and commercial wastewater into clean, reusable water for flushing and gardening. Utilizing advanced <strong className="text-slate-900">EA (Extended Aeration) </strong> , <strong className="text-slate-900">MBBR (Moving Bed Biofilm Reactor)</strong>  , <strong className="text-slate-900">MBR(Membrane Bioreactor)</strong>  technologies.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-medium text-slate-700 border-t border-slate-200 pt-4">
                <li className="flex items-center gap-2">✓ Low space requirement (MBBR)</li>
                <li className="flex items-center gap-2">✓ Resistant to shock loads (EA)</li>
                <li className="flex items-center gap-2">✓ Ideal for Hotels, Malls & Colonies</li>
              </ul>
            </div>

            {/* Card 2: ETP */}
            <div id="etp" className="scroll-mt-24 rounded-2xl bg-[#FFFEF5] border border-emerald-500 p-8 hover:shadow-xl hover:shadow-emerald-500/25 transition-all hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-4 sm:mb-6 sm:block">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-xl font-bold text-white shadow-md shadow-emerald-500/30">
                  ⚙️
                  </div>
                  <h3 className="mb-0 text-lg font-bold text-slate-900 sm:mb-3 sm:text-xl">Effluent Treatment Plants (ETP)</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Robust industrial wastewater treatment designed to clean discharge, cut fresh water expenditure, and strictly adhere to government discharge standards to prevent penalties.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-medium text-slate-700 border-t border-slate-200 pt-4">
                <li className="flex items-center gap-2">✓ Physical, chemical & biological treatment</li>
                <li className="flex items-center gap-2">✓ Precision pH control & coagulation</li>
                <li className="flex items-center gap-2">✓ Tailored for textile, auto & manufacturing</li>
              </ul>
            </div>

            {/* Card 3: OWC */}
            <div id="compost" className="scroll-mt-24 rounded-2xl bg-[#FFFEF5] border border-emerald-500 p-8 hover:shadow-xl hover:shadow-emerald-500/25 transition-all hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-4 sm:mb-6 sm:block">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFC928] text-xl font-bold text-[#5D4514] shadow-md shadow-[#FFC928]/30">
                  🌱
                  </div>
                  <h3 className="mb-0 text-lg font-bold text-slate-900 sm:mb-3 sm:text-xl">Organic Waste Converter (OWC)</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Automated composting solutions featuring heavy-duty built-in shredders, temperature-controlled heating systems, and special bio-culture technology to convert kitchen waste into fertile compost.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-medium text-slate-700 border-t border-slate-200 pt-4">
                <li className="flex items-center gap-2">✓ Capacities from 8-10 kg to 1100 kg/batch</li>
                <li className="flex items-center gap-2">✓ Odorless & low maintenance</li>
                <li className="flex items-center gap-2">✓ Perfect for societies, canteens & hotels</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <div className="relative isolate overflow-hidden bg-[#FEFDDF]">
        <div className="pointer-events-none absolute left-[8%] top-[38%] z-0 h-[40rem] w-[40rem] rounded-full bg-emerald-500/25 blur-[160px]" />
      {/* OWC CAPACITIES SECTION */}
      <section id="owc" className="relative z-10 py-20 bg-transparent">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-[#FEFDDF] px-3 py-1 rounded-full">Zero Waste Solution</span>
              <h2 className="text-3xl font-extrabold italic leading-tight text-slate-900 tracking-tight sm:text-4xl lg:text-5xl">Organic Waste Composting Made Easy & Convenient</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our OWC systems chop biodegradable waste into fine particles via an internal shredder. Mixed with sawdust/absorbent and active microbes, it rapidly breaks down waste into flowable raw compost ready for curing within 10-12 days.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {['8-10 kg/batch', '75-100 kg/batch', '125-150 kg/batch', '200-250 kg/batch', '300-350 kg/batch', '600-650 kg/batch', '1000-1100 kg/batch'].map((cap, idx) => (
                  <div key={idx} className="bg-[#FFFEF5] p-3 rounded-xl border border-emerald-500 text-center shadow-xs">
                    <span className="text-xs font-bold text-slate-800">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div id="lead-recycling" className="scroll-mt-24 hidden bg-[#FFFEF5] p-8 rounded-3xl border border-emerald-500 shadow-lg shadow-emerald-500/10 space-y-6 md:block lg:col-span-6">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-3">Lead Recycling Systems</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We also manufacture complete closed-loop secondary lead smelting and recycling plants. Designed for processing used lead-acid batteries (ISRI Rains) with advanced desulphurization, furnace smelting, and automatic ingot casting equipment.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#E4F0F6] text-[#426D89] flex items-center justify-center text-xs font-bold">1</span>
                  Battery Breaking & Gravity Separation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#E4F0F6] text-[#426D89] flex items-center justify-center text-xs font-bold">2</span>
                  Desulphurization System (Minimizes SO2 emissions)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#E4F0F6] text-[#426D89] flex items-center justify-center text-xs font-bold">3</span>
                  Rotary Furnace Smelting & Ingot Casting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD / CLIENTS */}
      <section id="clients" className="relative z-10 bg-transparent py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#426D89]">Our Valued Footprint</p>
            <h2
              className="text-3xl font-extrabold italic text-slate-900 sm:text-5xl"
              style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
            >
              Treatment Projects Across India
            </h2>
            <p className="text-slate-600">Explore our installed and maintained ETP and STP projects, including plant capacities and project scope.</p>
          </div>

          <div className="client-marquee relative left-1/2 flex w-screen -translate-x-1/2 flex-col gap-5 overflow-hidden px-3 sm:px-4" aria-label="Client projects, scrolling automatically">
            {[clientProjects.filter((_, index) => index % 2 === 0), clientProjects.filter((_, index) => index % 2 !== 0)].map((projects, rowIndex) => (
              <div key={rowIndex} className="client-marquee-row overflow-hidden">
                <div className={`client-marquee-track flex w-max${rowIndex === 1 ? ' client-marquee-track-reverse' : ''}`}>
                  <div className="flex shrink-0 gap-5 pr-5">
                    {renderClientCards(projects)}
                  </div>
                  <div className="client-marquee-copy flex shrink-0 gap-5 pr-5" aria-hidden="true">
                    {renderClientCards(projects, true)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/Jyoti%20Enterprises%20-%20Our%20Happy%20Customers.pdf"
              download="Jyoti-Enterprises-Our-Happy-Customers.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-[#FFFEF5] px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-50 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              Meet our happy customers — download the PDF
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
      </div>

      {/* CONTACT SECTION */}
      <section id="contact" className="border-t border-[#E8DDAA] bg-[#FEFDDF] py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#426D89]">Get In Touch</p>
              <h2
                className="text-4xl font-extrabold  italic text-slate-900"
                style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
              >
                Let's Discuss Your Environmental Project
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contact our expert engineering team for customized ETP/STP design, OWC machinery, or compliance consultation.
              </p>

              <div className="space-y-4 pt-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#426D89] flex items-center justify-center font-bold border border-emerald-500 shrink-0">📍</div>
                  <div>
                    <p className="font-bold text-slate-900">Office Address</p>
                    <p className="text-slate-600">R-18, Phase-V, Focal Point, Ludhiana, Punjab - 141010</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#426D89] flex items-center justify-center font-bold border border-emerald-500 shrink-0">📞</div>
                  <div>
                    <p className="font-bold text-slate-900">Phone Number</p>
                    <p className="text-slate-600">+91-98888-32774</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#426D89] flex items-center justify-center font-bold border border-emerald-500 shrink-0">✉️</div>
                  <div>
                    <p className="font-bold text-slate-900">Email Address</p>
                    <p className="text-slate-600">jyotienterprises774@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[linear-gradient(135deg,rgba(255,254,245,0.72),rgba(16,185,129,0.12))] backdrop-blur-md p-5 rounded-3xl border border-emerald-500/25 shadow-xl shadow-emerald-500/10 sm:p-8">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-[#FEFDDF] text-emerald-700 rounded-full flex items-center justify-center text-3xl mx-auto">✓</div>
                  <h4 className="text-2xl font-bold text-slate-900">Inquiry Sent Successfully!</h4>
                  <p className="text-slate-600 text-sm">Thank you. Anil Sharma or our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">Send Online Inquiry</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                      <input 
                        type="text" required
                        className="w-full px-4 py-3 rounded-xl border border-[#D8D3B4] focus:outline-none focus:ring-2 focus:ring-[#78A8C7] text-sm"
                        placeholder="Enter your name"
                        value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" required
                        className="w-full px-4 py-3 rounded-xl border border-[#D8D3B4] focus:outline-none focus:ring-2 focus:ring-[#78A8C7] text-sm"
                        placeholder="Enter phone number"
                        value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" required
                      className="w-full px-4 py-3 rounded-xl border border-[#D8D3B4] focus:outline-none focus:ring-2 focus:ring-[#78A8C7] text-sm"
                      placeholder="Enter email address"
                      value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Project Requirement / Message</label>
                    <textarea 
                      rows="4" required
                      className="w-full px-4 py-3 rounded-xl border border-[#D8D3B4] focus:outline-none focus:ring-2 focus:ring-[#78A8C7] text-sm"
                      placeholder="Tell us about your capacity requirement (e.g. 50 KLD STP or OWC Machine)..."
                      value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all">
                    Submit Project Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}