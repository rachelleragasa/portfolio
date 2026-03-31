import { useState } from "react";
import { projects } from "../../data";
import styles from "./Work.module.css";
import Tag from "../../components/Tag/Tag";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Work() {
  const [filter, setFilter] = useState<"all" | "featured">("featured");
  const displayed =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <SectionTitle title="Projects I've built">
          <div className={styles.filters}>
            <button
              className={`${styles.filter} ${filter === "featured" ? styles.active : ""}`}
              onClick={() => setFilter("featured")}
            >
              Featured
            </button>
            <button
              className={`${styles.filter} ${filter === "all" ? styles.active : ""}`}
              onClick={() => setFilter("all")}
            >
              All projects
            </button>
          </div>
        </SectionTitle>

        <div className={styles.grid}>
          {displayed.map((project, i) => (
            <article
              key={project.id}
              className={`${styles.card} ${project.featured && filter === "featured" && i === 0 ? styles.featured : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.year}>{project.year}</span>
                <div className={styles.cardActions}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.externalLink}
                      aria-label="View project"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2 12L12 2M12 2H6M12 2V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>

              <Tag tags={project.tags} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
