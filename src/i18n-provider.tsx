// src/i18n-provider.tsx
"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18n.init().then(() => setReady(true));
  }, []);

  if (!ready) return null;
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
