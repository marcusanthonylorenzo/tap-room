import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddKeg from './Components/AddKeg/AddKeg'
import Home from './Components/Home/Home'
import Details from './Components/KegDetails/KegDetails'

function App() {

  //set state for a list of added Kegs
  const [kegsList, setKegsList] = useState([]);

  useEffect(() => {
    localStorage.setItem("kegs", []);
  })

  // check how many kegs in stock
  useEffect(() => {
      const kegsListJSON = JSON.stringify(kegsList);
      localStorage.setItem("kegs", kegsListJSON);
  })

  //add keg function, newKeg as the second index is a push 
  const AddNewKeg = (newKeg) => {
    setKegsList([...kegsList, newKeg])
  };


  //filter remaining kegs
  const filterKeg = (id) => {
      const updateKegList = kegsList.filter((keg) => keg.id !== id)
      setKegsList(updateKegList)
      console.log(kegsList)
  }
  console.log(kegsList)

  return (
    <div className="App">
      
      
        <Router>
          <Routes>


            <Route path="/" element={
              <Home kegsList={kegsList} filterKeg={filterKeg}/>
            } />
          

            <Route path="/Add" element={
              <AddKeg AddNewKeg={AddNewKeg} />
            }/>


            <Route path="/Details/:id" element={
              <Details kegsList={kegsList} filterKeg={filterKeg}/>
            }/>
            
          </Routes>
        </Router>


    </div>
  );
}

export default App;
