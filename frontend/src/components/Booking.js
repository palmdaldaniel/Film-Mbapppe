import styles from "../css/booking.module.css"
import React from 'react'


const Booking = () => {

  function booked() {
    alert('Youn succefully booked tickets!');
  }
  return (
    <div className={styles.bookingcomponent}>
      <h1>Tickets</h1>
     <div className={styles.ticketContainer}>
         <select name="" id="">
           <option value="0">0</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
         </select>
         <div className={styles.bookingInfo}>
       <p>Adult</p>
       <p>Price</p>
       </div>
     </div>
     <div className={styles.ticketContainer}>
         <select name="" id="">
           <option value="0">0</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
         </select>
         <div className={styles.bookingInfo}>
       <p>Children</p>
       <p>Price</p>
       </div>
     </div>
     <div className={styles.ticketContainer}>
         <select name="" id="">
           <option value="0">0</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
         </select>
         <div className={styles.bookingInfo}>
       <p>Senior</p>
       <p>Price</p>
       </div>
     </div>

     <div className={styles.buyTickets}>
       <div className={styles.ticketsInfo}>
       <p>2 Tickets</p>
       <p>300 kr</p>
       </div>
       <button  className={styles.buyButton} onClick={booked}>Buy Tickets</button>
     </div>
    </div>

  );
}

export default Booking;