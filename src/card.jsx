import React from "react";
import "../public/card.css"

function clicked(){
    alert("Item Placed");
}

function Card(props){
    return(
       <div>
       
           <div className="card" > 
            <img src={props.image} />
            <h3>{props.discription}</h3>
            <h2>{props.price}</h2>
            <button onClick={clicked}>Add To Cart</button>
          </div>
    </div>
    );
};

export default Card;


