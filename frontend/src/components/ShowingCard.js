import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import styles from "../css/MovieCard.Module.css";

function ShowingCard({ showings }) {
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/showing/${id}`);
    };

    return (
        <div className='d-flex flex-wrap'>
            {showings.map((show, i) => (
                <Card onClick={() => handleClick(show._id)} className={`mx-1 mx-md-3`} style={{ width: '240px', background: 'none' }} >
                    <Card.Img variant="top" src={show.film.Poster} style={{ height: '360px' }} />
                    <Card.Body>
                        <Card.Text className={`${styles.cardTitle} text-center mb-1`}>{show.film.Title}</Card.Text>
                        <Card.Text className={`${styles.cardText} text-center`}>
                            <span>{show.film.Genre[0]}</span>
                            <br />
                            <span>{show.film.Actors[0]}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>

    )
}

export default ShowingCard