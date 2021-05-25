import { useState } from "react";
import styles from "./css/MovieInfoPage.module.css";

const MovieIndoPage = () => {
  const [movie, setMovie] = useState({
    Title: "Cruella",
    Year: "2021",
    Rated: "PG-13",
    Runtime: "134 min",
    Genre: ["Comedy", "Crime"],
    Director: "Craig Gillespie",
    Actors: [
      "Emma Stone",
      "Emma Thompson",
      "Mark Strong",
      "Paul Walter Hauser",
    ],
    Plot: "A live-action prequel feature film following a young Cruella de Vil.",
    Language: "English",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    Trailer: "https://www.youtube.com/watch?v=gmRKv7n2If8",
  });

  console.log(movie.Actors);

  return (
      <div className={styles.sectionWrapper}>


     
    <section className={styles.section}>
      <h3>{movie.Title}</h3>
      <div className={styles.contentWrapper}>
      <figure className={styles.figure}>
        <img src={movie.Poster} alt={`Poster of the movie ${movie.Title}`} />
      </figure>

      <div className={styles.content}>
        <p>
          <span className={styles.label}>Runtime: </span>
          {movie.Runtime}
        </p>

        <div className={styles.genres}>
          <span className={styles.label}>Genre:</span>
          <ul>
            {movie.Genre.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
        <p>
          <span className={styles.label}>Rating: </span>
          {movie.Rated}
        </p>
        <div className={styles.actors}>
          <span className={styles.label}>Actors: </span>
          <ul>
            {movie.Actors.map((actor) => (
              <li>{actor}</li>
            ))}
          </ul>
        </div>
        <p>
          <span className={styles.label}>Language: </span>
          {movie.Language}
        </p>
        <p>
          <span className={styles.label}>Director: </span>
          {movie.Director}
        </p>
        <p>
          <span className={styles.label}>Plot: </span>
          {movie.Plot}
        </p>
      </div>
      </div>
    </section>
    </div>
  );
};

export default MovieIndoPage;
