import styles from '../css/BookingCard.module.css';
import { useContext,useState} from "react";
import { BookingContext } from "../contexts/BookingContext";
import Trash from "../components/Trash";
//import ModalWindowSecond from '../components/ModalWindowSecond'; //for the modal

const BookingCard = ({ booking, prev  }) => {
  const { deleteBooking } = useContext(BookingContext);


  //const [bookingIsDeleted, setBookingIsDeleted ] = useState(false); //for the modal
  


// for the popup
  {/*
    {
    
    let modalValues = {
    bookingIsDeleted: bookingIsDeleted,
    setBookingIsDeleted: setBookingIsDeleted,
    modalText: 'Your booking has been deleted'
  }
*/}

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.title}>{booking.showingId.film.Title}</h3>
       {prev === false
       ? 
       <button className={styles.delete} 
       
       onClick={() => 
        { deleteBooking(booking._id)}}> 
        
        <Trash/>  
        
        </button>
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
    
  )
          };
          //for the popup
  //<ModalWindowSecond modalValues={modalValues}/>
    
          
     export default BookingCard; 