import { useState } from "react";
import { experiences } from "../../data";
import styles from "./Experience.module.css";

function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.sectionLabel}>Career</div>
        <h2 className={styles.title}>Where I've worked</h2>

        <div className={styles.layout}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            {experiences.map((e, i) => (
              <button
                key={e.company}
                className={`${styles.tab} ${i === active ? styles.activeTab : ""}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabCompany}>{e.company}</span>
                <span className={styles.tabPeriod}>{e.period}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className={styles.panel} key={active}>
            <div className={styles.panelHeader}>
              <h3 className={styles.role}>{exp.role}</h3>
              <span className={styles.company}>@ {exp.company}</span>
            </div>
            <p className={styles.period}>{exp.period}</p>
            <p className={styles.desc}>{exp.description}</p>

            <ul className={styles.highlights}>
              {exp.highlights.map((h, i) => (
                <li key={i} className={styles.highlight}>
                  <span className={styles.bullet} aria-hidden="true">
                    ▹
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
