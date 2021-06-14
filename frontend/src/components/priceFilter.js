
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";

import s from "../css/PriceFilter.module.css"

function PriceFilter() {
    const { priceOptions, setChosenPrice} = useContext(MovieContext);

    let items = [];//here we'll keep items that are going to be in the dropdown menu 

    const handleClick = (e) => {
        setChosenPrice(parseInt(e.target.value))
    }

    if (priceOptions) { //priceOptions format [100, 150, 200]
        for (let i = 0; i < priceOptions.length; i++) {
            items.push(
                <option key={i} value={priceOptions[i]} >
                    {`${priceOptions[i]}`}
                </option>,
            );
        }

        items.unshift(
            <option key={'all'} onClick={() => handleClick('all')}>
                {`Price`}
            </option>,
        );
    }

    return (
        <select className={s.input} onChange={handleClick}>
            {items}
        </select>
    )
}

export default PriceFilter
