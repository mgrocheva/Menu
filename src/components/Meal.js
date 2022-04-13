const Meal = ({ meals }) => {

    return (
        <div className="row">
            {meals.map((meal)=> (
              <div className="col-3 mt-3">
                  <ul>
                  <li key= {meal.idMeal}>
                    <div className= "card" width="200">
                    <div className= "card-body">
                      <h4 className="card-title">{meal.strMeal}</h4>
                      <img className="card-img-bottom" src={meal.strMealThumb} alt="Recipes" width="100%" height="150"/>

                   </div>
                  </div>
                </li>
                </ul>
             </div>
            ))}
        </div>
    )
}

export default Meal