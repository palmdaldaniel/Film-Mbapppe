import Booking from "../components/Booking"; 
import Seating from "../components/Seating"; 
import Video from "./Video"; 
import styles from "../css/MovieInfo.module.css";

const MovieInfo = ({ showing }) => {
  let content = "";
  if (showing) {
    content = (
      <div className={styles.movieinfocontainer}>
        <div className={styles.postercontainer}>
          <strong className={styles.title}>Movie Tile: {showing.film.Title}</strong>
          <img className={styles.poster} src={showing.film.Poster} alt="movie poster" />
        </div>
        <div className={styles.descContainer}>
          <p><span className={styles.bold}>Runtime:</span>  {showing.film.Runtime}</p>
          <p><span className={styles.bold}>Genre:</span> {showing.film.Genre[0]}</p>
          <p><span className={styles.bold}>Age Rating:</span> {showing.film.Rated}</p>
          <p><span className={styles.bold}>Language:</span> {showing.film.Language}</p>
          <p><span className={styles.bold}>Starring:</span>
            {showing.film.Actors[0]}, {showing.film.Actors[1]}
          </p>
          <p><span className={styles.bold}>Director:</span> {showing.film.Director}</p>
          <p><span className={styles.bold}>Description:</span> {showing.film.Plot}</p>
        </div>
        <div className={styles.iframe}>
          <Video video={showing.film.Trailer}/>
        </div>
      </div>
    );
  }
  return (
  <div>
    {content}
    <Booking />
    <Seating />
    </div>);
};

export default MovieInfo;
