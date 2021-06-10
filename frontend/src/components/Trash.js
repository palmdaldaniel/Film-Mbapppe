import styles from '../css/Trash.module.css'

const Trashcan = () => {
  

  return (
    <div className={styles.trashContainer}>
      <img className={styles.trash}  src="../assets/trash.png" alt="trash can" />
    </div>
  );
}

export default Trashcan;