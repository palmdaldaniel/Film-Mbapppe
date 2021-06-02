import Card from 'react-bootstrap/Card';
import styles from "../css/MovieCard.Module.css";
    

function MovieCard(props) {
    const { movie } = props;

    return (
        
           <Card className={`mx-1 mx-md-3`} style={{width: '270px', background: 'none'}} >
                <Card.Img variant="top" src={movie.Poster} style={{ height: '390px' }} />
                <Card.Body>
                    <Card.Text className={`${styles.cardTitle} text-center mb-1`}>{movie.Title}</Card.Text>
                    <Card.Text className={`${styles.cardText} text-center`}>
                        <span>{movie.Genre}</span>   
                        <br/>
                        <span>{movie.Actors[0]}</span> 
                    </Card.Text>
                </Card.Body>
            </Card>
        
    )
}

export default MovieCard