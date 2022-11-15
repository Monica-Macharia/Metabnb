import React from 'react';
import {TbBrandFacebook} from "react-icons/tb";
import {TbBrandInstagram} from "react-icons/tb";
import {TfiTwitter} from "react-icons/tf";



function Footer(){
    return(
        <>
        <img className= "dark" src="/black.png" alt="propt"/> <h2>Metabnb</h2>
        <TbBrandFacebook />
        <TbBrandInstagram />
        <TfiTwitter />
        </>
    )
}
export default Footer;