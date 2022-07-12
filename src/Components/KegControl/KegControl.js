import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddKeg from '../AddKeg/AddKeg'
import Home from '../Home/Home'
import Details from '../KegDetails/KegDetails'

export class KegControl extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      formVisibleOnPage: false,
      kegsList: []
    };
  }
  
  // componentDidMount() {
  //   const kegsListJSON = JSON.stringify(this.state.kegsList);
  //   localStorage.setItem("kegs", kegsListJSON);
  // }


  //add keg function, newKeg as the second index is a push 
  AddNewKeg = (newKeg) => {
    this.setState(state => ({
      kegsList: [...state.kegsList, newKeg]
    }))
  };


  //filter remaining kegs
  filterKeg = (id) => {
    const updateKegList = this.state.kegsList.filter((keg) => keg.id !== id)
    this.setState(state => ({
      kegsList: [...state.kegsList, ...updateKegList]
    }))
      console.log(this.state.kegsList)
  }

  render() {
    console.log(this.state.kegsList)

    return (
      <>
      <div className="KegControl">

        <Router>
          <Routes>


            <Route path="/" element={
              <Home kegsList={this.state.kegsList} filterKeg={this.filterKeg}/>
            } />
          

            <Route path="/Add" element={
              <AddKeg kegsList={this.state.kegsList} filterKeg={this.filterKeg} AddNewKeg={this.AddNewKeg} />
            }/>


            <Route path="/Details/:id" element={
              <Details kegsList={this.state.kegsList} filterKeg={this.filterKeg}/>
            }/>
            
          </Routes>
        </Router>

      </div>
      </>
    )
  }
}

export default KegControl