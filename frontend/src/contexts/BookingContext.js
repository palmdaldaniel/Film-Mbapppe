import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();


const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext)
  const { showing } = useContext(MovieContext);

  const [booked] = useState([
    { row: 1, seatNumber: 2 },
    { row: 2, seatNumber: 5 },
    { row: 5, seatNumber: 50 },
  ]);
  const [reserved, setReserved] = useState([
  ]);
  const [booking, setBooking] = useState(null);


  console.log('in booking context...showing', showing);
  console.log('in booking context', activeUser);

  const createBooking = async (userId, showingId, tickets) => {
    let b = await fetch (`/api/v1/bookings`, {
      method: "Post", 
      headers: {
          "content-type": "application/json",
          },
      body: JSON.stringify(userId, showingId, tickets)
    }); 
    b = await booking.json(); 
    setBooking(b)
  }

  const values = {
    createBooking, 
    booked, 
    reserved, 
    setReserved
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
