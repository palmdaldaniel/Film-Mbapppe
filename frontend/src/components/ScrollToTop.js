import styles from '../css/Arrow.module.css'

const Categories = () => {
  const executeScroll = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={styles.arrowContainer}>
      <img className={styles.arrow} onClick={executeScroll} src="../assets/arrow.png" alt="scroll to top arrow" />
      {/* <p>To Top</p> */}
    </div>
  );
}

export default Categories;