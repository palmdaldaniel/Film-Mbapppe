import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext"; 

export const BookingContext = createContext();


const BookingContextProvider = (props) => {
    const { activeUser} = useContext(UserContext)
    const { showing } = useContext(MovieContext); 
    
    console.log('in booking context...showing', showing);
    console.log('in booking context', activeUser);

  //Used for booking card trashcan rendering
  const prev = useState(true);

  //TEMP DATA FOR NOW, CONNECT USER BOOKINGS TO setUpcomingBookings and setPreviousBookings AND REMOVE DEFAULT DATA TO HOOK IT UP TO BOOKINGCARD
  const [upcomingBookings, setUpcomingBookings] = useState([
    {
      _id: "qwe789",
      showingId: {
        date: "2021-06-01",
        saloon: "Big saloon",
        film: "Tarzan",
        time: "10:00",
        price: 150
      },
      tickets: [
        {
          price: 110,
          seatingNumber: 8,
          rowNumber: 3
        }
      ]
    },
    {
      _id: "asd456",
      showingId: {
        date: "2021-06-01",
        saloon: "Big saloon",
        film: "Nemo",
        time: "10:00",
        price: 150
      },
      tickets: [
        {
          price: 110,
          seatingNumber: 8,
          rowNumber: 3
        }
      ]
    }
  ]);
  const [previousBookings, setPreviousBookings] = useState([
    {
      _id: "abc123",
      showingId: {
        date: "2021-06-01",
        saloon: "Small saloon",
        film: "Tarzan",
        time: "10:00",
        price: 150
      },
      tickets: [
        {
          price: 110,
          seatingNumber: 8,
          rowNumber: 3
        },
        {
          price: 110,
          seatingNumber: 7,
          rowNumber: 3
        }
      ]
    }
  ]);

  const values = {
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
