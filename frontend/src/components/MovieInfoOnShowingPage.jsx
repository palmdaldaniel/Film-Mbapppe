const MovieInfo = ({ showing }) => {

  let content = ''; 
  if(showing){
    content = 
    <div>
      <strong>Movie Tile: {showing.film.Title}</strong>
      <img src={showing.film.Poster} alt="movie poster" />
      <p>Runtime: {showing.film.Runtime}</p>
      <p>Genre: {showing.film.Genre[0]}</p>
      <p>Age Rating: {showing.film.Rated}</p>
      <p>Language: {showing.film.Language}</p>
      <p>Starring: {showing.film.Actors[0]}, {showing.film.Actors[1]}</p>
      <p>Director: {showing.film.Director}</p>
      <p>Description: {showing.film.Plot}</p>
    </div>
  }
  return (
    <div>
      {content}
    </div>
  );
}
 
export default MovieInfo;