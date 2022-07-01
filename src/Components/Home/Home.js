import React from 'react'
import { Link } from 'react-router-dom'
import KegCard from '../KegCard/KegCard'

const Home = ({readLocalStorage, filterKeg }) => {
  //will need to be careful with Prop Drilling!

  return (
    <>
    <div className="home-container">

          <h5>HEY! Check out what we have on offer!</h5>

          <div className="keg-menu">
            <KegCard readLocalStorage={readLocalStorage} filterKeg={filterKeg} />
          </div>

          <Link to="/Add">
            <button>Add a Keg!</button>
          </Link>


    </div>
    </>
  )
}

export default Home