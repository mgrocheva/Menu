import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Categories() {
    const[categories, setCategories] = useState([])

    useEffect( () => {
        axios
        .get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => {
            console.log(res)
            setCategories(res.data.categories)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    
    return (
    <div className="row">
            {categories.map((category)=> (
              <div className="col-3 mt-3">
                  <ul>
                  <li key= {category.idCategory}>
                    <div className= "card" width="200">
                    <div className= "card-body">
                      <h4 className="card-title">{category.strCategory}</h4>
                      <p>{category.strCategoryDescription}</p>
                      <img className="card-img-bottom" src={category.strCategoryThumb} alt="Recipes" width="100%" height="150"/>

                   </div>
                  </div>
                </li>
                </ul>
             </div>
            ))}
        </div>
    )
}

export default Categories