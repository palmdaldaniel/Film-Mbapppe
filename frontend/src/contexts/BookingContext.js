import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext);
  const { showing } = useContext(MovieContext);

  // connected to booking.js
  const [tickets, setTickets] = useState([]);
  const [seniorTickets, setSeniorTickets] = useState([]);
  const [adultTickets, setAdultTickets] = useState([]);
  const [childrenTickets, setChildrenTickets] = useState([]);

  // for testing with bookings component
  const [booked] = useState([
    { row: 1, seatNumber: 2 },
    { row: 2, seatNumber: 5 },
    { row: 5, seatNumber: 50 },
  ]);
  const [reserved, setReserved] = useState([]);

  useEffect(() => {
    makeTickets();
  }, [seniorTickets, adultTickets, childrenTickets]);

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

    setTickets(temp);
  };

  const makeBooking = () => {
    if (tickets.length !== reserved.length) {
      console.log("both need to match");
    } else {
      const data = tickets.map((ticket, i) => {
        return {
          ...ticket,
          row: reserved[i].row,
          seatNumber: reserved[i].seatNumber,
        };
      });
      console.log(data);
    }
  };

  const values = {
    booked,
    reserved,
    setReserved,
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
