import React from 'react'
import uuid from 'react-uuid'


export default class AddKeg extends React.Component {

  state = {
    id: uuid(),
    name: '',
    brand: '',
    price: 0,
    alcoholContent: Math.floor(Math.random()*10),
    pintsRemaining: 124,
    decrementPintsRemaining: () => this.pintsRemaining -= 1
  }

  

  render(){
    return (
      <>
        <div key={this.state.id} className="add-keg-container">

          <div className="form-wrap">
            <form className="form" onSubmit={this.props.AddNewKeg}>

              <input type="text" className="form-input"
                placeholder="Name"
                onChange={ e => this.setState({name: e.target.value})}
                value={this.state.name} required
              />

              <input type="text" className="form-input"
                  placeholder="Brand"
                  onChange={ e => this.setState({brand: e.target.value})}
                  value={this.state.brand} required
                />

              <input type="text" className="form-input"
                  placeholder="Enter Price"
                  onChange={ e => this.setState({price: e.target.value})}
                  value={this.state.price} required
                />

              <button type="submit" className="form-btn" onClick={() => {
                console.log(this.state.name, this.state.alcoholContent, this.state.uuid)
              }}><h5>Add New Keg</h5></button>


            </form>
          </div>

        </div>
      </>
    )
  }
}