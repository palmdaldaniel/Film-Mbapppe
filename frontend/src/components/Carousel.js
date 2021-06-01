import Carousel from "react-bootstrap/Carousel";
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
import styles from '../css/Carousel.Module.css'

function CarouselComponent() {
   
    const { everyMovies } = useContext(MovieContext);

    let urls = [
        // 'https://media.comicbook.com/2021/04/spiral-from-the-book-of-saw-poster-final-chris-rock-header-1265195-1280x0.jpeg',
        'https://express-images.franklymedia.com/6616/sites/199/2021/05/11135800/spiral.jpg',
        'https://i1.wp.com/www.mobi-racer.com/wp-content/uploads/2021/04/The-Unholy.jpg?fit=1170%2C658&ssl=1',
        'https://i2.wp.com/www.irishfilmcritic.com/wp-content/uploads/2020/12/Nobody.jpg?fit=1392%2C696&ssl=1',
        'https://thegww.com/wp-content/uploads/2021/04/cruellabanner.jpg',
        'https://i.redd.it/8e7egz0mdrc61.jpg',
        'https://popcultureocd.files.wordpress.com/2021/01/nomadland-banner.png'
    ]

    return (
        <Carousel fade indicators={false} > 
            {urls.map((url, i) => (
                <Carousel.Item>
                    <div className={styles.imageBox} style={{backgroundImage: `url(${url})`}}>
                    </div>
                    <Carousel.Caption>
                    <h2 className={styles.heading2}>Title</h2>
                    <button className='getTicketBtn'>Get tickets</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
            {/* {everyMovies.map((oneMovie, i) => (
                <Carousel.Item>
                    <div className={styles.imageBox} style={{backgroundImage: `url(${oneMovie.Poster})`}}>
                    </div>
                    <Carousel.Caption>
                    <h2 className={styles.heading2}>{oneMovie.Title}</h2>
                   
                    <button className='getTicketBtn'>Get tickets</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))} */}

        </Carousel>
        
    )
}

export default CarouselComponent