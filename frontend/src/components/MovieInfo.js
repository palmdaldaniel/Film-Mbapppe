import Booking from "../components/Booking";
import Video from "./Video";
import styles from "../css/MovieInfo.module.css";
import { useLocation } from "react-router-dom";

const MovieInfo = (props) => {
  let location = useLocation();

  let film
  if (location.pathname.includes('movie-info')) {
    film = props.movie
  } else if (location.pathname.includes('showing')) {
    film = props.showing.film
  }

  let content = "";
  if (film) {
    content = (
      <div className={styles.movieinfocontainer}>
        <div className={styles.postercontainer}>
          <strong className={styles.title}>Movie Tile: {film.Title}</strong>
          <img className={styles.poster} src={film.Poster} alt="movie poster" />
        </div>
        <div className={styles.descContainer}>
          <p><span className={styles.bold}>Runtime:</span>  {film.Runtime}</p>
          <p><span className={styles.bold}>Genre:</span> {film.Genre[0]}</p>
          <p><span className={styles.bold}>Age Rating:</span> {film.Rated}</p>
          <p><span className={styles.bold}>Language:</span> {film.Language}</p>
          <p><span className={styles.bold}>Starring:</span>
            {film.Actors[0]}, {film.Actors[1]}
          </p>
          <p><span className={styles.bold}>Director:</span> {film.Director}</p>
          <p><span className={styles.bold}>Description:</span> {film.Plot}</p>
        </div>
        <div className={styles.iframe}>
          <Video video={film.Trailer} />
        </div>
      </div>
    );
  }
  return (
    <div>
      {content}
    </div>);
};

export default MovieInfo;
