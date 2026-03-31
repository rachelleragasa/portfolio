import styles from "./SectionTitle.module.css";

interface Props {
  subtitle?: string;
  title: string;
  secondTitle?: string;
  children?: React.ReactNode;
}

function SectionTitle({ subtitle, title, children }: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.sectionLabel}>{subtitle}</div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

export default SectionTitle;
