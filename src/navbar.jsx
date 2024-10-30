import React from "react";
import { IoCartOutline } from "react-icons/io5";
import "../public/navbar.css";
import logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="bar">
            
            <Link to="/">
                <div className="Logo">
                  <img src={logo} size="20px" />
                </div>
            </Link>
                
                <div className="Search" >
                    <input type="text" placeholder="search" ></input>
                </div>
            
            <Link to="/cart">
                <div className="cart">
                    <IoCartOutline size="40px"/>
                </div>
            </Link>
                
            

        </div>
    );
}

export default Navbar;