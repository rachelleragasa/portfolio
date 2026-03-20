import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          <span className={styles.pulse} />
          Available · Passionate about building tech that matters
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>Blue belt in</span>
          <span className={styles.titleLine}>
            Taekwondo
            <span className={styles.italic}> & </span>
            Senior Frontend Engineer
          </span>
        </h1>

        <p className={styles.sub}>
          React · TypeScript · Accessibility · AI-assisted development · 10
          years building products that scale.
        </p>

        <div className={styles.actions}>
          <a href="#work" className={styles.primary}>
            View my work
          </a>
          <a href="#contact" className={styles.secondary}>
            Let's chat →
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>10</span>
            <span className={styles.statLabel}>Years experience</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>6+</span>
            <span className={styles.statLabel}>Taekwondo competitions</span>
          </div>
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
