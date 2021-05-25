import { useEffect, useContext } from 'react'
import Card from 'react-bootstrap/Card';

function MovieCard(props) {
    const { movie } = props;
    console.log(movie);


    return (
        <div>
           <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={movie.Poster} style={{ height: '22rem' }} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                        {movie.Genre[0]}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard