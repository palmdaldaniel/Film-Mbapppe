import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  const [seniorTickets, setSeniorTickets] = useState([]);
  const [adultTickets, setAdultTickets] = useState([]);
  const [childrenTickets, setChildrenTickets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [currentBooking, setCurrentBooking] = useState(null);
  const [feedBackMessage] = useState('Select tickets and seats to make purchase')

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

  const [booked] = useState([
    { row: 1, seatNumber: 2 },
    { row: 2, seatNumber: 5 },
    { row: 5, seatNumber: 50 },
  ]);
  const [reserved, setReserved] = useState([]);

  useEffect(() => {
    // count total price if tickets are selected
      if(tickets.length >= 0) {
       let total = tickets.reduce((sum, value) =>  {
          return sum + value.price
        }, 0)
        setTotalPrice(total);
      }
  }, [tickets])


  useEffect(() => {
    makeTickets();
  }, [seniorTickets, adultTickets, childrenTickets]);
  

  const makeTickets = () => {
    let temp = [];
    let tempTickets = {
      childrenTickets,
      seniorTickets,
      adultTickets,
    };

    for(const [key, value] of Object.entries(tempTickets)) {
      value.forEach(t => temp.push(t));
    }

    setTickets(temp);
  };

  const makeBooking = () => {
    if (tickets.length !== reserved.length || tickets.length === 0 ) {
      console.log("both need to match");
    } else {

      // merge reserved seats with selected amount of tickets.
      const data = tickets.map((ticket, i) => {
        return {
          ...ticket,
          rowNumber: reserved[i].row,
          seatingNumber: reserved[i].seatNumber,
        };
      });

      // create booking data
      const info = {
        showingId: showing._id,
        userId: activeUser._id,
        tickets: data,
      }
    // send it to post request.
      postBooking(info)
    }
  };

  const postBooking = async (bookingData) => {
  // prevent sending request if userId and showingId is not there.
    if(bookingData.userId && bookingData.showingId)  {
      let b = await fetch (`/api/v1/bookings`, {
          method: "Post", 
          headers: {
              "content-type": "application/json",
              },
          body: JSON.stringify(bookingData)
        }); 
        b = await b.json(); 
        setCurrentBooking(b)  
    }

  } 

  const values = {
    booked,
    reserved, 
    setReserved, 
    tickets,
    totalPrice,
    setTotalPrice,
    setTickets,
    makeBooking,
    setSeniorTickets,
    setAdultTickets,
    setChildrenTickets,
    feedBackMessage,
    getBookingsByUserId,
    deleteBooking,
    bookingId, 
    currentBooking, 
    showing
  };
  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );

};
export default BookingContextProvider;

