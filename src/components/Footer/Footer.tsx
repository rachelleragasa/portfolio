import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.copy}>
          © {year} Rachelle Ragasa. Built with React, TypeScript & Vite.
        </span>
        <div className={styles.links}>
          <a
            href="https://github.com/rachelleragasa"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rachelleragasa"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a href="mailto:hello@rachelleragasa.dev" className={styles.link}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
