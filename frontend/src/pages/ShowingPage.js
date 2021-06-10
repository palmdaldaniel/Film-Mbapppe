import { useContext, useEffect } from "react";
import MovieInfo from "../components/MovieInfo";
import SeatingMap from "../components/SeatingMap";
import { MovieContext } from "../contexts/MovieContext";
import Booking from '../components/Booking';
import styles from "../css/booking.module.css";
import { UserContext } from "../contexts/UserContext";
import LoginFormShowing from "../components/LoginFormShowing";
import SignUpShowing from "../components/SignUpShowing";

const ShowingPage = (props) => {
  const { showingId } = props.match.params;

  const { getShowingsById, showing } = useContext(MovieContext);
  const { activeUser, showLogin, setShowLogin } = useContext(UserContext);
  const toggle = () => {
    setShowLogin(!showLogin)
  }

  useEffect(() => {
    getShowingsById(showingId);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => {
    setShowLogin(true);
    };
    }, [setShowLogin]);

  return (
    <div>
      <MovieInfo showing={showing} />
      <div className={styles.showingLine}>
      </div>      
      {activeUser ? (
        <div className={styles.booking_wrapper}>
        <Booking />
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
