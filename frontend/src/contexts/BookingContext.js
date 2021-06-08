import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();


const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext)
  const { showing } = useContext(MovieContext);

  console.log('in booking context...showing', showing);
  console.log('in booking context', activeUser);

  const getAllBookedSeatsForShowing = async (showingId) => {
    let result = await fetch(`/api/v1/bookings/${showingId}`);
    result = await result.json();
    return result
  }


  const values = {
    getAllBookedSeatsForShowing
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
