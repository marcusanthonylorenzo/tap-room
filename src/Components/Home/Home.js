import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import KegCard from '../KegCard/KegCard'

const Home = ({kegsList, filterKeg }) => {
  //will need to be careful with Prop Drilling!

  const offering = <h5>HEY! Check out what we have on offer!</h5>
  const nothing = <h5>Sorry guys, we are out of stock! Business is good.</h5> 

  return (
    <>
    <div className="home-container">

          { kegsList.length === 0 ? nothing : offering}


          <Link to="/Add">
            <button>Add a Keg!</button>
          </Link>

          <div className="keg-menu">
            <KegCard kegsList={kegsList} filterKeg={filterKeg} />
          </div>



    </div>
    </>
  )
}

export default Home