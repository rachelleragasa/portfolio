import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          rachelle ragasa<span className={styles.dot}>.</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Nav;
