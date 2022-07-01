import React from 'react'
import { Link } from 'react-router-dom'
import './KegCard.css'

const KegCard = ({ kegsList, filterKeg }) => {

  // const readLocalStorage = localStorage.getItem("kegs")

  const getAllKegs = kegsList.map((keg, i) => {
      return (

          <div key={i} className="keg">
            <Link to={"/"}>
              <button className="delete" onClick={ () => {
                filterKeg(keg.id);
              }}>x</button>
            </Link>

            <Link to={`/Details/${keg.id}`}>
              <div className="keg-details">
                <h4>{keg.name} ${keg.price} </h4>
                <h4> by {keg.brand} </h4>
                <h4>Contains {keg.alcoholContent}% Alcohol</h4>
              </div>
            </Link>
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