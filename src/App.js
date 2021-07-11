import React from 'react';
import './styles/App.css';
// import { Navbar, NavbarBrand } from "reactstrap";
import Nav from './Nav';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div className="App">
      {/* <Navbar dark color="primary">
        <div className="conatiner">
          <NavbarBrand href="/">Akshaj Restaurant</NavbarBrand>
        </div>
      </Navbar> */}
      <Nav />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
