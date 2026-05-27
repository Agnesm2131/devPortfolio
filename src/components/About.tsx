import styles from "./About.module.css";

export default function About({ dict }: { dict: any }) {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">{dict.title}</h2>
        <div className={styles.aboutContent}>
          <div className={`${styles.imageWrapper} glass-panel`}>
            <div className={styles.imagePlaceholder}>
              <span>Mert</span>
            </div>
            <div className={styles.glow}></div>
          </div>
          <div className={styles.textContent}>
            <h3>{dict.subtitle}</h3>
            <p>{dict.p1}</p>
            <p>{dict.p2}</p>
            <div className={styles.stats}>
              <div className={`${styles.statItem} glass-panel`}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>{dict.tech}</span>
              </div>
              <div className={`${styles.statItem} glass-panel`}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>{dict.dedication}</span>
              </div>
              <div className={`${styles.statItem} glass-panel`}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>{dict.passion}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}