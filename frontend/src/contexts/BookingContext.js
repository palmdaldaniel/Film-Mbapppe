import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { MovieContext } from "./MovieContext";

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
  // From context wrapping around Booking Context in app.js
  const { activeUser } = useContext(UserContext);
  const { showing } = useContext(MovieContext);

  // states for booking component
  const [adultTickets, setAdultTickets] = useState([]);
  const [childrenTickets, setChildrenTickets] = useState([]);
  const [seniorTickets, setSeniorTickets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [feedBackMessage] = useState(
    "Select tickets and seats to make purchase"
  );

  // states for seatingmap
  const [reserved, setReserved] = useState([]);
  const [bookedPlaces, setBookedPlaces] = useState([]);

  // state for purchased bookings
  const [currentBooking, setCurrentBooking] = useState(null);

  // states for bookingcard
  const [bookingId, setBookingId] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const prev = useState(true);

  // logic for making tickets
  useEffect(() => {
    // count total price if tickets are selected
    if (tickets.length >= 0) {
      let total = tickets.reduce((sum, value) => {
        return sum + value.price;
      }, 0);
      setTotalPrice(total);
    }
  }, [tickets]);

  // every time a user puts interacts with bookingcomponent makeTickets will fire
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

    for (const [key, value] of Object.entries(tempTickets)) {
      value.forEach((t) => temp.push(t));
    }

    setTickets(temp);
  };

  const makeBooking = () => {
    if (tickets.length !== reserved.length || tickets.length === 0) {
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
      };
      // send it to post request.
      postBooking(info);
    }
  };

  // fetch requests
  const getAllBookedSeatsForShowing = async (showingId) => {
    let result = await fetch(`/api/v1/bookings/${showingId}`);
    result = await result.json();
    setBookedPlaces(result);
  };

  const getBookingsByUserId = async (userId) => {
    let bookings = await fetch(
      `api/v1/bookings/user-bookings?userId=${userId}`
    );
    bookings = await bookings.json();
    return bookings;
  };

  const postBooking = async (bookingData) => {
    // prevent sending request if userId and showingId is not there.
    if (bookingData.userId && bookingData.showingId) {
      let b = await fetch(`/api/v1/bookings`, {
        method: "Post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
      b = await b.json();
      setCurrentBooking(b);
    }
  };

  // delete Booking
  const deleteBooking = async (bookingId) => {
    console.log("bookingId", bookingId);
    // create the deleteobject
  
     let result = await fetch(`/api/v1/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    result = await result.json();

    if (result.success) {
      console.log(result.success);
    } else if (result.error) {
      console.log(result.error);
    }

    setAllBookings(
      allBookings.filter((booking) => booking.bookingId !== bookingId)
    ); 
  };
  const values = {
    getAllBookedSeatsForShowing,
    bookedPlaces,
    reserved,
    setReserved,
    tickets,
    totalPrice,
    setTotalPrice,
    setTickets,
    makeBooking,
    setSeniorTickets,
    seniorTickets,
    setAdultTickets,
    adultTickets,
    setChildrenTickets,
    childrenTickets,
    feedBackMessage,
    getBookingsByUserId,
    deleteBooking,
    bookingId,
    allBookings,
    setAllBookings,
    prev
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
