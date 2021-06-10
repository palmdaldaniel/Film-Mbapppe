import styles from "../css/booking.module.css";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { BookingContext } from "../contexts/BookingContext";

const Booking = ({ data }) => {
  const history = useHistory();

  const {
    tickets,
    reserved,
    totalPrice,
    makeBooking,
    setSeniorTickets,
    setAdultTickets,
    setChildrenTickets,
    setTotalPrice,
    setTickets,
    setReserved,
    feedBackMessage,
    makeConfirmation
  } = useContext(BookingContext);

  const { price, priceChild, pricePensioner } = data;

 


  // clear values from user when it's leaving the page.
  useEffect(() => {
    return () => {
      setTickets([]);
      setTotalPrice(0);
      setReserved([]);
      setSeniorTickets([])
      setAdultTickets([])
      setChildrenTickets([])
    };
  }, []);

  const handleAdultChange = (e) => {
   
    let adultTickets = {
      type: e.target.name,
      quantity: parseInt(e.target.value),
      totalPrice: parseInt(e.target.value) * price,
    };

    let aT = [];
    for (let i = 0; i < adultTickets.quantity; i++) {
      let ticket = {
        type: e.target.name,
        price: price,
      };
      aT.push(ticket);
    }

    setAdultTickets(aT);
  };

  const handleChildrenChange = (e) => {
   
    let childTickets = {
      type: e.target.name,
      quantity: parseInt(e.target.value),
      totalPrice: parseInt(e.target.value) * priceChild,
    };

    let cT = [];
    for (let i = 0; i < childTickets.quantity; i++) {
      let ticket = {
        type: e.target.name,
        price: priceChild,
      };
      cT.push(ticket);
    }
    setChildrenTickets(cT);
  };

  const handleSeniorChange = (e) => {
   

    let seniorTickets = {
      type: e.target.name,
      quantity: parseInt(e.target.value),
      totalPrice: parseInt(e.target.value) * pricePensioner,
    };

    let sT = [];
    for (let i = 0; i < seniorTickets.quantity; i++) {
      let ticket = {
        type: e.target.name,
        price: pricePensioner,
      };
      sT.push(ticket);
    }
    setSeniorTickets(sT);
  };

  const handleClick = () => {
    history.push("/confirmation");
    makeBooking();
    makeConfirmation(); 
  };
  return (
    <div className={styles.bookingcomponent}>
      <h1>Tickets</h1>
      <div className={styles.ticketContainer}>
        <select
          name="adult"
          id=""
          onChange={(e) => handleAdultChange(e)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <div className={styles.bookingInfo}>
          <p>Adult</p>
          <p>{price}</p>
        </div>
      </div>
      <div className={styles.ticketContainer}>
        <select
          name="children"
          id=""
          onChange={(e) => handleChildrenChange(e)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <div className={styles.bookingInfo}>
          <p>Children</p>
          <p>{priceChild}</p>
        </div>
      </div>
      <div className={styles.ticketContainer}>
        <select
          name="senior"
          id=""
          onChange={(e) => handleSeniorChange(e)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <div className={styles.bookingInfo}>
          <p>Senior</p>
          <p>{pricePensioner}</p>
        </div>
      </div>
      <div className={styles.buyTickets}>
        <div className={styles.ticketsInfo}>
          <p>Tickets: {tickets.length > 0 ? tickets.length : 0}</p>
          <p>{totalPrice > 0 ? totalPrice + " kr" : 0 + " kr"}</p>
        </div>
        {tickets.length !== reserved.length || tickets.length === 0 ? (
          <div className={styles.feedBack}>
            <p>{feedBackMessage}</p>
          </div>
        ) : (
          <button
            className={`${styles.buyButton} ${styles.active}`}
            onClick={() => handleClick()}
          >
            Buy Tickets
          </button>
        )}
      </div>
    </div>
  );
};

export default Booking;
