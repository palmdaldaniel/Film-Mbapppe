import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();


const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext)
  const { showing } = useContext(MovieContext);

  


  const getBookingsByUserId = async (userId) => { //60b6042a6a777f1cbc828eb5
    let bookings = await fetch(`api/v1/bookings/user-bookings?userId=${userId}`);
    bookings = await bookings.json();
    // setUpcomingBookings(bookings.upcomingBookings)
    // setPreviousBookings(bookings.previousBookings)
    return bookings
  }


  const values = {
    getBookingsByUserId,
    
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
