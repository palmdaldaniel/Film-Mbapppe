import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const BookingContext = createContext();


const BookingContextProvider = (props) => {
    const { activeUser} = useContext(UserContext)



    console.log('in booking context', activeUser);
  const values = {
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
