
import Navbar from "./navbar.jsx";
import './App.css'
import Hero from "./hero.jsx";
import Card from "./card.jsx";
import Data from "./data.js";
import "../public/app.css";
import Footer from "./footer.jsx";

function createcard(x){
  return(
  <Card 
    key={x.id}
    image={x.img}
    discription={x.discription}
    price={x.price}
    />
  );
}

function App() {
   return(
     <div >
      <div><Navbar /></div>
      <div> <Hero /></div>
      <div className="map">
        {Data.map(createcard)}

      </div>
      <div> <Footer /> </div>
     </div>
     
   
      
      );
     
    }

export default App;
