import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext);

  // connected to booking.js
  const [tickets, setTickets] = useState([]);
  const [seniorTickets, setSeniorTickets] = useState([]);
  const [adultTickets, setAdultTickets] = useState([]);
  const [childrenTickets, setChildrenTickets] = useState([]);

  useEffect(() => {
    makeTickets();
  }, [seniorTickets, adultTickets, childrenTickets]);

  console.log(tickets);



  const makeTickets = () => {
    let temp = [];

    let tempTickets = {
      adultTickets,
      childrenTickets,
      seniorTickets,
    };

    tempTickets.adultTickets.forEach((t) => {
      temp.push(t);
    });

    tempTickets.childrenTickets.forEach((t) => {
      temp.push(t);
    });
    tempTickets.seniorTickets.forEach((t) => {
      temp.push(t);
    });

    setTickets(temp)
  };

  const makeBooking = () => {
    console.log("making a booking");
  };

  const values = {
    tickets,
    setTickets,
    makeBooking,
    setSeniorTickets,
    setAdultTickets,
    setChildrenTickets,
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
