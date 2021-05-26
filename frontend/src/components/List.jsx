import ShowingCard from "./ShowingCard";

const List = ({showings}) => {
  console.log(showings);
  return (
    <div>
      {showings.map(show => (
        <ShowingCard show={show}/>
      ))}
    </div>
  );
}
 
export default List;