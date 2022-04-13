import React from 'react'
import {Link} from 'react-router-dom'



function AllMeals() {
    return (
        <nav>
        <div>
         
         <Link className="nav-link" to="/desserts">Desserts</Link>
         <Link className="nav-link" to="/pork">Pork</Link>
         <Link className="nav-link" to="/chicken">Chicken</Link>    
         <Link className="nav-link" to="/beef">Beef</Link>  
         <Link className="nav-link" to="/seafood">Seafood</Link>   
         <Link className="nav-link" to="/lamb">Lamb</Link>
         <Link className="nav-link" to="/goat">Goat</Link>
         <Link className="nav-link" to="/starter">Starter</Link>    
         <Link className="nav-link" to="/vegan">Vegan</Link>  
         <Link className="nav-link" to="/vegetarian">Vegetarian</Link> 
         <Link className="nav-link" to="/breakfast">Breakfast</Link> 
         <Link className="nav-link" to="/pasta">Pasta</Link> 
      </div>
      </nav>
    )
}

export default AllMeals