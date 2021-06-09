import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { BookingContext } from '../contexts/BookingContext';
import s from "../css/Confirmation.module.css";

const Confirmation = () => {
  const history = useHistory();
  
  const { currentBooking, showing } = useContext(BookingContext);

  // FAKE TEMP DATA 
  const [tickets] = useState([
    {
      _id: "60c0866f052fd813234c7cd1",
      type: "senior",
      price: 160,
      rowNumber: 6,
      seatingNumber: 53
    },
    {
      _id: "60c0866f052fd813234c7cd2",
      type: "senior",
      price: 160,
      rowNumber: 6,
      seatingNumber: 54
    },
    {
      _id: "60c0866f052fd813234c7cd3",
      type: "senior",
      price: 160,
      rowNumber: 6,
      seatingNumber: 55
    }
  ])

  useEffect(() => {
  }, [])

  const handleClick = () => {
    history.push("/");
  }

  let showingInfo = ""; 
  if(showing){
    <div>
      <p>
        {showing.date}
      </p>
    </div>
  }
console.log("currentbooking", currentBooking);
console.log("showing", showing);
  return (
    <div className={s.mainContainer}>
      
      <h1>Booking Confirmed!</h1>
      <div className={s.confirmationContainer}>
        <strong>Title: </strong>
        <span>min</span>

        <div>
          <span>Salon</span>
          <span>{showingInfo}</span>
          <span>Screening Time</span>
        </div>
        <p>Booking No:</p>
        <p>Total Seats: </p>

        {/* <div>
        {currentBooking.map((cb, i) => (
        <div key={i}>
          <p>{`Ticket: ${i + 1}, Row: ${cb.rowNumber}, Seat: ${cb.seatingNumber}`}</p>
        </div>
      ))}
        </div> */}
        <div>
          {currentBooking.tickets.map((cbTicket, i) => (
            <div key={i}>
              <p>{`Ticket: ${i + 1}, Row: ${cbTicket.rowNumber}, Seat: ${cbTicket.seatingNumber}`}</p>
            </div>
          ))}
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