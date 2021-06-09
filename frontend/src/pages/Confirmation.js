import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { BookingContext } from '../contexts/BookingContext';
import s from "../css/Confirmation.module.css";

const Confirmation = () => {
  const history = useHistory();
  const { currentBooking, showing, totalPrice } = useContext(BookingContext);

  useEffect(() => {
  }, [])

  const handleClick = () => {
    history.push("/");
  }

  console.log("currentbooking", currentBooking);
  console.log("showing", showing);

  let ticketTypes;
  let childTix = 0; 
  let adultTix = 0; 
  let srTix = 0; 
  if (currentBooking) {
        {currentBooking.tickets.map((cbTicket, i) => {
          if(cbTicket.type === "children"){
            childTix += 1;
            return
          }
          if(cbTicket.type === "adult"){
            adultTix += 1; 
            return
          }
          if(cbTicket.type === "senior"){
            srTix += 1; 
            return
          }
        })} 
  }

  console.log(childTix);
  console.log(adultTix);
  console.log(srTix);

  let info = "";
  if (currentBooking) {
    info = (
      <>
        <div className={s.confirmationContainer}>

          <strong>{showing.film.Title}</strong>
          <p>{showing.film.Runtime}</p>
          <p>{showing.saloon.name}</p>
          <p>{showing.date}</p>
          <p>{showing.time}</p>
          <p>{`Booking No: ${(currentBooking._id).slice(18)}`}</p>
          <p>Total Seats: {currentBooking.tickets.length} </p>

          <div>
            {currentBooking.tickets.map((cbTicket, i) => (
              <div key={i}>
                <span>{`Ticket: ${i + 1}, Row: ${cbTicket.rowNumber}, Seat: ${cbTicket.seatingNumber}`}</span>
              </div>
            ))}
          </div>
          <div>
            {currentBooking.tickets.map((cbTicket, i) => (
              <div key={i}>
                <span>{cbTicket.type}</span>
              </div>
            ))}
          </div>

          <div>
            {ticketTypes}
          </div>

          <p>Total price = {totalPrice}</p>

        </div>
      </>
    )
  }
  return (
    <div className={s.mainContainer}>

      <h1>Booking Confirmed!</h1>
      {info}

      <button className={s.button} onClick={handleClick}>Back To Homepage</button>
    </div>
  );
}

export default Confirmation;