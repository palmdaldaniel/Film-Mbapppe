import ShowingCard from "./ShowingCard";

const List = ({list}) => {
  console.log(showings);
  return (
    <div>
      {list.map(item => (
        <ShowingCard item={item}/>
      ))}
    </div>
  );
}
 
export default List;