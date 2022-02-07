import React from 'react';
import amazon1 from "./amazon1.png"
import "./navbar.css";
import {NavLink}from "react-router-dom";
 import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return <nav className='header'> 
{/* logo on the left->img */}
<NavLink to="/"> 
<img className="header_logo" src={amazon1} alt="" />

</NavLink>
{/* search box */}
<div className='header_search'> 

<input type="text" className="header_searchInput"/>
<SearchIcon className="header_searchIcon"/>
</div>
{/* 3 Links */}

<div className="header_nav">
{/* first link */}
<NavLink to="/Login" className={"header_link"}>
  <div className="header_option">
  <span>
    Hello
  </span>
  <span>sign in</span>
  </div>
   
</NavLink>


{/* second Link */}
{/* third link */}

</div>
{/*Basket icon with number  */}



  </nav>;
}

export default Header;
