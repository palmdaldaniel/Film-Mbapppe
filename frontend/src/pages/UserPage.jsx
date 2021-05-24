import styles from '../css/userPage.module.css'

const UserPage = () => {
  return (
    <div className={styles.container}>
      <h1>Userpage</h1>
      <div className={styles.info}>
        <div>
          <h3>Name: <span>Johannes</span></h3>
          <h3>Email: <span>Joh@mail.com</span></h3>
        </div>
        <div>
          <button className={styles.primaryButton}>Edit name</button>
          <button className={styles.primaryButton}>Logout</button>
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