import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Projects from './Projects'
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar'
import About from './About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/Projects" component={Projects}/>
      <Route exact path="/About" component={About}/>
    </div>
  );
}

export default App;
