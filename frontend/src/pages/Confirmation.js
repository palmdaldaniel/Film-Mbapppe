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
  let adultTixSum = 0;
  let childTixSum = 0;
  let seniorTixSum = 0;
  if (currentBooking) {
    currentBooking.tickets.forEach((cbTicket) => {
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
  if (currentBooking) {
    info = (
      <>
        <div className={s.confirmationContainer}>
          <div>
            <strong className={s.title}>{showing.film.Title}</strong>
            <p>Duration: {showing.film.Runtime}</p>
            <p>{`Booking No: ${(currentBooking._id).slice(18)}`}</p>
          </div>

          <div className={s.locationTime}>
            <span>{showing.saloon.name}</span>
            <span>{showing.date}</span>
            <span>{showing.time}</span>
          </div>
          

          <div className={s.rowAndSeat}>
            {currentBooking.tickets.map((cbTicket, i) => (
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