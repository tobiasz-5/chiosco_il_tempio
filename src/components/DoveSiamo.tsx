// src/components/DoveSiamo.tsx
'use client';
import { useEffect, useState } from 'react';

export default function DoveSiamo() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    setConsentGiven(localStorage.getItem('cookieConsent') === 'all');
  }, []);

  if (!consentGiven) {
    return (
      <section className="bg-white text-[#337aff] py-10 px-4">
        <div className="max-w-5xl mx-auto text-center p-8">
          <h3 className="text-xl font-semibold mb-4">Per visualizzare la mappa, accetta i cookie</h3>
          <button 
            onClick={() => {
              localStorage.setItem('cookieConsent', 'all');
              setConsentGiven(true);
            }}
            className="px-6 py-2 bg-[#337aff] text-white rounded-md hover:bg-blue-600"
          >
            Accetta cookie
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white text-[#337aff] py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-xl border border-[#337aff] shadow">
          <iframe
            src="https://www.google.com/maps?q=43.76539,11.27225&hl=it&z=18&output=embed"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            title="Mappa Chiosco Il Tempio"
          />
        </div>
      </div>
    </section>
  );
}