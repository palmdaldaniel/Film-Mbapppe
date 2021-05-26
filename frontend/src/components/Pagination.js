import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = (props) => {
    const {activPage, pageTotal, setCurrentPage} = props.values
    let active = activPage; //active page which is highlighted
    let items = [];//how many pages in the pagination bar

    for (let number = 1; number <= pageTotal; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>handleClick(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    const handleClick =(number)=> {
        setCurrentPage(number)
    }
    
    const paginationBasic = (
        <div>
            <Pagination className='justify-content-center mt-3'>{items}</Pagination>
            <br />
        </div>
    );



    return (
        <div>
            {paginationBasic}
        </div>
    );
};

export default PaginationComponent;