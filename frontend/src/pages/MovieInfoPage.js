import { useState } from "react";

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
    <section>
      <h3>{movie.Title}</h3>
      <figure>
        <img src={movie.Poster} alt={`Poster of the movie ${movie.Title}`} />
      </figure>
      <div className="content">
        <p> <span className="label">Runtime </span>{movie.Runtime} </p>

        <div className="genres">
          <span className="label">Genre:</span>
          <ul>
            {movie.Genre.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
        <p><span className="label">Rating: </span>{movie.Rated}</p>
        <div className="actors">
        <span className="label">Actors: </span>
          <ul>
            {movie.Actors.map((actor) => (
              <li>{actor}</li>
            ))}
          </ul>
        </div>
        <p><span className="label">Language: </span>{movie.Language}</p>
        <p><span className="label">Director: </span>{movie.Director}</p>
        <p><span className="label">Plot: </span>{movie.Plot}</p>
      </div>
    </section>
  );
};

export default MovieIndoPage;
