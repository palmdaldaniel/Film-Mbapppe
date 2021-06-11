import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { BookingContext } from '../contexts/BookingContext';
import styles from '../css/userPage.module.css'
import UserInfo from '../components/UserInfo';
import BookingCard from '../components/BookingCard';



const UserPage = () => {
  const { activeUser } = useContext(UserContext);
  const { previousBookings, upcomingBookings } = useContext(BookingContext);

  //Used for booking card trashcan rendering
  const prev = useState(true);

  return (
    <div className={styles.container}>
      {activeUser && (
        <div className={styles.content}>
          <UserInfo />
          <div className={styles.showings}>
            <div className={styles.upcoming}>
              <h2 className={styles.h2}>Upcoming movies</h2>
              <div className={styles.movieGrid}>
                {upcomingBookings.length > 0
                  ? (upcomingBookings.map((booking, i) => (<BookingCard
                    booking={booking}
                    prev={!prev}
                    key={i} />)))
                  : (<h3>No upcoming bookings..</h3>)}
              </div>
            </div>
            <div className={styles.previous}>
              <h2 className={styles.h2}>Previous movies</h2>
              <div className={styles.movieGrid}>
                {previousBookings.length > 0
                  ? (previousBookings.map((booking, i) => (<BookingCard
                    booking={booking}
                    prev={prev}
                    key={i} />)))
                  : (<h3>No upcoming bookings..</h3>)}
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default UserPage;