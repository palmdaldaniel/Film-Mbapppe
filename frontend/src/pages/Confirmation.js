import { useContext, useEffect } from 'react'; 
import { useHistory } from 'react-router-dom'
import { BookingContext } from '../contexts/BookingContext'; 
import s from "../css/Confirmation.module.css"; 

const Confirmation = () => {
  const history = useHistory(); 
  const {} = useContext(BookingContext); 

  useEffect(() => {

  }, [])

  const handleClick = () => {
    history.push("/"); 
  }

  return (
    <div className={s.mainContainer}>
      <h1>Booking Confirmed!</h1>
      <div className={s.confirmationContainer}>
        <strong>Title: </strong>
        <span>mins</span>

        <div>
          <span>Salon</span>
          <span>Screening Date</span>
          <span>Screening Time</span>
        </div>
        <p>Booking No:</p>
        <p>Total Seats: </p>

        <div>
          {/* ticket info here. this is placeholder */}
          <p>ticket 1 - row 1: seat 1</p>
          <p>ticket 2 - row 1: seat 2</p>
        </div>

        <div>
          {/* This is a placeholder */}
          <p>Adult * 2, Child * 1, Senior * 1</p>
          <p>Total price = </p>
        </div>
      </div>
      <button className={s.button} onClick={handleClick}>Back To Homepage</button>
    </div>
  );
}

export default Confirmation;