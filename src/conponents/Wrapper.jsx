import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Wrapper() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = {
      '/': {
        title: 'Jyoti Enterprises | Environmental Engineering Solutions',
        description: 'Jyoti Enterprises designs and manufactures sewage and effluent treatment plants, organic waste converters, and lead recycling systems in Ludhiana, Punjab.',
      },
      '/about': {
        title: 'About Jyoti Enterprises | Water & Waste Treatment',
        description: 'Learn about Jyoti Enterprises, a Ludhiana-based manufacturer of pollution control, water treatment, and waste management systems since 2004.',
      },
      '/stp': {
        title: 'Sewage Treatment Plants (STP) | Jyoti Enterprises',
        description: 'Explore MBBR and containerized sewage treatment plants for commercial, residential, and industrial applications from Jyoti Enterprises.',
      },
      '/compost': {
        title: 'Compost Management & OWC | Jyoti Enterprises',
        description: 'Explore Organic Waste Converter batch capacities and compost management solutions from Jyoti Enterprises in Ludhiana, Punjab.',
      },
    }[pathname] ?? {
      title: 'Jyoti Enterprises | Environmental Engineering Solutions',
      description: 'Environmental engineering and water treatment solutions from Jyoti Enterprises in Ludhiana, Punjab.',
    };

    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', page.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', page.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = new URL(pathname, window.location.origin).href;
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
}