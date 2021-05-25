import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

import styles from '../css/userPage.module.css'

const UserPage = () => {
  let { activeUser } = useContext(UserContext);


  return (
    <div className={styles.container}>
      {activeUser ? (
        <div className="content">
          <div className={styles.userInfo}>
            <div className={styles.info}>
              <h2>Hi, <span>{activeUser.name}</span>!</h2>
              <button
                className={styles.editNameButton}>Edit name</button>
            </div>
          </div>
          <div className={styles.showings}>
            <div className={styles.upcoming}>
              <h2>Upcoming movies</h2>
              <div className={styles.movieGrid}>
                <div className={styles.tempCard}>
                  <p>tempCard</p>
                </div>
                <div className={styles.tempCard}>
                  <p>tempCard</p>
                </div>
                <div className={styles.tempCard}>
                  <p>tempCard</p>
                </div>
                <div className={styles.tempCard}>
                  <p>tempCard</p>
                </div>
                <div className={styles.tempCard}>
                  <p>tempCard</p>
                </div>
              </div>
            </div>
            <div className={styles.previous}>
              <h2>Previous movies</h2>
              <div className={styles.movieGrid}>
                <div className={styles.tempCard}>
                  <p>tempCard</p>
                </div>
                <div className={styles.tempCard}>
                  <p>tempCard</p>
                </div>
                <div className={styles.tempCard}>
                  <p>tempCard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <h3>You must be logged in to use this page!</h3>
        </div>
      )}
    </div>
  );
}

export default UserPage;