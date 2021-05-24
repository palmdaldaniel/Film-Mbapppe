import styles from '../css/userPage.module.css'

const UserPage = () => {
  return (
    <div className={styles.container}>
      <h1>Userpage</h1>
      <div className={styles.userInfo}>
        <div className={styles.info}>
          <h2>Hi, <span>Johannes</span>!</h2>
          <button className={styles.editNameButton}>Edit name</button>
        </div>
      </div>

      <div className={styles.showings}>
        <div className={styles.upcoming}>
          <h2>Upcoming movies</h2>
          <div className={styles.movieGrid}>

          </div>
        </div>
        <div className={styles.previous}>
          <h2>Previous movies</h2>
          <div className={styles.movieGrid}>

          </div>
        </div>
      </div>

    </div>
  );
}

export default UserPage;