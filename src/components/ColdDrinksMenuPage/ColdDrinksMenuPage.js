import "./ColdDrinksMenuPage.css";
import Drinks from "../Drinks/Drinks";

function ColdDrinksMenuPage(props) {
    return (
      <>
        <h2>Ладни пијалоци</h2>
        <div className="cold-drinks-container">
          {ColdDrinkslist(props.coldDrinks)}
        </div>
      </>
    );
  }

  


  function ColdDrinkslist(coldDrinks) {
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