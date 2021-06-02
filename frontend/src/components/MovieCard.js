import Card from 'react-bootstrap/Card';
import styles from "../css/MovieCard.Module.css";
import { useHistory } from "react-router-dom";


function MovieCard(props) {
    const history = useHistory();
    const { movie } = props;

    const handleClick = () => {
        history.push(`/movie-info/${movie._id}`);
    };

    return (
        <div className={styles.hoverZoom}>
            <Card className={`mx-1 mx-md-3`} style={{ width: '270px', background: 'none' }} onClick={handleClick}>

                <div className={styles.item}>
                    <span className={styles.first}>
                        <Card.Img variant="top" src={movie.Poster} style={{ height: '390px' }} />
                    </span>
                    <span className={styles.second}>
                        <Card.Img className={styles.imgAfter} variant="top" src={movie.Poster} />
                        <p className={styles.textAfter}>
                            {movie.Runtime}
                            <br />
                            {movie.Actors[0]} | {movie.Genre}
                        </p>
                    </span>
                </div >
                <Card.Body>
                    <Card.Text className={`${styles.cardTitle} text-center mb-1`}>{movie.Title}</Card.Text>
                    <Card.Text className={`${styles.cardText} text-center`}>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard