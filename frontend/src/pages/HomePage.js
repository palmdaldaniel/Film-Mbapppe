import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
import DatePickerComponent from '../components/DatePicker'
import ShowingCard from "../components/ShowingCard";
import PriceFilter from '../components/priceFilter'

const HomePage = () => {
    const { showings } = useContext(MovieContext);

    let listData = showings;
    let content = ''

    if (showings) {
        content =
            <div>
                <h2>Todays showings</h2>
                <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center'>
                    <DatePickerComponent/>
                    <PriceFilter/>
                </div>
                <ShowingCard showings={showings} />
            </div>
    }
    else {
        content = <div>Loading...</div>
    }

    return (
        <div className="container">
            <h1>Home page</h1>
            {listData ? (content)
                :
                (<h2>No showings!</h2>)}
        </div>
    );
};

export default HomePage;