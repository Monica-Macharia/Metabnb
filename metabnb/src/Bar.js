import React from 'react';
import { NavLink } from "react-router-dom";


function Bar(){
    return(
        <>
      
        <nav className ="placebars">
        <NavLink to ="./Restaurant" exact="true">Resturant</NavLink>
        <NavLink to ="./Cottage" exact="true">Cottage</NavLink>
        <NavLink to ="./Castle" exact="true">Castle</NavLink>
        <NavLink to ="./FantastCity" exact="true">fantast city</NavLink>
        <NavLink to ="./Beach" exact="true">beach</NavLink>
        <NavLink to ="./Carbins" exact="true">Carbins</NavLink>
        <NavLink to ="./OffGrid" exact="true">Off-grid</NavLink>
        <NavLink to ="./Farm" exact="true">Farm</NavLink>
   
    </nav>
    <button>Location <img className="setting" src="/filter.png" alt="setting" /></button>
        </>
    )
}
export default Bar;