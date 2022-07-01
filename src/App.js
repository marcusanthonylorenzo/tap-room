import React, { useState, useEffect, createContext } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddKeg from './Components/AddKeg/AddKeg'
import Home from './Components/Home/Home'

function App() {
  
  const readLocalStorage = () => localStorage.getItem("kegs")
  //set state for a list of added Kegs
  const [kegsList, setKegsList] = useState([]);


  //check how many kegs in stock
  useEffect(() => {
    if (kegsList.length > 0) {
      const kegsListJSON = JSON.stringify(kegsList);
      localStorage.setItem("kegs", kegsListJSON);
    }
  }, [kegsList]);


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
  const FilterContext = createContext(filterKeg)
  console.log(kegsList)

  return (
    <div className="App">
      
      <FilterContext.Provider value={filterKeg}> 
      
        <Router>
          <Routes>


            <Route path="/" element={
              <Home readLocalStorage={readLocalStorage} filterKeg={filterKeg}/>
            } />
          

            <Route path="/Add" element={
              <AddKeg AddNewKeg={AddNewKeg} />
            }/>
            
          </Routes>
        </Router>

      </FilterContext.Provider>

    </div>
  );
}

export default App;
