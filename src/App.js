import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddKeg from './Components/AddKeg/AddKeg'
import Home from './Components/Home/Home'

function App() {
  
  const readLocalStorage = localStorage.getItem("kegs")
  // const [localStorageKey, setLocalStorageKey] = useState([])
  //set state for a list of added Kegs
  const [kegsList, setKegsList] = useState([]);


  //when component mounts, check kegsList
  useEffect(() => {
    if (!readLocalStorage) {
      localStorage.setItem("kegs", kegsList)
      console.log("storage set")
    }
    console.log(readLocalStorage, kegsList)
    localStorage.setItem("kegs", [...kegsList])
    console.log(readLocalStorage, kegsList)
  }, [])


  //add keg function, newKeg as the second index is a push 
  const AddNewKeg = (newKeg) => {
    console.log("parent level")
    setKegsList([...kegsList, newKeg])
    console.log(newKeg)
  };

  console.log(kegsList, readLocalStorage)


  return (
    <div className="App">
      
      
      <Router>
        <Routes>

          <Route path="/" element={
            <Home />
          } />

          <Route path="/Add" element={
            <AddKeg AddNewKeg={AddNewKeg} />
          }/>
          
        </Routes>
      </Router>


    </div>
  );
}

export default App;
