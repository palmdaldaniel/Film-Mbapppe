import styles from '../css/BookingCard.module.css';
import { useContext, useState } from 'react'
import ModalWindow from '../components/ModalWindow'
import { BookingContext } from '../contexts/BookingContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const BookingCard = ({ booking, prev }) => {
  const { deleteBooking } = useContext(BookingContext);

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  let modalValues = {
    booleanValue: showModal,
    toggleBoolean: setShowModal,
    modalText: 'Are you sure you want to delete this booking?',
    deleteBooking: deleteBooking
  }

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.title}>{booking.showingId.film.Title}</h3>
        {prev === false
          ? <button className={styles.delete} onClick={handleClick}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          : <p></p>}
      </div>
      <div className={styles.bottom}>
        <p className={styles.showingInfo}>
          <span className={styles.info}>{booking.showingId.saloon.name} | </span>  
          <span className={styles.info}>{booking.showingId.date} | </span>
          <span className={styles.info}>{booking.showingId.time}</span>
          
          </p>
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
        <ModalWindow modalValues={modalValues} bookingId={booking._id} />
      </div>
    </div>
  );
}

export default BookingCard;