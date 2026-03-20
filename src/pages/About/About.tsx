import { skills } from "../../data";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.bio}>
            <div className={styles.sectionLabel}>About</div>
            <h2 className={styles.title}>
              I care deeply about
              <br />
              <em>craft & clarity</em>
            </h2>
            <div className={styles.bodyText}>
              <p>
                I'm Rachelle, a senior frontend engineer based in Porto. I
                specialise in building scalable, user-facing products within
                microfrontend architecures, owning multiple parts of a product
                end-to-end, from component to production.
              </p>
              <p>
                Off the keyboard, I'm a taekwondo practitioner — same
                discipline, different kind of breaking.
              </p>
            </div>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Location</span>
                <span className={styles.metaVal}>Porto, Portugal</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Focus</span>
                <span className={styles.metaVal}>
                  React, TypeScript, Microfrontend Architecture, Web
                  Accessibility
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Experience</span>
                <span className={styles.metaVal}>10</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaKey}>Education</span>
                <span className={styles.metaVal}>
                  BSc Computer Science, Brunel University of London
                </span>
              </div>
            </div>
          </div>

          <div className={styles.skillsCol}>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <div key={skill.category} className={styles.skillGroup}>
                  <h4 className={styles.skillCategory}>{skill.category}</h4>
                  <ul className={styles.skillList}>
                    {skill.items.map((item) => (
                      <li key={item} className={styles.skillItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
