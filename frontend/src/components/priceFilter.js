
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";

import s from "../css/PriceFilter.module.css"

function PriceFilter() {
    const { priceOptions, priceValue, setPriceValue } = useContext(MovieContext);

    let items = [];//here we'll keep items that are going to be in the dropdown menu 

    const handleClick = (e) => {
        setPriceValue(parseInt(e.target.value))
    }

    if (priceOptions) { //priceOptions format [100, 150, 200]
        for (let i = 0; i < priceOptions.length; i++) {
            items.push(
                <option key={i} value={priceOptions[i]} >
                    {`${priceOptions[i]}`}
                </option>,
            );
        }
    }

    return (
        <select className={s.input} value={priceValue} onChange={handleClick}>
            <option value=""> Price </option>
            {items}
        </select>
    )
}

export default PriceFilter
