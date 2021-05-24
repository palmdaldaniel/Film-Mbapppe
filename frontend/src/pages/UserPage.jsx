import styles from '../css/userPage.module.css'

const UserPage = () => {
  return (
    <div className={styles.container}>
      <h1>Userpage</h1>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Welcome <span>Johannes</span></h2>
          <button className={styles.editNameButton}>Edit name</button>
        </div>
        <div className={styles.logout}>
          <button className={styles.logoutButton}>
            Logout
          </button>
        </div>
      </div>

      <div className={styles.showings}>
        <div className={styles.upcomming}>
          <h2>Upcoming movies</h2>
        </div>
        <div className={styles.previous}>
          <h2>Prevous movies</h2>
        </div>
      </div>

    </div>
  );
}

export default UserPage;