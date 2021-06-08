import { createContext, useContext , useState} from "react";
import { UserContext } from "./UserContext";

export const BookingContext = createContext();


const BookingContextProvider = (props) => {
    const { activeUser} = useContext(UserContext);
    const [bookingId, setBookingId] = useState([]);
    //const [userBookings, setUserBookings] = useState([]);
    
    //console.log('in booking context', activeUser);
    //const values = {};



// delete Booking 
const deleteBooking = async (bookingId, userId) => {
  await fetch(`/api/v1/users/${bookingId}/${userId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

    //getBooking (activeUser._id);
    //getBooking(userId);

  };

 

 const values = {
   deleteBooking,
   activeUser,
   bookingId,
   setBookingId
  //getBooking,
  //userBooking,
  //setUserBookings

};

  return (
    <BookingContext.Provider value={values}>{props.children}</BookingContext.Provider>
  ); 
};

export default BookingContextProvider;

