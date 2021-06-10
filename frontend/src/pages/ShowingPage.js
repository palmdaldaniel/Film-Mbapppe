import { useContext, useEffect } from "react";
import MovieInfo from "../components/MovieInfo";
import SeatingMap from "../components/SeatingMap";
import { MovieContext } from "../contexts/MovieContext";
import Booking from '../components/Booking';
import styles from "../css/booking.module.css";
import { UserContext } from "../contexts/UserContext";
import LoginFormShowing from "../components/LoginFormShowing";
import SignUpShowing from "../components/SignUpShowing";
import { BookingContext } from "../contexts/BookingContext";

const ShowingPage = (props) => {
  const { showingId } = props.match.params;

  const { getShowingsById, showing } = useContext(MovieContext);
  const { activeUser, showLogin, setShowLogin } = useContext(UserContext);
  const toggle = () => {
    setShowLogin(!showLogin)
  }
  const { getAllBookedSeatsForShowing } = useContext(BookingContext);

  useEffect(() => {
    getShowingsById(showingId);
    // eslint-disable-next-line
    getAllBookedSeatsForShowing(showingId)
  }, []);

  /*   useEffect(() => {
      return () => {
      setShowLogin(true);
      };
      }, [setShowLogin]);
   */
  return (
    <div>
      <MovieInfo showing={showing} />
      <div className={styles.showingLine}>
        <div>
          {activeUser ? (
            <div className={styles.showing_info}>
              Date: <span className={styles.showingInfoTxt}>{showing?.date}</span>  
              Time: <span className={styles.showingInfoTxt}>{showing?.time}</span>   
              Saloon: <span className={styles.showingInfoTxt}>{showing?.saloon.name}</span></div>
          ) : (

            <div className={styles.displayNone}></div>

          )}
        </div>
      </div>

      {
        activeUser ? (
          <div className={styles.booking_wrapper}>
            {showing && <Booking data={showing} />}
            {showing && <SeatingMap saloon={showing.saloon} />}
          </div>
        ) : (
          <div className={styles.formContainer}>
            {showLogin ? <LoginFormShowing /> : <SignUpShowing />}
            <p className={styles.toggleText} onClick={toggle}>{showLogin ? "Are you not a member yet? " : "Back to login"}</p>
          </div>
        )}
    </div>
  );
};

export default ShowingPage;
