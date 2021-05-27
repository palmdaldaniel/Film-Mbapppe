import { useEffect, useState } from "react";

const Filtermovies = ({ movies }) => {
  const [labels, setLabels] = useState([]);
  const [genres, setGenres] = useState([])
 

  useEffect(() => {
    makeLabels(movies);
    makeValuesForGenre(movies)
  }, []);

  // create labels from the movie object keys
  const makeLabels = (movies) => {
    let labels = Object.keys(movies[0]);
    let values = ["_id", "Poster", "Trailer", "Plot", "Actors", "Title", "__v"];

    // take out the labels we don't want to filter on. Will use it to create select fields on
    labels = labels.filter((label) => !values.includes(label));
    setLabels(labels);
  };

  const makeValuesForGenre = (movies) => {
    const values = movies.map(value => value.Genre).flat();
    let unique = [...new Set(values)]
    setGenres(unique);
}
  





  return (
    <div className="FilterContainer">
      <h1 style={{ color: "white" }}> filter filter </h1>
      {labels.map((label, i) => {
        return (
          <select name={label} value={label} required key={i}>
            <option value={label}> {label}</option>

        


          </select>
        );
      })}
    </div>
  );
};

export default Filtermovies;
