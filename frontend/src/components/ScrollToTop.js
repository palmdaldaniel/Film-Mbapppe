import { useRef } from 'react'
import styles from '../css/Arrow.module.css'

const Categories = () => {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" })

  return (
    <div className={styles.arrowContainer}>
      <img className={styles.arrow} onClick={executeScroll} src="../assets/arrow.png" alt="scroll to top arrow" />
      <p>To Top</p>
    </div>
  );
}

export default Categories;