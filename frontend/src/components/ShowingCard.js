'react'
import Card from 'react-bootstrap/Card';
import styles from "../css/MovieCard.Module.css";
import { useHistory } from "react-router-dom";


function ShowingCard({show}) {
    const history = useHistory();
    console.log(show);

    const handleClick = () => {
        history.push(`/movie-info/${show._id}`);
    };

    return (
        <Card className={`${styles.movieCard} mx-1 mx-md-3`} style={{ width: '240px', background: 'none' }} onClick={handleClick}>
            <Card.Img variant="top" src={show.film.Poster} style={{ height: '360px' }} />
            <Card.Body>
                <Card.Text className={`${styles.cardTitle} text-center mb-1`}>{show.Title}</Card.Text>
                <Card.Text className={`${styles.cardText} text-center`}>
                    <span>{show.time}</span>
                    <br />
                    <span>{show.film.Title}</span>
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default ShowingCard