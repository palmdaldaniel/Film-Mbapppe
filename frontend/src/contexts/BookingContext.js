import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();


const BookingContextProvider = (props) => {

  const { activeUser } = useContext(UserContext)
  const { showing } = useContext(MovieContext);
  const [bookingId, setBookingId] = useState([]);



  const getBookingsByUserId = async (userId) => { //60b6042a6a777f1cbc828eb5
    let bookings = await fetch(`api/v1/bookings/user-bookings?userId=${userId}`);
    bookings = await bookings.json();
    // setUpcomingBookings(bookings.upcomingBookings)
    // setPreviousBookings(bookings.previousBookings)
    return bookings
  }

  // delete Booking 
  const deleteBooking = async (bookingId) => {
    await fetch(`/api/v1/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const values = {
    getBookingsByUserId,
    deleteBooking,
    bookingId
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );

};
export default BookingContextProvider;

