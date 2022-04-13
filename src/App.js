import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import AllMeals from './components/AllMeals'
import Desserts from './components/Desserts'
import Pork from './components/Pork'
import Chicken from './components/Chicken'
import Beef from './components/Beef'
import Lamb from './components/Lamb'
import Goat from './components/Goat'
import Breakfast from './components/Breakfast'
import Vegan from './components/Vegan'
import Vegetarian from './components/Vegetarian'
import Starter from './components/Starter'
import Seafood from './components/Seafood'
import Categories from './components/Categories'
import Pasta from './components/Pasta'



function App() {
  return (
    <div className="app">
    
    <Router>
    
    <Navigation/>

    <div className="container p-4">
      <Route path="/allMeals" exact component= {AllMeals} />
      <Route path="/categories" component= {Categories} />
      <Route path="/desserts" component= {Desserts} />
      <Route path="/pork" component= {Pork} />
      <Route path="/chicken" component= {Chicken} />
      <Route path="/beef" component= {Beef} />
      <Route path="/seafood" component= {Seafood} />
      <Route path="/lamb" exact component= {Lamb} />
      <Route path="/goat" component= {Goat} />
      <Route path="/vegan" component= {Vegan} />
      <Route path="/vegetarian" component= {Vegetarian} />
      <Route path="/starter" component= {Starter} />
      <Route path="/pasta" component= {Pasta} />
      <Route path="/breakfast" component= {Breakfast} />
      <Route path="/seafood" component= {Seafood} />
      

      </div>
    </Router> </div>
    )
  }
export default App