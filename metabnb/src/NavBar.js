import React from 'react'
import { NavLink } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {GrFormNext} from "react-icons/gr";
import {MdOutlineCancelPresentation} from "react-icons/md";

function NavBar() {

  
  return (
    <div className="intro">
   
      {/* <img className="logo" src={window.location.origin + './Vector.png'} alt='logo'/> */}
      {/* <img className="logo" src="/Vector.png" alt="i" /> */}
      <img className="title" src="/color1.png" alt="colo" />
    
    <div className= "navs">
        <nav className ="bars">
        <NavLink to ="./" exact="true"className="bar1">Home</NavLink>
        <NavLink to ="./PlaceToStay" exact="true" className="bar2">Place To Stay</NavLink>
        <NavLink to ="./NFTs" exact="true" className="bar3">NFTs</NavLink>
        <NavLink to ="./Community" exact="true" className="bar4">Community</NavLink>
    </nav>
    </div>
    <Popup trigger={<button className="popup"> Connect wallet </button>}
    position= "center">
    <h1 className="wallet">Connect Wallet < MdOutlineCancelPresentation/></h1>

    <p>Choose your preferred walllet.</p>
    <button className= "meta1"> <img className="mask" src="/metamask.png" alt="mask" /> Metamask < GrFormNext/>
    </button>
    <button className= "meta2"> <img className="connect" src="/connect.png" alt="connect" />  WalletConnect < GrFormNext/>
    </button>

  </Popup>
    </div>
  )
}
export default NavBar;