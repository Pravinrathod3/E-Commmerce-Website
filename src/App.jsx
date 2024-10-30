
import Hero from "./hero.jsx";
import Card from "./card.jsx";
import Data from "./data.js";
import "../public/app.css";

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
      
      <div> <Hero /></div>
      <div className="map">
        {Data.map(createcard)}

      </div>
      
     </div>
     
   
      
      );
     
    }

export default App;
