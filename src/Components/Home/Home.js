import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
    <div className="home-container">

          HEY!

          <Link to="/Add">
            <button>Add a Keg!</button>
          </Link>


    </div>
    </>
  )
}

export default Home