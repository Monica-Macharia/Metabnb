import React from "react";

function Home(){
    return(
        <div className="home">
       <p className="access">Rent a <b style={{color: "#A02279"}}>Place </b>away from<br/> <b style={{color: "#A02279"}}>Home</b> in the <b style={{color: "#A02279"}}>Metaverse</b>
       </p>
       <p className="small">
       we provide you access to luxury and affordable houses<br/> in the metaverse, get a chance to turn your<br/> imagination to reality at your comfort zone
       </p>

       <form className="find">
           <label htmlFor="search"></label>
           <input 
           type="text"
           id="location"
           placeholder="Search for location"/>
           <button className="log">Search</button>

       </form>
       <img className="stock" src="/Group 4028.png" alt="stocks" />
       
       <nav >
        <img className="label1" src="/Group 59537.png" alt="label1" />
       <img className="label2" src="/Group 4040.png" alt="label2" />
       <img className="label3" src="/Frame 4041.png" alt="label3" />
        </nav>
        <h2 className="lost"> Inspiration for your next adventure </h2>
        </div>
    )
}
export default Home;