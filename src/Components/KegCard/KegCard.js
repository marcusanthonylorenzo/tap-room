import React from 'react'
import './KegCard.css'

const KegCard = ({ readLocalStorage, filterKeg }) => {

  

  const retrieveKegs = JSON.parse(readLocalStorage())

  const getAllKegs = retrieveKegs.map((keg, i) => {
      return (
          <div key={i} className="keg">
            <button className="delete" onClick={ () => {
              filterKeg(keg.id);
            }}>x</button>
            <div className="keg-details">
              <h4>{keg.name} ${keg.price} </h4>
              <h4> by {keg.brand} </h4>
              <h4>Contains {keg.alcoholContent}% Alcohol</h4>
            </div>
          </div>
      )
  });


  return (
    <div className="keg-card-wrap">
      {getAllKegs}
    </div>
  )
}

export default KegCard