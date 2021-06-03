import { MovieContext } from "../contexts/MovieContext";
import { useContext, useRef} from "react";
import DatePickerComponent from '../components/DatePicker'
import ShowingCard from "../components/ShowingCard";
import PriceFilter from '../components/priceFilter'
import CarouselComponent from '../components/Carousel'
import styles from "../css/Arrow.module.css"

const HomePage = () => {
    const { showings, filteredShowings } = useContext(MovieContext);
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" });

    let listData

    if (filteredShowings && filteredShowings.length > 0) {
        listData = filteredShowings
    } else {
        listData = showings
    }
    console.log(`listData`, listData)

    let content = ''

    if (listData) {
        content =
            <div ref={myRef}>
                <CarouselComponent />
                <div className="container text-center">
                    <h2 className='mt-3 my-5' >Todays showings</h2>
                    <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center my-5'>
                        <DatePickerComponent />
                        <PriceFilter />
                    </div>

                    {listData.length === 0 ?
                        (<div>There are no showings on this date</div>)
                        :
                        <ShowingCard showings={listData} />
                    }
                </div>
            </div>
    }
    else {
        content = <div>Loading...</div>
    }

    return (
        <div >
            {listData ? (content)
                :
                (<h2>No showings!</h2>)}
                <div className={styles.arrowContainer}>
                    <img className={styles.arrow} onClick={executeScroll} src="../assets/arrow.png" alt="scroll to top arrow" />
                    <p>To Top</p>
                </div>
        </div>
        
    );
};

export default HomePage;