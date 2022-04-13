import React from 'react'
import Meal from './Meal'
import useFetch from './useFetch'

function Chicken() {
    const {meals} = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')

    return (
    <div>
        <Meal meals={meals} />
    </div>
    )
}

export default Chicken