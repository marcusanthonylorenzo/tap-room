import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const KegDetails = ({ kegsList }) => {

  const params = useParams()
  const kegFiltered = kegsList.filter(k => {
    if (k.id === params.id) {
      return k
    }
  })
  const keg = kegFiltered[0]


  return (
    <>
      <div className="keg-deets">
        <div className="keg-info" style={{marginTop: `0vh`}}>

        <h4> Name: {keg.name} </h4>
        <h4> Brand: {keg.brand} </h4>
        <h4> Price: {keg.price} </h4>
        <h4> Alcohol %: {keg.alcoholContent} </h4>
        <h4> Remaining Pints: {keg.pintsRemaining} </h4>

        </div>
  
        <Link to="/">
          <button>Go Back</button>
        </Link>


      </div>
    </>
  )
}

export default KegDetails