import styles from '../css/BookingCard.module.css';

const BookingCard = ({ booking, prev }) => {

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.title}>{booking.showingId.film.Title}</h3>
       {prev === false
       ? <p className={styles.delete}>X {/* put trashcan here */}</p>
      : <p></p> }
      </div>
      <div className={styles.bottom}>
        <p className={styles.showingInfo}>{booking.showingId.saloon.name} | {booking.showingId.date} | {booking.showingId.time}</p>
        <p className={styles.bookingNumber}>Bookingnumber: {booking._id}</p>
        <ul className={styles.seatList}>
          {/* Maps out all seats in booking */}
          {booking.tickets.map((ticket, i) => (
            <li key={i}>
              row: {ticket.rowNumber},
              seat: {ticket.seatingNumber}
            </li>
          )
          )}
        </ul>
        <p className={styles.totalSeats}>Total seats: {booking.tickets.length}</p>
      </div>
    </div>
  );
}

export default BookingCard;