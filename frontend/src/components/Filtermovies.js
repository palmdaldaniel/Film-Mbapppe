import { useEffect, useState } from "react";

const Filtermovies = ({ movies }) => {
  const [labels, setLabels] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    makeLabels(movies);
    makeValuesForGenre(movies);
  }, []);

  // create labels from the movie object keys, might not be nessary
  const makeLabels = (movies) => {
    let labels = Object.keys(movies[0]);
    let values = ["_id", "Poster", "Trailer", "Plot", "Actors", "Title", "__v"];

    // take out the labels we don't want to filter on. Will use it to create select fields in return statement
    labels = labels.filter((label) => !values.includes(label));
    setLabels(labels);
  };

  const makeValuesForGenre = (movies) => {
    const values = movies.map((value) => value.Genre).flat();
    let unique = [...new Set(values)];
    setGenres(unique);
  };

  return (
    <div className="FilterContainer">
      <select name="Genre" required>
        <option value=""> Genre </option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtermovies;
