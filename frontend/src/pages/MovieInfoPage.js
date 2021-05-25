import { useState } from 'react'


const MovieIndoPage = () => {

    const [movie, setMovie] = useState({
        "Title": "Cruella",
        "Year": "2021",
        "Rated": "PG-13",
        "Runtime": "134 min",
        "Genre": ["Comedy", "Crime"],
        "Director": "Craig Gillespie",
        "Actors": [
          "Emma Stone",
          "Emma Thompson",
          "Mark Strong",
          "Paul Walter Hauser"
        ],
        "Plot": "A live-action prequel feature film following a young Cruella de Vil.",
        "Language": "English",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "Trailer": "https://www.youtube.com/watch?v=gmRKv7n2If8"
      })

      console.log(movie.Actors);


    return (
        <div>
           <h1> { movie.Title} </h1>
           <figure>
               <img src={movie.Poster} alt={`Poster of the movie ${movie.Title}`} />
           </figure>
           <div className="content">
               <p>{movie.Runtime}</p>

              {movie.Genre.map(genre => (
                  <p>{genre}</p>
              ))}

                <p>{movie.Rated}</p>

              {movie.Actors.map(actor => (
                  <p>{actor}</p>
              ))}


               <p>{movie.Language}</p>
               <p>{movie.Director}</p>
               <p>{movie.Description}</p>
            
           </div>

        </div>
     );
}
 
export default MovieIndoPage;