import "./HotDrinksMenuPage.css";
import Drinks from "../Drinks/Drinks";
import hotDdrinks from "../../Data/HotDrinksData";

function HotDrinksMenuPage() {
  return (
    <>
      <h2>Топли пијалоци</h2>
      <div className="hot-drinks">
        {HotDrinkslist()}
      </div>
    </>
  );
}


  function HotDrinkslist() {
    let lists = [];

    for (let i = 0; i < hotDdrinks.length; i++) {
      let list = (
        <Drinks drink={hotDdrinks[i]} />
      );
      lists.push(list);
    }

    return lists;
  }


export default HotDrinksMenuPage;
