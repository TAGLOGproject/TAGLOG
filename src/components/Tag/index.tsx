import styles from './tag.module.scss';

interface IProps {
  tag: string;
  onDelete?: (v: string) => void;
}

export default function Tag({ tag, onDelete }: IProps) {
  return (
    <div className={styles.tag} key={tag}>
      <span>{tag}</span>
      {onDelete ? (
        <button
          onClick={() => {
            onDelete(tag);
          }}
          type="button"
        >
          X
        </button>
      ) : null}
    </div>
  );
}
