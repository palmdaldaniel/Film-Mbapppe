import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import styles from "../css/MovieCard.Module.css";

function ShowingCard({ showings }) {
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/showing/${id}`);
    };

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {showings.map((show, i) => (

                <div className={styles.hoverZoomShow}>
                    <Card key={i} onClick={() => handleClick(show._id)} className={`mx-1 mx-md-3`} style={{ width: '270px', background: 'none' }}>

                        <div className={styles.item}>
                            <span className={styles.first}>
                                <Card.Img variant="top" src={show.film.Poster} style={{ height: '390px' }} />
                            </span>
                            <span className={styles.second}>
                            <Card.Img className={styles.imgAfter} variant="top" src={show.film.Poster} style={{ height: '390px' }} />
                                <p className={styles.textAfter}>
                                Price: {show.price} Kr
                            <br />
                            {show.time} | {show.film.Genre}
                        </p>
                    </span>
                </div >

                                <Card.Body>
                                    <Card.Text className={`${styles.cardTitle} text-center mb-1`}>{show.film.Title}</Card.Text>
                                    <Card.Text className={`${styles.cardText} text-center`}>
                                        
                                    </Card.Text>
                                </Card.Body>
                </Card>
                        </div>
            ))}
        </div>

    )
}

export default ShowingCard