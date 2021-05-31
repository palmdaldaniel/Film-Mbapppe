import { useEffect, useState, useContext } from "react";
import {MovieContext} from "../contexts/MovieContext"; 

const Filtermovies = ({ movies }) => {
  const { filter, setFilter, setInputValue, setFinalSearch } = useContext(MovieContext); 
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [languages, setLanguages] = useState([]);

  const [genreState, setGenreState] = useState(""); 
  const [yearState, setYearState] = useState("")
  
  useEffect(() => {
    // fire helperfunctions on pageload
    makeValues(movies);
  }, []);

  useEffect(() => {
    // if(Object.keys(filter).length === 0){
    //   setTestOption(""); 
    // }
  }, [filter])

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

  // create an object from the values of the selectfields. 
  const handleChange = (e) => {
    let f = {
      ...filter,
      [e.target.name]: e.target.value
    }
    setFilter(f)
  }

  const handleGenreChange = (e) => {
    setGenreState(e.target.value)
    let f = {
      ...filter,
      [e.target.name]: e.target.value
    }
    setFilter(f)
  }

  const handleYearChange = (e) => {
    setYearState(e.target.value)
    let f = {
      ...filter,
      [e.target.name]: e.target.value
    }
    setFilter(f)
  }

  const handleReset = () => {
    setInputValue("");
    setFinalSearch("");
    setFilter({});
    setGenreState("")
    setYearState("")
  };

  return (
    <div className="FilterContainer">
      <select value={genreState} onChange={handleGenreChange} name="Genre" required>
        <option  value=""> Genre </option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
      {/* <select value={genreState} onChange={handleGenreChange} name="Genre" required>
        <option value=""> Genre </option>
        <option value="Crime"> Crime </option>
        <option value="Horror"> Horror </option>
        <option value="Mystery"> Mystery </option>
        <option value="Action"> Action </option>
        <option value="Adventure"> Adventure </option>
        <option value="Fantasy"> Fantasy </option>
        <option value="Drama"> Drama </option>
      </select> */}
      {/* <select value={yearState} onChange={handleYearChange} name="Year" required>
        <option value=""> Year </option>
        <option value="2021"> 2021 </option>
        <option value="2020"> 2020 </option>
        <option value="2019"> 2019 </option>
        <option value="2013"> 2013 </option>
        
      </select> */}
      
      <select value={yearState} onChange={handleYearChange} name="Year" required>
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
            {runtime}
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
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Filtermovies;
