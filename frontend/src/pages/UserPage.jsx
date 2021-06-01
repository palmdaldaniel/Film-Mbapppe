import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { MovieContext } from "../contexts/MovieContext";
import { Link } from 'react-router-dom';

import ShowingCard from "../components/ShowingCard";

import styles from '../css/userPage.module.css'
import UserInfo from '../components/UserInfo';

const UserPage = () => {
  const { activeUser, whoami } = useContext(UserContext);
  const { showings } = useContext(MovieContext); //Get upcoming bookings and previous bookings on user by filtering on showing date in future or past, instead of showings here


  useEffect(() => {
    if (activeUser) {
      whoami();
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.container}>
      {activeUser ? (
        <div className={styles.content}>
          <UserInfo />

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
        <div className={styles.container}>
          <h3>You must be logged in to use this page!</h3>

          <Link className={styles.links} to="/login">Login</Link>
          <Link className={styles.links} to="/register">Registrer user</Link>
        </div>
      )}
    </div>
  );
}

export default UserPage;