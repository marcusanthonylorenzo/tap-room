import React from 'react'
import { Link } from 'react-router-dom'

const KegDetails = ({ kegsList, filterKeg }) => {

  const thisKeg = kegsList[0];

  return (
    <>
      <div className="keg-deets">
        <div className="keg-info" style={{marginTop: `0vh`}}>

         <h4> Name: {thisKeg.name} </h4>
         <h4> Brand: {thisKeg.brand} </h4>
         <h4> Price: {thisKeg.price} </h4>
         <h4> Alcohol %: {thisKeg.alcoholContent} </h4>
         <h4> Remaining Pints: {thisKeg.remainingPints} </h4>

        </div>
  
        <Link to="/">
          <button>Go Back</button>
        </Link>


      </div>
    </>
  )
}

export default KegDetails