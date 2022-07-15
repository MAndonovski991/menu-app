import "./HotDrinksMenuPage.css";
import Drinks from "../Drinks/Drinks";

function HotDrinksMenuPage(props) {
  return (
    <>
      <h2>Топли пијалоци</h2>
      <div className="hot-drinks">
        {HotDrinkslist(props.hotDrinks)}
      </div>
    </>
  );
}


  function HotDrinkslist(hotDrinks) {
    let lists = [];

    for (let i = 0; i < hotDrinks.length; i++) {
      let list = (
        <Drinks drink={hotDrinks[i]} />
      );
      lists.push(list);
    }

    return lists;
  }


export default HotDrinksMenuPage;
