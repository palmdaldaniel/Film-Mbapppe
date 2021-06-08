import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();


const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext)
  const { showing } = useContext(MovieContext);

  const [upcomingBookings, setUpcomingBookings] = useState([])
  const [previousBookings, setPreviousBookings] = useState([])

  //Used for booking card trashcan rendering
  const prev = useState(true);


  const getBookingsByUserId = async (userId) => { //60b6042a6a777f1cbc828eb5
    let bookings = await fetch(`api/v1/bookings/user-bookings?userId=${userId}`);
    bookings = await bookings.json();
    setUpcomingBookings(bookings.upcomingBookings);
    setPreviousBookings(bookings.previousBookings)
  }


  const values = {
    getBookingsByUserId,
    prev,
    upcomingBookings,
    previousBookings
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
