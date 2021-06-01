import { useEffect, useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Filtermovies = ({ movies }) => {
  const { filter, setFilter, setInputValue, setFinalSearch } =
    useContext(MovieContext);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [languages, setLanguages] = useState([]);

  const [genreValue, setGenreValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const [runtimeValue, setRuntimeValue] = useState("");
  const [directorValue, setDirectorValue] = useState("");
  const [languageValue, setLanguageValue] = useState("");

  useEffect(() => {
    // fire helperfunctions on pageload
    makeValues(movies);
  }, []);

  const makeValues = (movies) => {
    // create values for label genre
    setGenres([...new Set(movies.map((value) => value.Genre).flat())]);

    //create values for label year
    const years = movies.map((value) => value.Year).sort((a, b) => a - b);
    setYears([...new Set(years)]);

    // create values for label rating
    setRatings([...new Set(movies.map((value) => value.Rated))]);

    // create values for runtime
    setRuntimes([...new Set(movies.map((value) => value.Runtime))]);

    // create values for Director
    setDirectors([...new Set(movies.map((value) => value.Director))]);

    // create values for Language
    setLanguages([...new Set(movies.map((value) => value.Language))]);
  };

const collectFiltered = (e) => {
  let f = {
    ...filter,
    [e.target.name]: e.target.value,
  };
  setFilter(f);
}

  // create an object from the values of the selectfields with ...filter
  // console.log(filter);
  const handleGenreChange = (e) => {
    setGenreValue(e.target.value);
    collectFiltered(e)
  };

  const handleYearChange = (e) => {
    setYearValue(e.target.value);
    collectFiltered(e)
  };

  const handleRatingChange = (e) => {
    setRatingValue(e.target.value);
    collectFiltered(e)
  };

  const handleRuntimeChange = (e) => {
    setRuntimeValue(e.target.value);
    collectFiltered(e)
  };

  const handleDirectorChange = (e) => {
    setDirectorValue(e.target.value);
    collectFiltered(e)
  };

  const handleLanguageChange = (e) => {
    setLanguageValue(e.target.value);
    collectFiltered(e)
  };

  const handleReset = () => {
    setInputValue("");
    setFinalSearch("");
    setFilter({});
    setGenreValue("");
    setYearValue("");
    setRatingValue("");
    setRuntimeValue("");
    setDirectorValue("");
    setLanguageValue("");
  };

  return (
    <div className="FilterContainer">
      <select
        value={genreValue}
        onChange={handleGenreChange}
        name="Genre"
        required
      >
        <option value=""> Genre </option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select
        value={yearValue}
        onChange={handleYearChange}
        name="Year"
        required
      >
        <option value=""> Year </option>
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      <select
        value={ratingValue}
        onChange={handleRatingChange}
        name="Rating"
        required
      >
        <option value=""> Rating </option>
        {ratings.map((rating) => (
          <option value={rating} key={rating}>
            {rating}
          </option>
        ))}
      </select>
      <select
        value={runtimeValue}
        onChange={handleRuntimeChange}
        name="Runtime"
        required
      >
        <option value=""> Runtime </option>
        {runtimes.map((runtime) => (
          <option value={runtime} key={runtime}>
            {runtime}
          </option>
        ))}
      </select>
      <select
        value={directorValue}
        onChange={handleDirectorChange}
        name="Director"
        required
      >
        <option value=""> Director </option>
        {directors.map((director) => (
          <option value={director} key={director}>
            {director}
          </option>
        ))}
      </select>
      <select
        value={languageValue}
        onChange={handleLanguageChange}
        name="Language"
        required
      >
        <option value=""> Language </option>
        {languages.map((language) => (
          <option value={language} key={language}>
            {language}
          </option>
        ))}
      </select>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Filtermovies;