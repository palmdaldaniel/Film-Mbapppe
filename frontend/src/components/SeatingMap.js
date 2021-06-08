import { useEffect, useState, useContext } from "react";
import { BookingContext } from "../contexts/BookingContext";
import styles from "../css/Seatingmap.module.css";

const SeatingMap = ({ saloon }) => {
  const [seats, setSeats] = useState([]);
  
  const { booked, reserved, setReserved } = useContext(BookingContext);


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
    // for the tester
    // the param should log out let an object with selected seatnumber and row.
    setReserved([...reserved, seat]);
  };

  const deselectSeat = (seat) => {
    // use filter to return the seats that was not deselected
    setReserved([...reserved.filter((r) => r.seatNumber !== seat.seatNumber)]);
  };

  return (
    <div className={styles.seatingWrapper}>
      {seats &&
        seats.map((rows, i) => {
          return (
            <div className={styles.rows} key={i}>
              <p className={styles.rowNumber}>{i + 1}</p>
              {/* Loop out every seat in each row */}
              {rows.map((seat, i) => {
                if (booked.find((b) => b.seatNumber === seat.seatNumber)) {
                  return (
                    <div key={i}>
                      <div className={`${styles.seat} ${styles.b}`}>
                        <div className={`${styles.cushing} ${styles.b} `}></div>
                      </div>
                      <p>{seat.seatNumber}</p>
                    </div>
                  );
                } else if (
                  reserved.find((r) => r.seatNumber === seat.seatNumber)
                ) {
                  return (
                    <div key={i}>
                      <div
                        className={`${styles.seat} ${styles.r}`}
                        onClick={() => deselectSeat(seat)}
                      >
                        <div className={`${styles.cushing} ${styles.r}`}></div>
                      </div>
                      <p>{seat.seatNumber}</p>
                    </div>
                  );
                } else {
                  return (
                    <div key={i}>
                      <div
                        className={`${styles.seat}  ${styles.o}`}
                        onClick={() => reserveSeat(seat)}
                      >
                        <div className={`${styles.cushing}`}></div>
                      </div>
                      <p>{seat.seatNumber}</p>
                    </div>
                  );
                }
              })}
              <p className={styles.rowNumber}>{i + 1}</p>
            </div>
          );
        })}
      <div className={styles.legend}>
        <div className={styles.helper}>
          <div className={`${styles.seat}`}>
            <div className={styles.cushing}></div>
          </div>
          <p>Open</p>
        </div>
        <div className={styles.helper}>
          <div className={`${styles.seat} ${styles.b} `}>
            <div className={`${styles.cushing} ${styles.b}`}></div>
          </div>
          <p>Booked</p>
        </div>

        <div className={styles.helper}>
          <div className={`${styles.seat} ${styles.r}`}>
            <div className={`${styles.cushing} ${styles.r}`}></div>
          </div>
          <p>Reserve</p>
        </div>
      </div>
    </div>
  );
};

export default SeatingMap;
