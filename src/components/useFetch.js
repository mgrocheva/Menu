import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const[meals, setMeals] = useState([]);

    useEffect( () => {
        axios
        .get(url)
        .then(res => {
            console.log(res)
            setMeals(res.data.meals)
        })
        .catch(err => {
            console.log(err)
        })
    },[url]);

    return {meals}
}

    export default useFetch;