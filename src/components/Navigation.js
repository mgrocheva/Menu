import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  return (
      <nav className= "navbar navbar-expand-lg navbar-light bg-light">
                <div className= "container">
                    
                    <Link className= "navbar-brand" to="/">
                    ALL MEALS IN ONE PLACE
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                <Link className="nav-link" to="/allMeals">All Meals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Meal Categories</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
  )
}

export default Navigation
