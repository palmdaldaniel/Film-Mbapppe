import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { BookingContext } from '../contexts/BookingContext';
import s from "../css/Confirmation.module.css";

const Confirmation = () => {
  const history = useHistory();
  const { currentBooking, showing } = useContext(BookingContext);

  //get from local storage on reload
  let bookingToRender = currentBooking ? currentBooking : JSON.parse(localStorage.getItem('currentBooking')); 
  let showingToRender = showing ? showing : JSON.parse(localStorage.getItem('showing'))

  const handleClick = () => {
    history.push("/");
    localStorage.clear(); 
  }

  useEffect(() => {
    return() => {
      localStorage.clear(); 
    }
  }, []); 

  //get sum of each type of ticket
  let adultTixSum = 0;
  let childTixSum = 0;
  let seniorTixSum = 0;
  if (bookingToRender && showingToRender) {
    bookingToRender.tickets.forEach((cbTicket) => {
      if (cbTicket.type === "adult") {
        adultTixSum += 1;
      }
      if (cbTicket.type === "children") {
        childTixSum += 1;
      }
      if (cbTicket.type === "senior") {
        seniorTixSum += 1;
      }
    })
  }

  //only render ticket type if those ticket type have been bought
  let aTicket;
  let cTicket;
  let sTicket;
  if (adultTixSum > 0) {
    aTicket = (
      <span>{adultTixSum} Adult</span>
    )
  }
  if (childTixSum > 0) {
    cTicket = (
      <span>{childTixSum} Child</span>
    )
  }
  if (seniorTixSum > 0) {
    sTicket = (
      <span>{seniorTixSum} Senior</span>
    )
  }

  let info = "";
  if ( bookingToRender && showingToRender) {
    info = (
      <>
        <div className={s.confirmationContainer}>
          <div>
            <strong className={s.title}>{showingToRender.film.Title}</strong>
            <p>Duration: {showingToRender.film.Runtime}</p>
            <p>{`Booking No: ${(bookingToRender._id).slice(18)}`}</p>
          </div>

          <div className={s.locationTime}>
            <span>{showingToRender.saloon.name}</span>
            <span>{showingToRender.date}</span>
            <span>{showingToRender.time}</span>
          </div>
          

          <div className={s.rowAndSeat}>
            {bookingToRender.tickets.map((cbTicket, i) => (
              <div key={i}>
                <span>{`Ticket: ${i + 1}, Row: ${cbTicket.rowNumber}, Seat: ${cbTicket.seatingNumber}`}</span>
              </div>
            ))}
          </div>

          <div className={s.tixtypes}>
            {aTicket}
            {cTicket}
            {sTicket}
          </div>

          <div className={s.totals}>
            <p>{`Total Seats:
            ${bookingToRender.tickets.length}`}
            </p>
            <p>{`Total price: ${bookingToRender.tickets.reduce((acc, cur) => {
              return acc + cur.price
            }, 0)}`}
            </p>
          </div>

        </div>
      </>
    )
  }
  return (
    <div className={s.mainContainer}>
      <h1 className={s.confirmMessage}>Booking Confirmed!</h1>
      {info}
      <button className={s.button} onClick={handleClick}>To Homepage</button>
    </div>
  );
}

export default Confirmation;