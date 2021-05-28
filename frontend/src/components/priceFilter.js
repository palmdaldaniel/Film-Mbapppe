// import { useHistory } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";


function PriceFilter(props) {
    let items = [];//how many items (price options) are in the dropdown
    let priceOptions = [100, 150, 200]; //temp array, later here will be data from DB

    for (let i = 0; i <= priceOptions.length; i++) {
        items.push(
            <Dropdown.Item key={i}>
                {priceOptions[i]}
            </Dropdown.Item>,
        );
    }
    
    return (
        <DropdownButton className='inline' id="dropdown-basic-button" title="Price">
            {items}
        </DropdownButton>
    )
}

export default PriceFilter