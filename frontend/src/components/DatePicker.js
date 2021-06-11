import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MovieContext } from "../contexts/MovieContext";


const DatePickerComponent = () => {

    const { chosenDate, setChosenDate } = useContext(MovieContext);

    return (
        <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={chosenDate}
          /*   minDate={new Date()} */
            onChange={date => setChosenDate(date)}
        />
    );
};

export default DatePickerComponent;
