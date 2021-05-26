import { useContext, useEffect } from "react";

import MovieInfo from "../components/MovieInfo";
import SeatingMap from "../components/SeatingMap";
import { MovieContext } from "../contexts/MovieContext";
import Booking from '../components/Booking'

const ShowingPage = (props) => {
  const { showingId } = props.match.params;

  const { getShowingsById, showing } = useContext(MovieContext);

  useEffect(() => {
    getShowingsById(showingId);
  }, []);

  return (
    <div>
      <MovieInfo showing={showing} />
      <Booking />
      {showing && <SeatingMap saloon={showing.saloon} />     }

    </div>
  );
};

export default ShowingPage;
