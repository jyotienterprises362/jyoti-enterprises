import { ArrowRight, CheckCircle2, Leaf, MessageSquare, PhoneCall, Recycle } from 'lucide-react';

const owcCapacities = [
  '8–10 kg/batch',
  '75–100 kg/batch',
  '125–150 kg/batch',
  '200–250 kg/batch',
  '300–350 kg/batch',
  '600–650 kg/batch',
  '1000–1100 kg/batch',
];

const processSteps = [
  {
    title: 'Shred',
    description: 'Biodegradable waste is reduced into finer particles by the built-in shredder.',
  },
  {
    title: 'Mix',
    description: 'The shredded waste is mixed with an absorbent such as sawdust and active microbes.',
  },
  {
    title: 'Cure',
    description: 'The processed material is prepared for curing into compost over the following 10–12 days.',
  },
];

const highlights = [
  'Batch capacities to suit different waste volumes',
  'Built-in shredding and mixing for convenient processing',
  'Supports on-site management of biodegradable waste',
  'Turns food and kitchen waste into material for compost curing',
];

export default function CompostManagement() {
  return (
    <main className="min-h-screen bg-[#FEFDDF] py-12 font-sans sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold tracking-wide text-emerald-700">
            <Leaf className="h-4 w-4" />
            Organic Waste Solutions
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Compost Management &amp; Organic Waste Converters
          </h1>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600">
            Manage biodegradable waste on-site with Organic Waste Converter (OWC) systems from Jyoti Enterprises.
            Explore batch capacities for a range of waste volumes.
          </p>
        </header>

        <section aria-labelledby="owc-capacities-heading" className="mb-16">
          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Find a suitable capacity</p>
            <h2 id="owc-capacities-heading" className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              OWC Batch Capacities
            </h2>
            <p className="mt-2 text-sm text-slate-600">Available batch sizes for different organic waste requirements.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {owcCapacities.map((capacity) => (
              <article
                key={capacity}
                className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#FFFEF5] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300" />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Recycle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Batch capacity</p>
                    <h3 className="mt-1 text-xl font-extrabold text-slate-900">{capacity}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  Organic waste processing capacity. Contact our team to discuss your requirements.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-500/20 bg-[#FFFEF5] p-7 shadow-md sm:p-9">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <Leaf className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-slate-900">How organic waste processing works</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              OWC systems shred biodegradable waste into fine particles. The material is mixed with sawdust or another
              absorbent and active microbes, then prepared for curing into compost.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-[#FFFEF5] p-7 shadow-md sm:p-9">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">From waste to compost</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">A simple processing flow</h2>
            <div className="mt-7 space-y-5">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-emerald-500/15 pt-4 text-sm leading-relaxed text-slate-600">
              The prepared material is ready for curing, which typically takes 10–12 days.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-500/20 bg-[#FFFEF5] px-6 py-10 text-center shadow-md sm:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Plan your compost solution</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Not sure which batch capacity you need?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            Contact Jyoti Enterprises to discuss your organic waste volume and OWC requirements.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919888832774"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              <PhoneCall className="h-4 w-4" />
              Call: +91 98888-32774
            </a>
            <a
              href="https://wa.me/919888832774?text=Hello%20Jyoti%20Enterprises,%20I%20am%20interested%20in%20your%20compost%20management%20and%20OWC%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-50"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp Inquiry
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
            >
              Send an inquiry
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
