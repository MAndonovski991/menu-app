import "./Drinks.css";

function Drinks(props) {
  return (
    <div className="item">
      <p className="drink-name">{props.drink.name}</p>
      <div className="underline"></div>
      <p className="drink-price">{props.drink.price}</p>
    </div>
  );
}

export default Drinks;
