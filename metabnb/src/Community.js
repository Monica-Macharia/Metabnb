import React, {useState, useEffect} from 'react';




const Community = () => {

    const [data, setData] = useState([]);

   

    useEffect(() => {
        
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(res => res.json())
        .then(data => {setData(data.meals);
            
        } )
    }, [])
    console.log(data);

    return (
        <div class="card mb-3" >
            <h2>Community Cafe</h2>
              {data.map((image, index)=>(
        <div class="row g-0">
          <div class="col-md-4">
           
            <img key={index} class="center" src={image.strMealThumb} class="img-fluid rounded-start" alt={image.strMeal} />

          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{image.strMeal}</h5>
              <p class="card-text"> {image.strInstructions}</p>
             
            </div>
          </div>
        </div>
        ))}
          
      </div>






    //  <div class=""> 

    //   <div class="col" className="container">
    //     <h2>Community Cafe</h2>
    //       {data.map((image, index)=>(
            
    //           <div class="card">
    //            { console.log(image.strMealThumb)}
    //            <img key={index} class="center" src={image.strMealThumb} class="card-img-top" alt={image.strMeal} />
    //            <div class="card-body">
    //             <h5 class="card-title">{image.strMeal}</h5>
    //             <p class="card-text">{image.strInstructions}</p>
    //           </div>
            
    //         </div>      
    //       ))}
          


                   
                 
    //             </div>
        
        
    //     </div>

            // <div class="row row-cols-1 row-cols-md-2 g-4">
            // <div class="col">
            // {data.map((image, index)=>( 
            // <div class="card">
            //     <img key={index} src="{image.strMealThumb}" class="card-img-top" alt="{image.strMeal}" />
            //     <div class="card-body">
            //     <h5 class="card-title">Card title</h5>
            //     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            //     </div>
            // </div>))}
            // /div>
            // </div>

        );
        
};
export default Community;