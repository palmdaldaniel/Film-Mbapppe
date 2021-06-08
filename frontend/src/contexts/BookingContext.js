import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext);

  // connected to booking.js
  const [tickets, setTickets] = useState([]);
 
  



  const values = {
  tickets
  
  };

  console.log(values);

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
