import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

import styles from '../css/userPage.module.css'

const UserPage = () => {
  let { activeUser, isEditing, setIsEditing, editName } = useContext(UserContext);

  return (
    <div className={styles.container}>
      {activeUser ? (
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <h2>Hi, <span>{activeUser.name}</span>!</h2>
            <button
              className={styles.editNameButton}
              onClick={() => setIsEditing(!isEditing)}>Edit name</button>
              {isEditing ? (
                <div>
                  <input type="text" />
                  <button onClick={e => editName(e.target.previousSibling.value)}>Change name!</button>
                </div>
              ) : (
                <div></div>
              )}
          </div>
          <div className={styles.showings}>
            <div className={styles.upcoming}>
              <h2>Upcoming movies</h2>
              {/* Put list compoinent here */}
              <div className={styles.movieGrid}>
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
              {/* Put list compoinent here */}
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
          </div>
        </div>
      ) : (
        <div className="content">
          <h3>You must be logged in to use this page!</h3>

          <Link to="#">Login</Link>
          <Link to="#">Registrer user</Link>
        </div>
      )}
    </div>
  );
}

export default UserPage;