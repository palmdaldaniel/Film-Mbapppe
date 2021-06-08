import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { BookingContext } from '../contexts/BookingContext';

import styles from '../css/userPage.module.css'
import UserInfo from '../components/UserInfo';
import BookingCard from '../components/BookingCard';

const UserPage = () => {
  const { activeUser } = useContext(UserContext);
  /* const { previousBookings, upcomingBookings } = useContext(BookingContext); */

  const [upcomingBookings, setUpcomingBookings] = useState([
    {
      _id: "qwe789",
      showingId: {
        date: "2021-06-01",
        saloon: "Big saloon",
        film: "Tarzan",
        time: "10:00",
        price: 150
      },
      tickets: [
        {
          price: 110,
          seatingNumber: 8,
          rowNumber: 3
        }
      ]
    },
    {
      _id: "asd456",
      showingId: {
        date: "2021-06-01",
        saloon: "Big saloon",
        film: "Nemo",
        time: "10:00",
        price: 150
      },
      tickets: [
        {
          price: 110,
          seatingNumber: 8,
          rowNumber: 3
        }
      ]
    }
  ]);
  const [previousBookings, setPreviousBookings] = useState([
    {
      _id: "abc123",
      showingId: {
        date: "2021-06-01",
        saloon: "Small saloon",
        film: "Tarzan",
        time: "10:00",
        price: 150
      },
      tickets: [
        {
          price: 110,
          seatingNumber: 8,
          rowNumber: 3
        },
        {
          price: 110,
          seatingNumber: 7,
          rowNumber: 3
        }
      ]
    }
  ]);
  console.log(previousBookings, upcomingBookings);

  return (
    <div className={styles.container}>
      {activeUser && (
        <div className={styles.content}>
          <UserInfo />

          <div className={styles.showings}>
            <div className={styles.upcoming}>
              <h2 className={styles.h2}>Upcoming movies</h2>
              {upcomingBookings
                ? (upcomingBookings.map(booking => (<BookingCard booking={booking} />)))
                : (<h3>No upcoming bookings..</h3>)}
            </div>
            <div className={styles.previous}>
              <h2 className={styles.h2}>Previous movies</h2>
              {previousBookings
                ? (previousBookings.map(booking => (<BookingCard booking={booking} />)))
                : (<h3>No upcoming bookings..</h3>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPage;