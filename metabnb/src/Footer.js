import React from 'react';
import {TbBrandFacebook} from "react-icons/tb";
import {TbBrandInstagram} from "react-icons/tb";
import {SlSocialTwitter} from "react-icons/sl";



function Footer(){
    return(
        <>
        <img className= "dark" src="/black.png" alt="propt"/> <h2>Metabnb</h2>
        <TbBrandFacebook />
        <TbBrandInstagram />
        <SlSocialTwitter />
        <img className="at" src="/at.png" alt="mark"/>
        <ul className="lister">
            <li><h2>Community</h2></li>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
        </ul>
        <ul className="row">
            <li><h2>Places</h2></li>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
        </ul>
        </>
    )
}
export default Footer;