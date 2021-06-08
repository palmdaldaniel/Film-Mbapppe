import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext)
  const { showing } = useContext(MovieContext);

  const [tickets, setTickets] = useState([]);
  const [seniorTickets, setSeniorTickets] = useState([]);
  const [adultTickets, setAdultTickets] = useState([]);
  const [childrenTickets, setChildrenTickets] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);

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
      childrenTickets,
      seniorTickets,
      adultTickets,
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
          rowNumber: reserved[i].row,
          seatingNumber: reserved[i].seatNumber,
        };
      });
      const info = {
        showingId: showing._id,
        userId: activeUser._id,
        tickets: data,
      }
      console.log(info);
      postBooking(info)
    }
  };
  const postBooking = async (bookingData) => {

  let b = await fetch (`/api/v1/bookings`, {
      method: "Post", 
      headers: {
          "content-type": "application/json",
          },
      body: JSON.stringify(bookingData)
    }); 
    b = await b.json(); 

    setCurrentBooking(b) 
  } 

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
