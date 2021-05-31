import Carousel from "react-bootstrap/Carousel";
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
import styles from '../css/Carousel.Module.css'

function CarouselComponent() {
   
    const { everyMovies } = useContext(MovieContext);
    return (
        <Carousel fade indicators={false}> 
            
            {everyMovies.map((oneMovie, i) => (
                <Carousel.Item>
                    <div className={styles.imageBox} style={{backgroundImage: `url(${oneMovie.Poster})`}}>
                    </div>
                    <Carousel.Caption>
                    <h2 className={styles.heading2}>{oneMovie.Title}</h2>
                   
                    <button className='getTicketBtn'>Get tickets</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}

        </Carousel>
        
    )
}

export default CarouselComponent