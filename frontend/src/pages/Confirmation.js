import { useContext, useEffect } from 'react'; 
import { useHistory } from 'react-router-dom'
import { BookingContext } from '../contexts/BookingContext'; 
import s from "../css/Confirmation.module.css"; 

const Confirmation = () => {
  const history = useHistory(); 
  const { currentBooking } = useContext(BookingContext); 

  // FAKE TEMP DATA 
  const tickets = [
    {_id: "60c0866f052fd813234c7cd1", type: "senior", price: 160, rowNumber: 6, seatingNumber: 53},
    {_id: "60c0866f052fd813234c7cd2", type: "senior", price: 160, rowNumber: 6, seatingNumber: 54},
    {_id: "60c0866f052fd813234c7cd3", type: "senior", price: 160, rowNumber: 6, seatingNumber: 55}
  ]

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