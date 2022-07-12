import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './KegCard.css'

const KegCard = ({ kegsList, filterKeg }) => {

  const [getPints, setPints] = useState(124);
  const [disable, setDisable] = useState(false)

  // const readLocalStorage = localStorage.getItem("kegs")

  const getAllKegs = kegsList.map((keg, i) => {

    console.log(kegsList)

      return (

          <div key={i} className="keg">
            <Link to={"/"}>
              <button className="delete" onClick={ () => {
                filterKeg(keg.id);
              }}>x</button>
            </Link>

            <Link to={`/Details/${keg.id}`} key={keg.id} >
                <h4>{keg.name}</h4>
                <h4>${keg.price} </h4>
                <h4> by {keg.brand} </h4>
                <h4>Contains {keg.alcoholContent}% Alcohol</h4>
                <h4>Pints remaining: {keg.pintsRemaining}</h4>
            </Link>

            <div className="drink">
              <button className="drink" disabled={disable} onClick={(e)=>{
                e.preventDefault();
                if (keg.pintsRemaining === 1) {
                  console.log("welp")
                  setDisable(true)
                  keg.name = "SOLD OUT."
                }
                keg.pintsRemaining-=1
                setPints(keg.pintsRemaining);
                console.log(keg.pintsRemaining)
              }}
              >DRINK!</button>
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