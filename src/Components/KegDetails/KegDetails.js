import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const KegDetails = ({ kegsList, filterKeg }) => {

  const thisKeg = kegsList[0];

  return (
    <>
      <div className="keg-deets">

        <Link to="/">
          <button>Go Back</button>
        </Link>

        <div className="keg-info">

         <h4> Name: {thisKeg.name} </h4>
         <h4> Brand: {thisKeg.brand} </h4>
         <h4> Price: {thisKeg.price} </h4>
         <h4> Alcohol %: {thisKeg.alcoholContent} </h4>

        </div>
  


      </div>
    </>
  )
}

export default KegDetails