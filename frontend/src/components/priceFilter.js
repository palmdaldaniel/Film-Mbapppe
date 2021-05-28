import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function PriceFilter(props) { // priceOptions are gotten from Home page as props. Its format [100, 150, 150, 150, 100, 150]
    const { setChosenPrice, priceOptions} = props.values
    let items = [];//here we'll keep items that are going to be in the dropdown menu 

    const handleClick = (priceOpt) => {
        // document.querySelector('#dropdown-basic-button').innerHTML = `Price: ${priceOpt}$`
        setChosenPrice(priceOpt)
    }

    if(priceOptions !== null ) { //when we got priceOptions as props
        let uniquePriceOpt = [... new Set(priceOptions)].sort((a,b) => a-b) //keep only unique values and sort them in falling ordning

        for (let i = 0; i < uniquePriceOpt.length; i++) { //loop through uniquePriceOpt
            items.push(//push every unique item to the array 
                <Dropdown.Item key={i} onClick={()=>handleClick(uniquePriceOpt[i])}>
                    {`${uniquePriceOpt[i]}`}
                </Dropdown.Item>,
            );
    }
}
    
    return (
        <DropdownButton style={{display: 'inline-block'}} id="dropdown-basic-button" title="Price">
            {items} 
        </DropdownButton>
    )
}

export default PriceFilter