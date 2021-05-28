import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MovieContext } from "../contexts/MovieContext";


const DatePickerComponent = () => {
    const startDate = new Date("2021/05/25");
    const endDate = new Date("2021/07/24");

    const { chosenDate, setChosenDate } = useContext(MovieContext);

    return (
        <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={chosenDate}
            onChange={date => setChosenDate(date)}
            startDate={startDate}
            endDate={endDate}
        />
    );
};

export default DatePickerComponent;
