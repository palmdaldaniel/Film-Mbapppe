'react'
import Card from 'react-bootstrap/Card';
import styles from "../css/MovieCard.Module.css";
import { useHistory } from "react-router-dom";


function ShowingCard({showings}) {
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/movie-info/${id}`);
    };

    return (
        <div className='d-flex flex-wrap'>
        {showings.map((show, i) => (
              <Card key={i} onClick={() => handleClick(show._id)} style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={show.film.Poster} style={{ height: '22rem' }} />
                  <Card.Body>
                      <Card.Title>{show.film.Title}</Card.Title>
                      <Card.Text>
                          {show.film.Genre[0]}
                          <span className='mx-2'>{show.time}</span>
                      </Card.Text>
                  </Card.Body>
              </Card>
          ))}
      </div>

    )
}

export default ShowingCard