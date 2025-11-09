import React, { useState } from 'react';

const WHATSAPP_NUMBER = '919999999999'; // Replace with full international format
const LOGO_URL = '/logo-final-1.png'; // placed in public/

const galleryPhotos = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80',
  'https://images.unsplash.com/photo-1512058564366-c9e3b8f53f3f?w=1200&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
  'https://images.unsplash.com/photo-1542826438-1b7f9a4b0f13?w=1200&q=80',
  'https://images.unsplash.com/photo-1542435503-956c469947f6?w=1200&q=80',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80',
];

const reviews = [
  { name: 'Riya Sharma', text: 'Amazing cakes — moist and beautifully decorated. Will order again!', rating: 5 },
  { name: 'Sameer', text: 'Fresh and delicious. No preservatives taste — loved it!', rating: 5 },
  { name: 'Anita', text: 'Friendly service and prompt delivery. Highly recommend ASA Delights.', rating: 5 },
];

export default function ASADelightsLanding() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-[#f9f3ef] text-[#5b3b2c]">
      <header className="bg-[#fff7f0] shadow">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="ASA Delights Logo" className="w-16 h-16 object-contain" />
            <div>
              <h1 className="text-2xl font-semibold text-[#5b3b2c]">ASA Delights</h1>
              <p className="text-sm text-[#9b7d65]">Made at Home · Freshly Baked · Always</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-[#5b3b2c]">
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#reviews" className="hover:underline">Reviews</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight text-[#4a2f20]">Delicious. Fresh. Homemade.</h2>
            <p className="mt-4 text-[#6f4e37]">ASA Delights bakes treats with love. No preservatives, only freshly baked goodness for every celebration.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-4 py-2 rounded-lg shadow hover:bg-[#1ebe5d]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.52 3.48a11.94 11.94 0 00-16.9 0 11.94 11.94 0 000 16.9l.27.27-1.03 3.77 3.79-1.01.25.16a11.94 11.94 0 0016.9-16.9zm-4.34 11.92c-.28.79-1.65 1.78-2.26 1.86-.46.06-1.02.07-1.86-.18a9.1 9.1 0 01-4.07-2.04c-1.46-1.25-2.48-2.78-2.78-3.25-.3-.47-.7-1.26-.7-2.08 0-.82.37-1.43.51-1.63.14-.2.32-.32.52-.32h.34c.16 0 .39 0 .6.46.2.45.74 1.63.8 1.76.06.13.09.28.02.42-.07.14-.11.24-.2.37-.09.13-.2.29-.29.38-.11.11-.22.22-.11.44.11.23.49.88 1.06 1.43.73.66 1.36.86 1.57.97.2.11.31.09.43-.03.12-.12.44-.5.55-.66.11-.17.23-.14.38-.08.17.06 1.12.54 1.32.65.2.11.32.17.37.27.05.11.05.98-.28 1.77z" />
                </svg>
                Message on WhatsApp
              </a>

              <a href="#gallery" className="inline-flex items-center justify-center border border-[#d7c0ad] px-4 py-2 rounded-lg text-sm hover:bg-[#f3e5da] text-[#5b3b2c]">See our gallery</a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Feature title="Freshly Baked" desc="Made to order — baked the same day for peak flavour." />
              <Feature title="No Preservatives" desc="Natural ingredients — no artificial preservatives added." />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={galleryPhotos[0]} alt="Featured bake" className="w-full h-80 object-cover" />
          </div>
        </section>

        <section id="gallery" className="mt-16">
          <h3 className="text-2xl font-semibold text-[#4a2f20]">Gallery — Past Orders</h3>
          <p className="text-[#6f4e37] mt-2">A few of our favourites. Tap any photo to enlarge.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryPhotos.map((src, idx) => (
              <button key={idx} onClick={() => setLightboxIndex(idx)} className="rounded overflow-hidden group">
                <img src={src} alt={`Bake ${idx + 1}`} className="w-full h-40 object-cover transform group-hover:scale-105 transition" />
              </button>
            ))}
          </div>
        </section>

        <section id="reviews" className="mt-16">
          <h3 className="text-2xl font-semibold text-[#4a2f20]">What customers say</h3>
          <p className="text-[#6f4e37] mt-2">Real reviews from happy customers.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <article key={i} className="bg-[#fff7f0] p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-[#4a2f20]">{r.name}</p>
                  <div className="text-yellow-500 text-sm">{renderStars(r.rating)}</div>
                </div>
                <p className="mt-3 text-[#6f4e37]">{r.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 bg-[#fff7f0] p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold text-[#4a2f20]">Place an order</h4>
              <p className="text-[#6f4e37] mt-1">Send your order details over WhatsApp — we'll confirm availability & delivery time.</p>
            </div>
            <div className="flex gap-3">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-4 py-2 rounded-lg shadow hover:bg-[#1ebe5d]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.52 3.48a11.94 11.94 0 00-16.9 0 11.94 11.94 0 000 16.9l.27.27-1.03 3.77 3.79-1.01.25.16a11.94 11.94 0 0016.9-16.9zm-4.34 11.92c-.28.79-1.65 1.78-2.26 1.86-.46.06-1.02.07-1.86-.18a9.1 9.1 0 01-4.07-2.04c-1.46-1.25-2.48-2.78-2.78-3.25-.3-.47-.7-1.26-.7-2.08 0-.82.37-1.43.51-1.63.14-.2.32-.32.52-.32h.34c.16 0 .39 0 .6.46.2.45.74 1.63.8 1.76.06.13.09.28.02.42-.07.14-.11.24-.2.37-.09.13-.2.29-.29.38-.11.11-.22.22-.11.44.11.23.49.88 1.06 1.43.73.66 1.36.86 1.57.97.2.11.31.09.43-.03.12-.12.44-.5.55-.66.11-.17.23-.14.38-.08.17.06 1.12.54 1.32.65.2.11.32.17.37.27.05.11.05.98-.28 1.77z" />
                </svg>
                WhatsApp: +{WHATSAPP_NUMBER}
              </a>
              <a href="#gallery" className="inline-flex items-center justify-center border border-[#d7c0ad] px-4 py-2 rounded-lg text-sm hover:bg-[#f3e5da] text-[#5b3b2c]">View gallery</a>
            </div>
          </div>
        </section>
      </main>

      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="fixed right-6 bottom-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#1ebe5d] z-50" aria-label="Message ASA Delights on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M20.52 3.48a11.94 11.94 0 00-16.9 0 11.94 11.94 0 000 16.9l.27.27-1.03 3.77 3.79-1.01.25.16a11.94 11.94 0 0016.9-16.9zm-4.34 11.92c-.28.79-1.65 1.78-2.26 1.86-.46.06-1.02.07-1.86-.18a9.1 9.1 0 01-4.07-2.04c-1.46-1.25-2.48-2.78-2.78-3.25-.3-.47-.7-1.26-.7-2.08 0-.82.37-1.43.51-1.63.14-.2.32-.32.52-.32h.34c.16 0 .39 0 .6.46.2.45.74 1.63.8 1.76.06.13.09.28.02.42-.07.14-.11.24-.2.37-.09.13-.2.29-.29.38-.11.11-.22.22-.11.44.11.23.49.88 1.06 1.43.73.66 1.36.86 1.57.97.2.11.31.09.43-.03.12-.12.44-.5.55-.66.11-.17.23-.14.38-.08.17.06 1.12.54 1.32.65.2.11.32.17.37.27.05.11.05.98-.28 1.77z" />
        </svg>
      </a>

      <footer className="mt-12 py-8 text-center text-sm text-[#9b7d65]">
        © {new Date().getFullYear()} ASA Delights — Freshly baked • No preservatives
      </footer>

      {lightboxIndex >= 0 && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setLightboxIndex(-1)}>
          <div className="max-w-3xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img src={galleryPhotos[lightboxIndex]} alt={`Large ${lightboxIndex}`} className="w-full h-[60vh] object-contain bg-gray-900" />
              <div className="absolute top-3 right-3">
                <button onClick={() => setLightboxIndex(-1)} className="bg-white/90 px-3 py-1 rounded">Close</button>
              </div>
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <button onClick={() => setLightboxIndex((i) => (i - 1 + galleryPhotos.length) % galleryPhotos.length)} className="bg-white/90 px-3 py-1 rounded">Prev</button>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <button onClick={() => setLightboxIndex((i) => (i + 1) % galleryPhotos.length)} className="bg-white/90 px-3 py-1 rounded">Next</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-[#fff7f0] p-4 rounded-lg shadow-sm flex gap-3 items-start">
      <div className="bg-[#f3e5da] text-[#a56a43] rounded-full p-2">🍰</div>
      <div>
        <p className="font-semibold text-[#4a2f20]">{title}</p>
        <p className="text-sm text-[#6f4e37] mt-1">{desc}</p>
      </div>
    </div>
  );
}

function renderStars(n) {
  return Array.from({ length: n }).map((_, i) => <span key={i}>★</span>);
}
