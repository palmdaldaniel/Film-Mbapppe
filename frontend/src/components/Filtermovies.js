import { useEffect, useState, useContext } from "react";
import {MovieContext} from "../contexts/MovieContext"; 

const Filtermovies = ({ movies }) => {
  const { filter, setFilter } = useContext(MovieContext); 
  const [labels, setLabels] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [languages, setLanguages] = useState([]);
  
  useEffect(() => {
    // fire helperfunctions on pageload
    makeLabels(movies);
    makeValues(movies);
  }, []);

  // create labels from the movie object keys, this might not be nessary
  const makeLabels = (movies) => {
    let labels = Object.keys(movies[0]);
    let values = ["_id", "Poster", "Trailer", "Plot", "Actors", "Title", "__v"];

    // take out the labels we don't want to filter on. Will use it to create select fields in return statement
    labels = labels.filter((label) => !values.includes(label));
    setLabels(labels);
  };

  const makeValues = (movies) => {
    // create values for label genre
   const genres = [...new Set(movies.map((value) => value.Genre).flat())]
   setGenres(genres.sort());

    //create values for label year
    const years = movies.map((value) => value.Year).sort((a, b) => a - b);
    setYears([...new Set(years)]);

    // create values for label rating
    const ratings = [...new Set(movies.map((value) => value.Rated))]
    setRatings(ratings.sort());

    // create values for runtime
    let runtime = [...new Set(movies.map((value) => parseInt(value.Runtime)))] 
    runtime = runtime.filter(time => time).sort((a,b) => a - b);
    setRuntimes(runtime);
  
    // create values for Director
    const directors = [...new Set(movies.map((value) => value.Director))]
    setDirectors(directors.sort());

    // create values for Language
    const language = [...new Set(movies.map((value) => value.Language))] 
    setLanguages(language.sort());
  };

  // create an object from the values of the selectfields. 
  const handleChange = (e) => {
    let f = {
      ...filter,
      [e.target.name]: e.target.value
    }


    console.log(f);
    setFilter(f)
  }

  return (
    <div className="FilterContainer">
      <select onChange={handleChange} name="Genre" required>
        <option value=""> Genre </option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Year" required>
        <option value=""> Year </option>
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Rating" required>
        <option value=""> Rating </option>
        {ratings.map((rating) => (
          <option value={rating} key={rating}>
            {rating}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Runtime" required>
        <option value=""> Runtime </option>
        {runtimes.map((runtime) => (
          <option value={runtime} key={runtime}>
            {`${runtime} min`}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Director" required>
        <option value=""> Director </option>
        {directors.map((director) => (
          <option value={director} key={director}>
            {director}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Language" required>
        <option value=""> Language </option>
        {languages.map((language) => (
          <option value={language} key={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtermovies;
