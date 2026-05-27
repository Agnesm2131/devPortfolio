"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { settings } from "@/lib/settings";

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLanguage = (newLang: string) => {
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = newLang;
      router.push(segments.join('/'));
    } else {
      router.push(`/${newLang}`);
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href={`/${lang}#home`} className={styles.logo}>
          {settings?.branding?.name || "devAgnes"}<span>{settings?.branding?.suffix || ".co"}</span>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href={`/${lang}#home`}>{dict.home}</Link></li>
          <li><Link href={`/${lang}#about`}>{dict.about}</Link></li>
          <li><Link href={`/${lang}#skills`}>{dict.skills}</Link></li>
          <li><Link href={`/${lang}#projects`}>{dict.projects}</Link></li>
          <li><Link href={`/${lang}#contact`} className="btn btn-outline">{dict.contact}</Link></li>
          <li className={styles.langSwitcher}>
            <button onClick={() => switchLanguage('tr')} className={lang === 'tr' ? styles.activeLang : ''}>TR</button>
            <span>|</span>
            <button onClick={() => switchLanguage('us')} className={lang === 'us' ? styles.activeLang : ''}>US</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}