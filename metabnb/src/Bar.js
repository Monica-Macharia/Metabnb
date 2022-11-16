import React from 'react';
import { NavLink } from "react-router-dom";


function Bar(){
    return(
        <>
      
        <nav className ="placebars">
        <NavLink to ="./Restaurant" className="one" exact="true">Resturant</NavLink>
        <NavLink to ="./Cottage" className="two"exact="true">Cottage</NavLink>
        <NavLink to ="./Castle" className="three"exact="true">Castle</NavLink>
        <NavLink to ="./FantastCity" className="four"exact="true">fantast city</NavLink>
        <NavLink to ="./Beach" className="five"exact="true">beach</NavLink>
        <NavLink to ="./Carbins" className="six"exact="true">Carbins</NavLink>
        <NavLink to ="./OffGrid" className="seven"exact="true">Off-grid</NavLink>
        <NavLink to ="./Farm" className="eight"exact="true">Farm</NavLink>
   
    </nav>
    <button id= "cloud">Location <img className="setting" src="/filter.png" alt="setting" /></button>
        </>
    )
}
export default Bar;