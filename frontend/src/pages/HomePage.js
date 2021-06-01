import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
import DatePickerComponent from '../components/DatePicker'
import ShowingCard from "../components/ShowingCard";
import PriceFilter from '../components/priceFilter'
import CarouselComponent from '../components/Carousel'

const HomePage = () => {
    const { showings, filteredShowings } = useContext(MovieContext);

    
    
    let listData

    if(filteredShowings && filteredShowings.length > 0) {
        listData = filteredShowings
    } else {
        listData = showings
    }
    
     
    let content = ''

    if (listData) {
        content =
            <div>
                <CarouselComponent/>
                <div className="container text-center">
                    <h2 className='mt-3 my-5' >Todays showings</h2>
                    <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center my-5'>
                        <DatePickerComponent />
                        <PriceFilter />
                    </div>
                    <ShowingCard showings={listData} />
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
        </div>
    );
};

export default HomePage;