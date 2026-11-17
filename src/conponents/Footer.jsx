export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center text-xs">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <p className="font-semibold text-slate-300 text-sm">JYOTI ENTERPRISES — MSME Registered (Govt. of India)</p>
        <p>© {new Date().getFullYear()} Jyoti Enterprises, Ludhiana, Punjab. All rights reserved.</p>
        <a href="/sitemap.html" className="inline-block text-slate-300 underline underline-offset-4">HTML Sitemap</a>
      </div>
    </footer>
  );
}