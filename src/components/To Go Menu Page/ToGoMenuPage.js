import "./ToGoMenuPage.css";
import Drinks from "../Drinks/Drinks";

function ToGoMenuPage(props) {
    return(
      <div className="drinks-to-go-container">
        <h2 className="to-go-title">To go</h2>
        { DrinksToGoList(props.toGoDrinks) }
      </div>
    )
}



function DrinksToGoList(toGoDrinks) {
    let lists = [];

    for (let i = 0; i < toGoDrinks.length; i++) {
      let list = (
        <Drinks drink={toGoDrinks[i]} />
      );
      lists.push(list);
    }

    return lists;
  }


export default ToGoMenuPage;