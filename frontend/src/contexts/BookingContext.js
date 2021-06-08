import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();


const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext)
  const { showing } = useContext(MovieContext);

  const [bookedPlaces, setBookedPlaces] = useState([])

  const getAllBookedSeatsForShowing = async (showingId) => {
    let result = await fetch(`/api/v1/bookings/${showingId}`);
    result = await result.json();
    setBookedPlaces(result)
  }
  

  const values = {
    getAllBookedSeatsForShowing,
    bookedPlaces
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
