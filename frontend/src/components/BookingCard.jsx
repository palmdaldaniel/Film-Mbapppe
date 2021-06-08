import styles from '../css/BookingCard.module.css';

const BookingCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.title}>Movie title</h3>
        <p className={styles.delete}>X {/* put trashcan here */}</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.showingInfo}>Saloon 1 | 05.06.2021 | 12:00</p>
        <p className={styles.bookingNumber}>Bookingnumber: 123456</p>
        <ul className={styles.seatList}>
          <li>row: 1, seat: 2</li>
          <li>row: 1, seat: 3</li>
          <li>row: 1, seat: 4</li>
        </ul>
        <p className={styles.titalSeats}>Total seats: 3</p>
      </div>
    </div>
  );
}

export default BookingCard;