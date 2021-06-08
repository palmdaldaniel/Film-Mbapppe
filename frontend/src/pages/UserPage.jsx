import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { MovieContext } from "../contexts/MovieContext";
import { Link } from 'react-router-dom';

import ShowingCard from "../components/ShowingCard";

import styles from '../css/userPage.module.css'
import UserInfo from '../components/UserInfo';

const UserPage = () => {
  const { activeUser } = useContext(UserContext);
  const { showings } = useContext(MovieContext); //Get upcoming bookings and previous bookings on user by filtering on showing date in future or past, instead of showings here


  return (
    <div className={styles.container}>
      {activeUser && (
        <div className={styles.content}>
          <UserInfo />

          <div className={styles.showings}>
            <div className={styles.upcoming}>
              <h2 className={styles.h2}>Upcoming movies</h2>
              {/* Change showings for upcoming bookings on user when bookings are ready*/}
              {showings ? (<ShowingCard showings={showings} />) : (<h3>No upcoming showings!</h3>)}
            </div>
            <div className={styles.previous}>
              <h2 className={styles.h2}>Previous movies</h2>
              {/* Change showings for previous bookings on user when bookings are ready*/}
              {showings ? (<ShowingCard showings={showings} />) : (<h3>No previous showings!</h3>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPage;