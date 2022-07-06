import "./ColdDrinksMenuPage.css";
import Drinks from "../Drinks/Drinks";
import coldDrinks from "../../Data/ColdDrinksData";

function ColdDrinksMenuPage() {
    return (
      <>
        <h2>Ладни пијалоци</h2>
        <div className="cold-drinks-container">
          {ColdDrinkslist()}
        </div>
      </>
    );
  }

  


  function ColdDrinkslist() {
    let lists = [];

    for (let i = 0; i < coldDrinks.length; i++) {
      let list = (
        <Drinks drink={coldDrinks[i]} />
      );
      lists.push(list);
    }

    return lists;
  }

  export default ColdDrinksMenuPage;