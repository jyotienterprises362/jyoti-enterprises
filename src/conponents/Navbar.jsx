import { Download, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/25 bg-[linear-gradient(135deg,rgba(254,253,223,0.96),rgba(16,185,129,0.12))] shadow-sm shadow-emerald-500/10 backdrop-blur-md">
      <div className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-6 lg:px-8">
        <a href="/#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img
            src="/favicon-brand.svg"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 shrink-0 rounded-xl shadow-sm sm:h-10 sm:w-10"
          />
          <div className="min-w-0">
            <span className="block whitespace-nowrap text-xs font-extrabold leading-none tracking-tight text-slate-900 min-[380px]:text-sm sm:text-lg">JYOTI ENTERPRISES</span>
            <span className="mt-0.5 hidden text-xs font-medium tracking-wide text-emerald-700 sm:block">Environmental Compliance &amp; Engineering</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <a href="/" className="hover:text-emerald-500 transition-colors">Home</a>
          <a href="/about" className="hover:text-emerald-500 transition-colors">About Us</a>
          <div className="group relative">
            <a href="/#solutions" className="flex items-center gap-1 py-3 hover:text-emerald-500 transition-colors" aria-haspopup="true">
              Solutions
              <span aria-hidden="true" className="text-[10px] transition-transform group-hover:rotate-180 group-focus-within:rotate-180">▼</span>
            </a>
            <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 rounded-lg border border-slate-200 bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <a href="/stp" className="block px-4 py-3 text-sm text-slate-700 hover:bg-[#FEFDDF] hover:text-emerald-500 focus:bg-[#FEFDDF] focus:text-emerald-500">Sewage Treatment Plant</a>
              <a href="/etp" className="block px-4 py-3 text-sm text-slate-700 hover:bg-[#FEFDDF] hover:text-emerald-500 focus:bg-[#FEFDDF] focus:text-emerald-500">Effluent Treatment Plant</a>
              <a href="/compost" className="block px-4 py-3 text-sm text-slate-700 hover:bg-[#FEFDDF] hover:text-emerald-500 focus:bg-[#FEFDDF] focus:text-emerald-500">Compost Management</a>
            </div>
          </div>

          <a href="/#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
        </nav>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <a
            href="/Jyoti_Enterprises_Compost_Management_Brochure%20(1).pdf"
            download="Jyoti-Enterprises-Compost-Management-Brochure.pdf"
            aria-label="Download compost management brochure"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            <Download className="h-4 w-4" />
            <span>Download Brochure</span>
          </a>
          <a href="/#contact" className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5">
            Get Quote
          </a>
        </div>
        <details className="relative ml-auto shrink-0 md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-emerald-500/25 bg-[#FFFEF5] text-emerald-700 [&::-webkit-details-marker]:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open navigation menu</span>
          </summary>
          <nav className="absolute right-0 top-full z-50 mt-2 flex w-64 max-w-[calc(100vw-1.5rem)] flex-col rounded-xl border border-emerald-500/20 bg-[#FFFEF5] p-2 text-sm font-medium text-slate-700 shadow-xl">
            <a href="/" className="rounded-lg px-4 py-3 hover:bg-[#FEFDDF] hover:text-emerald-700">Home</a>
            <a href="/about" className="rounded-lg px-4 py-3 hover:bg-[#FEFDDF] hover:text-emerald-700">About Us</a>
            <a href="/stp" className="rounded-lg px-4 py-3 hover:bg-[#FEFDDF] hover:text-emerald-700">Sewage Treatment Plant</a>
            <a href="/etp" className="rounded-lg px-4 py-3 hover:bg-[#FEFDDF] hover:text-emerald-700">Effluent Treatment Plant</a>
            <a href="/compost" className="rounded-lg px-4 py-3 hover:bg-[#FEFDDF] hover:text-emerald-700">Compost Management</a>
            <a href="/#contact" className="rounded-lg px-4 py-3 hover:bg-[#FEFDDF] hover:text-emerald-700">Contact</a>
            <a
              href="/Jyoti_Enterprises_Compost_Management_Brochure%20(1).pdf"
              download="Jyoti-Enterprises-Compost-Management-Brochure.pdf"
              className="mt-1 flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-white hover:bg-emerald-600"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}