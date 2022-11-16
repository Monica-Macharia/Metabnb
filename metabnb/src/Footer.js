import React from 'react';
import {TbBrandFacebook} from "react-icons/tb";
import {TbBrandInstagram} from "react-icons/tb";
import {SlSocialTwitter} from "react-icons/sl";



function Footer(){
    return(
        <div id="foot">
        <img className= "dark" src="/black.png" alt="propt"/> 
       <div className="tweets"> 
       <div id="one"><TbBrandFacebook /></div>
       <div id="two"><TbBrandInstagram /></div>
       <div id="three"><SlSocialTwitter /></div>
       </div>
        
        <img className="at" src="/at.png" alt="mark"/>
        {/* <ul className="lister">
            <li><h2 id="first">Community</h2></li>
            <li id="second">NFT</li>
            <li id="third">Tokens</li>
            <li id="four">Landlords</li>
            <li id="five">Discord</li>
        </ul> */}

<div className="lister">
            <div><h2 id="first">Community</h2></div>
            <div id="second">NFT</div>
            <div id="third">Tokens</div>
            <div id="four">Landlords</div>
            <div id="five">Discord</div>
        </div>
        <div className="row">
            <div><h2 id="hue">Places</h2></div>
            <div id="moja">Castle</div>
            <div id="mbili">Farms</div>
            <div id="tatu">Beach</div>
            <div id="nne">Learn more</div>
        </div>
        <div className="me">
            <div><h2 id="reach">About us</h2></div>
            <div id="eleven">Road map</div>
            <div id="twelve">Creators</div>
            <div id="thirteen">Career</div>
            <div id="fourteen">Contact us</div>
        </div>
        </div>
    )
}
export default Footer;