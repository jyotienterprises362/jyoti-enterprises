import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Factory, 
  Recycle, 
  Layers, 
  Cpu,
  Wrench,
  Settings,
  Activity,
  X
} from 'lucide-react';

const AboutUs = () => {
  // State for interactive service modal
  const [selectedService, setSelectedService] = useState(null);

  // State for contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      title: "Sewage Treatment Plant (STP)",
      description: "Advanced EA and MBBR based biological treatment systems for residential complexes, hotels, hospitals, and municipal wastewater.",
      details: "Our Sewage Treatment Plants utilize cutting-edge Extended Aeration (EA) and Moving Bed Biofilm Reactor (MBBR) technologies. Designed for high efficiency and low maintenance, they handle fluctuating hydraulic loads while consistently meeting strict environmental discharge standards.",
      icon: <Factory className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Effluent Treatment Plant (ETP)",
      description: "Custom-engineered physical, chemical, and biological industrial wastewater treatment units ensuring total environmental compliance.",
      details: "Tailored specifically for complex industrial effluent (textile, chemical, plating, and manufacturing), our ETP systems integrate robust equalization, chemical coagulation-flocculation, advanced biological oxidation, and tertiary polishing stages.",
      icon: <Layers className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Organic Waste Converter (OWC)",
      description: "High-efficiency automated composting machines equipped with heavy-duty shredders and temperature control systems.",
      details: "Turn food waste and organic kitchen refuse into nutrient-rich compost in hours. Equipped with automated shredders, internal mixing blades, and thermal control heaters to accelerate aerobic decomposition odor-free.",
      icon: <Cpu className="w-8 h-8 text-emerald-500" />
    }
  ];

  const technicalCapabilities = [
    {
      title: "PLC & SCADA Automation",
      description: "Fully automated plant operations with remote monitoring, sensor-based parameter logging, and automated safety interlocks.",
      icon: <Settings className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Heavy-Duty Fabrication",
      description: "Precision-engineered MS/SS vessels, acid-resistant piping, and robust structural framework built for corrosive industrial environments.",
      icon: <Wrench className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Zero Liquid Discharge (ZLD)",
      description: "Advanced multi-effect evaporators (MEE) and RO systems configured to achieve maximum water recovery and minimal waste footprint.",
      icon: <Activity className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Turnkey Project Execution",
      description: "Comprehensive end-to-end service including site survey, civil design support, fabrication, installation, testing, and regulatory approvals.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />
    }
  ];

  const coreValues = [
    "Continuous Improvement",
    "Customer Satisfaction",
    "Safety & Quality",
    "Employee Satisfaction"
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000); // Clear success message after 5s
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FEFDDF] text-slate-800 font-sans relative">
      
      {/* Hero Section */}
    <section className="relative bg-linear-to-r from-[#FEFDDF]/0 via-[#FFFEF5]/0 to-emerald-50 px-4 py-12 text-slate-800 sm:px-6 sm:py-20 lg:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Left Column: Value Proposition & CTAs */}
      <div className="lg:col-span-7">
        <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          An MSME (Govt. of India) Registered Company
        </span>
        <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Providing Environmental Solutions That Make Economic Sense
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Established in 2004 in Ludhiana, Punjab, Jyoti Enterprises is a premier manufacturer and leader specializing in comprehensive Pollution Control Devices, ETP/STP Plants, and Total Water Technologies.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#contact" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-emerald-500/20 transition duration-300"
          >
            Get in Touch
          </a>
          <a 
            href="#services" 
            className="bg-[#FFFEF5] hover:bg-white border border-emerald-500/40 text-slate-800 font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Our Solutions
          </a>
        </div>
      </div>
      
      {/* Right Column: Owner Profile & Company Quick Facts */}
      <div className="lg:col-span-5 bg-[#FFFEF5]/90 border border-emerald-500 p-6 sm:p-8 rounded-2xl shadow-lg shadow-emerald-900/35">
        
        {/* Owner Profile Section */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-emerald-500/15">
          {/* <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
            alt="Mr. Anil Sharma - Founder, Jyoti Enterprises" 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-emerald-400 shadow-md shrink-0"
          /> */}
          <div>
            <span className="text-xs uppercase tracking-wider text-emerald-700 font-semibold">Founder & Leader</span>
            <h3 className="text-xl font-bold text-slate-900">Mr. Anil Sharma</h3>
            <p className="text-xs text-slate-600 mt-0.5 leading-snug">Guided by a steadfast commitment to ethical business practices.</p>
          </div>
        </div>

        {/* Quick Facts List */}
        <h4 className="text-xs uppercase tracking-wider text-emerald-700 font-semibold mb-3">Company Quick Facts</h4>
        <ul className="space-y-3 text-slate-600 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <span><strong>Office Address:</strong> R-18, Phase V, Focal Point, Ludhiana, Punjab 141010</span>
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <span><strong>GSTIN / PAN:</strong> 03AXAPS9632BIZQ / AXAPS9632B</span>
          </li>
        </ul>
        
      </div>
    </div>
  </section>

      {/* Vision, Mission & Leadership Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-2xl border border-emerald-500 bg-[#FFFEF5] p-5 shadow-sm sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 stye">Our Vision</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We aim to achieve a harmonious integration of technology, quality, systems, and our workforce, in order to provide products and services that align with our customers' expectations in terms of quality, performance, and affordability. Simultaneously, we are committed to upholding the utmost standards of ethical conduct and social responsibility.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500 bg-[#FFFEF5] p-5 shadow-sm sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to produce exceptional, world-class products characterized by outstanding quality, offering our customers a competitive edge through superior value. Our ultimate goal is to bring a smile to every customer's face.
            </p>
          </div>
        </div>

        {/* Core Values Banner */}
        <div className="rounded-2xl border border-emerald-500 bg-[#FFFEF5] p-5 text-slate-800 shadow-sm sm:p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-emerald-700">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-center gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services / Product Lines */}
      <section id="services" className="bg-[#FEFDDF] px-4 py-12 sm:px-6 sm:py-20 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl font-bold italic text-slate-900 sm:text-4xl lg:text-5xl" style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}>What We Build & Offer</h2>
            <p className="text-slate-600">
              Delivering authentic, robust, and reliable pollution control engineering and recycling solutions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col justify-between rounded-2xl border border-emerald-500 bg-[#FFFEF5] p-5 shadow-sm transition duration-300 hover:shadow-md hover:shadow-emerald-900/5 sm:p-8">
                <div>
                  <div className="mb-4 flex items-center gap-4 sm:mb-6 sm:block">
                    <div className="flex shrink-0 items-center justify-center rounded-xl bg-emerald-50 p-3 sm:mb-4 sm:w-fit sm:p-4">
                      {service.icon}
                    </div>
                    <h3 className="mb-0 text-lg font-bold text-slate-900 sm:mb-3 sm:text-xl">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="text-emerald-700 hover:text-emerald-600 font-semibold text-sm flex items-center justify-center gap-1 hover:underline text-left"
                >
                  Learn more &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise & Technical Capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider mb-2 block">Engineering Excellence</span>
          <h2 className="mb-4 text-3xl font-bold italic text-slate-900 sm:text-4xl lg:text-5xl" style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }} >Core Technical Capabilities</h2>
          <p className="text-slate-600">
            Advanced manufacturing processes and engineering standards built into every plant we design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicalCapabilities.map((capability, index) => (
            <div key={index} className="bg-[#FFFEF5] p-6 rounded-2xl border border-emerald-500/20 shadow-sm hover:border-emerald-500/60 transition duration-300">
              <div className="p-3 bg-emerald-50 rounded-xl inline-block mb-4">
                {capability.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{capability.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Excellence Note */}
      <section className="mx-auto max-w-4xl border-t border-emerald-500/20 px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-16">
        <h2 className="mb-6 text-3xl font-extrabold italic text-slate-900 sm:text-4xl lg:text-5xl" style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}>Driven by Leadership & Experience</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          Under the visionary leadership of <strong>Mr. Anil Sharma</strong>, our organization has successfully carved a distinctive position in the market. Backed by an experienced workforce, state-of-the-art infrastructure, and strict supervision across raw material procurement and manufacturing, we continue to expand our footprint globally.
        </p>
        <div className="inline-block bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-emerald-900 font-medium">
          Trusted by top institutional clients, premier military engineering services, industrial giants, hotels, and residential townships across India.
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#FEFDDF] px-4 py-12 text-slate-800 sm:px-6 sm:py-20 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl italic font-bold text-slate-900 mb-6" style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}>Get in Touch With Us</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Reach out for consultancy, design parameters, project execution, or annual maintenance contracts for ETP, STP, and organic waste management solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Office Address</h4>
                  <p className="text-slate-600 text-sm">R-18, Phase V, Focal Point, Ludhiana, Punjab 141010</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-700">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Phone Number</h4>
                  <p className="text-slate-600 text-sm">+91 98888-32774</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <p className="text-slate-600 text-sm">jyotienterprises774@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-[#FFFEF5] p-5 shadow-lg shadow-emerald-900/5 sm:p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Send an Online Enquiry</h3>
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center font-medium">
                Thank you! Your enquiry has been successfully submitted. We will contact you soon.
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-[#D8D3B4] rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-[#D8D3B4] rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your email" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message / Requirements</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-[#D8D3B4] rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
                    placeholder="Tell us about your project scale or capacity needs..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg shadow-lg shadow-emerald-500/20 transition duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-slate-600/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-[#FFFEF5] p-5 text-slate-800 shadow-2xl animate-in fade-in zoom-in duration-200 sm:p-6 lg:p-8">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 bg-[#FEFDDF] hover:bg-emerald-50 rounded-full text-slate-600 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-4 inline-block p-4 bg-emerald-50 rounded-xl">
              {selectedService.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">{selectedService.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">{selectedService.details}</p>
            <div className="flex justify-end gap-3">
              <a 
                href="#contact" 
                onClick={() => setSelectedService(null)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition"
              >
                Enquire About This Solution
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AboutUs;