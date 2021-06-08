import styles from "../css/booking.module.css";
import React from "react";

import { useState } from "react";

const Booking = ({ data }) => {
  const { price, priceChild, pricePensioner } = data;

  const [adults, setAdults] = useState({ type: "", quantity: 0, totalPrice: 0 });
  const [children, setChildren] = useState({ type: "", quantity: 0, totalPrice: 0 });
  const [seniors, setSeniors] = useState({ type: "", quantity: 0, totalPrice: 0 });

  function booked() {
    alert("Youn succefully booked tickets!");
  }

  const handleAdultChange = (e) => {
    let adultTickets = {
      type: e.target.name,
      quantity: parseInt(e.target.value),
      totalPrice: parseInt(e.target.value) * price,
    };

    setAdults(adultTickets);
  };

  const handleChildrenChange = (e) => {
    let childTickets = {
      type: e.target.name,
      quantity: parseInt(e.target.value),
      totalPrice: parseInt(e.target.value) * priceChild,
    };

    setChildren(childTickets);
  };

  const handleSeniorChange = (e) => {
    let seniorTickets = {
      type: e.target.name,
      quantity: parseInt(e.target.value),
      totalPrice: parseInt(e.target.value) * pricePensioner,
    };

    setSeniors(seniorTickets);
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
          <p> Tickets: { adults.quantity + children.quantity + seniors.quantity > 0 &&  adults.quantity + children.quantity + seniors.quantity }</p>
          <p>{adults.totalPrice + children.totalPrice + seniors.totalPrice > 0 && adults.totalPrice + children.totalPrice + seniors.totalPrice + ' kr' }</p>
        </div>
        <button className={styles.buyButton} onClick={booked}>
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default Booking;
