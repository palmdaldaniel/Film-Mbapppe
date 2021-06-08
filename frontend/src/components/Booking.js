import styles from "../css/booking.module.css";
import React from "react";

import { useState, useContext } from "react";
import { BookingContext } from "../contexts/BookingContext";

const Booking = ({ data }) => {
  const { tickets, totalPrice, makeBooking, setSeniorTickets, setAdultTickets, setChildrenTickets } =
    useContext(BookingContext);

  const { price, priceChild, pricePensioner } = data;

  // values for displaying data on page for the moment.
  const [adults, setAdults] = useState({
    type: "",
    quantity: 0,
    totalPrice: 0,
  });
  const [children, setChildren] = useState({
    type: "",
    quantity: 0,
    totalPrice: 0,
  });
  const [seniors, setSeniors] = useState({
    type: "",
    quantity: 0,
    totalPrice: 0,
  });

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
    //  keep for displaying data
    //setAdults(adultTickets);
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

    //  keep for displaying data
    //setChildren(childTickets);
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

    //  keep for displaying data
    //  setSeniors(seniorTickets);
  };

  return (
    <div className={styles.bookingcomponent}>
      <h1>Tickets</h1>
      <div className={styles.ticketContainer}>
        <select name="adult" id="" onChange={(e) => handleAdultChange(e)}>
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
        <select name="children" id="" onChange={(e) => handleChildrenChange(e)}>
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
        <select name="senior" id="" onChange={(e) => handleSeniorChange(e)}>
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
          <p>
            Tickets: {tickets.length > 0 ? tickets.length : 0 + ' kr' } 
          </p>
          <p>{totalPrice > 0 ? totalPrice + " kr" : 0 + ' kr'}</p>
        </div>
        <button className={styles.buyButton} onClick={() => makeBooking()}>
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default Booking;
