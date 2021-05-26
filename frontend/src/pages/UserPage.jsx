import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { MovieContext } from "../contexts/MovieContext";
import { Link } from 'react-router-dom';

import ShowingCard from "../components/ShowingCard";

import styles from '../css/userPage.module.css'

const UserPage = () => {
  const { activeUser, isEditing, setIsEditing, editName, message } = useContext(UserContext);
  const { showings } = useContext(MovieContext); //Get upcoming bookings and previous bookings on user by filtering on showing date in future or past, instead of showings here

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
                <button onClick={e => editName(e.target.previousSibling.value)}>Submit!</button>
                {message ? (
                  <p>{message}</p>
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className={styles.showings}>
            <div className={styles.upcoming}>
              <h2>Upcoming movies</h2>
              {/* Change showings for upcoming bookings on user when bookings are ready*/}
              {showings ? (<ShowingCard showings={showings} />) : (<h3>No upcoming showings!</h3>)}
            </div>
            <div className={styles.previous}>
              <h2>Previous movies</h2>
              {/* Change showings for previous bookings on user when bookings are ready*/}
              {showings ? (<ShowingCard showings={showings} />) : (<h3>No previous showings!</h3>)}
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