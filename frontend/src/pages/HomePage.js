import { MovieContext } from "../contexts/MovieContext";
import { useContext, useState, useEffect } from "react";
import DatePickerComponent from '../components/DatePicker'
import ShowingCard from "../components/ShowingCard";
import PriceFilter from '../components/priceFilter'

const HomePage = () => {
    const { showings, setChosenPrice } = useContext(MovieContext);
    const [priceOptions, setPriceOptions] = useState(null); //3. after step 2 when it got its value, it became an array will 6 prices, it sends as props to PriceFilter
    console.log(`showings`, showings)

    let listData = showings;

    useEffect(() => { // 1. when we get showings, we take every price from every showing and keep it in the array "allPriceOptions"
        let allPriceOptions = [] 
        if(showings) {
            showings.forEach((oneShowing)=> {
                allPriceOptions.push(oneShowing.price)
            })
            setPriceOptions(allPriceOptions) //2. after we have looped through all showings, we put all prices to state
        }
    }, [showings]);

    let values = {
        setChosenPrice,
        priceOptions
    }

    let content = ''

    if (showings) {
        content =
            <div>
                <h2>Todays showings</h2>
                <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center mb-5'>
                    <DatePickerComponent/>
                    <PriceFilter values={values}/>
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