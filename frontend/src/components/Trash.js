import styles from '../css/Trash.module.css'

const Trashcan = () => {
  const doDelete = () => ({ });

  return (
    <div className={styles.trashContainer}>
      <img className={styles.trash} onClick={doDelete} src="../assets/trash.png" alt="trash can" />
      
    </div>
  );
}

export default Trashcan;