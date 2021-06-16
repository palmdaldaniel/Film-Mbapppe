import Carousel from "react-bootstrap/Carousel";
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
import styles from '../css/Carousel.Module.css'
import { useHistory } from "react-router-dom";
import useViewport from './UseViewport'


function CarouselComponent() {
    const { everyMovies } = useContext(MovieContext);
    const history = useHistory();

    //for conditional rendering depending on the screen size.
    //good article https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
    const { width } = useViewport();
    const breakpoint = 992;

    const handleClick = (movieId) => {
        history.push(`/movie-info/${movieId}`);
    };

    return (
        <Carousel fade indicators={false} >
            {everyMovies && everyMovies.map((oneMovie, i) => (
                <Carousel.Item key={i}>
                    {width < breakpoint ?
                        (<div className={`${styles.imageBox} d-flex justify-content-center`} onClick={() => handleClick(oneMovie._id)}>
                            <img className='img-fluid' src={oneMovie.Poster} alt="Movie poster" />
                        </div>) :
                        (<div className={styles.bannerBox} style={{ backgroundImage: `url(${oneMovie.Banner})` }}>
                        </div>)}
                    <Carousel.Caption>
                        <button className='getTicketBtn d-none d-lg-inline-block' onClick={() => handleClick(oneMovie._id)}>Discover more</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}

        </Carousel>

    )
}

export default CarouselComponent