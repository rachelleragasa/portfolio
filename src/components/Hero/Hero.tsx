import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Hey i'm Rachelle,</span>
          <span className={styles.titleLine}>a senior frontend</span>
          <span className={styles.titleLine}>Engineer</span>
        </h1>

        <p className={styles.sub}>
          React · TypeScript · Accessibility · AI-assisted development · 10
          years building products that scale.
        </p>

        <div className={styles.actions}>
          <a
            href="#work"
            className={styles.primary}
            data-umami-event="View my work button"
          >
            View my work
          </a>
          <a
            href="#contact"
            className={styles.secondary}
            data-umami-event="Contact button"
          >
            Let's chat
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

export default Hero;
