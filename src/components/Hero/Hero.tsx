import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          <span className={styles.pulse} />
          Available for new projects
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>Senior Frontend</span>
          <span className={styles.titleLine}>
            Developer
            <span className={styles.italic}> & </span>
            Blue belt in Taekwondo
          </span>
        </h1>

        <p className={styles.sub}>
          I build performant, accessible interfaces that people love to use. 10
          years turning complex problems into elegant digital experiences.
        </p>

        <div className={styles.actions}>
          <a href="#work" className={styles.primary}>
            View my work
          </a>
          <a href="#contact" className={styles.secondary}>
            Get in touch →
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
