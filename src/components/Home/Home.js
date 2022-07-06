import "./Home.css";
import FirstPage from "../First Page/FirstPage";
import LastPage from "../Last Page/LastPage";
import ImageMenuPage from "../Image Menu Page/ImageMenuPage";
import HotDrinksMenuPage from "../Hot Drinks Menu Page/HotDrinksMenuPage";
import ColdDrinksMenuPage from "../ColdDrinksMenuPage/ColdDrinksMenuPage";
import ToGoMenuPage from "../To Go Menu Page/ToGoMenuPage";
import items from "../../Data/DesertsData";


function Home() {
  return (
      <>
      <section style={{backgroundColor: "#ECE0DB"}}>
        <FirstPage />
      </section>
      { createPages() }
      <section>
        <HotDrinksMenuPage />
      </section>
      <section>
        <ColdDrinksMenuPage />
      </section>
      <section >
        <ToGoMenuPage />
      </section>
      <section style={{backgroundColor: "#ECE0DB"}}>
        <LastPage />
      </section>
      </>
  );
}



function createPages() {
  let pages = []

  for (let i = 0; i < items.length; i++) {
    let page = <div className="image-container"><ImageMenuPage item={items[i]}/></div>
    pages.push(page)
  }

  return pages
}


export default Home;
