import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";

function PriceFilter() {
    const { priceOptions, setChosenPrice } = useContext(MovieContext);

    let items = [];//here we'll keep items that are going to be in the dropdown menu 

    const handleClick = (priceOpt) => {
        setChosenPrice(priceOpt)
    }

    if (priceOptions) { //priceOptions format [100, 150, 200]
        for (let i = 0; i < priceOptions.length; i++) {
            items.push(
                <Dropdown.Item key={i} onClick={() => handleClick(priceOptions[i])}>
                    {`${priceOptions[i]}`}
                </Dropdown.Item>,
            );
        }
    }

    return (
        <DropdownButton style={{ display: 'inline-block' }} id="dropdown-basic-button" title="Price">
            {items}
        </DropdownButton>
    )
}

export default PriceFilter