import React from 'react'
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PlaceToStay from "./PlaceToStay";
import NFTs from "./NFTs.js";
import Community from "./Community.js";
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <main>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/PlaceToStay" element={<PlaceToStay />} />
        <Route path="/NFTs" element={<NFTs/>}/>
        <Route path="/Community" element={<Community/>}/>
      </Routes>
      {<Footer />}
    </main>
  )
}
export default App;
