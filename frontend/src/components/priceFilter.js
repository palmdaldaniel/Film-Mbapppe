
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";

import s from "../css/PriceFilter.module.css"

function PriceFilter() {
    const { priceOptions, setChosenPrice } = useContext(MovieContext);

    let items = [];//here we'll keep items that are going to be in the dropdown menu 

    const handleClick = (priceOpt) => {
        setChosenPrice(priceOpt)
    }

    if (priceOptions) { //priceOptions format [100, 150, 200]
        for (let i = 0; i < priceOptions.length; i++) {
            items.push(
                <option key={i} onClick={() => handleClick(priceOptions[i])}>
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
        <select className={s.input} title="Price">
            {items}
        </select>
    )
}

export default PriceFilter