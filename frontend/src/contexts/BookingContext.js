import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext"; 

export const BookingContext = createContext();


const BookingContextProvider = (props) => {
    const { activeUser} = useContext(UserContext)
    const { showing } = useContext(MovieContext); 
    
    console.log('in booking context...showing', showing);
    console.log('in booking context', activeUser);
  const values = {};

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
