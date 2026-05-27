"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./LanguageSelector.module.css";

export default function LanguageSelector() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hasChosen = localStorage.getItem("langChosen");
    if (!hasChosen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const selectLanguage = (lang: string) => {
    localStorage.setItem("langChosen", "true");
    setShow(false);
    document.body.style.overflow = "auto";
    
    const segments = pathname.split('/');
    const currentLang = segments[1] || 'tr';
    if (currentLang !== lang) {
      segments[1] = lang;
      router.push(segments.join('/') || `/${lang}`);
    }
  };

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} glass-panel`}>
        <h2>Select Your Language</h2>
        <p>Lütfen devam etmek için bir dil seçin / Please select a language to continue.</p>
        <div className={styles.buttons}>
          <button className="btn btn-primary" onClick={() => selectLanguage('tr')}>Türkçe</button>
          <button className="btn btn-outline" onClick={() => selectLanguage('us')}>English (US)</button>
        </div>
      </div>
    </div>
  );
}