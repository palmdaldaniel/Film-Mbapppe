import styles from '../css/BookingCard.module.css';
import { useContext, useState } from 'react'
import ModalWindow from '../components/ModalWindow'
import { BookingContext } from '../contexts/BookingContext';

const BookingCard = ({ booking, prev }) => {
  const { deleteBooking } = useContext(BookingContext);

  const [showModal, setShowModal] = useState(false)


  const handleClick = async (bookingId) => {
    console.log(`clicked`, bookingId)
    let result = await deleteBooking(bookingId)
    if (!result.error) {
      setShowModal(true)
    }
  }

  let modalValues = {
    booleanValue: showModal,
    toggleBoolean: setShowModal,
    modalText: 'The booking has been deleted'
  }

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.title}>{booking.showingId.film.Title}</h3>
        {prev === false
          ? <div className={styles.delete}>
            <button onClick={() => handleClick(booking._id)}>X</button>
          </div>
          : <p></p>}
      </div>
      <div className={styles.bottom}>
        <p className={styles.showingInfo}>{booking.showingId.saloon.name} | {booking.showingId.date} | {booking.showingId.time}</p>
        <p className={styles.bookingNumber}>Bookingnumber: {booking._id.substr(booking._id.length - 6)}</p>
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
      <ModalWindow modalValues={modalValues} />
    </div>
  );
}

export default BookingCard;