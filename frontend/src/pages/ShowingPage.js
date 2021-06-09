import { useContext, useEffect } from "react";
import MovieInfo from "../components/MovieInfo";
import SeatingMap from "../components/SeatingMap";
import { MovieContext } from "../contexts/MovieContext";
import Booking from '../components/Booking';
import styles from "../css/booking.module.css";
import { UserContext } from "../contexts/UserContext";

const ShowingPage = (props) => {
  const { showingId } = props.match.params;

  const { getShowingsById, showing } = useContext(MovieContext);
  const { activeUser } = useContext(UserContext);

  useEffect(() => {
    getShowingsById(showingId);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <MovieInfo showing={showing} />
      <div className={styles.showingLine}>
      </div>
      <div className={styles.showing_info}>Date:    |    Time:      |      Saloon:</div>
      <div className={styles.booking_wrapper}>
        <Booking />
        {showing && <SeatingMap saloon={showing.saloon} />}
      </div>

    </div>
  );
};

export default ShowingPage;
