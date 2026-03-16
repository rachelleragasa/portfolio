import styles from "./Tag.module.css";

interface Props {
  tags: string[];
}

function Tag({ tags }: Props) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
export default Tag;
