import "./Home.css";
import FirstPage from "../First Page/FirstPage";
import LastPage from "../Last Page/LastPage";
import ImageMenuPage from "../Image Menu Page/ImageMenuPage";
import HotDrinksMenuPage from "../Hot Drinks Menu Page/HotDrinksMenuPage";
import ColdDrinksMenuPage from "../ColdDrinksMenuPage/ColdDrinksMenuPage";
import ToGoMenuPage from "../To Go Menu Page/ToGoMenuPage";
import desertsMock from "../../Data/DesertsData";
import toGoDrinksMock from "../../Data/ToGoDrinksData";
import coldDrinksMock from "../../Data/ColdDrinksData";
import hotDrinksMock from "../../Data/HotDrinksData";

import React,{useEffect, useState} from 'react'

function Home() {

  const [deserts, setDeserts] = useState([]);
  const [coldDrinks, setColdDrinks] = useState([]);
  const [hotDrinks, setHotDrinks] = useState([]);
  const [toGoDrinks, setToGoDrinks] = useState([]);

  const makeAPICall = async () => {
    try {
      const response = await fetch('v146.softether.net/choco/orderservice.svc/PrevzemiMeniCelosno2/1', {mode:'cors'});
      const data = await response.json();

      setDeserts(adaptPricesOf(desertsMock, data))
      setColdDrinks(adaptPricesOf(coldDrinksMock, data))
      setHotDrinks(adaptPricesOf(hotDrinksMock, data))
      setToGoDrinks(adaptPricesOf(toGoDrinksMock, data))
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall();
  }, [])
  

  return (
      <>
      <section style={{backgroundColor: "#ECE0DB"}}>
        <FirstPage />
      </section>
      { createPages(deserts) }
      <section>
        <HotDrinksMenuPage hotDrinks={hotDrinks} />
      </section>
      <section>
        <ColdDrinksMenuPage coldDrinks={coldDrinks}/>
      </section>
      <section >
        <ToGoMenuPage toGoDrinks={toGoDrinks}/>
      </section>
      <section style={{backgroundColor: "#ECE0DB"}}>
        <LastPage />
      </section>
      </>
  );
}

function adaptPricesOf(array, data) {
  let preparedArray = []

  array.forEach(item => {
    let serverItem = data.find(element => element._id == item._id);
    if (serverItem !== undefined) {
      item.price = serverItem._cena 
      preparedArray.push(item)
    }
  });

  return preparedArray
}

function createPages(desertDrinks) {
  let pages = []

  for (let i = 0; i < desertDrinks.length; i++) {
    let page = <div className="image-container"><ImageMenuPage item={desertDrinks[i]}/></div>
    pages.push(page)
  }

  return pages
}


export default Home;
