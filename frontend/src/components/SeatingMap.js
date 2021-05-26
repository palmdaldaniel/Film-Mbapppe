import { useEffect, useState } from "react";
import styles from "../css/Seatingmap.module.css";

const SeatingMap = ({ saloon }) => {
  const [seats, setSeats] = useState([]);
  const [booked] = useState([{row:1, seatNumber: 2}, {row: 2, seatNumber: 5}, {row: 5, seatNumber: 50}])
  const [reserved, setReserved] = useState([{row:2, seatNumber: 11}, {row: 3, seatNumber: 22}])

  useEffect(() => {
    // create seats on component load
    makeSeatingMap(saloon.seatsPerRow);
  }, []);

  // function wich creates the actual data for the rows
  const makeSeatingMap = (rows) => {
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

  const reserveSeat = (seat) => {
    setReserved([...reserved, seat])
  }

  const deselectSeat = (seat) => {
    // use filter to return the seats that was not deselected
    setReserved([...reserved.filter(r => r.seatNumber !== seat.seatNumber)])
  }

  return (
    


    <div className={styles.seatingWrapper}>
      {seats &&
        seats.map((rows, i) => {
            return <div className={styles.rows}>
              <p className={styles.rowNumber}>{i + 1}</p>
                   {/* Loop out every seat in each row */}
                   {rows.map((seat) => {
                       if(booked.find(b => b.seatNumber === seat.seatNumber)) {
                           return ( <div className={`${styles.seat} ${styles.bookedSeat}`}></div>)
                        }
                        else if (reserved.find(r => r.seatNumber === seat.seatNumber)) {
                            return ( <div className={`${styles.seat} ${styles.reservedSeat}`} onClick={() => deselectSeat(seat)}></div> )
                        }
                        else {
                            return  ( 
                                <div className={`${styles.seat} ${styles.openSeat}`} onClick={() => reserveSeat(seat)}></div> )
                            } 
                        })} 
                         <p className={styles.rowNumber} >{i + 1}</p> 
          </div>;
        })}
    <div className={styles.legend}>
        <div className={styles.helper}>
          <div  className={`${styles.open}`}></div>
          <p>Open</p>
        </div>
        <div className={styles.helper}>
         <div  className={` ${styles.booked}`}></div>
         <p>Booked</p>
         </div>
         

         <div className={styles.helper}>
        <div  className={`${styles.reserved}`}></div>
        <p>Reserve</p>
        </div>
    </div>
    </div>
  
    
  );
};

export default SeatingMap;
