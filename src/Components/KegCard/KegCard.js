import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './KegCard.css'

const KegCard = ({ kegsList, filterKeg }) => {

  const [getPints, setPints] = useState(124);

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
                <h4>{keg.name}</h4>
                <h4>${keg.price} </h4>
                <h4> by {keg.brand} </h4>
                <h4>Contains {keg.alcoholContent}% Alcohol</h4>
                <h4>Pints remaining: {getPints}</h4>
              </div>
            </Link>

            <div className="drink">
              <button className="drink" onClick={(e)=>{
                e.preventDefault();
                keg.pintsRemaining-=1
                setPints(keg.pintsRemaining);
                console.log(keg.pintsRemaining)
              }}>DRINK!</button>
            </div>

            {console.log(keg.pintsRemaining)}

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