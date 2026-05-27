import styles from "./Contact.module.css";

export default function Contact({ dict }: { dict: any }) {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={`${styles.contactWrapper} glass-panel`}>
          <h2 className={styles.title}>{dict.title}</h2>
          <p className={styles.subtitle}>
            {dict.subtitle}
          </p>
          
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder={dict.name} required className={styles.input} />
              <input type="email" placeholder={dict.email} required className={styles.input} />
            </div>
            <input type="text" placeholder={dict.subject} required className={styles.input} />
            <textarea placeholder={dict.message} rows={5} required className={styles.textarea}></textarea>
            <button type="submit" className="btn btn-primary">{dict.send}</button>
          </form>
          
          <div className={styles.footer}>
            <p>{dict.footer}</p>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}