"use client";

import styles from "./Hero.module.css";
import Link from "next/link";
import { settings } from "@/lib/settings";

export default function Hero({ dict }: { dict: any }) {
  const name = settings?.branding?.name || "devAgnes";

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          {dict.badge && (
            <div className={`${styles.badge} animate-fade-in-up`} style={{ animationDelay: "0.1s" }}>
              <span>{dict.badge}</span>
            </div>
          )}
          <h1 className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {dict.greeting} <span className={styles.highlight}>{name}</span>. <br />
            {dict.role}
          </h1>
          <p className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {dict.description}
          </p>
          <div className={`${styles.actions} animate-fade-in-up`} style={{ animationDelay: "0.4s" }}>
            <Link href="#projects" className="btn btn-primary">{dict.viewWork}</Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-glass">{dict.github}</Link>
          </div>
        </div>
        
        <div className={`${styles.visuals} animate-fade-in-up float-element`} style={{ animationDelay: "0.5s" }}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={`${styles.card} glass-panel`}>
            <pre>
              <code>
{`const developer = {
  name: "${name}",
  alias: "Mert",
  focus: "Full-Stack Web Apps",
  status: "Building the future"
};

developer.innovate();`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
