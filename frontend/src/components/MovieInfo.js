import Video from "./Video";
import styles from "../css/MovieInfo.module.css";

const MovieInfo = (props) => {

  let film = null

  if (props && props.showing) {
    film = props.showing.film
  } else if (props) {
    film = props.movie
  }

  // console.log(film);

  let content = "";
  if (film) {
    content = (
      <div className={styles.movieinfocontainer}>
        <strong className={styles.title}>{film.Title}</strong>

        <div className={styles.miniwrapper}>

          <div className={styles.posterAndText}>
            <div className={styles.posterContainer}>
            <img className={styles.poster} src={film.Poster} alt="movie poster" />
            </div>
            <div className={styles.descContainer}>
              <p><span className={styles.bold}>Runtime:</span>  {film.Runtime}</p>
              <p><span className={styles.bold}>Genre:</span> {film.Genre}</p>
              <p><span className={styles.bold}>Age Rating:</span> {film.Rated}</p>
              <p><span className={styles.bold}>Language:</span> {film.Language}</p>
              <p><span className={styles.bold}>Starring:</span>
                {film.Actors.map((actor, i) => (
                  <span key={i}> {(i ? ', ' : '') + actor} </span>
                ))}</p>
              <p><span className={styles.bold}>Director:</span> {film.Director}</p>
              <p><span className={styles.bold}>Description:</span> {film.Plot}</p>
            </div>
          </div>

          <div className={styles.iframe}>
            <Video video={film.Trailer} />
          </div>

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
