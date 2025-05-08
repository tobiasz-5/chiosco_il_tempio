// src/components/CookieBanner.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (consentType: 'essential' | 'all') => {
    localStorage.setItem('cookieConsent', consentType);
    setShowBanner(false);
    
    if (consentType === 'all') {
      // Forza il reload per applicare il consenso a Maps
      window.location.reload();
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm text-gray-700 flex-1">
          Utilizziamo <strong>cookie tecnici</strong> e, con il tuo consenso, 
          <strong> Google Maps</strong>. Leggi la{' '}
          <Link href="/privacy-policy" className="text-[#337aff] hover:underline">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleConsent('essential')}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Solo necessari
          </button>
          <button
            onClick={() => handleConsent('all')}
            className="px-4 py-2 text-sm bg-[#337aff] text-white rounded-md hover:bg-blue-600"
          >
            Accetta tutto
          </button>
        </div>
      </div>
    </div>
  );
}