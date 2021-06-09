import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
  const { activeUser } = useContext(UserContext);
  const { showing } = useContext(MovieContext);
  const [tickets, setTickets] = useState([]);
  const [seniorTickets, setSeniorTickets] = useState([]);
  const [adultTickets, setAdultTickets] = useState([]);
  const [childrenTickets, setChildrenTickets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [currentBooking, setCurrentBooking] = useState(null);
  const [feedBackMessage] = useState('Select tickets and seats to make purchase')

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

    console.log(bookingData);

  let b = await fetch (`/api/v1/bookings`, {
      method: "Post", 
      headers: {
          "content-type": "application/json",
          },
      body: JSON.stringify(bookingData)
    }); 
    b = await b.json(); 

    console.log(b);

    setCurrentBooking(b)  
  } 

  const values = {
    booked,
    reserved, 
    setReserved, 
    tickets,
    totalPrice,
    setTickets,
    makeBooking,
    setSeniorTickets,
    setAdultTickets,
    setChildrenTickets,
    prev,
    upcomingBookings,
    previousBookings,
    feedBackMessage
  };
  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
