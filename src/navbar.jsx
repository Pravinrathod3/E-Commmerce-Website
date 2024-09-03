import React from "react";
import { IoCartOutline } from "react-icons/io5";
import "../public/navbar.css";
import logo from "./assets/logo.png";

function Navbar(){
    return(
        <div className="bar">
            
                <div className="Logo">
                  <img src={logo} size="20px" />
                </div>
                <div className="Search" >
                    <input type="text" placeholder="search" ></input>
                </div>
                <div className="cart">
                    <IoCartOutline size="40px"/>
                </div>
            

        </div>
    );
}

export default Navbar;