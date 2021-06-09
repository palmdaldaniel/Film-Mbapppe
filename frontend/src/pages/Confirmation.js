import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { BookingContext } from '../contexts/BookingContext';
import s from "../css/Confirmation.module.css";

const Confirmation = () => {
  const history = useHistory();
  const { currentBooking, showing } = useContext(BookingContext);

  useEffect(() => {
  }, [])

  const handleClick = () => {
    history.push("/");
  }

  //get sum of each type of ticket
  let adultTix = 0;
  let childTix = 0;
  let srTix = 0;
  if (currentBooking) {
    currentBooking.tickets.forEach((cbTicket) => {
      if (cbTicket.type === "adult") {
        adultTix += 1;
      }
      if (cbTicket.type === "children") {
        childTix += 1;
      }
      if (cbTicket.type === "senior") {
        srTix += 1;
      }
    })
  }

  //only prints ticket type those ticket type have been bought
  let aTicketSum;
  let cTicketSum;
  let sTicketSum;
  if (adultTix > 0) {
    aTicketSum = (
      <span>{adultTix} Adult</span>
    )
  }
  if (childTix > 0) {
    cTicketSum = (
      <span>{childTix} Child</span>
    )
  }
  if (srTix > 0) {
    sTicketSum = (
      <span>{srTix} Senior</span>
    )
  }

  let info = "";
  if (currentBooking) {
    info = (
      <>
        <div className={s.confirmationContainer}>
          <div>
            <strong className={s.title}>{showing.film.Title}</strong>
            <p>Duration: {showing.film.Runtime}</p>
          </div>

          <div className={s.locationTime}>
            <span>{showing.saloon.name}</span>
            <span>{showing.date}</span>
            <span>{showing.time}</span>
          </div>
          <p>{`Booking No: ${(currentBooking._id).slice(18)}`}</p>

          <div className={s.rowAndSeat}>
            {currentBooking.tickets.map((cbTicket, i) => (
              <div key={i}>
                <span>{`Ticket: ${i + 1}, Row: ${cbTicket.rowNumber}, Seat: ${cbTicket.seatingNumber}`}</span>
              </div>
            ))}
          </div>

          <div className={s.tixtypes}>
            {aTicketSum}
            {cTicketSum}
            {sTicketSum}
          </div>

          <div className={s.totals}>
            <p>{`Total Seats:
            ${currentBooking.tickets.length}`}
            </p>
            <p>{`Total price: ${currentBooking.tickets.reduce((acc, cur) => {
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