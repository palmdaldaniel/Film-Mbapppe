import { useEffect, useState } from "react";

const SeatingMap = ({ saloon }) => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
      // create seats on component load
    makeSeatingMap(saloon.seatsPerRow);
  }, []);

  const makeSeatingMap = (rows) => {
    console.log(rows);
    let seatingMap = [];
    let currentSeatnumber = 1;

    for (let i = 0; i < rows.length; i++) {
      let row = [];

      // make a loop for every row create a seat object
      for (let k = 0; k < rows[i]; k++) {
        let seat = {
          row: i + 1,
          seatNumber: currentSeatnumber,
        };
        currentSeatnumber = currentSeatnumber + 1;
        row.push(seat);
      }
      seatingMap.push(row);
    }

    setSeats(seatingMap);
  };

  return <div>Here goes the seating map</div>;
};

export default SeatingMap;
