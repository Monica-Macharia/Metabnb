import React from 'react'
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className="intro">
   
      {/* <img className="logo" src={window.location.origin + './Vector.png'} alt='logo'/> */}
      <img className="logo" src="/Vector.png" alt="i" />
      <h1 className="title">Metabnb</h1>
    <div className= "navs">
        <nav className ="bars">
        <NavLink to ="./" exact="true">Home</NavLink>
        <NavLink to ="./PlaceToStay" exact="true">Place To Stay</NavLink>
        <NavLink to ="./NFTs" exact="true">NFTs</NavLink>
        <NavLink to ="./Community" exact="true">Community</NavLink>
    </nav>
    <button>Connect wallet</button>
    </div>
    </div>
  )
}
export default NavBar;