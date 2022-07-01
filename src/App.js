import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddKeg from './Components/AddKeg/AddKeg'
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Routes>

          <Route path="/" element={
            <Home />
          } />

          <Route path="/Add" element={
            <AddKeg />
          }/>
          
        </Routes>
      </Router>


    </div>
  );
}

export default App;
