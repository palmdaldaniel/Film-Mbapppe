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
        
           <Card className={`mx-1 mx-md-3`} style={{width: '270px', background: 'none'}} onClick={handleClick}>
                <Card.Img variant="top" src={movie.Poster} style={{ height: '390px' }} />
                <Card.Body>
                    <Card.Text className={`${styles.cardTitle} text-center mb-1`}>{movie.Title}</Card.Text>
                    <Card.Text className={`${styles.cardText} text-center`}>
                        <span>{movie.Genre[0]}</span>   
                        <br/>
                        <span>{movie.Actors[0]}</span> 
                    </Card.Text>
                </Card.Body>
            </Card>
        
    )
}

export default MovieCard